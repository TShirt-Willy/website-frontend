<template>
  <section class="gallery">
    <h2>Unsere neuesten Motive</h2>
    <div class="gallery-grid">
      <div v-for="(src, i) in images" :key="i" class="gallery-card">
        <img :src="src" :alt="`TShirt-Willy Motiv ${i + 1}`" loading="lazy" />
        <div class="overlay">
          <span>Motiv #{{ i + 1 }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = Array.from({ length: 4 }, (_, i) =>
  `https://cdn-proxy.hoststudios.de/willy-content/${String(i + 1).padStart(3, "0")}.jpg`
);
</script>

<style scoped>
.gallery {
  margin: 3rem auto;
  text-align: center;
  max-width: 1100px;
}

.gallery h2 {
  font-size: 1.8rem;
  background: linear-gradient(90deg, var(--brand), var(--accent));
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
}

.gallery-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.gallery-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-card:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .overlay {
  opacity: 1;
}

.overlay span {
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>
