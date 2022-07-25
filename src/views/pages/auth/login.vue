<template>
  <authLayout :title="'Iniciar Sesión'">
    <template #form>
      <va-form>
        <va-input
          label="email"
          v-model="form.email"
          block
          type="email"
          style="display: block"
        />
        <va-input
          class="mt-3"
          label="password"
          v-model="form.password"
          type="password"
          style="display: block"
        />
      </va-form>
    </template>
    <template #actions-buttons>
      <div class="auth-layout__options d-flex align--center justify--end">
        <router-link class="link" :to="{ name: 'recover-password' }"
          >recuperar contraseña</router-link
        >
      </div>

      <div class="mt-3">
        <va-button class="my-0" outline block>login</va-button>
      </div>
    </template>
  </authLayout>
</template>
<script>
import authLayout from "../../../layouts/auth-layout.vue";

export default {
  name: "login",
  components: {
    authLayout,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
<style lang="scss"></style>
