import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export default function useVisualized() {
  const target = ref<HTMLElement | null>(null)
  const visualized = ref(false)

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      visualized.value = isIntersecting
    },
    {
      threshold: 0.2,
    },
  )

  return {
    target,
    visualized,
  }
}
