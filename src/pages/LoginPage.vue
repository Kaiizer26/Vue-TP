<template>
    <main class="login_main">

        <h1>Login page</h1>
        <form @submit.prevent="submitHandler">
            <section>
                <article>
                    <label for="email"></label>
                    <input 
                    v-model="email"
                    type="email"
                    id="email"
                    placeholder="Entrer votre email"
                    class="input">
                </article>
            </section>
            <section>
                <article>
                    <label for="password"></label>
                    <input v-model="password" type="password" id="password"
                    placeholder="Entrer votre mdp"
                    class="input">
                    
                </article>
            </section>
            <section>
                <button type="submit"
                class="button is-primary">Valider</button>
                <button type="reset" class="button is-danger">Réinitialiser</button>
            </section>
        </form>
    </main>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import inputValidator from '../utils/input-validator';
import  {useRouter} from "vue-router"
const router= useRouter()

const email= ref('')
const password= ref('')



watch(email, (val) => {
    console.log(val, inputValidator(val, 'email'))
})
watch(password, (val) => {
    console.log(val, inputValidator(val, 'password'))
})



const submitHandler = async() => {
    const result = await fetch('users.json')
    const users = await result.json()
    console.log(users)
    const user = users.find((user:any) => user.email === email.value)
    if(!user){
        alert('user not found')
        return
    }
    if(!(user.password === password)){
        alert('mauvais mdp')
        return
    }
    console.log('tout se passe bien')
    router.push('session/' + user.id)
}

const inputHandler = function(){

}
</script>

<style lang="scss" scoped>
.login_main{

}</style>