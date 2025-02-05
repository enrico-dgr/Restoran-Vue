<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import routes from '../../../router/routes'
import HeaderBreadcrumbItem from './HeaderBreadcrumbItem.vue'

const route = useRoute()

const activeRoute = computed(() => {
  const activeKey = Object.keys(routes).find(
    (key) => routes[key as keyof typeof routes].absolutePath === route.path,
  )

  if (activeKey) {
    return routes[activeKey as keyof typeof routes]
  }

  return undefined
})

const activeRoutePath = computed(() => {
  const routePath = activeRoute.value?.publicPath ?? ''
  return routePath.split('/').filter(Boolean)
})

function getCorrespondingRoute(section: string) {
  return Object.entries(routes).find(([key]) =>
    routes[key as keyof typeof routes].absolutePath.includes(section),
  )?.[1]
}
</script>

<template>
  <div class="header-breadcrumb__container my-5 pt-5 pb-4">
    <h1 class="text-3 text-white mb-3 slideInDown">
      {{ activeRoute?.headerTitle }}
    </h1>
    <nav class="header-breadcrumb">
      <template v-for="(section, index) in activeRoutePath" :key="'breadcrumb-' + index">
        <HeaderBreadcrumbItem
          :section="section"
          :is-link="index === activeRoutePath.length - 1"
          :corresponding-route="getCorrespondingRoute(section)"
        />
      </template>
    </nav>
  </div>
</template>

<style lang="scss">
@use '../../../styles/functions.scss' as f;

.header-breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: f.pxToRem(16);
  list-style: none;
  text-transform: uppercase;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__item {
    &:not(:first-child) {
      padding-left: f.pxToRem(8);

      &::before {
        color: rgba(255, 255, 255, 0.5);
        content: '/';
        float: left;
        padding-right: f.pxToRem(8);
      }
    }
  }
}
</style>
