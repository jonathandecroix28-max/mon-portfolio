<template>
  <nav 
    :class="[isCollapsed ? 'w-20' : 'w-64']" 
    class="fixed top-0 left-0 h-screen bg-slate-950 text-slate-300 border-r border-slate-800 shadow-2xl flex flex-col z-50 transition-all duration-300 ease-in-out"
  >
    <div class="p-4 flex items-center justify-between mb-8 h-20">
      <div to="/" v-if="!isCollapsed" class="flex items-center gap-3 group overflow-hidden whitespace-nowrap">
        <div class="min-w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
          <span class="text-xl font-black">J</span>
        </div>
        <span class="text-lg font-bold tracking-tight text-white ml-6">Portfolio</span>
    </div>

      <button 
        @click="toggleSidebar" 
        class="p-2 hover:bg-slate-800 rounded-lg transition-colors mx-auto text-slate-400 hover:text-white"
      >
        <ChevronLeft v-if="!isCollapsed" :size="20" />
        <ChevronRight v-else :size="24" />
      </button>
    </div>

    <div class="flex flex-col gap-2 px-3 grow">
      <router-link to="/" class="nav-link group" title="Accueil">
        <Home :size="22" class="group-hover:text-blue-400" />
        <span v-if="!isCollapsed" class="ml-4 font-medium overflow-hidden whitespace-nowrap">Accueil</span>
      </router-link>

      <router-link to="/projects" class="nav-link group" title="Projets">
        <Briefcase :size="22" class="group-hover:text-blue-400" />
        <span v-if="!isCollapsed" class="ml-4 font-medium overflow-hidden whitespace-nowrap">Projets</span>
      </router-link>

      <router-link to="/about" class="nav-link group" title="À propos">
        <User :size="22" class="group-hover:text-blue-400" />
        <span v-if="!isCollapsed" class="ml-4 font-medium overflow-hidden whitespace-nowrap">À propos</span>
      </router-link>

      <router-link to="/contact" class="nav-link group" title="Contact">
        <Mail :size="22" class="group-hover:text-blue-400" />
        <span v-if="!isCollapsed" class="ml-4 font-medium overflow-hidden whitespace-nowrap">Contact</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
// Import des icônes Lucide
import { 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-vue-next';

const isCollapsed = ref(false);

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<style scoped>
/* Cette ligne dit à Tailwind d'importer les définitions sans générer de CSS en double */
@reference "tailwindcss";

.nav-link {
  @apply flex items-center p-3 rounded-xl transition-all duration-200 
         hover:bg-slate-800 hover:text-white;
}

/* Style lien actif */
.router-link-active {
  @apply bg-blue-600/10 text-blue-400 border-r-4 border-blue-600 rounded-r-none;
}
</style>
