<script setup>
import {ref} from "vue";
import {handleRegister} from "../composables/useRegister";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
});
</script>
<template>
    <div class="d-flex align-items-center py-4">
        <main class="form-signin w-100 m-auto">
            <form @submit.prevent="handleRegister(form)">
                <h1 class="h3 mb-3 fw-normal text-center">Regístrate</h1>
                <div class="form-floating">
                    <input v-model="form.name"
                        type="text" class="form-control startInputs" id="nameInput" placeholder="Nombre" required>
                    <label for="nameInput">Nombre</label>
                </div>
                <div class="form-floating">
                    <input v-model="form.email"
                        type="email" class="form-control middleInputs" id="emailInput" placeholder="name@example.com" required>
                    <label for="emailInput">Correo Electrónico</label>
                </div>
                <div class="form-floating">
                    <input v-model="form.password"
                        type="password" class="form-control middleInputs" id="passwordInput" placeholder="Contraseña" required>
                    <label for="passwordInput">Contraseña</label>
                </div>
                <div class="form-floating">
                  <input v-model="form.password_confirmation"
                         type="password" class="form-control finalInputs" id="passwordConfirmationInput" placeholder="Confirmar Contraseña" required>
                  <label for="passworxdInput">Confirmar Contraseña</label>
                </div>
                <div v-if="authStore.authErrors.message" class="alert alert-danger alert-dismissible fade show" role="alert">
                 <strong>¡Error!</strong> {{ authStore.authErrors.message }}
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">Registrarse</button>
            </form>
        </main>
    </div>
</template>

<style scoped>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    width: 100%;
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
    --bd-violet-bg: #712cf9;
    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-white);
    --bs-btn-bg: var(--bd-violet-bg);
    --bs-btn-border-color: var(--bd-violet-bg);
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #6528e0;
    --bs-btn-hover-border-color: #6528e0;
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #5a23c8;
    --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
    z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
    display: block !important;
}</style>
<style src="@/admin/assets/register.css" scoped></style>