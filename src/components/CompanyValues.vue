<template>
  <section class="values-section">
    <h2>Unsere Gründungsidee</h2>
    <p class="intro">
      TShirt-Willy ist entstanden aus Leidenschaft für gute Arbeitskleidung
      und den Wunsch, Qualität mit Charakter zu vereinen.  
      Wir glauben: Nur wer sich wohlfühlt in dem, was er trägt, kann Großes leisten.
    </p>

    <div class="values-grid">
      <div class="value-card" v-for="(v, i) in values" :key="i">
        <div class="icon">{{ v.icon }}</div>
        <h3>{{ v.title }}</h3>
        <p>{{ v.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    icon: "💡",
    title: "Von der Idee zur Marke",
    text: "Was mit einer Vision begann – hochwertige, ehrliche Kleidung für Macher*innen – wurde zu einem Herzensprojekt.",
  },
  {
    icon: "🧵",
    title: "Fair produziert",
    text: "Wir achten auf faire Bedingungen und nachhaltige Stoffe. Unsere Partner teilen dieselben Werte.",
  },
  {
    icon: "🎨",
    title: "Design mit Aussage",
    text: "Jedes Motiv erzählt eine kleine Geschichte – von Arbeit, Leidenschaft und Stil.",
  },
  {
    icon: "🚀",
    title: "Wachstum mit Bodenhaftung",
    text: "Wir wachsen organisch – mit klarer Linie, ehrlichen Preisen und echtem Bezug zu unserer Community.",
  },
];
</script>

<style scoped>
.values-section {
  max-width: 1100px;
  margin: 4rem auto;
  text-align: center;
  padding: 0 1rem;
}

.values-section h2 {
  font-size: 1.8rem;
  margin-bottom: 0.6rem;
  background: linear-gradient(90deg, var(--brand), var(--accent));
  -webkit-background-clip: text;
  color: transparent;
}

.intro {
  color: var(--muted);
  max-width: 70ch;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.value-card {
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,.35);
  padding: 1.5rem 1rem;
  text-align: center;
  transition: transform .2s ease, box-shadow .2s ease;
}

.value-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0,0,0,.45);
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.value-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
}

.value-card p {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
