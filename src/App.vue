<template>
    <div id="app">
        <div class="container mt-5">
            <FormPagamentos></FormPagamentos>
        </div>
        <br>
    </div>
</template>

<script>

    import './assets/css/global.css';
    import 'font-awesome/css/font-awesome.css';

    import FormPagamentoCC from "./components/FormPagamentoCC";
    import FormPagamentoBoleto from "./components/FormPagamentoBoleto";
    import FormPagamentoValeCompra from "./components/FormPagamentoValeCompra";
    import VisualCard from "./components/VisualCard";
    import FormPagamentos from "./components/FormPagamentos";

    export default {
        name: 'app',
        components: {
            FormPagamentos
        }
    }
</script>

<style>
    #app {

    }
</style>
