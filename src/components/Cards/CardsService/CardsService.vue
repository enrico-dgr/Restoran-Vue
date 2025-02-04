<template>
  <SectionComponent class="cards-service">
    <div class="cards-service__header">
      <template v-if="showHeader">
        <h5 class="section-title before after">Our Services</h5>
        <h1 class="mb-4">Explore Our Services</h1>
      </template>
    </div>
    <div class="cards-service__content">
      <CardService
        v-for="(card, i) in cards"
        :key="`card-service_${card.title}_${i}`"
        :description="card.description"
        :icon="card.icon"
        :title="card.title"
      />
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import CardService, { type CardServiceProps } from './CardService.vue'
import SectionComponent from '@/components/Section/SectionComponent.vue'

defineProps<{
  cards: CardServiceProps[]
  showHeader?: boolean
}>()
</script>

<style lang="scss">
@use '@/styles/animations.scss' as *;
@use '@/styles/functions.scss' as f;

.cards-service {
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    opacity: 0;

    &.show {
      @extend .fadeInUp;
      opacity: 1;
    }

    // each card will have a different delay of 0.2s from first to last
    // e.g. 0.1s, 0.3s, 0.5s, 0.7s ...
    @include f.staggered-animation-delay(4);
  }
}

@media (min-width: 576px) {
  .cards-service {
    .card {
      width: 50%;
    }
  }
}

@media (min-width: 992px) {
  .cards-service {
    .card {
      width: 25%;
    }
  }
}
</style>
