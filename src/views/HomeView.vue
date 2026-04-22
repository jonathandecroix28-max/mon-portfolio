<template>
  <section class="grid items-center gap-10 lg:grid-cols-2 py-6 md:py-10">
    <div class="space-y-6">
      <span class="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        Portfolio personnel
      </span>

      <div class="space-y-4">
        <h1 class="text-4xl md:text-6xl font-black text-white leading-tight">
          Bonjour, je suis
          <span class="text-blue-400">Jonathan</span>
        </h1>

        <p class="max-w-2xl text-lg leading-8 text-slate-300">
          Je touche à la fois au front-end et au back-end pour concevoir des applications
          modernes, claires et responsives. Ici, tu peux découvrir mes projets, mon univers
          et me contacter facilement pour échanger autour d’une idée ou d’une collaboration.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <RouterLink
          to="/projects"
          class="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
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

      <div class="grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
          <p class="text-sm text-slate-400">Statut</p>
          <p class="mt-1 font-semibold text-white">Disponible</p>
        </div>

        <div class="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
          <p class="text-sm text-slate-400">Spécialité</p>
          <p class="mt-1 font-semibold text-white">Vue.js</p>
        </div>

        <div class="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
          <p class="text-sm text-slate-400">Type de site</p>
          <p class="mt-1 font-semibold text-white">Portfolio</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center lg:justify-end">
      <div class="relative">
        <div class="absolute -inset-4 rounded-full bg-blue-500/20 blur-2xl"></div>

        <div class="relative rounded-3xl border border-slate-700 bg-slate-900/80 p-4 shadow-2xl">
          <img
            v-if="!photoError"
            :src="profileImage"
            alt="Photo de profil"
            class="h-80 w-80 md:h-96 md:w-96 rounded-2xl object-cover"
            @error="photoError = true"
          />

          <div
            v-else
            class="h-80 w-80 md:h-96 md:w-96 rounded-2xl flex flex-col items-center justify-center bg-slate-800 text-center p-8"
          >
            <div class="h-28 w-28 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-black text-white shadow-lg">
              JD
            </div>
            <p class="mt-6 text-white font-semibold">Ajoute ta photo de profil</p>
            <p class="mt-2 text-sm text-slate-400">
              Dépose une image nommée <span class="text-slate-200">photo-profil.jpg</span> dans le dossier public.
            </p>
          </div>

          <div class="mt-4 flex items-center justify-between gap-4 px-2 pb-1">
            <div>
              <p class="font-semibold text-white">Jonathan Decroix</p>
              <p class="text-sm text-slate-400">Développeur full-stack</p>
            </div>
            <span class="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">
              Ouvert aux projets
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import profileImage from '../assets/img/jojo.jpg'

const photoError = ref(false)
</script>