<script>
import UnitTitle from '@/components/UnitTitle';
import { getProjectList } from '@/models/githubData.js';

export default {
  name: 'DetailProjects',
  data() {
    return {
      title: 'GITHUB PROJECTS',
      list: []
    };
  },
  computed: {
    autoList() {
      return this.list
        .sort((a, b) => Date.parse(b.lastPush) - Date.parse(a.lastPush))
        .slice(0, 6);
    }
  },
  props: ['detailData'],
  methods: {
    getProjects() {
      getProjectList().then(data => {
        this.list = data;
      });
    }
  },
  created() {
    this.getProjects();
  },
  components: { UnitTitle }
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
