export default defineNuxtPlugin(({ vueApp }) => {
	vueApp.directive('click-outside', {
		beforeMount(el, binding) {
			el.clickOutsideEvent = (event: { target: any; }) => {
				if (!el.contains(event.target)) {
					binding.value(event);
				}
			};

			document.body.addEventListener('click', el.clickOutsideEvent);
		},
		unmounted(el) {
			if (!el) {
				return;
			}
			// Remove event listener from the element it was attached to
			document.body.removeEventListener('click', el.clickOutsideEvent);
		}
	});
});
