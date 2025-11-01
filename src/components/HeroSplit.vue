<template>
  <section class="hero-split card">
    <!-- Text -->
    <div class="hero-copy">
      <p class="eyebrow">Workwear • Street • Print</p>
      <h1 class="headline">
        Sei immer gut gewappnet<br />
        <span class="grad">mit der richtigen Arbeitskleidung.</span>
      </h1>
      <p class="sub">
        Robuste Stoffe, starker Druck und passgenauer Sitz — gemacht für lange
        Schichten und kurze Wege. Bald hier im Shop.
      </p>

      <div class="actions">
        <a class="btn" href="#/about">Kollektion entdecken</a>
        <a class="btn" href="#/kontakt" style="background:transparent">Kontakt aufnehmen</a>
      </div>
    </div>

    <!-- Bild -->
    <div class="hero-media">
      <div class="glow"></div>
      <img
        src="https://cdn-proxy.hoststudios.de/willy-content/067.jpg"
        alt="TShirt-Willy — Arbeitskleidung"
        width="640"
        height="800"
        loading="eager"
      />
    </div>
  </section>
</template>

<script setup>
/* keine Logik nötig */
</script>

<style scoped>
.hero-split{
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap:2rem;
  padding:2rem;
  align-items:center;
}
.hero-copy{ text-align:left; }
.eyebrow{
  color:var(--muted);
  letter-spacing:.12em;
  text-transform:uppercase;
  font-weight:700;
  font-size:.8rem;
  margin:0 0 .5rem;
}
.headline{
  margin:.2rem 0 .6rem;
  font-size:clamp(1.8rem,3.6vw,2.6rem);
  line-height:1.15;
}
.grad{
  background:linear-gradient(90deg,var(--brand),var(--accent));
  -webkit-background-clip:text; background-clip:text; color:transparent;
}
.sub{ color:var(--muted); max-width:60ch; margin:.4rem 0 1rem; }

.actions{ display:flex; gap:.75rem; flex-wrap:wrap; }
.btn{ display:inline-flex; align-items:center; gap:.5rem; padding:.75rem 1rem;
  border-radius:12px; border:1px solid rgba(255,255,255,.1); color:var(--text);
  text-decoration:none; font-weight:700; background:rgba(255,255,255,.04);
  transition:transform .08s, box-shadow .2s, border-color .2s;
}
.btn:hover{ transform:translateY(-1px); border-color:rgba(255,255,255,.22);
  box-shadow:0 8px 18px rgba(0,0,0,.4); }

.hero-media{ position:relative; }
.hero-media img{
  width:100%; height:480px; object-fit:cover; object-position:center;
  border-radius:18px; border:1px solid rgba(255,255,255,.08);
  box-shadow:0 12px 30px rgba(0,0,0,.45);
  display:block;
}
.glow{
  position:absolute; inset:auto -12% -10% -12%;
  height:48%; filter:blur(40px);
  background:radial-gradient(60% 60% at 50% 0%, rgba(167,139,250,.35), transparent 70%),
             radial-gradient(60% 60% at 20% 50%, rgba(34,211,238,.25), transparent 70%);
  z-index:0; pointer-events:none;
}
.hero-media img{ position:relative; z-index:1; }

/* Responsive: Stack unter 900px */
@media (max-width: 900px){
  .hero-split{ grid-template-columns:1fr; padding:1.25rem; }
  .hero-copy{ text-align:center; }
  .actions{ justify-content:center; }
  .hero-media img{ height:360px; }
}
</style>
