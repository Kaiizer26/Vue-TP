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
    const email= ref('')
    const password= ref('')


// watch(user, (val) => {

//     if(val.email){

//         console.log(val.email, inputValidator(val.email, 'email'));
//     } else{
//         console.log(val.password, inputValidator(val.password, 'password'));

//     }
// })

watch(email, (val) => {
    console.log(val, inputValidator(val, 'email'))
})
watch(password, (val) => {
    console.log(val, inputValidator(val, 'password'))
})

// const isUserInputValid = (input: string): boolean => {
//     const pattern = new RegExp("^[a-zA-Z0-9._%+\-]{2,64}[@]{1}[a-zA-Z0-9.\-]{2,64}[.]{1}[a-zA-Z]{2,}$");
//     return pattern.test(input);
// }


const submitHandler = () => {
    
}

const inputHandler = function(){

}
</script>

<style lang="scss" scoped>
.login_main{

}</style>