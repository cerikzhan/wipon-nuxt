<template>
  <div id="app">
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter';
import AppHeader from '~/components/AppHeader';

export default {
  name: 'Layout',
  components: { AppHeader, AppFooter },
};
</script>
