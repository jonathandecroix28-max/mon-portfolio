<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 flex">
    <header class="shrink-0">
      <Navbar />
    </header>

    <div class="flex-1 min-h-screen flex flex-col">
      <main class="flex-1 p-8 transition-all duration-300">
        <div class="max-w-5xl mx-auto w-full">
          <RouterView />
        </div>
      </main>

      <div class="px-8 pb-8">
        <div class="max-w-5xl mx-auto w-full">
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
</template>