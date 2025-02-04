import routes from '@/routes'
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default function useTitle() {
  const { path } = useRoute()
  const title = computed(() => {
    const route = Object.values(routes).find((o) => o.absolutePath === path)
    return route?.headerTitle || ''
  })

  useHead({
    title,
    titleTemplate(title) {
      return `Restoran - ${title}`
    },
  })
}
