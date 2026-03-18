<template>
  <div v-if="!isLoaded" class="preloader">
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <path id="preloader_svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
    </svg>
    <h5 class="preloader-text">Loading...</h5>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const isLoaded = ref(false)

onMounted(() => {
  const svg = document.getElementById("preloader_svg")
  const tl = gsap.timeline()
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"

  tl.to(".preloader-text", {
    delay: 0.5,
    y: -100,
    opacity: 0,
  })
  
  tl.to(svg, {
    duration: 0.1,
    // attr: { d: curve },
    ease: "power2.in",
  }).to(svg, {
    duration: 0.5,
    attr: { d: flat },
    ease: "power2.out",
  })

  tl.to(".preloader", {
    y: -1500,
    duration: 0.8,
    onComplete: () => {
      isLoaded.value = true
    }
  })
})
</script>

