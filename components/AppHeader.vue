<template>
  <header class="header" :class="{'opened': opened}">
    <div class="container">
      <div class="logo-wrapper">
        <a href="#" class="logo-lin">
          <img src="~/assets/images/wipon_pro_logo.svg" alt="wipon pro">
        </a>
      </div>
      <ul class="navbar">
        <li class="navbar-item">
          <nuxt-link to="/#solution" class="navbar-link">
            Решение
          </nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link to="/instruction" class="navbar-link">
            Инструкции
          </nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link to="/payment" class="navbar-link">
            Оплата
          </nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link to="/#faq" class="navbar-link">
            FAQ
          </nuxt-link>
        </li>
      </ul>
      <div class="btn-wrapper">
        <a href="#" class="btn btn-outline-primary">Для потребителей</a>
      </div>
      <div class="menu-burger" @click="opened = !opened">
        <div class="burger-item top"></div>
        <div class="burger-item bottom"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
    };
  },
};
</script>
