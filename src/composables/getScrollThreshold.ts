import { ref, onMounted, onUnmounted } from 'vue'

export default function getScrollThreshold(threshold: number, axis: 'x' | 'y' = 'y') {
  const isScrolled = ref(false)

  const handleScroll = () => {
    const scrollPosition = axis === 'y' ? window.scrollY : window.scrollX
    isScrolled.value = scrollPosition > threshold
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrolled,
  }
}
