<template>
    <nav v-if="user">
    <div>        
        <p>Hey there: {{ user.displayName }}</p>
        <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
    </nav>
</template>

<script>
import useLogout from "../composables/useLogout"
import getUser from "../composables/getUser"

export default {
    setup() {
        const { error, logout} = useLogout()
        const { user } = getUser()

        const handleLogout = async() => {
            await logout()
            if(!error.value) {
                console.log("user logged out")
            }
        }

        return { handleLogout, user }
    }
}
</script>

<style>
nav {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #444;
    border-radius: 10px;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #fff;
}
nav p.email {
    font-size: 14px;
    color: #fff;    
}
button {
    cursor: pointer;
    transition: 0.88s;
}
button:hover {
    color: #4a9e5d;
    background: #fff;
    box-shadow: 1px 1px 5px 5px #4a9e5d;
}
</style>