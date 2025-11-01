<template>
  <div class="slider-wrapper">
    <div class="slider" :style="sliderStyle">
      <img
        v-for="(src, i) in images"
        :key="i"
        :src="src"
        :alt="`TShirt-Willy Galerie ${i + 1}`"
        loading="lazy"
      />
    </div>

    <div class="slider-controls">
      <button class="ctrl" @click="prev">&#10094;</button>
      <button class="ctrl" @click="next">&#10095;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const images = Array.from({ length: 66 }, (_, i) =>
  `https://cdn-proxy.hoststudios.de/willy-content/${String(i + 1).padStart(3, "0")}.jpg`
);

const index = ref(0);
const interval = ref(null);
const delay = 5000; // 5 Sekunden

const sliderStyle = computed(() => ({
  transform: `translateX(-${index.value * 100}%)`,
}));

function next() {
  index.value = (index.value + 1) % images.length;
}
function prev() {
  index.value = (index.value - 1 + images.length) % images.length;
}

onMounted(() => {
  interval.value = setInterval(next, delay);
});
onUnmounted(() => clearInterval(interval.value));
</script>

<style scoped>
.slider-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  margin: 2rem auto;
  max-width: 1100px;
  height: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.slider {
  display: flex;
  transition: transform 1s ease-in-out;
  height: 100%;
}

.slider img {
  flex: 0 0 100%;
  object-fit: cover;
  width: 100%;
  height: 100%;
  user-select: none;
}

.slider-controls {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}

.ctrl {
  pointer-events: all;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: white;
  font-size: 2rem;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  cursor: pointer;
  margin: 0 10px;
  transition: background 0.3s;
}
.ctrl:hover {
  background: rgba(0, 0, 0, 0.5);
}
</style>
