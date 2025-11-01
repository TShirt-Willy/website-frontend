<template>
  <div class="home">
    <img src="https://cdn-proxy.hoststudios.de/willy_logo.png" alt="TShirt-Willy Logo" width="120" height="120" style="border-radius:16px;" />
    <h1>Wir befinden uns im Aufbau</h1>
    <p class="muted">Bald startet hier der TShirt-Willy Onlineshop. Trag dich ein und erfahre als Erste*r vom Launch.</p>
    <div class="actions">
      <form @submit.prevent="submit" aria-label="Benachrichtigung">
        <input class="input" type="email" v-model.trim="email" placeholder="deine@email.de" required aria-label="E-Mail Adresse" />
        <button class="btn" type="submit">Benachrichtigung erhalten</button>
      </form>
      <a class="btn" href="mailto:hallo@tshirt-willy.example" aria-label="E-Mail an TShirt-Willy senden">Kontakt aufnehmen</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
function submit() {
  alert(`Danke! Wir informieren dich unter: ${email.value}`)
  email.value = ''
}
</script>
