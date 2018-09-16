<script>
import UnitTitle from '@/components/UnitTitle';

export default {
  name: 'DetailText',
  data() {
    return {
      title: null,
      text: null
    };
  },
  props: ['detailData'],
  created() {
    this.title = this.detailData.title;
    this.text = this.detailData.content;
  },
  components: { UnitTitle }
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
