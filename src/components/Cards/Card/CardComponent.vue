<template>
  <div :class="classes" ref="props.cardRef">
    <div class="card__content"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Ref } from 'vue'

export interface CardProps {
  class?: string
  cardRef?: Ref<HTMLDivElement | null, HTMLDivElement | null>
}

const props = defineProps<CardProps>()

const classes = computed(() => {
  let value = 'card'

  if (props.class) {
    value += ` ${props.class}`
  }

  return value
})
</script>

<style lang="scss">
@use '@/styles/variables.scss' as v;
@use '@/styles/functions.scss' as f;

.card {
  background-color: transparent;
  transition-duration: 0.5s;
  padding: 0 f.pxToRem(12);

  &__content {
    background-color: v.$white;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    padding: f.pxToRem(40) f.pxToRem(24) f.pxToRem(24);
  }
}
</style>
