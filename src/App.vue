<template>
  <div id="app">
    <br>
    <FormPagamentoCC></FormPagamentoCC>
    <br>
  </div>
</template>

<script>

import './assets/css/global.css';
import 'font-awesome/css/font-awesome.css';

import FormPagamentoCC from "./components/FormPagamentoCC";

export default {
  name: 'app',
  components: {
    FormPagamentoCC
  }
}
</script>

<style>
#app {

}
</style>
