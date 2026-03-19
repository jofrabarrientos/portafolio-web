<template>
  <section
    id="banner"
    class="tf__banner_2 banner"
    style="background: url(/images/bg/banner_bg2.png)"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-xxl-6 col-md-12 col-lg-7">
          <div class="tf__banner_text">
            <h1>
              ¡Hola!, Soy {{ personalInfo.name }}
              <span class="cd-headline rotate-1">
                <span class="cd-words-wrapper">
                  <b 
                    v-for="(role, index) in personalInfo.roles" 
                    :key="index"
                    :class="{ 'is-visible': index === activeRoleIndex, 'is-hidden': index !== activeRoleIndex }"
                  >
                    {{ role }}
                  </b>
                </span>
              </span>
            </h1>
            <p>
              {{ personalInfo.bio }}
            </p>
            <ul style="display: flex; flex-direction: row; flex-wrap: nowrap; gap: 15px; margin: 0; padding: 0; list-style: none;">
              <li style="margin: 0; padding: 0;">
                <a class="common_btn" :href="personalInfo.cvLink" target="_blank" style="white-space: nowrap; margin: 0;">
                  Descargar CV
                  <i class="fa-solid fa-arrow-down-to-line"></i>
                </a>
              </li>
              <li style="margin: 0; padding: 0;">
                <a class="common_btn" :href="personalInfo.youtubeLink" target="_blank" style="white-space: nowrap; margin: 0;">
                  Mira mis cursos en Youtube
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xxl-5 col-md-8 col-lg-5 mx-auto">
          <div class="tf__banner_img fade_right" data-trigerId="banner">
            <div class="img">
              <img :src="personalInfo.bannerImage" alt="José Barrientos" class="img-fluid w-100">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  personalInfo: {
    type: Object,
    required: true
  }
})

// Simple word rotation logic to replace the jQuery cd-headline plugin if needed, 
// though the original JS might handle it if we leave the classes.
// However, implementing it in Vue is safer.
const activeRoleIndex = ref(0)
let rotationInterval = null

onMounted(() => {
  rotationInterval = setInterval(() => {
    activeRoleIndex.value = (activeRoleIndex.value + 1) % props.personalInfo.roles.length
  }, 3000) // Change word every 3 seconds
})

onUnmounted(() => {
  if (rotationInterval) {
    clearInterval(rotationInterval)
  }
})
</script>

<style scoped>
/* Add specific styles for the rotating text if not well handled by existing CSS under Vue */
.cd-words-wrapper {
  display: inline-grid;
  grid-template-areas: "word";
  vertical-align: middle;
  text-align: left;
  min-height: 1.25em;
  line-height: 1.2;
}

.cd-words-wrapper b {
  grid-area: word;
  white-space: nowrap;
}

.role-fade-enter-active, 
.role-fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.role-fade-enter-from, 
.role-fade-leave-to {
  opacity: 0;
}

.tf__banner_text h1 {
  margin-bottom: 45px;
  line-height: 1.2;
}

.tf__banner_text p {
  margin-top: 15px;
}

/* Rounded Hexagonal crop for the banner image */
.tf__banner_img .img img {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z' fill='black' stroke='black' stroke-width='8' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z' fill='black' stroke='black' stroke-width='8' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  object-fit: cover;
  height: 100%;
}

.tf__banner_img .img {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
