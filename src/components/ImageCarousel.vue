<template>
    <!-- Große Card in Hero-Breite -->
		<article class="card big">
		<h2>Ein Einblick in unsere Arbeit gefällig?</h2>
		<h2 class="lead">Hier findest du ein paar Vorlagen, die wir bereits für Bestandskunden erledigt haben – wir überzeugen
			mit Qualität und mit Flexibilität. Deine Idee in unserer Hand.
		</h2>
		<h2 class="lead">
			Ob Einzelstück oder Team-Ausstattung: Wir beraten dich bei Stoffwahl, Schnitt und Veredelung
			(Flex, Flock, DTF, Siebdruck-Transfer). Auf Wunsch inkl. Motiv-Feinschliff und Größenmix.
			Produktion in kleinen Batches, schnelle Abwicklung – europaweit versendet.
		</h2>
		<section class="carousel-section">
			<div class="carousel" @mouseenter="pause" @mouseleave="play">
				<div class="track" :style="trackStyle">
					<figure v-for="(src,i) in looped" :key="i" class="slide">
						<img :src="src" :alt="`TShirt-Willy Motiv ${((i % total)+1)}`" loading="lazy" />
					</figure>
				</div>
				<button class="ctrl left" @click="prev" aria-label="Zurück">‹</button>
				<button class="ctrl right" @click="next" aria-label="Weiter">›</button>
			</div>
		</section>
	</article>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 66 Bilder vom CDN
const total = 66
const base = 'https://cdn-proxy.hoststudios.de/willy-content/'
const images = Array.from({length: total}, (_,i)=> `${base}${String(i+1).padStart(3,'0')}.jpg`)

// Für endlose Schleife duplizieren wir die Liste
const looped = [...images, ...images]

const index = ref(0)
const visible = ref(4) // Desktop
const speed = 1500
let timer

const trackStyle = computed(()=>({
  transform: `translateX(-${index.value * (100/visible.value)}%)`
}))

function next(){ index.value = (index.value + 1) % (images.length + visible.value) }
function prev(){ index.value = (index.value - 1 + images.length + visible.value) % (images.length + visible.value) }
function play(){ stop(); timer = setInterval(next, speed) }
function pause(){ stop() }
function stop(){ if (timer) clearInterval(timer) }

function setVisibleByWidth() {
  const w = window.innerWidth
  visible.value = w >= 1200 ? 4 : w >= 900 ? 3 : w >= 600 ? 2 : 1
}

onMounted(()=>{
  setVisibleByWidth()
  window.addEventListener('resize', setVisibleByWidth)
  play()
})
onUnmounted(()=>{
  window.removeEventListener('resize', setVisibleByWidth)
  stop()
})
</script>

<style scoped>
.carousel-section{ max-width:1100px; margin:var(--section-gap) auto 0; padding:0 1rem; text-align:center }
.carousel-section h2{
  font-size:1.8rem; margin-bottom:1rem;
  background:linear-gradient(90deg,var(--brand),var(--accent));
  -webkit-background-clip:text; color:transparent;
}

.carousel{
  position:relative; overflow:hidden; border-radius:18px;
  border:1px solid rgba(255,255,255,.08);
  background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  box-shadow:0 10px 30px rgba(0,0,0,.35);
}

.track{
  display:flex; transition:transform .8s ease-in-out;
}

.slide{
  flex:0 0 calc(100% / 4); /* Basis (wird via JS/visible angepasst) */
  margin:0; line-height:0;
}
img{ width:100%; height:280px; object-fit:cover; display:block }

.ctrl{
  position:absolute; top:50%; transform:translateY(-50%);
  border:none; background:rgba(0,0,0,.35); color:#fff; font-size:1.8rem;
  width:42px;height:42px;border-radius:50%; cursor:pointer; pointer-events:auto;
}
.ctrl.left{ left:10px } .ctrl.right{ right:10px }
.ctrl:hover{ background:rgba(0,0,0,.55) }

/* sichtbare Anzahl dynamisch */
:host{ --vis:4 }

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
