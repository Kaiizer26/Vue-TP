<template>
  <main class="register_main p-4 bg-gray-50">
    <h1 class="text-center text-3xl font-semibold mb-8">Inscription</h1>
    <form @submit.prevent="registerHandler">
      <FieldComponent
        v-model="email"
        id="email"
        label="Email"
        type="email"
        placeholder="Entrer votre email"
      />
      <FieldComponent
        v-model="password"
        id="password"
        label="Mot de passe"
        type="password"
        placeholder="Entrer votre mot de passe"
      />
      <section class="flex justify-between">
        <ButtonComponent type="submit" variant="primary">
          S'inscrire
        </ButtonComponent>
        <ButtonComponent type="reset" variant="secondary">
          Réinitialiser
        </ButtonComponent>
      </section>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import inputValidator from '../utils/input-validator'
import { useRouter } from 'vue-router'
import FieldComponent from '../components/FieldComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'

const router = useRouter()
const email = ref('')
const password = ref('')

const registerHandler = async () => {
  const result = await fetch('users.json')
  const users = await result.json()

  const userExists = users.some((user: any) => user.email === email.value)
  if (userExists) {
    alert('Cet email est déjà utilisé.')
    return
  }

  if (!inputValidator(email.value, 'email')) {
    alert('Email invalide.')
    return
  }
  if (!inputValidator(password.value, 'password')) {
    alert('Mot de passe invalide.')
    return
  }

  const newUser = {
    id: users.length,
    email: email.value,
    password: password.value
  }
  users.push(newUser)
  console.log(users)
  router.push('/login')
}
</script>
