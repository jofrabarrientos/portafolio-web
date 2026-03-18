<template>
  <section id="about" class="tf__about_2 pt_130 xs_pt_80">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-9">
          <div class="tf__section_heading mb_40">
            <h5 class="has-animation">{{ about.title }}</h5>
            <h2 class="has-animation">
              {{ about.subtitle }}
            </h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-xl-6 col-lg-6">
          <div class="tf__about_text_2">
            <p class="mb_20" v-html="about.description"></p>
            <ul>
              <li v-for="(point, index) in about.points" :key="index">
                <div class="top fade_bottom" data-trigerId="about">
                  <div class="img">
                    <img
                      :src="point.icon"
                      :alt="point.title"
                      class="img-fluid w-100"
                    >
                  </div>
                  <div>
                    <h3>{{ point.title }}</h3>
                    <p v-html="point.description"></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="tf__about_img tf__about_img_2">
            <img
              :src="about.image"
              alt="About"
              class="img-fluid w-100"
            >
            <div class="tf__about_img_text">
              <i class="fa-sharp fa-solid fa-award"></i>
              <h4>{{ about.experienceYears }} <span>{{ about.experienceTitle }}</span></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  about: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.tf__about_text_2 p {
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
}
</style>
