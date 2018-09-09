<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/stylesheets/reset.scss';

@page {
  size: A4;
  margin: 0;
}

@media print {
  html,
  body {
    width: 210mm;
    height: 297mm;
  }
}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: rgb(53, 104, 112);
}

#app {
  width: 21cm;
  height: 29.7cm;
  margin: 1cm auto;
  font-family: 'Roboto', '微軟正黑體', sans-serif;

  > * {
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.582);
  }
}
</style>
