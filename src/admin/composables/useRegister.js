import axios from "axios";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();

export const handleRegister = async (data) => {
    await authStore.getToken()
    await axios.post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
    }).then(resolve => {
        authStore.pushToRoute('/admin/dashboard')
    }).catch( (error) => {
        authStore.setError(error);
    });
}
