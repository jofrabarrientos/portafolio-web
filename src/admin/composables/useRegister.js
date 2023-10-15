import axios from "axios";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore;

const handleRegister = async (data) => {
    await authStore.getToken()
    try {
        await axios.post("/register", {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
        }).then(() => {
            this.router.push("/");
        });
    } catch (error) {
        if (error.response.status === 422) {
            authStore.setErrors(error.response.data.errors);
        }
    }
}

export default handleRegister