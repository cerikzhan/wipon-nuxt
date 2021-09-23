<template>
  <div class="indexPage">
    <section class="hero-section">
      <div class="container">
        <div class="text-container">
          <h2 class="section-title">
            Защитите свой бизнес от <span class="text-primary">проверок и штрафов</span>
          </h2>
          <p class="hero-text">
            Wipon поможет вести законную торговлю алкогольной и табачной продукции
          </p>
          <a href="#" class="btn btn-primary">
            Скачать приложение
          </a>
        </div>
        <div class="image-container">
          <div class="phone-img">
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
            <img
              class="macbook"
              src="~/assets/images/Silverphone.png"
              alt="phone">
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
          </div>
        </div>
      </div>
    </section>
    <why-section />
    <app-section />
    <media-section />
    <faq-section ref="faq" />
    <feedback-section />
  </div>
</template>

<script>
import WhySection from '~/components/WhySection';
import AppSection from '~/components/AppSection';
import MediaSection from '~/components/MediaSection';
import FaqSection from '~/components/FaqSection';
import FeedbackSection from '~/components/FeedbackSection';

export default {
  layout: 'layout',
  components: {
    FeedbackSection,
    FaqSection,
    MediaSection,
    AppSection,
    WhySection,
  },
};
</script>
