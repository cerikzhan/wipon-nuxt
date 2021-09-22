<template>
  <section class="hero-section">
    <div class="container">
      <div class="text-container">
        <h2 class="section-title" v-html="title" />
        <slot name="helper-text" />
        <a v-if="btnType === 'primary'" href="#" class="btn btn-primary">Скачать приложение</a>
        <a v-if="btnType === 'link'" href="#" class="btn btn-link" @click="toggleBtn">
          <span class="btn-text">{{ hidden ? 'Показать' : 'Скрыть' }}</span>
          <img src="~/assets/images/chevron-down.svg" alt="chevron down">
        </a>
      </div>
      <div class="image-container">
        <div class="phone-img">
          <slot name="card-success" />
          <img class="macbook" :src="imageName" :alt="imageName">
          <slot name="card-danger" />
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
      required: true
    },
    imageName: {
      type: String,
      required: true
    },
    btnType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      hidden: false
    }
  },
  methods: {
    toggleBtn () {
      this.hidden = !this.hidden
    }
  }
}
</script>
