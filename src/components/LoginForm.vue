<template>
        <form @submit.prevent="handleSubmit">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <div class="error">{{error}}</div>
            <button>Log In</button>
        </form>
</template>

<script>
import { ref } from "vue"
import useLogin from "../composables/useLogin"
import { useRouter } from "vue-router"

export default {
    setup(props, context) {
        const email = ref("")
        const password = ref("")
        const { error, login } = useLogin()
        const router = useRouter()


        const handleSubmit = async() => {
            await login(email.value, password.value)
            if(!error.value) {
                context.emit("User logged in")
                router.push({name: "Chatroom"})
            }
        }
        return { email, password, handleSubmit, error }
    }
}
</script>

<style scope>
</style>