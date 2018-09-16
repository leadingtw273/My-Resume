<script>
import UnitTitle from '@/components/UnitTitle';

export default {
  name: 'DetailTimeLine',
  data() {
    return {
      title: null,
      items: null
    };
  },
  props: ['detailData'],
  created() {
    this.title = this.detailData.title;
    this.items = this.detailData.content;
  },
  components: { UnitTitle }
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
