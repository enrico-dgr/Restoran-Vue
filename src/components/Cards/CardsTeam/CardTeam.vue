<template>
  <CardFadeInUp :class="classes">
    <div class="img">
      <img :src="props.img" :alt="props.name" />
    </div>
    <h5>{{ props.name }}</h5>
    <p>{{ props.description }}</p>
    <div class="socials">
      <a :href="props.fb">
        <FontAwesomeIcon :icon="faFacebookF" />
      </a>
      <a :href="props.x">
        <FontAwesomeIcon :icon="faXTwitter" />
      </a>
      <a :href="props.ig">
        <FontAwesomeIcon :icon="faInstagram" />
      </a>
    </div>
  </CardFadeInUp>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CardFadeInUp from '../CardFadeInUp/CardFadeInUp.vue'
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export interface CardTeamProps {
  name: string
  description: string
  img: string
  fb: string
  x: string
  ig: string
  class?: string
}

const props = defineProps<CardTeamProps>()

const classes = computed(() => {
  let value = 'is--team mt-4'

  if (props.class) {
    value += ` ${props.class}`
  }

  return value
})
</script>

<style lang="scss">
@use '@/styles/variables.scss' as v;
@use '@/styles/functions.scss' as f;

.card.is--team {
  &:hover {
    .card__content {
      height: 100%;

      img {
        transform: scale(1.1);
      }
    }
  }

  .card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: f.pxToRem(24) f.pxToRem(24) 0;

    transition: 0.5s;
    height: calc(100% - 38px);
    overflow: hidden;

    .img {
      // display: flex;
      // align-items: center;
      // justify-content: center;
      min-height: max-content;
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      margin-bottom: f.pxToRem(20);
      overflow: hidden;

      img {
        width: 100%;
        aspect-ratio: 1;
        transition: 0.5s;
      }
    }
  }

  h5 {
    transition-duration: 0.6s;
    margin-bottom: 0;
  }

  p {
    margin-bottom: f.pxToRem(16);
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 8px;

    a {
      background-color: v.$primary;
      height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid v.$primary;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;

      svg {
        color: v.$white;
      }
    }
  }
}
</style>
