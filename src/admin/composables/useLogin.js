import axios from "axios";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();

export const handleLogin = async (data) => {
    await authStore.getToken();
    await axios.post("/login", {
        email: data.email,
        password: data.password,
    }).then( resolve => {
        authStore.pushToRoute('/admin/dashboard')
    }).catch(error =>{
        authStore.setError(error)
    });
}