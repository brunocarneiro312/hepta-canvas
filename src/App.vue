<template>
  <div id="app">
      <div class="container mt-5">
          <FormPagamentoCC></FormPagamentoCC>
<!--          <VisualCard></VisualCard>-->
      </div>
    <br>
  </div>
</template>

<script>

    import './assets/css/global.css';
    import 'font-awesome/css/font-awesome.css';

    import FormPagamentoCC from "./components/FormPagamentoCC";
    import VisualCard from "./components/VisualCard";

    export default {
  name: 'app',
  components: {
    FormPagamentoCC,
    VisualCard
  }
}
</script>

<style>
#app {

}
</style>
