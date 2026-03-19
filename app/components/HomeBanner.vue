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
              <br />
              <span class="cd-headline rotate-1">
                <span class="cd-words-wrapper">
                  <b 
                    v-for="(role, index) in personalInfo.roles" 
                    :key="index"
                    :class="{ 
                      'is-visible': index === activeRoleIndex, 
                      'is-hidden': index === lastRoleIndex 
                    }"
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

const activeRoleIndex = ref(0)
const lastRoleIndex = ref(-1)
let rotationInterval = null

onMounted(() => {
  rotationInterval = setInterval(() => {
    lastRoleIndex.value = activeRoleIndex.value
    activeRoleIndex.value = (activeRoleIndex.value + 1) % props.personalInfo.roles.length
  }, 3000)
})

onUnmounted(() => {
  if (rotationInterval) {
    clearInterval(rotationInterval)
  }
})
</script>

<style scoped>
/* Original Animated Headlines (rotate-1) CSS from template */
.cd-headline {
  font-size: 3rem;
  line-height: 1.2;
}

.cd-words-wrapper {
  display: inline-grid;
  grid-template-areas: "word";
  vertical-align: middle;
  perspective: 300px;
  min-height: 1.2em;
}

.cd-words-wrapper b {
  grid-area: word;
  display: inline-block;
  white-space: nowrap;
  opacity: 0;
  transform-origin: 50% 100%;
  transform: rotateX(180deg);
  backface-visibility: hidden;
}

.cd-words-wrapper b.is-visible {
  opacity: 1;
  transform: rotateX(0);
  animation: 1.2s cd-rotate-1-in forwards;
}

.cd-words-wrapper b.is-hidden {
  opacity: 0;
  transform: rotateX(180deg);
  animation: 1.2s cd-rotate-1-out forwards;
}

@keyframes cd-rotate-1-in {
  0% { transform: rotateX(180deg); opacity: 0; }
  35% { transform: rotateX(120deg); opacity: 0; }
  65% { opacity: 0; }
  100% { transform: rotateX(360deg); opacity: 1; }
}

@keyframes cd-rotate-1-out {
  0% { transform: rotateX(0); opacity: 1; }
  35% { transform: rotateX(-40deg); opacity: 1; }
  65% { opacity: 0; }
  100% { transform: rotateX(180deg); opacity: 0; }
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
