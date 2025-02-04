<template>
  <Card v-bind="props" ref="target" :class="classes">
    <slot></slot>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card, { type CardProps } from '../Card/CardComponent.vue'
import useVisualized from '@/composables/useVisualized'

const props = defineProps<Omit<CardProps, 'cardRef'>>()
const { target, visualized } = useVisualized()

const classes = computed(() => `${props.class} is--fade-in-up ${visualized ? 'show' : ''}`)
</script>

<style lang="scss">
@use '@/styles/animations.scss' as *;
@use '@/styles/functions.scss' as f;

.card.is--fade-in-up {
  opacity: 0;

  &.show {
    @extend .fadeInUp;
    opacity: 1;
  }
}
</style>
