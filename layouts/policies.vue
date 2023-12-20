<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Policies'
};
</script>

<style lang="scss">
@import "../assets/scss/helpers/variables";

.policy-container {
  margin: 0 auto;
  padding: 24px 0;
  background-color: #fff;
  border-radius: 23px;

  .page-heading {
    position: relative;
    margin-bottom: 64px;
    padding-left: 24px;
    box-shadow: inset 4px 0 0 $primary-color;
    font-weight: 700;

    @media screen and (min-width: 768px) {
      padding-left: 32px;
    }
  }


  .policy-section {
    padding: 0 24px;
    margin-top: 24px;
    margin-bottom: 24px;

    .heading {
      font-weight: 600;
    }

    @media screen and (min-width: 768px)  {
      padding: 0 32px;
      margin-top: 48px;
      margin-bottom: 48px;
    }
  }
}

.back-button {
  position: absolute;
  top: -64px;
  left: 0;

  > a > img {
    width: 48px;
  }
}
</style>
