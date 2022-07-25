<template lang="">
  <div class="auth-layout row align-content--center">
    <div class="flex xs12 pa-3 flex-center">QueGastos</div>
    <div class="flex xs12 pa-3">
      <div class="d-flex justify--center">
        <va-card class="auth-layout__card pa-3">
          <va-card-title>{{ title }}</va-card-title>
          <va-card-content>
            <slot name="form"></slot>
          </va-card-content>
          <va-separator />
          <slot name="actions-buttons"></slot>
        </va-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AuthLayout",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.auth-layout {
  min-height: 100vh;
  background-image: linear-gradient(
    to right,
    var(--va-background),
    var(--va-white)
  );

  &__card {
    width: 100%;
    max-width: 600px;
  }
}
</style>
