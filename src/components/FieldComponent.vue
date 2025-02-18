<template>
    <div class="mb-4">
      <label :for="id" class="block text-lg font-semibold text-gray-700 mb-2">{{ label }}</label>
      <input
        v-bind="$attrs"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        class="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    },
    id: String,
    label: String,
    type: String,
    placeholder: String
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const updateValue = (event: Event) => {
    const input = event.target as HTMLInputElement;
    emit('update:modelValue', input.value);
  };
  </script>
  