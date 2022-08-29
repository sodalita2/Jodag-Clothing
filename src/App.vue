<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- from base.css => default document font-size: 18px -->
  <!-- Left Side Header -->
  <header class="h-[100vh] w-[14%] border-4 flex flex-col items-center justify-start">
    <RouterLink to="/" class="h-auto w-[80%] flex flex-col items-start justify-center border-4 mt-24 text-5xl font-sans font-bold italic">Jodag</RouterLink>
    <!-- Header Nav -->
    <div class="h-auto w-[80%] flex flex-col items-start justify-center border-4 mt-12">
      <div class="h-[50px] w-full border-4 mt-1 flex flex-col items-start justify-center"><RouterLink to="/Brand" class="hover:text-[17px] hover:font-[600]">Brand</RouterLink></div>
      <div class="h-[50px] w-full border-4 mt-1 flex flex-col items-start justify-center"><RouterLink to="/Collection" class="hover:text-[17px] hover:font-[600]">Collection</RouterLink></div>
      <div class="h-[50px] w-full border-4 mt-1 flex flex-col items-start justify-center"><RouterLink to="/Stores" class="hover:text-[17px] hover:font-[600]">Stores</RouterLink></div>
      <div class="h-[50px] w-full border-4 mt-1 flex flex-col items-start justify-center"><RouterLink to="/News" class="hover:text-[17px] hover:font-[600]">News</RouterLink></div>
      <div class="h-[50px] w-full border-4 mt-1 flex flex-col items-start justify-center"><RouterLink to="/Services" class="hover:text-[17px] hover:font-[600]">Services</RouterLink></div>
      <div class="h-[50px] w-full border-4 mt-1 flex flex-col items-start justify-center"><RouterLink to="/Contact" class="hover:text-[17px] hover:font-[600]">Contact</RouterLink></div>
    </div>
    <div class="h-auto w-[80%] border-4 mt-16 flex flex-col items-start justify-center">
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
</template>




<style scoped>

</style>
