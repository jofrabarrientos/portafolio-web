<template>
  <div class="home_2" id="app">
    <ThePreloader />
    <TheNavbar :personalInfo="content.personalInfo" :navigation="content.navigation" />
    
    <div class="main">
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      >
        <slot />
      </div>
    </div>

    <TheScrollButton />
    <CustomCursor />
  </div>
</template>

<script setup>
import content from '~/assets/data/content.json'
import { useHead } from '#app'
import { onMounted } from 'vue'

useHead({
  title: `${content.personalInfo.name} - Portafolio`,
  meta: [
    { name: 'description', content: content.personalInfo.bio }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: content.personalInfo.favicon }
  ],
  script: [
    { src: '/js/plugin.js', tagPosition: 'bodyClose' },
    { src: '/js/scroll_button.js', tagPosition: 'bodyClose' },
    { src: '/js/sticky_sidebar.js', tagPosition: 'bodyClose' },
    { src: '/js/animation.js', tagPosition: 'bodyClose' },
    { src: '/js/main.js', tagPosition: 'bodyClose' }
  ]
})

// Initialize Bootstrap ScrollSpy manually if needed since Vue doesn't natively do it
// We rely on external scripts instead for now
</script>

<style>
/* Global styles wrapper */
.home_2 {
  position: relative;
}
</style>
