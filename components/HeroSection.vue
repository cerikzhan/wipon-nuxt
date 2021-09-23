<template>
  <section class="hero-section" :class="{'terminal': isTerminal}">
    <div class="container">
      <div class="text-container order-text">
        <h2 class="section-title" v-html="title"></h2>
        <a
          href="#"
          class="btn btn-link"
          :class="{'opened': !hidden}"
          @click.prevent="toggleBtn">
          <span class="btn-text">{{ hidden ? 'Показать' : 'Скрыть' }}</span>
          <img src="~/assets/images/chevron-down.svg" alt="chevron down">
        </a>
      </div>
      <div class="image-container order-image">
        <div class="phone-img">
          <img
            class="macbook"
            :src="imageName"
            :alt="imageName">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
    isTerminal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hidden: true,
    };
  },
  methods: {
    toggleBtn() {
      this.hidden = !this.hidden;
      this.$emit('toggle');
    },
  },
};
</script>
