<template>
  <HeaderComponent />
  <CardsService
    :cards="[
      {
        description: defaultDescription,
        icon: faUserTie,
        title: 'Master Chefs',
      },
      {
        description: defaultDescription,
        icon: faUtensils,
        title: 'Quality Food',
      },
      {
        description: defaultDescription,
        icon: faCartPlus,
        title: 'Online Order',
      },
      {
        description: defaultDescription,
        icon: faHeadset,
        title: '24/7 Service',
      },
    ]"
    :showHeader="false"
  />
  <AboutUs />
  <FoodMenu :numberOfElements="8" />
  <ReservationComponent />
  <CardsTeam />
  <TestimonialsComponent />
  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import CardsService from '@/components/Cards/CardsService/CardsService.vue'
import CardsTeam from '@/components/Cards/CardsTeam/CardsTeam.vue'

import { faCartPlus, faHeadset, faUserTie, faUtensils } from '@fortawesome/free-solid-svg-icons'
import AboutUs from '@/components/AboutUs/AboutUs.vue'
import FoodMenu from '@/components/FoodMenu/FoodMenu.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import ReservationComponent from '@/components/Reservation/ReservationComponent.vue'
import TestimonialsComponent from '@/components/Testimonials/TestimonialsComponent.vue'

const defaultDescription = 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
</script>
