<template>
  <header class="header1" :class="{'opened': opened}">
    <div class="container">
      <div class="logo-wrapper">
        <a href="#" class="logo-lin">
          <img src="~/assets/images/wipon_pro_logo.svg" alt="wipon pro">
        </a>
      </div>
      <div class="menu-burger" @click="opened = !opened">
        <div class="burger-item top"></div>
        <div class="burger-item bottom"></div>
      </div>
      <div class="inner-wrapper">
        <ul class="navbar1">
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

<style>
.header1 .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header1 .inner-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}

.header1 .navbar1 {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 50%;
}

.header1 .navbar1 .navbar-item {
  margin-right: 10px;
}

.header1 .menu-burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 35px;
  height: 14px;
  cursor: pointer;
}

.header1 .burger-item {
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
}

header1 .burger-item.bottom {
  width: 80%;
  transition: width 0.25s ease;
}

.header1 .menu-burger:hover .burger-item.bottom {
  width: 100%;
}

@media screen and (max-width: 640px) {
  .menu-burger {
    display: flex;
  }
}
</style>
