<script setup>
import Footer from '../components/Footer.vue';


</script>

<template>
  <!-- Right Side Content -->
  <div class="h-[auto] flex-1 flex flex-col items-center justify-start mr-14">
    <!-- Banner -->
    <div class="h-[600px] w-[90%] mt-24 bg-[url('./assets/Home/Banner3.jpg')] bg-top bg-no-repeat bg-[length:1400px_710px]"></div>
    <!-- Colecao Title -->
    <span class="h-[200px] w-[90%] flex flex-col items-center justify-center text-3xl font-['Lato'] font-bold">
      JODAG COLEÇÃO PRIMAVERA / VERÃO 2022
    </span>
    <!-- Main Navigation Container -->
    <div class="h-[700px] w-[90%] flex flex-col items-center">
      <!-- Coluna Lojas e Colecoes -->
      <div class="h-[50%] w-full flex flex-row justify-between">
        <RouterLink to="Lojas" class="h-full w-[48%] relative flex justify-center items-center group">
          <img class="h-full w-full" src="../assets/Home/loja1.jpg">
          <div class="h-[96%] w-[97%] bg-black bg-opacity-40 absolute flex flex-col justify-center items-center">
            <div class="h-[22%] w-[35%] font-sans font-bold text-4xl text-white text-center tracking-wide">VER LOJAS</div>
            <div class="h-[13%] w-[23%] mb-12 border-2 border-white text-white flex justify-center items-center font-['Miltonian']">Clique para Ver
              <div class="h-full w-full bg-black bg-opacity-20 absolute"></div></div>
          </div>
          <div class="h-full w-full bg-white absolute bg-opacity-0 group-hover:bg-opacity-10"></div>
        </RouterLink>
        <RouterLink to="Colecoes" class="h-full w-[48%] relative flex justify-center items-center group">
          <img class="h-full w-full" src="../assets/Home/main2.jpg">
          <div class="h-[96%] w-[97%] bg-black bg-opacity-40 absolute flex flex-col justify-center items-center">
            <div class="h-[22%] w-[30%] font-sans font-bold text-4xl text-white text-center tracking-wide">COLEÇÕES</div>
            <div class="h-[13%] w-[23%] mb-12 border-2 border-white text-white flex justify-center items-center font-['Miltonian']">Clique para Ver
              <div class="h-full w-full bg-black bg-opacity-20 absolute"></div></div>
          </div>
          <div class="h-full w-full bg-white absolute bg-opacity-0 group-hover:bg-opacity-10"></div>
        </RouterLink>
      </div>
      <!-- Coluna Marca e Compre Online -->
      <div class="h-[50%] w-full flex flex-row justify-between mt-10">
        <RouterLink to="Lojas" class="h-full w-[48%] relative flex justify-center items-center group">
          <img class="h-full w-full" src="../assets/Home/brand.jpg">
          <div class="h-[96%] w-[97%] bg-black bg-opacity-40 absolute flex flex-col justify-center items-center">
            <div class="h-[22%] w-[45%] font-sans font-bold text-4xl text-white text-center tracking-wide">NOSSA MARCA</div>
            <div class="h-[13%] w-[23%] mb-12 border-2 border-white text-white flex justify-center items-center font-['Miltonian']">Clique para Ver
              <div class="h-full w-full bg-black bg-opacity-20 absolute"></div></div>
          </div>
          <div class="h-full w-full bg-white absolute bg-opacity-0 group-hover:bg-opacity-10"></div>
        </RouterLink>
        <RouterLink to="Colecoes" class="h-full w-[48%] relative flex justify-center items-center group">
          <img class="h-full w-full" src="../assets/Home/buyonline1.jpg">
          <div class="h-[96%] w-[97%] bg-black bg-opacity-40 absolute flex flex-col justify-center items-center">
            <div class="h-[22%] w-[50%] font-sans font-bold text-4xl text-white text-center tracking-wide">COMPRE ONLINE</div>
            <div class="h-[13%] w-[23%] mb-12 border-2 border-white text-white flex justify-center items-center font-['Miltonian']">Clique para Ver
              <div class="h-full w-full bg-black bg-opacity-20 absolute"></div></div>
          </div>
          <div class="h-full w-full bg-white absolute bg-opacity-0 group-hover:bg-opacity-10"></div>
        </RouterLink>
      </div>
    </div>
    <!-- Footer -->
    <Footer/>
  </div>

</template>
