<template>
  <HeaderComponent />
  <FoodMenu :numberOfElements="8" />
  <FooterComponent />
</template>

<script setup lang="ts">
import FoodMenu from '@/components/FoodMenu/FoodMenu.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
</script>
