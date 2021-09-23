<template>
  <div id="app">
    <app-header :clicked="clicked" @toggle="loading = !loading" />
    <Nuxt />
    <app-footer />
    <div
      v-if="loading"
      class="global-overlay"
      @click="clicked += 1"></div>
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter';
import AppHeader from '~/components/AppHeader';

export default {
  name: 'Layout',
  components: { AppHeader, AppFooter },
  data() {
    return {
      clicked: 0,
      loading: false,
    };
  },
  watch: {
    loading: {
      handler(val) {
        if (val) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'visible';
        }
      },
    },
  },
};
</script>
