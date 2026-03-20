<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 flex">
    
    <header>
      <Navbar />
    </header>

    <main class="flex-1 p-8 transition-all duration-300">
      <div class="max-w-5xl mx-auto">
        <RouterView />
      </div>
    </main>
   <footer class="max-w-5xl mx-auto">
   <FooterComponent />
   </footer>
  </div> 
 
</template>


