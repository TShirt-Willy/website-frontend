<template>
  <section class="newsletter card">
    <div>
      <h2>Bleib auf dem Laufenden</h2>
      <p class="muted">Wir informieren dich, sobald der Shop online geht und wenn es Aktionen gibt.</p>
      <form @submit.prevent="submit" class="row" aria-label="Newsletter">
        <input class="input" type="email" v-model.trim="email" required placeholder="deine@email.de" />
        <button class="btn" type="submit">Eintragen</button>
      </form>
      <small class="muted">Mit dem Eintragen stimmst du zu, dass wir dir E-Mails senden dürfen. Du kannst dich jederzeit abmelden.</small>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
function submit(){
  localStorage.setItem('tshirtwilly_newsletter', email.value)
  alert(`Danke! Wir melden uns unter: ${email.value}`)
  email.value = ''
}
</script>

<style scoped>
.newsletter{
  max-width:1100px; margin:var(--section-gap) auto; padding:1.5rem;
}
.newsletter h2{
  margin:.2rem 0 .2rem; font-size:1.4rem;
  background:linear-gradient(90deg,var(--brand),var(--accent)); -webkit-background-clip:text; color:transparent;
}
.row{ display:flex; gap:.5rem; flex-wrap:wrap; margin:.75rem 0 }
</style>
