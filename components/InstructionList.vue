<template>
  <section class="pc-instruction">
    <div class="container">
      <div class="instruction-list">
        <div
          v-for="item in list"
          :key="item.index"
          class="instruction">
          <div class="instruction-top">
            <p class="number">
              {{ item.index }}.
            </p>
            <div class="instruction-text">
              <p>{{ item.title }}</p>
              <a
                v-if="withBtn && item.index === 1"
                href="#"
                class="btn btn-outline-primary">
                <img
                  class="arrow-down"
                  src="~/assets/images/arrow-down.svg"
                  alt="arrow down">
                <span>Скачать</span>
              </a>
            </div>
          </div>
          <img
            class="instruction-img"
            :src="require(`~/assets/images/instruction/${item.image}.png`)"
            alt="pc 1">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'InstructionList',
  props: {
    list: {
      type: Array,
      required: true,
    },
    withBtn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
