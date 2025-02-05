<template>
  <h1 :class="props.class ?? ''">{{ counterRef }}</h1>
</template>

<script setup lang="ts">
import { animate } from 'motion'
import { onMounted, ref } from 'vue'

interface Props {
  value: number
  class?: string
}

const props = defineProps<Props>()

const counterRef = ref(0)

onMounted(() => {
  animate(0, props.value, {
    type: 'spring',
    duration: 5000,
    visualDuration: 5000,
    bounce: -10,
    damping: 65,
    mass: 2,
    onUpdate: (value) => {
      counterRef.value = Math.round(value)
    },
  })
})
</script>

<style lang="scss"></style>
