<template>
	<section class="min-h-[60vh] flex items-center justify-center">
		<div class="text-center space-y-4">
			<p class="text-blue-400 text-6xl font-black">404</p>
			<h1 class="text-2xl md:text-3xl font-bold text-white">Page introuvable</h1>
			<p class="text-slate-300">La page que tu cherches n’existe pas (ou plus).</p>
			<RouterLink
				to="/"
				class="inline-flex mt-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 rounded-xl transition-colors"
			>
				Retour à l’accueil
			</RouterLink>
		</div>
	</section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
