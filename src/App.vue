<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{

    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* Global Css Styles */
.overflow-auto::-webkit-scrollbar{
  /* Hide for chrome, safari and opera */
    display: none;
}
.overflow-auto{
  /* Hide for chrome, safari and opera */
    -webkit-scrollbar: none ;
  /* Hide for Edge and Firefox */
  -ms-overflow-style: none;
}
</style>
