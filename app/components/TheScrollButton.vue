<template>
  <div class="progress active">
    <svg class="progress-svg" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Can be controlled by the scroll_button.js script we import, or re-implemented in Vue 
})
</script>
