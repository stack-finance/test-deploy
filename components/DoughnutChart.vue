<template>
  <!-- Container for the chart canvas -->
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, watch } from 'vue';
import {
  Chart,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale
} from 'chart.js';

// Register Chart.js components - for configuring the chart
Chart.register(ArcElement, DoughnutController, CategoryScale, LinearScale);

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
  centerValue: {
    type: String,
    default: ''
  },
  centerLabel: {
    type: String,
    default: ''
  }
});

const chartCanvas = ref(null); // This will be used to reference the <canvas> element where the chart is rendered
let chartInstance = null; // Hold the chartjs instance

// Watch for changes in chartData prop and update the chart
watch(() => props.chartData, () => {
  updateChart();
});

// Function to render text in the center of the doughnut chart
const renderCenterText = (chartInstance, value, label) => {
  const ctx = chartInstance.ctx;

  // Set the font size and styles for center value
  ctx.font = '16px Gilroy';
  ctx.fillStyle = '#ababab';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(value, chartInstance.width / 2, chartInstance.height / 2 - 10); // adjust the vertical offset as needed

  // Set the font size and styles for center label
  ctx.font = '24px Gilroy';
  ctx.fillStyle = '#fff';
  ctx.fillText(label, chartInstance.width / 2, chartInstance.height / 2 + 15); // adjust the vertical offset as needed
};

// Custom Chart.js plugin to render text in the center
const centerTextPlugin = {
  afterDraw: (chartInstance) => {
    if (chartInstance.config.options.elements.center) {
      const centerConfig = chartInstance.config.options.elements.center;
      renderCenterText(chartInstance, centerConfig.value, centerConfig.label);
    }
  }
};

// Watch for changes in centerValue and centerLabel props
watch([() => props.centerValue, () => props.centerLabel], () => {
  if (!(chartInstance && chartInstance.config?.options?.elements.center)) {
    return;
  }

  chartInstance.config.options.elements.center.value = props.centerValue;
  chartInstance.config.options.elements.center.label = props.centerLabel;
  chartInstance.update();
});

// Function to create the chart
const createChart = () => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: props.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        cutout: '85%',
        elements: {
          center: {
            value: props.centerValue,
            label: props.centerLabel
          }
        }
      },
      plugins: [centerTextPlugin]
    });
  }
};

// Function to update the chart with new data
const updateChart = () => {
  if (chartInstance) {
    // Update the chart's data and re-render
    chartInstance.data = props.chartData;
    chartInstance.update(); // re-render the chart
  }
};

// Create the chart when the component is mounted
onMounted(() => {
  createChart();
});

// Update the chart when the component is updated
onUpdated(() => {
  updateChart();
});
</script>

<style lang="scss" scoped>
.chart-container {
  width: 200px;
  height: 160px; /* Adjust this value to your desired height */
}
</style>
