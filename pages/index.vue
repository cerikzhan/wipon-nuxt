<template>
  <div>
    <app-header />
    <hero-section
      title="Защитите свой бизнес от <span class='text-primary'>проверок и штрафов</span>"
      btn-type="primary"
      :image-name="require('~/assets/images/Silverphone.png')"
    >
      <template #helper-text>
        <p class="hero-text">
          Wipon поможет вести законную торговлю алкогольной и табачной продукции
        </p>
      </template>
      <template #card-success>
        <div class="card card-success">
          <div class="card-image">
            <img src="~/assets/images/succes-mark.svg" alt="succes mark">
          </div>
          <div class="card-text">
            <p class="card-title">
              Capital Black 0.75 л
            </p>
            <p class="card-text">
              Код присутствует в базе
            </p>
          </div>
        </div>
      </template>
      <template #card-danger>
        <div class="card card-danger">
          <div class="card-image">
            <img src="~/assets/images/danger-mark.svg" alt="danger mark">
          </div>
          <div class="card-text">
            <p class="card-title">
              Chivas 1.5 л
            </p>
            <p class="card-text">
              Код отсутствует в базе
            </p>
          </div>
        </div>
      </template>
    </hero-section>
    <why-section />
    <app-section />
    <media-section />
    <faq-section />
    <feedback-section />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import HeroSection from '~/components/HeroSection'
import WhySection from '~/components/WhySection'
import AppSection from '~/components/AppSection'
import MediaSection from '~/components/MediaSection'
import FaqSection from '~/components/FaqSection'
import FeedbackSection from '~/components/FeedbackSection'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    AppFooter,
    FeedbackSection,
    FaqSection,
    MediaSection,
    AppSection,
    WhySection,
    HeroSection,
    AppHeader
  }
}
</script>
