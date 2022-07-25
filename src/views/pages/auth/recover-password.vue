<template>
  <authLayout :title="'recuperar contraseña'">
    <template #form>
      <va-form>
        <va-input
          label="email"
          v-model="form.email"
          block
          type="email"
          style="display: block"
        />
      </va-form>
    </template>
    <template #actions-buttons>
      <div class="auth-layout__options d-flex align--center justify--end">
        <router-link class="link" :to="{ name: 'login' }"
          >iniciar sesión</router-link
        >
      </div>

      <div class="mt-3">
        <va-button class="my-0" outline block>recuperar contraseña</va-button>
      </div>
    </template>
  </authLayout>
</template>
<script>
import authLayout from "../../../layouts/auth-layout.vue";

export default {
  name: "recover-password",
  components: {
    authLayout,
  },
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
};
</script>
<style></style>
