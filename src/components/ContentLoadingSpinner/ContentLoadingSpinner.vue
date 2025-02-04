<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const contentLoaded = ref(false)

const setContentLoadedToTrue = () => {
  contentLoaded.value = true
}

onMounted(() => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setContentLoadedToTrue)
  } else {
    setContentLoadedToTrue()
  }
})

onUnmounted(() => {
  document.removeEventListener('DOMContentLoaded', setContentLoadedToTrue)
})

const spinnerWrapClass = computed(() => {
  let classes = 'bg-white w-100 vh-100'

  if (!contentLoaded.value) {
    classes += ' show'
  }

  return classes
})
</script>

<template>
  <div id="spinner" :class="spinnerWrapClass">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/functions.scss' as f;

#spinner {
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.5s ease-out,
    visibility 0s linear 0.5s;
  z-index: 99999;

  // Centering the whole block
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;

  // Centering the spinner
  display: flex;
  align-items: center;
  justify-content: center;

  &.show {
    transition:
      opacity 0.5s ease-out,
      visibility 0s linear 0s;
    visibility: visible;
    opacity: 1;
  }

  .spinner-border {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border: f.pxToRem(4) solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: 0.75s linear infinite full-rotation;
  }
}
</style>
