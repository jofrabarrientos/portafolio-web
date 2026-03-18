<template>
  <HomeBanner :personalInfo="content.personalInfo" />
  <ExperienceSection 
    :experience="content.experience" 
    :education="content.education" 
    :personalInfo="content.personalInfo" 
  />
  <AboutSection :about="content.about" />
</template>

<script setup>
import content from '~/assets/data/content.json'
import AboutSection from '~/components/AboutSection.vue'
import { useHead } from '#app'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Portafolio` : 'José Barrientos - Portafolio';
  }
})
</script>
