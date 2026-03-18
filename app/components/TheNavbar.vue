<template>
  <nav class="main_menu_2" :class="{ 'show_menu': isShowMenu }">
    <span class="menu_2_icon" @click="toggleMenu" :class="{ 'show_icon': isShowMenu }">
      <i class="fa-light fa-bars bar_icon-staggered bar_icon"></i>
      <i class="fa-light fa-xmark close_icon"></i>
    </span>

    <div class="pt-4 ps-4 pb-2">
      <h5>{{ personalInfo.name.toLowerCase().replace(' ', '') }}.dev</h5>
    </div>

    <ul id="list-example" class="list-group">
      <li v-for="(item, index) in navigation" :key="index">
        <a
          class="list-group-item list-group-item-action text_hover_animaiton d-flex align-items-center gap-2"
          :href="item.anchor"
          @click="isShowMenu = false"
        >
          <span class="d-flex align-items-center">
            <img
              :src="item.icon"
              alt="icon"
              class="img-fluid w-100 svg"
            >
          </span>
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  personalInfo: {
    type: Object,
    required: true
  },
  navigation: {
    type: Array,
    required: true
  }
})

const isShowMenu = ref(false)

const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
</script>

<style scoped>
/* Navbar text styles */
.list-group-item {
  color: #9ca3af !important; /* Tailwind gray-400 */
  transition: color 0.3s ease;
}
.list-group-item:hover,
.list-group-item.active {
  color: #55e6a5 !important;
}

/* Navbar inline image SVG colored via CSS filter */
.list-group-item img {
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}
.list-group-item:hover img,
.list-group-item.active img {
  filter: none;
}
</style>
