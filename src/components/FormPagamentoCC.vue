<template>
    <b-container class="shadow-sm p-3 bg-white">
        <div class="p-4">
            <b-row>
                <b-col>
                    <h4 class="text-uppercase text-muted font-raleway font-weight-bold">Informações do beneficiário</h4>
                </b-col>
                <b-col class="text-right text-muted">
                    <i class="fa fa-file-o fa-lg"></i>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="nome-beneficiario">Nome</label>
                        <b-input id="nome-beneficiario" placeholder="João Antônio Almeida" class="text-center"></b-input>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="email-beneficiario">E-mail</label>
                        <b-input id="email-beneficiario" placeholder="joao.almeida@email.com" class="text-center"></b-input>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="telefone-beneficiario">Telefone</label>
                        <b-input id="telefone-beneficiario" placeholder="(00) 00000-0000" class="text-center"></b-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <h4 class="text-uppercase text-muted font-raleway font-weight-bold">Dados do Cartão de Crédito</h4>
                </b-col>
                <b-col class="text-right text-muted">
                    <i class="fa fa-credit-card fa-lg"></i>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col cols="12" md="6">
                            <b-form-group class="text-center">
                                <label for="numero-cartao-beneficiario">Número do Cartão</label>
                                <b-input id="numero-cartao-beneficiario" placeholder="0000 0000 0000 0000" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">Nome no Cartão</label>
                                <b-input id="nome-cartao-beneficiario" placeholder="José Antônio Almeida" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" sm="6" md="3">
                            <b-form-group class="text-center">
                                <label for="validade-cartao-beneficiario">Validade</label>
                                <b-input id="validade-cartao-beneficiario" placeholder="00/0000" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" sm="6" md="3">
                            <b-form-group class="text-center">
                                <label for="cvc-cartao-beneficiario">CVC</label>
                                <b-input id="cvc-cartao-beneficiario" placeholder="000" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group class="text-center">
                                <label for="cpf-cartao-beneficiario">CPF do Titular</label>
                                <b-input id="cpf-cartao-beneficiario" placeholder="000.000.000-00" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>

                    </b-row>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <h4 class="text-uppercase text-muted font-raleway font-weight-bold">Endereço</h4>
                </b-col>
                <b-col class="text-right text-muted">
                    <i class="fa fa-home fa-lg"></i>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col md="2">
                            <b-form-group class="text-center">
                                <label for="cep-beneficiario">CEP</label>
                                <b-input id="cep-beneficiario" placeholder="00000-000" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group class="text-center">
                                <label for="logradouro-beneficiario">Logradouro</label>
                                <b-input id="logradouro-beneficiario" placeholder="SQN 312 BL K" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="8" md="4">
                            <b-form-group class="text-center">
                                <label for="bairro-beneficiario">Bairro</label>
                                <b-input id="endereco-beneficiario" placeholder="Asa Norte" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="2">
                            <b-form-group class="text-center">
                                <label for="uf-beneficiario">UF</label>
                                <b-input id="uf-beneficiario" placeholder="DF" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="8" md="3" offset-md="3">
                            <b-form-group class="text-center">
                                <label for="localidade-beneficiario">Cidade</label>
                                <b-input id="localidade-beneficiario" placeholder="Brasília" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="3">
                            <b-form-group class="text-center">
                                <label for="complemento-beneficiario">Complemento</label>
                                <b-input id="logradouro-beneficiario" placeholder="102" class="text-center"></b-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <hr>
            <br>
            <b-row>
                <b-col md="4" offset-md="8" class="text-right">
                    <b-btn variant="success" class="btn-lg" block>
                        Confirmar <i class="fa fa-check fa-fw"></i>
                    </b-btn>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: "FormPagamentoCC"
    }
</script>

<style scoped>
    input::placeholder {
        color: rgba(0, 0, 0, .5);
    }
    input.form-control {
        border-radius: 0;
        height: 34px;
        width: 100%;
        border: 1px solid transparent;
        border-top: none;
        border-bottom: 1px solid #DDD;
        box-shadow: inset 0 1px 2px rgba(0,0,0,.29), 0 -1px 1px #FFF, 0 1px 0 #FFF;
        padding: 25px;
    }
    label {
        text-transform: uppercase;
        color: rgba(0, 0, 0, .50);
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
    }
    .container {
        border: 1px solid #ddd;
    }
    .btn {
        border-radius: 0;
    }
</style>
