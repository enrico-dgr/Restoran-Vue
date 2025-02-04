<template>
  <CardFadeInUp :class="classes">
    <FontAwesomeIcon :icon="props.icon" size="3x" class="mb-4" />
    <h5>{{ props.title }}</h5>
    <p>{{ props.description }}</p>
  </CardFadeInUp>
</template>

<script setup lang="ts">
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CardFadeInUp from '../CardFadeInUp/CardFadeInUp.vue'
import { computed } from 'vue'

export interface CardServiceProps {
  title: string
  description: string
  icon: IconDefinition
  class?: string
}

const props = defineProps<CardServiceProps>()

const classes = computed(() => {
  let value = 'is--service mt-4'

  if (props.class) {
    value += ` ${props.class}`
  }

  return value
})
</script>

<style lang="scss">
@use '@/styles/variables.scss' as v;
@use '@/styles/functions.scss' as f;

.card.is--service {
  > * {
    transition: 0.5s;
  }

  &:hover {
    > * {
      color: v.$white;
      background-color: v.$primary;
    }

    h5,
    svg {
      color: v.$white;
    }
  }

  h5 {
    transition-duration: 0.6s;
  }

  svg {
    color: v.$primary;
    transition-duration: 0.5s;
  }

  p {
    margin-bottom: f.pxToRem(16);
  }
}
</style>
