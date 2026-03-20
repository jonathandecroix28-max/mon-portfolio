<script setup>
import { onMounted, ref, computed, watch  } from 'vue';

</script>

<template>
  <div class="home">
    <h1>Bienvenue sur mon portfolio</h1>
    <p>Découvrez mes projets, compétences et expériences professionnelles.</p>
    <button @click="scrollToProjects">Voir mes projets</button>
  </div>
</template>