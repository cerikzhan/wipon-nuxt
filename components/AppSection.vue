<template>
  <section id="solution" class="app-section">
    <div class="container">
      <h2 class="section-title">
        Скачайте приложение на <span class="text-primary">удобный сервис</span> и начните
        работу
      </h2>

      <div class="cards-wrapper">
        <div class="card">
          <div class="card-top">
            <div class="card-img">
              <img src="~/assets/images/tsd.png" alt="tsd">
            </div>
            <h4 class="card-title">
              ТСД
            </h4>
          </div>
          <div class="card-bottom">
            <p class="days">
              365 дней
            </p>
            <p class="price">
              30,000 T
            </p>
            <a href="#" class="btn btn-outline-primary">
              <img class="arrow-down" src="~/assets/images/arrow-down.svg" alt="arrow down">
              <span>Скачать АРК</span>
            </a>
            <div class="social-links">
              <a href="#" class="store google-store">
                <img src="~/assets/images/google-store.svg" alt="">
              </a>
            </div>
            <a class="card-question" href="#">Где приобрести ТСД?</a>
          </div>
        </div>
        <div class="card">
          <div class="card-top">
            <div class="card-img">
              <img src="~/assets/images/pc.png" alt="pc">
            </div>
            <h4 class="card-title">
              ПК
            </h4>
          </div>
          <div class="card-bottom">
            <p class="days">
              365 дней
            </p>
            <p class="price">
              15,000 T
            </p>
            <a href="#" class="btn btn-outline-primary">
              <img class="arrow-down" src="~/assets/images/arrow-down.svg" alt="arrow down">
              <span>Скачать</span>
            </a>
            <a class="card-question" href="#">Где приобрести сканер?</a>
          </div>
        </div>
        <div class="card">
          <div class="card-top">
            <div class="card-img">
              <img src="~/assets/images/smartphone.png" alt="smartphone">
            </div>
            <h4 class="card-title">
              Смартфон
            </h4>
          </div>
          <div class="card-bottom">
            <p class="days">
              365 дней
            </p>
            <p class="price">
              12,000 T
            </p>
            <a href="#" class="btn btn-outline-primary">
              <img class="arrow-down" src="~/assets/images/arrow-down.svg" alt="arrow down">
              <span>Скачать АРК</span>
            </a>
            <div class="social-links two-child">
              <a href="#" class="store google-store">
                <img src="~/assets/images/google-store.svg" alt="google-store">
              </a>
              <a href="#" class="store app-store">
                <img src="~/assets/images/app-store.svg" alt="app store">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AppSection'
}
</script>
