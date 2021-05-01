<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="FNG Status Plugin"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import Content from './components/Content.vue';

@Options({
  components: {
    HelloWorld,
    Content,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 1rem

body
  width: 30rem

html
  width: 100%
  height: 100%
</style>
