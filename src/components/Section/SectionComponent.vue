<template>
  <div ref="outerDivRef" :class="classOuterDiv">
    <div :class="classDiv">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type Props = {
  class?: string
  containerClass?: string
}

const props = defineProps<Props>()

const outerDivRef = ref<HTMLElement | null>(null)

const classOuterDiv = computed(() => {
  let classes = 'container-xxl py-5'

  if (props.containerClass) {
    classes += ' ' + props.containerClass
  }

  return classes
})

const classDiv = computed(() => {
  let classes = 'container'

  if (props.class) {
    classes += ' ' + props.class
  }

  return classes
})
</script>

<style lang="scss"></style>
