<script setup lang="ts">
import HeaderBreadcrumb from './HeaderBreadcrumb/HeaderBreadcrumb.vue'
import HeaderBookATable from './HeaderBookATable/HeaderBookATable.vue'
import NavbarComponent from '../Navbar/NavbarComponent.vue'

interface Props {
  pagination?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="header container-xxl p-0">
    <NavbarComponent />
    <div class="header__content container-xxl py-5 bg-dark mb-5">
      <HeaderBreadcrumb v-if="pagination" />
      <HeaderBookATable v-else />
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: relative;

  &__content {
    background: linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)),
      url(@/assets/img/bg-header.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
