<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator></Calculator>
  </div>
</template>

<script>
import Calculator from './main/calculator'

export default {
  components: {Calculator} 
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
  color:#fff;
  background-color: blue;

}
* {
  font-family: Arial;
}
body{
  margin:0;
}
</style>
