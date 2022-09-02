<script setup>
defineProps({
  destination:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="h-[50px] w-full mt-1 flex flex-col items-start justify-center"><RouterLink :to="destination" class="hover:text-[17px] hover:font-[600]">{{ content }}</RouterLink></div>
</template>
