<script>
import DetailTitle from '@/components/DetailTitle';
import DetailInfoTitle from '@/components/DetailInfoTitle';
import DetailProgressBar from '@/components/DetailProgressBar';
import DetailTimeLine from '@/components/DetailTimeLine';
import DetailList from '@/components/DetailList';
import DetailText from '@/components/DetailText';

export default {
  name: 'DefaultPage',
  data() {
    return {
      stateList: null,
      MobilePhone: null,
      aboutMe: null
    };
  },
  created() {
    this.stateList = this.$store.state.ResumeData;
    this.MobilePhone = this.$store.state.ResumeData[1].content.Mobile;
    this.aboutMe = this.$store.state.ResumeData[6];
  },
  components: {
    DetailTitle,
    DetailInfoTitle,
    DetailProgressBar,
    DetailList,
    DetailText,
    DetailTimeLine
  }
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
