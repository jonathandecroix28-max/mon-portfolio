<template>
  <section class="space-y-6">
    <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight">
      Bienvenue sur mon portfolio
    </h1>

    <p class="text-slate-300 max-w-2xl">
      Je présente ici mes projets, mes compétences et mes réalisations.
      N’hésite pas à parcourir les différentes sections.
    </p>

    <div class="flex flex-wrap gap-3">
      <RouterLink
        to="/projects"
        class="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 rounded-xl transition-colors"
      >
        Voir mes projets
      </RouterLink>

      <RouterLink
        to="/contact"
        class="border border-slate-600 hover:border-slate-400 text-slate-200 font-medium px-5 py-3 rounded-xl transition-colors"
      >
        Me contacter
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>