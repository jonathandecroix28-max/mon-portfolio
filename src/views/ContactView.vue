<template>
  <form 
    method="POST" 
    action="https://formspree.io/f/xnjblnjo" 
    class="border border-slate-700 p-8 rounded-2xl shadow-2xl max-w-lg mx-auto bg-slate-900/80 backdrop-blur-sm text-slate-100"
  >
    <h2 class="text-3xl font-bold mb-8 text-blue-400">Contactez-moi</h2>
    
    <div class="mb-6">
      <label class="block mb-2 font-medium text-slate-300" for="name">Nom</label>
      <input 
        class="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Votre nom"
        required 
      />
    </div>

    <div class="mb-6">
      <label class="block mb-2 font-medium text-slate-300" for="email">Email</label>
      <input 
        class="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" 
        type="email" 
        id="email" 
        name="email" 
        placeholder="votre@email.com"
        required 
      />
    </div>

    <div class="mb-8">
      <label class="block mb-2 font-medium text-slate-300" for="message">Message</label>
      <textarea 
        class="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" 
        id="message" 
        name="message" 
        rows="5" 
        placeholder="Comment puis-je vous aider ?"
        required
      ></textarea>
    </div>

    <button 
      class="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all active:scale-95 flex items-center justify-center gap-2" 
      type="submit"
    >
      <span>Envoyer le message</span>
      <span>🚀</span>
    </button>
  </form>
</template>