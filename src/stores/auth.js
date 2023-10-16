import {defineStore} from "pinia";
import axios from "axios";
export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get("/api/user");
            this.authUser = data.data;
        },
        async handleLogout() {
            await axios.post("/logout");
            this.authUser = null;
        },
        async handleForgotPassword(email) {
            this.authErrors = [];
            this.getToken();
            try {
                const response = await axios.post("/forgot-password", {
                    email: email,
                });
                this.authStatus = response.data.status;
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleResetPassword(resetData) {
            this.authErrors = [];
            try {
                const response = await axios.post("/reset-password", resetData);
                this.authStatus = response.data.status;
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        setError(error){
            this.authErrors = error.response.data;
        },
        pushToRoute(route){
            return this.router.push(route)
        }
    },
});