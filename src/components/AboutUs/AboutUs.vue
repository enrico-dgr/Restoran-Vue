<template>
  <SectionComponent class="section-about-us">
    <div :class="`photo-group ${photosVisualized ? 'show' : ''}`" ref="refPhotos">
      <img src="/src/assets/img/restaurant-1.png" alt="Restaurant view" />
      <img src="/src/assets/img/restaurant-2.png" alt="Restaurant view" />
      <img src="/src/assets/img/food-1.png" alt="Dish" />
      <img src="/src/assets/img/food-2.png" alt="Dish" />
    </div>
    <div class="section-about-us__description">
      <h5 class="section-title after">About Us</h5>
      <h1 class="mb-4">
        Welcome to{{ ' ' }}
        <FontAwesomeIcon :icon="faUtensils" class="text-primary mr-2" />
        Restoran
      </h1>
      <p class="mb-4">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos
        erat ipsum et lorem et sit, sed stet lorem sit.
      </p>
      <p class="mb-4">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
      </p>
      <div class="numbers mb-4" ref="refNumbers">
        <div class="number">
          <CounterComponent v-if="numbersVisualized" class="text-5 text-primary mb-0" :value="15" />
          <h1 v-else class="text-5 text-primary mb-0">0</h1>
          <div class="pl-4">
            <p>Years of</p>
            <h6 class="text-uppercase mb-0">Experience</h6>
          </div>
        </div>
        <div class="number">
          <CounterComponent v-if="numbersVisualized" class="text-5 text-primary mb-0" :value="50" />
          <h1 v-else class="text-5 text-primary mb-0">0</h1>
          <div class="pl-4">
            <p class="mb-0">Popular</p>
            <h6 class="text-uppercase mb-0">Master Chefs</h6>
          </div>
        </div>
      </div>
      <a class="btn btn-primary py-3 px-5 mt-2" href=""> Read More </a>
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import useVisualized from '@/composables/useVisualized'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import SectionComponent from '../Section/SectionComponent.vue'
import CounterComponent from './CounterComponent.vue'

const { target: refPhotos, visualized: photosVisualized } = useVisualized()
const { target: refNumbers, visualized: numbersVisualized } = useVisualized()
</script>

<style lang="scss">
@use '@/styles/functions.scss' as f;
@use '@/styles/variables.scss' as v;
@use '@/styles/animations.scss' as *;

.section-about-us {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 48px;

  .photo-group {
    display: flex;
    flex-wrap: wrap;
    gap: f.pxToRem(16);

    &.show {
      img {
        @extend .zoomIn;
        opacity: 1;
      }
    }

    img {
      opacity: 0;
      width: calc(50% - f.pxToRem(8));

      @include f.staggered-animation-delay(4);

      &:nth-child(2) {
        width: calc(37.5% - f.pxToRem(6));
        margin-top: auto;
      }

      &:nth-child(3) {
        width: calc(37.5% - f.pxToRem(6));
        margin-left: auto;
        margin-bottom: auto;
      }
    }
  }

  .numbers {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    .number {
      width: 100%;
      min-width: 50%;
      display: flex;
      align-items: center;
      border-left: 5px solid v.$primary;
      padding: 0 f.pxToRem(16);
      flex: 1;

      h6 {
        text-transform: uppercase;
        font-size: f.pxToRem(16);
      }
    }
  }
}

@media (min-width: 576px) {
  .section-about-us {
    .numbers {
      .number {
        width: calc(50% - f.pxToRem(24));
        min-width: unset;
      }
    }
  }
}

@media (min-width: 992px) {
  .section-about-us {
    > * {
      width: calc(50% - f.pxToRem(24));
    }
  }
}
</style>
