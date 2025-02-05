<script setup lang="ts">
import { RouterLink } from 'vue-router'
import routes from '../../../router/routes'

interface Props {
  section: string
  isLink: boolean
  correspondingRoute?: typeof routes.home
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    v-if="correspondingRoute && !isLink"
    :to="correspondingRoute.absolutePath"
    class="header-breadcrumb__item text-primary"
  >
    {{ section }}
  </RouterLink>
  <span
    v-else
    :class="['header-breadcrumb__item', isLink ? 'text-white' : 'text-primary'].join(' ')"
  >
    {{ section }}
  </span>
</template>
