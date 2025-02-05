<template>
  <li :class="`meal-type ${props.active ? 'active' : ''}`" @click="{ onClick }">
    <FontAwesomeIcon :icon="props.icon" class="text-primary" size="2x" />
    <div class="meal-type__description">
      <small>{{ props.description }}</small>
      <h6>{{ props.name }}</h6>
    </div>
  </li>
</template>

<script setup lang="ts">
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

interface Props {
  active?: boolean
  icon: IconDefinition
  description: string
  name: string
  onClick: () => void
}

const props = defineProps<Props>()
</script>

<style lang="scss">
@use '@/styles/functions.scss' as f;
@use '@/styles/variables.scss' as v;

.meal-type {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 f.pxToRem(16);
  padding-bottom: f.pxToRem(16);
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &.active {
    border-bottom: 2px solid v.$primary;
  }

  &__description {
    * {
      margin: 0;
      text-transform: capitalize;
    }
  }
}
</style>
