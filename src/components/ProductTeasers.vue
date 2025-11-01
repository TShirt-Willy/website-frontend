<template>
  <section class="teasers">
    <header>
      <h2>Beliebte Motive</h2>
      <RouterLink to="/about" class="btn">Kollektion ansehen</RouterLink>
    </header>

    <div class="grid">
      <article v-for="(src,i) in items" :key="i" class="card tile prod">
        <img :src="src" :alt="`Motiv ${start+i}`" loading="lazy">
        <div class="meta">
          <h3>Motiv #{{ start+i }}</h3>
          <p class="muted">Ab 24,90&nbsp;€</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// Einfach 6 Bilder ab 010 – passe gern an
const start = 10
const base = 'https://cdn-proxy.hoststudios.de/willy-content/'
const items = Array.from({length: 6}, (_,k)=> `${base}${String(start+k).padStart(3,'0')}.jpg`)
</script>

<style scoped>
.teasers{ max-width:1100px; margin:var(--section-gap) auto 0; padding:0 1rem }
.teasers header{
  display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-bottom:.75rem;
}
.teasers h2{
  margin:0; font-size:1.6rem;
  background:linear-gradient(90deg,var(--brand),var(--accent));
  -webkit-background-clip:text; color:transparent;
}
.prod{ padding:0; overflow:hidden }
.prod img{ width:100%; height:220px; object-fit:cover; display:block }
.meta{ padding: .85rem 1rem }
.meta h3{ margin:.1rem 0 .2rem; font-size:1.05rem }
</style>
