<template>
  <div class="sign-up mx-auto">
    <input class="py-3 pl-4 pr-5" type="text" placeholder="Your email" />
    <button type="button" class="btn btn-primary py-2 position-absolute mt-2 mr-2">SignUp</button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use '@/styles/variables.scss' as v;

.footer .sign-up {
  position: relative;
  width: 100%;
  max-width: 400px;

  input {
    border: 1px solid v.$primary;
    width: 100%;
  }

  .btn {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
