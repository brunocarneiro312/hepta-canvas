<template>
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Cartão de Crédito" active>
                    <b-card-text>
                        <FormPagamentoCC></FormPagamentoCC>
                    </b-card-text>
                </b-tab>
                <b-tab title="Boleto Bancário">
                    <b-card-text>
                        <FormPagamentoBoleto></FormPagamentoBoleto>
                    </b-card-text>
                </b-tab>
                <b-tab title="Vale Compra">
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

</style>