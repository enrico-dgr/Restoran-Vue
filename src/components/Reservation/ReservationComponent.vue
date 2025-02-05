<template>
  <Section
    :class="`section-reservation px-0 ${visualizedContainer ? 'fadeInUp' : ''}`"
    containerClassName="px-0"
    ref="refContainer"
  >
    <div class="video">
      <button type="button" class="btn-play" @click="() => setShowModal(!showModal)">
        <span></span>
      </button>
    </div>
    <div class="form-container p-5">
      <div :class="visualizedForm ? 'fadeInUp' : ''" ref="refForm">
        <h5 class="section-title after text-primary">Reservation</h5>
        <h1 class="text-white mb-4">Book A Table Online</h1>
        <form>
          <div class="name">
            <input type="text" id="name" placeholder="Your Name" />
            <label htmlFor="name">Your Name</label>
          </div>
          <div class="email">
            <input type="email" id="email" placeholder="Your Email" />
            <label htmlFor="email">Your Email</label>
          </div>
          <div class="date">
            <Datepicker
              v-model="startDate"
              :enable-time-picker="true"
              :format="format"
              :text-input="true"
              :hide-input-icon="true"
              @open="() => setDateInputFocused(true)"
              @closed="dateInputFocused = false"
              placeholder="Date & Time"
              class="date"
              id="datetime"
            />
            <label :class="startDate || dateInputFocused ? 'in-use' : ''" for="datetime">
              Date &amp; Time
            </label>
          </div>
          <div class="number">
            <select id="select1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label htmlFor="select1">No Of People</label>
          </div>
          <div class="message">
            <textarea placeholder="Special Request" id="message"></textarea>
            <label htmlFor="message">Special Request</label>
          </div>
          <div class="confirm">
            <button class="btn btn-primary py-3" type="submit">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  </Section>
  <div :class="`reservation-modal ${showModal ? 'show' : ''}`">
    <div class="reservation-modal__dialog">
      <div class="header">
        <h5 class="title">Youtube Video</h5>
        <FontAwesomeIcon size="2x" :icon="faClose" @click="() => setShowModal(false)" />
      </div>
      <div class="body">
        <iframe
          class="embed-responsive-item"
          :src="showModal ? videoUrl : ''"
          allowFullScreen
          allowScriptAccess="always"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useVisualized from '@/composables/useVisualized'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, watch } from 'vue'

const videoUrl = 'https://www.youtube.com/embed/C3psWoyNzJ4?autoplay=1&modestbranding=1&showinfo=0'

const { target: refContainer, visualized: visualizedContainer } = useVisualized()
const { target: refForm, visualized: visualizedForm } = useVisualized()

const showModal = ref(false)
const setShowModal = (value: boolean) => {
  showModal.value = value
}

const startDate = ref<Date | null>(null)

const dateInputFocused = ref<boolean>(false)
const setDateInputFocused = (value: boolean) => {
  dateInputFocused.value = value
}

const format = (date: Date) => {
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
}

watch(showModal, (value) => {
  if (value) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})
</script>

<style lang="scss">
@use '../../styles/functions.scss' as f;
@use '../../styles/variables.scss' as v;
@use '../../styles/animations.scss' as *;
@use 'sass:math';

.section-reservation {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
  margin: 0;
  min-width: 100%;
  opacity: 0;

  .video {
    position: relative;
    min-height: 500px;
    height: auto;
    width: 100%;
    background: linear-gradient(rgba(15, 23, 43, 0.1), rgba(15, 23, 43, 0.1)), url(../img/video.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    .btn-play {
      position: absolute;
      z-index: 3;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      box-sizing: content-box;
      display: block;
      width: 32px;
      height: 44px;
      border-radius: 50%;
      border: none;
      outline: none;
      padding: 18px 20px 18px 28px;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        z-index: 0;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 100px;
        height: 100px;
        background: v.$primary;
        border-radius: 50%;
        animation: pulse-border 1500ms ease-out infinite;
      }

      &::after {
        content: '';
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 100px;
        height: 100px;
        background: v.$primary;
        border-radius: 50%;
        transition: all 200ms;
      }

      span {
        display: block;
        position: relative;
        z-index: 3;
        width: 0;
        height: 0;
        border-left: 32px solid v.$dark;
        border-top: 22px solid transparent;
        border-bottom: 22px solid transparent;
      }
    }
  }

  .form-container {
    background-color: v.$dark;

    > :first-child {
      opacity: 0;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: f.pxToRem(16);

    > * {
      position: relative;
      width: 100%;
    }

    .date {
      > * {
        width: 100%;
      }
    }

    .message,
    .confirm {
      width: 100%;
    }

    .react-datepicker-popper {
      width: max-content;
    }

    input,
    select,
    textarea {
      height: f.pxToRem(58);
      width: 100%;
      padding: f.pxToRem(26) f.pxToRem(12) f.pxToRem(10);

      &::placeholder {
        // display: none;
        visibility: hidden;
      }
    }

    textarea {
      resize: vertical;
    }

    label.in-use {
      transform: scale(0.85) translate(4px, calc(-8px));
      opacity: 0.8;
    }

    input,
    select,
    textarea {
      &:not(:placeholder-shown) ~ label,
      &:focus ~ label {
        @extend .in-use;
      }
    }

    select {
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 16px 12px;
      appearance: none;
    }

    .message {
      textarea {
        height: f.pxToRem(100);
      }
    }

    label {
      padding: f.pxToRem(16) f.pxToRem(12);
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      pointer-events: none;

      transform-origin: 0 0;
      transition:
        opacity 0.1s ease-in-out,
        transform 0.1s ease-in-out;
    }

    select + label,
    label.active,
    label.has-data {
      $percentageScaling: 0.85;
      $translation: #{math.div(1 - $percentageScaling, 4) * 100} + '%';

      transform: scale($percentageScaling) translate($translation, calc(-#{$translation} - 7.25%));
      opacity: 0.8;
    }
  }
}

.reservation-modal {
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  opacity: 0;

  &.show {
    display: block;
    @extend .fadeIn;
    opacity: 1;
  }

  &__dialog {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    margin: 60px auto 0 auto;
    position: relative;
    background-color: v.$white;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: f.pxToRem(16);
    border-bottom: 1px solid v.$separatorsGray;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);

    .title {
      margin: 0;
    }
  }

  .body {
    width: 100%;
    padding: 0;

    iframe {
      min-height: max-content;
      width: 100%;
      border: 0;
      aspect-ratio: 16/9;
    }
  }
}

@media (min-width: 768px) {
  .section-reservation {
    > * {
      width: 50% !important;
      min-width: unset;
    }

    form {
      > * {
        width: calc(50% - f.pxToRem(8));
      }
    }
  }
}
</style>
