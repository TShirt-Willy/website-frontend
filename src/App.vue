<template>
  <header class="header">
    <RouterLink class="brand" to="/" aria-label="TShirt-Willy Startseite">
      <img src="https://cdn-proxy.hoststudios.de/willy_logo.png" alt="TShirt-Willy Logo" />
      <span>TShirt-Willy</span>
    </RouterLink>
    <nav aria-label="Hauptnavigation">
      <RouterLink to="/" exact-active-class="active">Start</RouterLink>
      <RouterLink to="/about" exact-active-class="active">Über uns</RouterLink>
      <RouterLink to="/kontakt" exact-active-class="active">Kontakt</RouterLink>
    </nav>
  </header>

  <main class="container">
    <!-- HIER: 'card' entfernen, damit kein Rahmen um den Hero liegt -->
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
      <a href="#/about">Über uns</a> ·
      <a href="#/kontakt">Kontakt</a> ·
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
