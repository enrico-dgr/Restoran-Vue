<template>
  <SectionComponent class="section-contact-us">
    <div
      :class="`section-contact-us__header ${visualizedHeader ? 'fadeInUp' : ''}`"
      ref="refHeader"
    >
      <h5 class="section-title before after text-primary">Contact Us</h5>
      <h1 class="mb-5">Contact For Any Query</h1>
    </div>
    <div class="section-contact-us__content">
      <div class="contacts">
        <div class="contact">
          <h5 class="section-title after text-primary">Booking</h5>
          <p><FontAwesomeIcon :icon="faEnvelopeOpen" /> book@example.com</p>
        </div>
        <div class="contact">
          <h5 class="section-title after text-primary">General</h5>
          <p><FontAwesomeIcon :icon="faEnvelopeOpen" /> info@example.com</p>
        </div>
        <div class="contact">
          <h5 class="section-title after text-primary">Technical</h5>
          <p><FontAwesomeIcon :icon="faEnvelopeOpen" /> tech@example.com</p>
        </div>
      </div>
      <div class="send-message mt-4">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            allowFullScreen="{false}"
            aria-hidden="false"
          ></iframe>
        </div>
        <div class="form-container">
          <div :class="visualizedForm ? 'fadeInUp' : ''" ref="refForm">
            <form>
              <div class="name">
                <input type="text" id="name" placeholder="Your Name" />
                <label htmlFor="name">Your Name</label>
              </div>
              <div class="email">
                <input type="email" id="email" placeholder="Your Email" />
                <label htmlFor="email">Your Email</label>
              </div>
              <div class="subject">
                <input type="text" id="subject" placeholder="Subject" />
                <label htmlFor="subject">Subject</label>
              </div>
              <div class="message">
                <textarea placeholder="Message" id="message"></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <div class="confirm">
                <button class="btn btn-primary py-3" type="submit">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SectionComponent from '../Section/SectionComponent.vue'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import useVisualized from '@/composables/useVisualized'

const { target: refHeader, visualized: visualizedHeader } = useVisualized()
const { target: refForm, visualized: visualizedForm } = useVisualized()
</script>

<style lang="scss">
@use '@/styles/functions.scss' as f;
@use '@/styles/variables.scss' as v;
@use '@/styles/animations.scss' as *;
@use 'sass:math';

.section-contact-us {
  display: flex;
  flex-direction: column;
  position: relative;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    > * {
      width: 100%;
    }

    .contacts {
      display: flex;
      flex-wrap: wrap;
      gap: f.pxToRem(24);

      .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: calc(100% - f.pxToRem(24));

        p {
          margin-bottom: f.pxToRem(16);
        }

        svg {
          color: v.$primary;
        }
      }
    }

    .send-message {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      gap: f.pxToRem(24);

      > * {
        width: 100%;
      }

      .map {
        iframe {
          border: 0;
          height: 100%;
          width: 100%;

          min-height: 350px;
        }
      }
    }
  }

  .form-container {
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

    .subject,
    .message,
    .confirm {
      width: 100%;

      .btn {
        width: 100%;
      }
    }

    input,
    select,
    textarea {
      height: f.pxToRem(58);
      width: 100%;
      padding: f.pxToRem(26) f.pxToRem(12) f.pxToRem(10);

      border: 1px solid #ced4da;
      border-radius: 2px;
      transition:
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;

      &::placeholder {
        visibility: hidden;
      }

      &:focus {
        color: #666565;
        background-color: #fff;
        border-color: #ffd08b;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(254, 161, 22, 0.25);
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
        height: f.pxToRem(150);
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

@media (min-width: 768px) {
  .section-contact-us {
    &__content {
      padding: 0 f.pxToRem(12);

      .contacts {
        .contact {
          width: calc(33% - f.pxToRem(24));
        }
      }

      .send-message {
        > * {
          width: calc(50% - f.pxToRem(24));
          min-width: unset;
        }
      }
    }

    form {
      > * {
        width: calc(50% - f.pxToRem(8));
      }
    }
  }
}
</style>
