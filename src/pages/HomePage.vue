<template>
    <main>
        <h1>Home page</h1>
        <button @click="increment">Increment</button>
        {{ button }}
    </main>
</template>
    <script setup lang="ts">
    import { ref, reactive } from "vue";
    const button = ref(0);
    
    function increment(){
        button.value++
    }
    </script>