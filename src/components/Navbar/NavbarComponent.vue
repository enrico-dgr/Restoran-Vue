<script setup lang="ts">
import useScrollThreshold from '@/composables/useScrollThreshold'
import routes from '@/routes'
import { computed, ref } from 'vue'
import LinkOrGroup, { type NavbarLink } from './LinkOrGroup.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faUtensils } from '@fortawesome/free-solid-svg-icons'

const isScrolled = useScrollThreshold(40)
const showLinksContainer = ref(false)
const setShowLinksContainer = (value: boolean) => {
  showLinksContainer.value = value
}

const toggleLinks = () => {
  setShowLinksContainer(!showLinksContainer.value)
}

const linksContainerClass = computed(() => {
  let classes = 'navbar-links__container'

  if (showLinksContainer.value) {
    classes += ' show'
  }

  return classes
})

const links = computed<NavbarLink[]>(() => [
  {
    group: false,
    name: 'home',
  },
  {
    group: false,
    name: 'about',
  },
  {
    group: false,
    name: 'service',
  },
  {
    group: false,
    name: 'menu',
  },
  {
    group: true,
    groupName: 'Pages',
    links: [
      {
        group: false,
        name: 'booking',
      },
      {
        group: false,
        name: 'team',
      },
      {
        group: false,
        name: 'testimonial',
      },
    ],
  },
  {
    group: false,
    name: 'contact',
  },
])
</script>

<template>
  <nav :class="['navbar px-4 px-lg-5 py-3 py-lg-0' + (isScrolled ? ' fixed' : '')]">
    <RouterLink class="navbar-brand" :to="routes.home.absolutePath">
      <h1 class="text-primary m-0">
        <FontAwesomeIcon :icon="faUtensils" class="mr-3" />
        Restoran
      </h1>
    </RouterLink>
    <button class="navbar-toggler" type="button" @click="toggleLinks">
      <FontAwesomeIcon :icon="faBars" />
    </button>
    <div :class="linksContainerClass" id="navbar-collapse">
      <div class="navbar-links pr-4">
        <LinkOrGroup
          v-for="linkOrGroup in links"
          :key="linkOrGroup.group ? linkOrGroup.groupName : linkOrGroup.name"
          :link="linkOrGroup"
        />
      </div>
      <a href="" class="btn btn-primary py-2 px-4"> Book A Table </a>
    </div>
  </nav>
</template>

<style lang="scss">
@use '@/styles/functions.scss' as f;
@use '@/styles/variables.scss' as v;

.navbar {
  background-color: v.$dark;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: f.pxToRem(8);
  padding-bottom: f.pxToRem(8);

  &-toggler {
    color: rgba(white, 0.55);
    background-color: transparent;
    border: 1px solid rgba(white, 0.1);
    border-radius: 2px;
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    transition: box-shadow 0.15s ease-in-out;
  }

  &-links {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;

    &__container {
      flex-grow: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;

      transition: height 0.35s ease;
      overflow: hidden;

      &:not(.show) {
        height: 0;

        animation-fill-mode: both;
        animation-name: no-b-m;
        animation-timing-function: ease;
        animation-duration: 0.35s;
      }

      &.show {
        border-top: 1px solid rgba(v.$white, 0.1);
        margin-top: f.pxToRem(15);

        animation-fill-mode: both;
        animation-name: height;
        animation-timing-function: ease;
        animation-duration: 0.35s;
      }

      @keyframes no-b-m {
        0% {
          border-top: 1px solid rgba(v.$white, 0.1);
          margin-top: f.pxToRem(15);
          height: 297px;
        }

        100% {
          border-top: none;
          margin-top: 0;
          height: 0;
        }
      }

      @keyframes height {
        0% {
          height: 0;
        }

        99% {
          height: 297px;
        }

        100% {
          height: fit-content;
        }
      }
    }
  }

  &-link {
    cursor: pointer;
    display: block;
    font-size: 15px;
    font-weight: 500;
    font-family: 'Heebo';

    padding: f.pxToRem(10) 0;

    transition: 0.5s;

    &.active {
      color: v.$primary;
    }
  }

  &-item {
    width: 100%;
  }

  .dropdown {
    position: relative;

    &.active {
      > .navbar-link {
        color: v.$primary;
      }

      .navbar-link.active {
        background-color: v.$primary;
        color: v.$white;
      }
    }

    &.show .dropdown-menu {
      display: flex;
    }

    &-toggle {
      &::after {
        display: inline-block;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
      }
    }

    &-menu {
      display: none;
      height: fit-content;
      width: 100%;
      min-width: f.pxToRem(160);
      flex-direction: column;
      background-color: v.$white;

      .navbar-link {
        font-size: f.pxToRem(16);
        color: #212529;
        padding: f.pxToRem(4) f.pxToRem(16);
        font-weight: 400;

        &:hover,
        &:focus {
          color: #1e2125;
          background-color: #e9ecef;
        }
      }
    }
  }
}

.navbar-item.navbar-link,
.navbar-item > .navbar-link {
  text-transform: uppercase;
}

@media (min-width: 992px) {
  .navbar {
    background-color: unset;
    flex-wrap: nowrap;
    justify-content: flex-start;

    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    background: transparent;

    &.fixed {
      position: fixed;
      top: 0;
      background-color: v.$dark;

      .navbar-link {
        padding: f.pxToRem(20) 0;
      }

      .dropdown-menu .navbar-link {
        padding: f.pxToRem(4) f.pxToRem(16);
      }
    }

    &-toggler {
      display: none;
    }

    &-links {
      flex-direction: row;
      align-items: center;
      gap: 25px;
      margin-left: auto;
      width: unset;

      &__container {
        display: flex !important;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: unset;
        overflow: visible;

        &:not(.show) {
          height: unset;
          min-height: fit-content;
          animation-name: none;
        }

        &.show {
          height: 297px;
          border-top: unset;
          margin-top: unset;
        }
      }
    }

    &-link {
      padding: f.pxToRem(35) 0;
    }

    &-item {
      width: unset;
    }

    .dropdown {
      &.show:not(:hover) .dropdown-menu {
        display: none !important;
      }

      &:hover .dropdown-menu {
        display: flex;
      }

      .dropdown-menu {
        position: absolute;
        left: -20px;
      }
    }
  }
}
</style>
