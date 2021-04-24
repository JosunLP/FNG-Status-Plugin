<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="FNG Status Plugin"/>
  <Content />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Content
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
  width: 20rem;
  min-height: 20rem;
  scroll-behavior: smooth;
}
body {
  color: #FD9E06;
  background-color: #1C0100;
}
</style>
