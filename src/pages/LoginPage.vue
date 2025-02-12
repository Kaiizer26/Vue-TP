<template>
    <main class="login_main">

        <h1>Login page</h1>
        <form @submit.prevent="submitHandler">
            <section>
                <article>
                    <label for="email"></label>
                    <input 
                    v-model="user.email"
                    type="email"
                    id="email"
                    placeholder="Entrer votre email"
                    class="input">
                </article>
            </section>
            <section>
                <article>
                    <label for="password"></label>
                    <input v-model="user.password" type="password" id="password"
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
import {ref, reactive, watch} from 'vue'
const user= reactive({
    email:'',
    password:''
})
watch(user, (val) => {
    console.log('Changement de la variable data')
    })

const isUserInputValid = (input: string): boolean => {
    const pattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
   return pattern.test(input);

}


const submitHandler = () => {
    if (isUserInputValid(user.email)) {
        console.log("Formulaire soumis avec :");
    } else {
        console.log("Erreur : email invalide");
    }
}

const inputHandler = function(){

}
</script>

<style lang="scss" scoped>
.login_main{

}</style>