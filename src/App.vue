<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderLI from './components/HeaderLI.vue'
import Accessibility from './components/Accessibility.vue'


</script>


<template>
  <!-- from base.css => default document font-size: 18px -->
  <!-- document font color default: #2c3e50 -->
  <!-- Left Side Header -->
  <header class="h-[100vh] w-[12%] flex flex-col items-center justify-start ml-4">
    <!-- Title -->
    <RouterLink to="/" class="h-auto w-[80%] flex flex-col items-start justify-center  mt-24 text-5xl font-sans font-bold italic">Jodag</RouterLink>
    <!-- Header Nav -->
    <div class="h-auto w-[80%] flex flex-col items-start justify-center mt-12">
      <HeaderLI destination="Marca" content="Marca"/>
      <HeaderLI destination="Colecoes" content="Coleções"/>
      <HeaderLI destination="Lojas" content="Lojas"/>
      <HeaderLI destination="Noticias" content="Notícias"/>
      <HeaderLI destination="Servicos" content="Serviços"/>
      <HeaderLI destination="Contato" content="Contato"/>
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
  <Accessibility/>
</template>

