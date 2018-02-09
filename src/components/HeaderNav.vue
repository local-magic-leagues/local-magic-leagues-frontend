<template>
  <nav class="navigation">
    <router-link v-for="link in links" v-bind:key="link.text" :to="link.route" exact>{{ link.text }}</router-link>
  </nav> 
</template>

<script>
  export default {
    name: 'navigation-component',
    data () {
      return {
        links: [
          { route: '/', text: 'Home' },
          { route: 'join', text: 'Join Now!' }
        ]
      }
    }
  }
</script>

<style>
  .navigation {
    width: 100%;
    margin: 0;
    height: 30px;
    padding: 0 16px 0 24px;
    background-color: rgb(153, 96, 168);
  }

  .navigation a,
  .navigation a:visited {
    text-decoration: none;
    font-size: 1.2em;
    width: 50px;
    padding: 1em 1em 0.5em 1em;
    align-items: left;
    color: #ffffff;
  }

  .navigation a.current-route {
    color: rgb(238, 236, 125);
    background-color: rgb(85, 53, 94);
  }
</style>
