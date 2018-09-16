<script>
import vueProgressBar from 'svg-progress-bar';
import UnitTitle from '@/components/UnitTitle';

export default {
  name: 'DetailProgressBar',
  data() {
    return {
      title: null,
      data: null
    };
  },
  props: ['detailData'],
  components: {
    vueProgressBar,
    UnitTitle
  },
  created() {
    this.title = this.detailData.title;
    this.data = this.detailData.content;
  }
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
