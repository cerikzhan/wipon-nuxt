<template>
  <div class="instruction-block">
    <hero-section
      btn-type="link"
      v-bind="$attrs"
      @toggle="opened = !opened" />
    <instruction-list
      v-if="opened"
      :list="list"
      :with-btn="withBtn" />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection';
import InstructionList from '~/components/InstructionList';

export default {
  inheritAttrs: false,
  components: {
    InstructionList,
    HeroSection,
  },
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
  data() {
    return {
      opened: false,
    };
  },
};
</script>
