<template>
  <footer class="mt-20 border-t border-slate-800 bg-slate-900/50 p-8">
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      
      <div class="text-left">
        <p class="text-slate-100 font-bold text-lg"> {{ "Decroix Jonathan" }} <span class="text-blue-500">.</span></p>
        <p class="text-sm text-slate-500 mt-1">
          &copy; {{ "2026 Tous droits réservés." }}
        </p>
      </div>

      <div class="flex items-center gap-4">
        <a href="https://github.com/jonathandecroix28-max" target="_blank" class="social-link">
          <Github :size="20" />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-decroix-8534a7397" target="_blank" class="social-link">
          <Linkedin :size="20" />
        </a>
        <a href="mailto:jonathandecroix28@gmail.com" class="social-link">
          <Mail :size="20" />
        </a>
      </div>

      <div class="flex items-center gap-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
        {{ "Disponible pour de nouveaux projets - N'hésitez pas à me contacter !" }}
      </div>

    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next';
</script>

<style scoped>
@reference "tailwindcss";

.social-link {
  @apply p-3 bg-slate-800 text-slate-400 rounded-xl border border-slate-700 
         transition-all duration-300 hover:bg-blue-600 hover:text-white 
         hover:-translate-y-1 shadow-lg;
}
</style>