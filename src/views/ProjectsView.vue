<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Intégration Web - Klivio',
    description: "Intégration d'un site statique à partre d'une maquette Figma, en utilisant Html et CSS au Pixel Perfect. Puis recréation du même site en utilisant Tailwind CSS en rendant le tout responsive.",
    technologies: ['Html', 'CSS', 'Figma', 'Tailwind CSS'],
    link: 'https://jonathandecroix28-max.github.io/site-statique/'
  },
  {
    id: 2,
    title: 'Génerateur de CV avec DomPDF',
    description: "Une application de gestion de tâches simple et efficace, permettant aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes.",
    technologies: ['Html', 'Bootstrap', 'JavaScript', 'PHP'],
    link: 'https://cv-generator-7ybc.onrender.com/'
  },
  {
    id: 3,
    title: 'Back-office My_Cinema',
    description: "Un back-office de gestion de cinéma permettant d'ajouter, de modifier et de supprimer des films, des séances et des réservations. L'application utilise une architecture MVC avec PHP et MySQL.",
    technologies: ['Html', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    link: 'https://github.com/tonyngophd/task-manager'
  },
  {
    id: 4,
    title: 'ConnectinV1 - Laravel',
    description: "Un mini réseau social développé avec Laravel, permettant aux utilisateurs de créer un compte, de publier des messages, de suivre d'autres utilisateurs et d'interagir avec les publications.",
    technologies: ['Html', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL', 'Laravel', "Vue.js"],
    link: 'https://github.com/tonyngophd/task-manager'
  },
    {
     id: 5,
     title: 'ConnectinV2 - Spring Boot',
     description: "Une refonte du mini réseau social ConnectinV1, à parir d'un frontend fourni, il faut utiliser Spring Boot pour créer une API RESTful qui gère les utilisateurs, les publications et les interactions, tout en assurant la sécurité et la performance de l'application.",
     technologies: ['Html', 'Tailwind CSS', 'JavaScript', 'Java', 'MySQL', 'Spring Boot'],
     link: '' 
    }
])
</script>

<template>
  <section class="space-y-8">
    <div>
      <h1 class="text-3xl md:text-4xl font-bold text-blue-400">Mes projets</h1>
      <p class="mt-2 text-slate-300">
        Cette page est prête pour ajouter tes projets au fur et à mesure.
      </p>
    </div>

    <div v-if="projects.length" class="grid gap-6 md:grid-cols-2">
      <article
        v-for="project in projects"
        :key="project.id"
        class="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg"
      >
        <h2 class="text-xl font-semibold text-white">{{ project.title }}</h2>
        <p class="mt-3 text-slate-300">{{ project.description }}</p>

        <ul class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="tech in project.technologies"
            :key="tech"
            class="rounded-full bg-blue-500/15 text-blue-300 px-3 py-1 text-sm"
          >
            {{ tech }}
          </li>
        </ul>

        <a
          :href="project.link"
          class="inline-flex items-center mt-5 hover:text-blue-300 transition-colors justify-center w-full bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 rounded-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le projet
        </a>
      </article>
    </div>

    <div v-else class="rounded-2xl border border-dashed border-slate-600 p-8 text-center text-slate-300">
      Aucun projet pour le moment.
    </div>
  </section>
</template>
