<template>
    <button
      :type="type"
      :class="[
        'button',
        'px-6',           
        'py-3',           
        'rounded-full',   
        'transition-colors', 
        variant === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-black hover:bg-gray-400'
      ]"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup lang="ts">
  const { type, variant } = defineProps({
    type: {
      type: String as () => "button" | "submit" | "reset",
      default: 'button'
    },
    variant: {
      type: String,
      default: 'primary'
    }
  })
  </script>
  