<template>
  <div id="app">
    <header>
      <span>LML - Local Magic Leagues</span>
    </header>
    <HeaderNav></HeaderNav>
    <main>
      <img src="./assets/logo.png" alt="LML">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
export default {
  name: 'app',
  components: {
    HeaderNav
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: rgb(85, 53, 94);
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
