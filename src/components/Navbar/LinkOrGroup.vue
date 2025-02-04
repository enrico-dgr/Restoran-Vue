<script setup lang="ts">
import routes from '@/routes'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

export type NavbarLink =
  | {
      group: false
      name: keyof typeof routes
      links?: undefined
    }
  | {
      group: true
      groupName: string
      links: NavbarLink[]
    }

const props = defineProps<{
  link: NavbarLink
  layer?: number
  class?: string
}>()

const show = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const setShow = (value: boolean) => {
  show.value = value
}

const clickOutDetect = (e: TouchEvent) => {
  const touch = e.changedTouches[0]
  const element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement | null

  let tappedOut = false

  if (element && dropdownRef.value) {
    tappedOut = !dropdownRef.value.contains(element)
  }

  setShow(tappedOut ? false : show.value)
}

onMounted(() => {
  document.addEventListener('touchend', clickOutDetect)
})

onUnmounted(() => {
  document.removeEventListener('touchend', clickOutDetect)
})

const getIsActive = (linkOrGroup: NavbarLink) => {
  let active = false

  if (linkOrGroup.group) {
    active = linkOrGroup.links.findIndex(getIsActive) !== -1
  } else {
    active = location.pathname === routes[linkOrGroup.name].absolutePath
  }

  return active
}

const classModifiers = computed(() => {
  const active = getIsActive(props.link)

  return (props.layer === 0 ? 'navbar-item' : '') + (active ? ' active' : '')
})
</script>

<template>
  <RouterLink
    v-if="!props.link.group"
    :to="routes[props.link.name].absolutePath"
    :class="['navbar-link text-white', classModifiers]"
  >
    {{ routes[props.link.name].publicName }}
  </RouterLink>
  <div
    v-else
    :class="['dropdown', classModifiers, show ? 'show' : '']"
    @click="() => setShow(!show)"
    ref="dropdownRef"
  >
    <span class="navbar-link text-white dropdown-toggle"> {{ props.link.groupName }} </span>
    <div class="dropdown-menu py-2 px-0 m-0">
      <LinkOrGroup
        v-for="subLink in link.links"
        :key="subLink.group ? subLink.groupName : subLink.name"
        :link="subLink"
        :layer="(layer || 0) + 1"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
