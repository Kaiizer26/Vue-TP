<template>
    <main class="login_main p-4 bg-gray-50">
      <h1 class="text-center text-3xl font-semibold mb-8">Connexion</h1>
      <form @submit.prevent="submitHandler">
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
            Se connecter
          </ButtonComponent>
          <ButtonComponent type="reset" variant="secondary">
            Réinitialiser
          </ButtonComponent>
        </section>
      </form>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import FieldComponent from '../components/FieldComponent.vue';
  import ButtonComponent from '../components/ButtonComponent.vue';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const submitHandler = async () => {
    const result = await fetch('users.json');
    const users = await result.json();
    const user = users.find((user: any) => user.email === email.value);
  
    if (!user) {
      alert('Utilisateur non trouvé');
      return;
    }
  
    if (user.password !== password.value) {
      alert('Mot de passe incorrect');
      return;
    }
  
    router.push(`/cuisiniers}`);
  };
  </script>
  