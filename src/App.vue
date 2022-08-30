<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- from base.css => default document font-size: 18px -->
  <!-- Left Side Header -->
  <header class="h-[100vh] w-[12%] flex flex-col items-center justify-start ml-4">
    <!-- Title -->
    <RouterLink to="/" class="h-auto w-[80%] flex flex-col items-start justify-center  mt-24 text-5xl font-sans font-bold italic">Jodag</RouterLink>
    <!-- Header Nav -->
    <div class="h-auto w-[80%] flex flex-col items-start justify-center mt-12">
      <div class="h-[50px] w-full mt-1 flex flex-col items-start justify-center"><RouterLink to="/Marca" class="hover:text-[17px] hover:font-[600]">Marca</RouterLink></div>
      <div class="h-[50px] w-full mt-1 flex flex-col items-start justify-center"><RouterLink to="/Colecoes" class="hover:text-[17px] hover:font-[600]">Coleções</RouterLink></div>
      <div class="h-[50px] w-full mt-1 flex flex-col items-start justify-center"><RouterLink to="/Lojas" class="hover:text-[17px] hover:font-[600]">Lojas</RouterLink></div>
      <div class="h-[50px] w-full mt-1 flex flex-col items-start justify-center"><RouterLink to="/Noticias" class="hover:text-[17px] hover:font-[600]">Notícias</RouterLink></div>
      <div class="h-[50px] w-full mt-1 flex flex-col items-start justify-center"><RouterLink to="/Servicos" class="hover:text-[17px] hover:font-[600]">Serviços</RouterLink></div>
      <div class="h-[50px] w-full mt-1 flex flex-col items-start justify-center"><RouterLink to="/Contato" class="hover:text-[17px] hover:font-[600]">Contato</RouterLink></div>
    </div>
    <div class="h-auto w-[80%] mt-16 flex flex-col items-start justify-center">
      <a href="https://www.facebook.com" target="_blank" class="h-[auto] w-full flex flex-row items-center justify-start">
        <font-awesome-icon class="text-3xl" icon="fa-brands fa-facebook" />
        <span class="ml-4">Facebook</span>
      </a>
      <a href="https://www.instagram.com" target="_blank" class="h-[auto] w-full flex flex-row items-center justify-start mt-3">
        <font-awesome-icon class="text-3xl" icon="fa-brands fa-square-instagram" />
        <span class="ml-4">Instagram</span>
      </a>
    </div>
  </header>

  <RouterView />
  <!-- Acessibility e Top Container -->
  <div class="h-[80px] w-[140px] absolute border-4 bottom-0 right-0"></div>
</template>




<style scoped>

</style>
