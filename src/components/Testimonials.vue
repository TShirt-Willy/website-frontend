<template>
  <section class="testimonials">
    <h2>Was andere sagen</h2>
    <div class="grid">
      <article v-for="t in list" :key="t.name" class="card tile tcard">
        <div class="row">
          <div class="avatar">{{ initials(t.name) }}</div>
          <div>
            <strong>{{ t.name }}</strong>
            <div class="muted">{{ t.role }}</div>
          </div>
        </div>
        <p class="quote">“{{ t.text }}”</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const list = [
  { name:'Sven K.', role:'Malermeister', text:'Mega Qualität, sitzt top – und der Druck hält!' },
  { name:'Mara L.', role:'Event Crew', text:'Angenehme Stoffe, robust im Alltag. Empfehlung!' },
  { name:'Tobias R.', role:'Werkstatt', text:'Schneller Versand und fairer Preis – passt.' },
]
const initials = (n)=> n.split(' ').map(s=>s[0]).join('').slice(0,2).toUpperCase()
</script>

<style scoped>
.testimonials{ max-width:1100px; margin:var(--section-gap) auto 0; padding:0 1rem; text-align:center }
.testimonials h2{
  font-size:1.6rem; margin-bottom:.8rem;
  background:linear-gradient(90deg,var(--brand),var(--accent)); -webkit-background-clip:text; color:transparent;
}
.tcard{ text-align:left }
.row{ display:flex; align-items:center; gap:.75rem; margin-bottom:.5rem }
.avatar{
  width:42px;height:42px;border-radius:50%;
  display:grid;place-items:center;font-weight:700;
  background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12)
}
.quote{ margin:.5rem 0 0 }
</style>
