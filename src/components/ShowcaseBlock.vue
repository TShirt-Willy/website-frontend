<template>
  <section class="showcase">
    <!-- 3 nebeneinander (auf Desktop) -->
    <div class="usp-grid">
      <article v-for="(u,i) in usps" :key="i" class="card usp">
        <div class="row">
          <div class="icon">{{ u.icon }}</div>
          <div>
            <h3>{{ u.title }}</h3>
            <p class="muted">{{ u.text }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const usps = [
  { icon:'🧵', title:'Individuelle Veredelung', text:'Flex, Flock, DTF & Transfer – passend zum Einsatz.' },
  { icon:'👕', title:'Kleine Auflagen ab 1 Stück', text:'Einzelbestellung bis Teamausstattung ohne Mindestabnahme.' },
  { icon:'⚡', title:'Schnelle Abwicklung', text:'Fixe Durchlaufzeiten, klare Kommunikation, europaweiter Versand.' },
  { icon:'💶', title:'Faire Preise', text:'Transparente Kalkulation – Aktionen zum Launch.' },
  { icon:'🌿', title:'Gute Materialien', text:'Langlebige Stoffe, angenehm zu tragen, robust im Alltag.' },
  { icon:'🤝', title:'Beratung vom Macher', text:'Direkter Kontakt – wir bringen dein Motiv sicher aufs Textil.' },
]
</script>

<style scoped>
/* Container wie Hero (max 1100px) */
.showcase{
  max-width:1100px;
  margin: 1.5rem auto 0;
  padding: 0 1rem;
}

/* Grid: 3 Spalten auf Desktop, 2 / 1 auf kleineren Screens */
.usp-grid{
  display:grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 1rem;
}
@media (max-width: 980px){
  .usp-grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px){
  .usp-grid{ grid-template-columns: 1fr; }
}

/* Kleine Cards */
.usp{
  padding: .9rem 1rem;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  /* gleichmäßige Höhe, damit die Reihen bündig wirken */
  min-height: 112px;
}
.usp:hover{
  transform: translateY(-3px);
  border-color: rgba(255,255,255,.14);
  box-shadow: 0 12px 26px rgba(0,0,0,.38);
}
.row{ display:flex; gap:.75rem; align-items:flex-start }
.icon{ font-size:1.1rem; line-height:1; margin-top:.15rem }
h3{ margin:.1rem 0 .2rem; font-size:1.02rem }

/* Große Card (volle Breite des Containers wie HeroSplit) */
.big{ padding: 1.2rem 1.1rem; }
.big h2{
  margin:.1rem 0 .4rem; font-size:1.2rem;
  background:linear-gradient(90deg,var(--brand),var(--accent));
  -webkit-background-clip:text; color:transparent;
}
.lead{ margin:.2rem 0 .6rem; font-weight:600 }
.actions.left{ justify-content:flex-start }
@media (max-width: 700px){
  .actions.left{ justify-content:center }
}
</style>
