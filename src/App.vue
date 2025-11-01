<template>
  <header class="header">
    <RouterLink class="brand" to="/" aria-label="TShirt-Willy Startseite">
      <img src="https://cdn-proxy.hoststudios.de/willy_logo.png" alt="TShirt-Willy Logo" />
      <span>TShirt-Willy</span>
    </RouterLink>

    <nav aria-label="Hauptnavigation">
      <RouterLink to="/" v-slot="{ isActive }">
        <span :class="{ active: isActive }">Start</span>
      </RouterLink>
      <RouterLink to="/about" v-slot="{ isActive }">
        <span :class="{ active: isActive }">Über uns</span>
      </RouterLink>
      <RouterLink to="/kontakt" v-slot="{ isActive }">
        <span :class="{ active: isActive }">Kontakt</span>
      </RouterLink>
    </nav>
  </header>

  <main class="container">
    <section class="hero">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </section>
  </main>

  <footer>
    <div class="footer-grid">
      <div>
        <strong>TShirt-Willy</strong>
        <div class="muted">Mit ❤️ gestaltet in Deutschland.</div>
      </div>
      <nav>
        <RouterLink to="/about">Über uns</RouterLink> ·
        <RouterLink to="/kontakt">Kontakt</RouterLink> ·
        <a href="#" aria-disabled="true">Impressum</a> ·
        <a href="#" aria-disabled="true">Datenschutz</a>
      </nav>
    </div>
    <div style="margin-top:.6rem">© {{ year }} TShirt-Willy. Alle Rechte vorbehalten.</div>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
const year = new Date().getFullYear()
</script>
