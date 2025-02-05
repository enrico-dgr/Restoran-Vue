<template>
  <div class="container not-found py-5">
    <div class="p-4 bg-light">
      <h2 class="text-primary mb-4">404 - Page Not Found</h2>
      <p class="mb-3">The page you're looking for doesn't exist.</p>
      <RouterLink :to="routes.home.absolutePath" class="btn btn-primary"> Return Home </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import routes from '@/router/routes'
</script>

<style lang="scss">
.not-found {
  text-align: center;

  > div {
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
