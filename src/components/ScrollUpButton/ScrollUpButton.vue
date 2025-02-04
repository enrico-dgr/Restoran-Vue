<template>
  <button :class="'btn btn-primary scroll-up-btn' + (isScrolled ? ' show' : '')" @click="scrollUp">
    <FontAwesomeIcon :icon="faArrowUpLong" />
  </button>
</template>

<script setup lang="ts">
import useScrollThreshold from '@/composables/useScrollThreshold'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isScrolled = useScrollThreshold(315)

const scrollUp = () => {
  const initialTop = document.documentElement.scrollTop
  document.documentElement.scrollTop -= 5

  const step = () => {
    const currentPosition = document.documentElement.scrollTop
    const progress = 1.2 - currentPosition / initialTop

    const delta = 20 * (Math.sin(progress * Math.PI - Math.PI / 2) + 1)
    document.documentElement.scrollTop -= delta

    if (document.documentElement.scrollTop > 0) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}
</script>

<style lang="scss">
.scroll-up-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.1s ease-out,
    visibility 0.5s;

  height: 48px;
  width: 48px;

  position: fixed;
  bottom: 45px;
  right: 45px;
  z-index: 100;

  &.show {
    visibility: visible;
    opacity: 1;
  }
}
</style>
