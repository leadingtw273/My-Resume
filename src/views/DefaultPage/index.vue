<script>
import DetailTitle from '@/components/DetailTitle';
import DetailProgressBar from '@/components/DetailProgressBar';
import DetailTimeLine from '@/components/DetailTimeLine';
import DetailList from '@/components/DetailList';
import DetailText from '@/components/DetailText';
import DetailOnlineProfile from '@/components/DetailOnlineProfile';
import DetailProjects from '@/components/DetailProjects';

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
  },
  components: {
    DetailTitle,
    DetailProgressBar,
    DetailList,
    DetailText,
    DetailTimeLine,
    DetailOnlineProfile,
    DetailProjects
  }
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
