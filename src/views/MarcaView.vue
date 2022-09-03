



<template>
  <div class="h-[1800px] flex-1 flex flex-col items-center justify-start mr-14 border-4 text-xl">
    <!-- Top Nav Bar-->
    <div class="h-[30px] w-[90%] flex flex-row items-center mt-20 border-4">
      <div class="m-1 w-[55px]"><RouterLink to="/" class="hover:font-[600] hover:underline">Home</RouterLink></div>
      <span class="m-1">></span>
      <div class="m-1 w-[55px] cursor-pointer"><div class="hover:font-[600] hover:underline">{{ (this.$route.path).split('/').join('')}}</div></div>
    </div>
    <!-- Main Container -->
    <div class="h-[1800px] w-[90%] flex flex-col mt-4 border-4">
      <!-- Marca -->
      <div class="h-[60%] w-full flex flex-row border-4 border-black">
        <img src="../assets/Marca/Model1.jpg" class="h-full w-[43%]">
        <!-- Marca Right Side -->
        <div class="flex-1 flex flex-col">
          <span class="h-[60px] w-full font-[900] text-4xl font-sans italic mt-8 ml-[2vw] border-4">JODAG GIRLS</span>
          <span class="h-[50px] w-full font-[700] text-xl font-sans mt-4 ml-[2vw] border-4">Wear contemporâneo, estilo conciso e um toque de elegância</span>
          <div class="h-[120px] w-full font-sans ml-[2vw] text-[17px] text-black"><span class="text-[17px] font-bold">Roupa Casual</span> para mulheres inteligentes e independentes.<br>
            Uma líder que sabe se expressar com confiança.<br>
            A Jodag oferece a última tendência por um preco acessível,<br>
            com os mais diversos estilos, ditando sua própria linha de mix-matches.
          </div>
          <div class="h-[auto] w-[170px] text-center p-2 font-[700] text-[18px] font-['Lato'.sans-serif] text-white bg-black ml-[2vw] mt-12">PÚBLICO ALVO</div>
          <div class="h-[90px] w-full font-sans ml-[2vw] text-[17px] text-black mt-4">Senso de moda e vontade de se reinventar.<br>
            <span class="text-[16px] font-bold">Mulheres de 20 a 45 </span>anos que gostam de expressar sua individualidade através da moda.
          </div>
        </div>
      </div>
      <!-- CEO/CTO Container -->
      <div class="flex-1 w-full flex flex-col items-start justify-start mt-28">
        <div class="h-[400px] w-full border-4">
          <img src="../assets/Marca/CEO.jpg" class="h-full w-[43%]">
        </div>
      </div>
    </div>
  </div>
</template>

