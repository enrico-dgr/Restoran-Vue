<template>
  <SectionComponent :class="`food-menu ${visualized ? 'show fadeInUp' : ''}`" ref="target">
    <div class="food-menu__description">
      <h5 class="section-title before after">Food Menu</h5>
      <h1 class="mb-5">Most Popular Items</h1>
    </div>
    <div class="food-menu__sections">
      <ul class="meal-types">
        <FoodMenuMealType
          v-for="({ category, description, icon }, i) in mealTypes"
          :key="`meal-type_${category}_${i}`"
          :active="activeCategory === category"
          :name="category"
          :description="description"
          :icon="icon"
          @click="() => setActiveCategory(category)"
        />
      </ul>
      <div class="meals">
        <template v-if="mealsState === 'ready'">
          <ul
            v-for="({ meals, category }, i) in mealsLists"
            :key="`meals-list_${category}_${i}`"
            :class="`meals-list ${activeCategory === category ? 'active' : ''}`"
          >
            <FoodMenuMeal
              v-for="(mealProps, i) in meals.slice(0, props.numberOfElements)"
              :key="`meal-${mealProps.name}-${i}`"
              v-bind="mealProps"
            />
          </ul>
        </template>
        <ul v-else class="meals-list active">
          <FoodMenuMealPlaceholder
            v-for="(_, i) in Array.from({ length: props.numberOfElements })"
            :key="`meal-placeholder-${i}`"
          />
        </ul>
      </div>
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import useVisualized from '@/composables/useVisualized'
import SectionComponent from '../Section/SectionComponent.vue'
import { faCoffee, faHamburger, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { onMounted, ref } from 'vue'
import FoodMenuMealType from './FoodMenuMealType.vue'
import FoodMenuMeal, { type MealInfo } from './FoodMenuMeal.vue'
import FoodMenuMealPlaceholder from './FoodMenuMealPlaceholder.vue'
import menu from '@/services/menu'
import type { MenuItem } from '@/services/menu/types'

interface Props {
  numberOfElements: number
}

const props = defineProps<Props>()

const { target, visualized } = useVisualized()

interface MealsList {
  category: string
  description: string
  meals: MealInfo[]
}

const mealTypes = [
  {
    icon: faCoffee,
    category: 'breakfast',
    description: 'popular',
  },
  {
    icon: faHamburger,
    category: 'launch',
    description: 'special',
  },
  {
    icon: faUtensils,
    category: 'dinner',
    description: 'lovely',
  },
]

const activeCategory = ref(mealTypes[0].category)
const setActiveCategory = (category: string) => {
  activeCategory.value = category
}

type MealsState = 'idle' | 'loading' | 'ready'
const mealsState = ref<MealsState>('idle')
const setMealsState = (state: MealsState) => {
  mealsState.value = state
}
const mealsLists = ref<MealsList[]>([])
const setMealsLists = (lists: MealsList[]) => {
  mealsLists.value = lists
}

const addOrUpdateList = (meals: MenuItem[], mealType: (typeof mealTypes)[0]) => {
  const newList = {
    category: mealType.category,
    description: mealType.description,
    meals: meals.map((meal) => ({
      description: meal.toppings.join(', '),
      name: meal.name.replace(' ', '-'),
      price: meal.price,
      imgSrc: meal.image,
    })),
  }

  setMealsLists([...mealsLists.value.filter((list) => list.category !== newList.category), newList])
}

onMounted(() => {
  setMealsState('loading')

  mealTypes.forEach((mealType) =>
    menu.get
      .byCategory({
        category: mealType.category,
        mockDelay: 2000,
      })
      .then((meals) => {
        addOrUpdateList(meals, mealType)

        if (mealsLists.value.length > 0) {
          mealsState.value = 'ready'
        }
      })
      .catch(console.error),
  )
})
</script>

<style lang="scss">
@use '@/styles/functions.scss' as f;
@use '@/styles/variables.scss' as v;
@use 'sass:math' as m;

$pxGap: 24;

.food-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;

  &.show {
    opacity: 1;
  }

  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__sections {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .meal-types {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0 0 f.pxToRem(24) 0;

    border-bottom: 1px solid v.$separatorsGray;
  }

  .meals {
    width: 100%;

    &-list {
      display: none;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      column-gap: f.pxToRem($pxGap);
      opacity: 0;

      animation-duration: 0.35s;
      animation-timing-function: ease-in;

      &.active {
        display: flex;
        animation-name: op;
        opacity: 1;
      }
    }
  }
}

@keyframes op {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .food-menu {
    .meals-list {
      li {
        flex: 0 0 auto;
        width: calc(50% - f.pxToRem(m.div($pxGap, 2)));
      }
    }
  }
}
</style>
