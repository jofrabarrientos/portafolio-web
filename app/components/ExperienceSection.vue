<template>
  <section id="skills" class="tf__skills_2 pt_115 xs_pt_75 pb_120 xs_pb_80 xs_mt_80">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-9 m-auto">
          <div class="tf__section_heading mb_30">
            <h5 class="has-animation">Experiencia y aptitudes</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-8 col-xl-10 m-auto">
          <ul class="nav nav-pills mb_30" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                @click="openLink(personalInfo.cvLink)"
                type="button"
              >
                Descargar CV <i class="fa-solid fa-arrow-down-to-line"></i>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                :class="{ active: activeTab === 'experience' }"
                @click="activeTab = 'experience'"
                type="button"
              >
                Experiencia
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                :class="{ active: activeTab === 'education' }"
                @click="activeTab = 'education'"
                type="button"
              >
                Educación
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade"
              :class="{ 'show active': activeTab === 'experience' }"
              id="pills-home"
            >
              <div class="row">
                <div class="col-xl-6 col-lg-6" v-for="(item, index) in experience" :key="'exp-'+index">
                  <ExperienceItem :item="item" type="experience" />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              :class="{ 'show active': activeTab === 'education' }"
              id="pills-profile"
            >
              <div class="row education">
                <div class="col-xl-6 col-lg-6" v-for="(item, index) in education" :key="'edu-'+index">
                  <ExperienceItem :item="item" type="education" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  experience: {
    type: Array,
    required: true
  },
  education: {
    type: Array,
    required: true
  },
  personalInfo: {
    type: Object,
    required: true
  }
})

const activeTab = ref('experience')

const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
/* Add missing basic tab styles if not covered by template CSS */
</style>
