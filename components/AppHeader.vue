<template>
  <header class="header" :class="{'opened': opened}">
    <div class="container">
      <div class="logo-wrapper">
        <a href="#" class="logo-lin">
          <img src="~/assets/images/wipon_pro_logo.svg" alt="wipon pro">
        </a>
      </div>
      <ul class="navbar">
        <li
          v-for="item in navList"
          :key="item.url"
          class="navbar-item"
          @click="toggleNavbar">
          <nuxt-link
            :to="item.url"
            class="navbar-link">
            {{ item.text }}
          </nuxt-link>
        </li>
        <li class="navbar-item btn-wrapper">
          <a href="#" class="btn btn-outline-primary">Для потребителей</a>
        </li>
      </ul>
      <div
        class="menu-burger"
        :class="{'opened': opened}"
        @click="toggleNavbar">
        <div class="burger-item top"></div>
        <div class="burger-item bottom"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    clicked: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      opened: false,
      navList: [
        {
          url: '/#solution',
          text: 'Решение',
        },
        {
          url: '/instruction',
          text: 'Инструкции',
        },
        {
          url: '/payment',
          text: 'Оплата',
        },
        {
          url: '/#faq',
          text: 'FAQ',
        },
      ],
    };
  },
  watch: {
    clicked: {
      handler() {
        if (this.opened) {
          this.toggleNavbar();
        }
      },
    },
  },
  methods: {
    toggleNavbar() {
      this.opened = !this.opened;
      this.$emit('toggle');
    },
  },
};
</script>
