<template>
  <SectionComponent
    class="footer__content"
    :containerClass="`footer pt-5 mt-5 ${visualizedContainer ? 'fadeIn' : ''}`"
    ref="refContainer"
  >
    <div class="container infos py-5 px-0">
      <div class="infos__subsection">
        <h4 class="section-title after">Company</h4>
        <a
          v-for="(item, index) in [
            'About Us',
            'Contact Us',
            'Reservation',
            'Privacy Policy',
            'Terms & Condition',
          ]"
          href=""
          :key="`footer_link_${item}_${index}`"
        >
          <FontAwesomeIcon :icon="faAngleRight" :fontWeight="900" size="sm" />
          {{ item }}
        </a>
      </div>
      <div class="infos__subsection">
        <h4 class="section-title after">Contact</h4>
        <p class="mb-2">
          <FontAwesomeIcon :icon="faMapMarkerAlt" :fontWeight="900" />
          123 Street, New York, USA
        </p>
        <p class="mb-2">
          <FontAwesomeIcon :icon="faPhoneAlt" :fontWeight="900" />
          +012 345 67890
        </p>
        <p class="mb-2">
          <FontAwesomeIcon :icon="faEnvelope" :fontWeight="900" />
          info@example.com
        </p>
        <div class="socials">
          <a href="">
            <FontAwesomeIcon :icon="faXTwitter" />
          </a>
          <a href="">
            <FontAwesomeIcon :icon="faFacebookF" />
          </a>
          <a href="">
            <FontAwesomeIcon :icon="faYoutube" />
          </a>
          <a href="">
            <FontAwesomeIcon :icon="faLinkedinIn" />
          </a>
        </div>
      </div>
      <div class="infos__subsection">
        <h4 class="section-title after">Opening</h4>
        <h5 class="mb-2">Monday - Saturday</h5>
        <p class="mb-3">09AM - 09PM</p>
        <h5 class="mb-2">Sunday</h5>
        <p class="mb-3">10AM - 08PM</p>
      </div>
      <div class="infos__subsection">
        <h4 class="section-title after">Newsletter</h4>
        <p class="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <SignUpBtn />
      </div>
    </div>
    <div class="container copyright">
      <div class="text">
        © <a href="#">Your Site Name</a>, All Right Reserved. Designed By
        <a href="https://htmlcodex.com">HTML Codex</a>
        <br />
        <br />
        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
        Distributed By
        <a href="https://themewagon.com" target="_blank"> ThemeWagon </a>
      </div>
      <div class="menu">
        <RouterLink :to="routes.home.absolutePath">Home</RouterLink>
        <RouterLink :to="routes.home.absolutePath">Cookies</RouterLink>
        <RouterLink :to="routes.home.absolutePath">Help</RouterLink>
        <RouterLink :to="routes.home.absolutePath">FQAs</RouterLink>
      </div>
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import {
  faAngleRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import SectionComponent from '../Section/SectionComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import routes from '@/router/routes'
import useVisualized from '@/composables/useVisualized'
import SignUpBtn from './SignUpBtn.vue'

const { target: refContainer, visualized: visualizedContainer } = useVisualized()
</script>

<style lang="scss">
@use '@/styles/functions.scss' as f;
@use '@/styles/variables.scss' as v;
@use '@/styles/animations.scss' as *;

.footer {
  background-color: v.$dark;
  opacity: 0;

  &.py-5 {
    padding-bottom: 0 !important;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: f.pxToRem(40);

    .section-title {
      color: v.$primary;
      margin-bottom: f.pxToRem(24);
    }

    &__subsection {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: v.$light;
      width: 100%;

      a,
      p,
      h5 {
        color: v.$light;
      }

      a {
        font-size: 15px;
        font-family: 'Nunito', sans-serif;
        margin-bottom: f.pxToRem(5);
        transition: 0.3s;

        svg {
          margin-right: f.pxToRem(8);
        }
      }

      p {
        svg {
          margin-right: f.pxToRem(16);
        }
      }

      h5 {
        font-weight: 400;
      }

      .socials {
        display: flex;
        gap: 5px;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 35px;
          width: 35px;
          border: 1px solid v.$white;
          border-radius: 50%;
          transition: 0.3s;

          &:hover {
            background-color: v.$white;
            color: v.$primary;
          }

          svg {
            margin: 0;
          }
        }
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    color: v.$light;
    border-top: 1px solid rgba(256, 256, 256, 0.1);
    padding: f.pxToRem(25) 0;
    font-size: 15px;

    > * {
      width: 100%;
    }

    .text {
      text-align: center;
      margin-bottom: f.pxToRem(16);

      a {
        border-bottom: 1px solid v.$separatorsGray;
        color: v.$light;
      }
    }

    .menu {
      display: flex;
      align-items: flex-start;
      justify-content: center;

      a {
        color: v.$light;

        &:not(:last-child) {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          margin-right: 15px;
          padding-right: 15px;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .footer {
    .infos {
      &__subsection {
        width: calc(50% - f.pxToRem(40));
      }
    }

    .copyright {
      > * {
        width: 50%;
      }

      .text {
        text-align: start;
        margin-bottom: 0;
      }

      .menu {
        justify-content: end;
      }
    }
  }
}

@media (min-width: 992px) {
  .footer {
    .infos {
      &__subsection {
        width: calc(25% - f.pxToRem(40));
      }
    }
  }
}
</style>
