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
  <CardsTeam />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import CardsService from '@/components/Cards/CardsService/CardsService.vue'
import CardsTeam from '@/components/Cards/CardsTeam/CardsTeam.vue'

import { faCartPlus, faHeadset, faUserTie, faUtensils } from '@fortawesome/free-solid-svg-icons'

const defaultDescription = 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
</script>
