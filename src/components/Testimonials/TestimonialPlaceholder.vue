<template>
  <div class="testimonial is--placeholder">
    <FontAwesomeIcon :icon="faQuoteLeft" size="2x" />
    <p class="comment"></p>
    <p class="comment"></p>
    <div class="user">
      <div class="img">
        <img src="/src/assets/img/user.png" alt="reviewer" />
      </div>
      <div class="info">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
