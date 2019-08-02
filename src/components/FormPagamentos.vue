<template>
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab active>
                    <template slot="title">
                        <i class="fa fa-credit-card fa-fw"></i> Cartão de Crédito
                    </template>
                    <b-card-text>
                        <FormPagamentoCC></FormPagamentoCC>
                    </b-card-text>
                </b-tab>
                <b-tab>
                    <template slot="title">
                        <i class="fa fa-barcode fa-fw"></i> Boleto Bancário
                    </template>
                    <b-card-text>
                        <FormPagamentoBoleto></FormPagamentoBoleto>
                    </b-card-text>
                </b-tab>
                <b-tab>
                    <template slot="title">
                        <i class="fa fa-ticket fa-fw"></i> Vale Compra
                    </template>
                    <b-card-text>
                        <FormPagamentoValeCompra></FormPagamentoValeCompra>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    import FormPagamentoCC from "./FormPagamentoCC";
    import FormPagamentoBoleto from "./FormPagamentoBoleto";
    import FormPagamentoValeCompra from "./FormPagamentoValeCompra";

    export default {
        name: "FormPagamentos",
        components: {
            FormPagamentoCC,
            FormPagamentoBoleto,
            FormPagamentoValeCompra
        }
    }
</script>

<style scoped>
    .card-header {
        background: lime !important;
    }
</style>