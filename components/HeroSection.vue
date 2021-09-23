<template>
  <section class="hero-section" :class="{'terminal': isTerminal}">
    <div class="container">
      <div class="text-container">
        <h2 class="section-title" v-html="title"></h2>
        <slot name="helper-text"></slot>
        <a
          v-if="btnType === 'primary'"
          href="#"
          class="btn btn-primary">Скачать приложение</a>
        <a
          v-if="btnType === 'link'"
          href="#"
          class="btn btn-link"
          :class="{'opened': !hidden}"
          @click.prevent="toggleBtn">
          <span class="btn-text">{{ hidden ? 'Показать' : 'Скрыть' }}</span>
          <img src="~/assets/images/chevron-down.svg" alt="chevron down">
        </a>
      </div>
      <div class="image-container">
        <div class="phone-img">
          <slot name="card-success"></slot>
          <img
            class="macbook"
            :src="imageName"
            :alt="imageName">
          <slot name="card-danger"></slot>
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
    btnType: {
      type: String,
      default: '',
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
