<template>
  <div class="tf__single_skill_2 fade_bottom" data-trigerId="skills">
    <h3 v-if="type === 'experience'">{{ item.company }}</h3>
    <h3 v-if="type === 'education'">{{ item.institution }}</h3>
    
    <h2 v-if="type === 'experience'">{{ item.position }}</h2>
    <h2 v-if="type === 'education'">{{ item.degree }}</h2>
    
    <h4>{{ item.period }}</h4>
    <p>{{ item.description }}</p>

    <div v-if="type === 'experience'" class="tf__team_skills_bar_single">
      <p>{{ item.skills }}</p>
      <div :id="barId" class="barfiller">
        <div class="tipWrap">
          <span class="tip"></span>
        </div>
        <span class="fill" :data-percentage="item.percentage" :style="{ width: item.percentage + '%' }"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator(value) {
      return ['experience', 'education'].includes(value)
    }
  }
})

// Generate a somewhat unique ID for the bar if needed by JS (though Vue handles width dynamically now)
const barId = computed(() => {
  return 'bar-' + Math.random().toString(36).substring(2, 9)
})
</script>

<style scoped>
/* Additional specific styles if needed */
</style>
