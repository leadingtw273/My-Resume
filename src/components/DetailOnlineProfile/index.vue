<script>
import UnitTitle from '@/components/UnitTitle';

export default {
  name: 'DetailOnlineProfile',
  data() {
    return {
      title: null,
      field: null
    };
  },
  props: ['detailData'],
  created() {
    this.title = this.detailData.title;
    this.field = this.detailData.content;
  },
  components: { UnitTitle }
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
