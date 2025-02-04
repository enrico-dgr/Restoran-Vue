<template>
  <Section class="cards-team">
    <div class="cards-team__header">
      <h5 class="section-title before after">Team Members</h5>
      <h1 class="mb-4">Our Master Chefs</h1>
    </div>
    <div class="cards-team__content">
      <CardTeam
        v-for="(card, i) in cards.slice(0, twoRows ? 8 : 4)"
        :key="`card-team_${card.name}_${i}`"
        v-bind="card"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import CardTeam, { type CardTeamProps } from './CardTeam.vue'
import Section from '@/components/Section/SectionComponent.vue'

const cards_mock: CardTeamProps[] = [
  {
    name: 'John Doe',
    description: 'Master Chef',
    img: '@/assets/img/team-1.png',
    fb: 'https://facebook.com',
    x: 'https://twitter.com',
    ig: 'https://instagram.com',
  },
  {
    name: 'Dohn Joe',
    description: 'Master Chef',
    img: '@/assets/img/team-2.png',
    fb: 'https://facebook.com',
    x: 'https://twitter.com',
    ig: 'https://instagram.com',
  },
  {
    name: 'John Snow',
    description: 'Master Chef',
    img: '@/assets/img/team-3.png',
    fb: 'https://facebook.com',
    x: 'https://twitter.com',
    ig: 'https://instagram.com',
  },
  {
    name: 'Son Goku',
    description: 'Master Chef',
    img: '@/assets/img/team-4.png',
    fb: 'https://facebook.com',
    x: 'https://twitter.com',
    ig: 'https://instagram.com',
  },
]

// Duplicate cards to make it two rows
cards_mock.push(...cards_mock)

defineProps<{
  cards?: CardTeamProps[]
  twoRows?: boolean
}>()
</script>

<style lang="scss">
@use '@/styles/animations.scss' as *;
@use '@/styles/functions.scss' as f;

.cards-team {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

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
    justify-content: center;
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

@media (min-width: 768px) {
  .cards-team {
    .card {
      width: 50%;
    }
  }
}

@media (min-width: 992px) {
  .cards-team {
    .card {
      width: 25%;
    }
  }
}
</style>
