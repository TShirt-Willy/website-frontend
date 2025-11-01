<template>
  <aside class="side-stack" :class="position">
    <article v-for="(it, i) in items" :key="i" class="mini-card">
      <div class="icon">{{ it.icon }}</div>
      <h4>{{ it.title }}</h4>
      <p>{{ it.text }}</p>
    </article>
  </aside>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
  position: { type: String, default: 'left' } // 'left' | 'right'
})
</script>

<style scoped>
.side-stack{
  display: grid;
  grid-auto-rows: 1fr;
  gap: 1rem;
  align-content: start;
}

/* unaufdringlicher Look */
.mini-card{
  background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015));
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 8px 18px rgba(0,0,0,.25);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.mini-card:hover{
  transform: translateY(-2px);
  border-color: rgba(255,255,255,.14);
  box-shadow: 0 10px 24px rgba(0,0,0,.35);
}
.icon{ font-size: 1.25rem; margin-bottom: .35rem }
h4{ margin: 0 0 .25rem; font-size: 1rem }
p{ margin: 0; font-size: .9rem; color: var(--muted); line-height: 1.45 }

/* Wenn zu schmal: Karten dichter */
@media (max-width: 1200px){
  .mini-card{ padding: .9rem }
}
</style>
