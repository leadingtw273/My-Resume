<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/stylesheets/reset.scss';
@import './assets/stylesheets/all.scss';

html,
body {
  background-color: $background;
}

#app {
  font-family: 'Roboto', '微軟正黑體', sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
