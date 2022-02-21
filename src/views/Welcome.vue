<template>
    <div class="welcome container">
        <p>Welcome</p>
        <div v-if="showLogin">
            <h2>Login</h2>
            <LoginForm />
            <p>No account yet? <span @click="showLogin = false">Signup</span> instead</p>
        </div>
        <div v-else>
            <h2>Sign up</h2>
            <SignupForm />
            <p>Already registered? <span @click="showLogin = true">Login</span></p>
        </div>
    </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue"
import LoginForm from "../components/LoginForm.vue"
import { ref } from "vue"

export default {
    components: { SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true)

        return { showLogin }
    }
}
</script>

<style>
 .welcome {
     text-align: center;
     padding: 20px 0;
     }
 .welcome form {
     width: 300px;
     margin: 20px auto;
     }
 .welcome label {
     display: block;
     margin: 20px 0 10px;
      }
 .welcome input {
     width: 100%;
     margin: 10px auto;
     color: #999;
     outline: none;
     border: 1px solid #eee;
     border-radius: 20px;
     padding: 10px;
     }
 .welcome span {
     cursor: pointer;
     font-weight: bolder;
     text-decoration: underline;
     }
 .welcome span {
     margin: 20px auto;
     }
</style>