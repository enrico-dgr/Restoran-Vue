<template>
  <SectionComponent :class="`testimonials ${visualized ? 'fadeInUp' : ''}`" ref="sectionRef">
    <div class="testimonials__header">
      <h5 class="section-title before after">Testimonial</h5>
      <h1 class="mb-5">Our Clients Say!!!</h1>
    </div>
    <swiper
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
      :centered-slides="true"
      :loop="true"
      :space-between="24"
      :speed="800"
      :slides-per-view="1"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }"
      class="testimonials__content"
      @slideChange="(swiper) => setActiveIndex(swiper.realIndex)"
    >
      <template v-if="reviewsState === 'ready'">
        <swiper-slide
          v-for="(testimonial, i) in testimonials"
          :key="`testimonial_${testimonial.name}_${i}`"
        >
          <TestimonialComponent v-bind="testimonial" :class="activeIndex === i ? 'active' : ''" />
        </swiper-slide>
      </template>
      <template v-else>
        <swiper-slide
          v-for="(_, i) in Array.from({ length: 4 })"
          :key="`testimonial-placeholder_${i}`"
        >
          <TestimonialPlaceholder />
        </swiper-slide>
      </template>
    </swiper>
  </SectionComponent>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import TestimonialComponent, { type TestimonialData } from './TestimonialComponent.vue'
import { ref, watch } from 'vue'
import SectionComponent from '../Section/SectionComponent.vue'
import useVisualized from '@/composables/useVisualized'
import reviews from '@/services/reviews'
import TestimonialPlaceholder from './TestimonialPlaceholder.vue'

const testimonials = ref<TestimonialData[]>([])
const setTestimonials = (value: TestimonialData[]) => {
  testimonials.value = value
}

const activeIndex = ref(0)
const setActiveIndex = (value: number) => {
  activeIndex.value = value
}

const { target: sectionRef, visualized } = useVisualized()

type ReviewsState = 'idle' | 'loading' | 'ready'
const reviewsState = ref<ReviewsState>('idle')
const setReviewsState = (value: ReviewsState) => {
  reviewsState.value = value
}

watch(visualized, (value) => {
  if (reviewsState.value === 'idle' && value) {
    setReviewsState('loading')

    reviews.get
      .all()
      .then((clientReviews) => {
        const testimonialsFromReviews = clientReviews.map<TestimonialData>((review) => ({
          comment: review.text,
          description: review.customer_job,
          img: '/src/assets/img/user.png',
          name: review.customer_name,
        }))

        setTestimonials(testimonialsFromReviews)

        if (testimonials.value.length > 0) {
          setReviewsState('ready')
        }
      })
      .catch(console.error)
  }
})
</script>

<style lang="scss">
@use '../../styles/animations.scss' as *;
@use '../../styles/variables.scss' as v;
@use '../../styles/functions.scss' as f;
@use 'swiper/scss';
@use 'swiper/scss/navigation';
@use 'swiper/scss/pagination';

.testimonials {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;

  margin: 0 auto;
  padding: 0;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__content {
    width: 100%;
  }

  .swiper {
    &-wrapper {
      height: fit-content;
    }

    &-pagination {
      position: relative;
      top: unset;
      margin-top: f.pxToRem(24);

      &-bullet {
        height: 15px;
        width: 15px;
        transition: 0.5s;

        background-color: v.$white;
        border: 1px solid #2e2e2e;

        &-active {
          background-color: v.$primary;
          border-color: v.$primary;
        }
      }
    }
  }
}
</style>
