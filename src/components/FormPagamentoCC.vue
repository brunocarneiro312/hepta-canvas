<template>
    <b-container class="shadow-sm p-3 bg-white">
        <div class="p-4">
            <b-row class="mt-4">
                <b-col class="text-center">
                    <h3 class="text-uppercase text-muted font-raleway font-weight-bold">Informações do beneficiário</h3>
                </b-col>
            </b-row>
            <hr class="shadow-down">
            <br>
            <b-row class="mb-4">
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="nome-beneficiario">Nome</label>
                        <b-input-group>
                            <b-form-input id="nome-beneficiario"
                                     placeholder="João Antônio Almeida"
                                     v-model="formPagamentoCC.informacoesBeneficiario.nome"
                                     class="text-center">
                            </b-form-input>
                            <b-input-group-append>
                                <i class="fa fa-check fa-fw" v-if="false"></i>
                                <i class="fa fa-times fa-fw" v-else></i>
                            </b-input-group-append>
                        </b-input-group>

                    </b-form-group>
                </b-col>
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="email-beneficiario">E-mail</label>
                        <b-input-group>
                            <b-form-input id="email-beneficiario"
                                          placeholder="joao.almeida@email.com"
                                          v-model="formPagamentoCC.informacoesBeneficiario.email"
                                          class="text-center">
                            </b-form-input>
                            <b-input-group-append>
                                <i class="fa fa-check fa-fw" v-if="false"></i>
                                <i class="fa fa-times fa-fw" v-else></i>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="email-beneficiario">Telefone</label>
                        <b-input-group>
                            <b-form-input id="telefone-beneficiario"
                                     placeholder="(00) 00000-0000"
                                     v-model="formPagamentoCC.informacoesBeneficiario.telefone"
                                     class="text-center"></b-form-input>
                            <b-input-group-append>
                                <i class="fa fa-check fa-fw" v-if="false"></i>
                                <i class="fa fa-times fa-fw" v-else></i>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col class="text-center">
                    <h3 class="text-uppercase text-muted font-raleway font-weight-bold">Dados do Cartão de Crédito</h3>
                </b-col>
            </b-row>
            <hr class="shadow-down">
            <br>
            <b-row class="mb-4">
                <b-col>
                    <b-row>
                        <b-col cols="12" md="6">
                            <b-form-group class="text-center">
                                <label for="email-beneficiario">Número do Cartão</label>
                                <b-input-group>
                                    <b-form-input id="numero-cartao-beneficiario"
                                             placeholder="0000 0000 0000 0000"
                                             v-model="formPagamentoCC.dadosCartaoCredito.numeroCartao"
                                             class="text-center font-inconsolata"></b-form-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">Nome no Cartão</label>
                                <b-input-group>
                                    <b-form-input id="nome-cartao-beneficiario"
                                             placeholder="José Antônio Almeida"
                                             v-model="formPagamentoCC.dadosCartaoCredito.nomeImpresso"
                                             class="text-center"></b-form-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" sm="6" md="3">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">Validade</label>
                                <b-input-group>
                                    <b-form-input id="validade-cartao-beneficiario"
                                             placeholder="00/0000"
                                             v-model="formPagamentoCC.dadosCartaoCredito.validade"
                                             class="text-center font-inconsolata"></b-form-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" sm="6" md="3">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">CVC</label>
                                <b-input-group>
                                    <b-input id="cvc-cartao-beneficiario"
                                             placeholder="000"
                                             v-model="formPagamentoCC.dadosCartaoCredito.cvc"
                                             class="text-center font-inconsolata"></b-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">CPF do Titular</label>
                                <b-input-group>
                                    <b-input id="cpf-cartao-beneficiario"
                                             placeholder="000.000.000-00"
                                             v-model="formPagamentoCC.dadosCartaoCredito.cpfTitular"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col class="text-center">
                    <h3 class="text-uppercase text-muted font-raleway font-weight-bold">Endereço</h3>
                </b-col>
            </b-row>
            <hr class="shadow-down">
            <br>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col md="2">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">CEP</label>
                                <b-input-group>
                                    <b-input id="cep-beneficiario"
                                             placeholder="00000-000"
                                             v-model="formPagamentoCC.endereco.cep"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">Logradouro</label>
                                <b-input-group>
                                    <b-input id="logradouro-beneficiario"
                                             placeholder="SQN 312 BL K"
                                             v-model="formPagamentoCC.endereco.logradouro"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="8" md="4">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">Bairro</label>
                                <b-input-group>
                                    <b-input id="endereco-beneficiario"
                                             placeholder="Asa Norte"
                                             v-model="formPagamentoCC.endereco.bairro"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="2">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">UF</label>
                                <b-input-group>
                                    <b-input id="uf-beneficiario"
                                             placeholder="DF"
                                             v-model="formPagamentoCC.endereco.uf"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="8" md="3" offset-md="3">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">Cidade</label>
                                <b-input-group>
                                    <b-input id="localidade-beneficiario"
                                             placeholder="Brasília"
                                             v-model="formPagamentoCC.endereco.cidade"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="3">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">Complemento</label>
                                <b-input-group>
                                    <b-input id="logradouro-beneficiario"
                                             placeholder="102"
                                             v-model="formPagamentoCC.endereco.complemento"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <i class="fa fa-check fa-fw" v-if="false"></i>
                                        <i class="fa fa-times fa-fw" v-else></i>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <br>
            <hr>
            <b-row>
                <b-col cols="12" md="3" offset-md="9" class="text-right">
                    <b-btn variant="success" class="btn-lg font-condensed" block>
                        Confirmar <i class="fa fa-check fa-fw"></i>
                    </b-btn>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: "FormPagamentoCC",
        data: function() {
            return {
                formPagamentoCC: {
                    informacoesBeneficiario: {
                        nome: undefined,
                        email: undefined,
                        telefone: undefined,
                    },
                    dadosCartaoCredito: {
                        numeroCartao: undefined,
                        validade: undefined,
                        cvc: undefined,
                        nomeImpresso: undefined,
                        cpfTitular: undefined
                    },
                    endereco: {
                        cep: undefined,
                        logradouro: undefined,
                        bairro: undefined,
                        uf: undefined,
                        cidade: undefined,
                        complemento: undefined
                    }
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    input::placeholder {
        color: rgba(0, 0, 0, .5);
    }
    input.form-control {
        border-radius: 0;
        /*box-shadow: inset 0 1px 1px #ddd;*/
        border-right: 0;
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
        text-transform: uppercase;
    }
    .btn:hover {
        text-transform: uppercase;
        box-shadow: 0 3px 3px 1px #ddd;
    }
    .shadow-up {
        border:none;
        height: 20px;
        height: 50px;
        box-shadow: 0 -3px 3px -3px #ddd;
        margin: 15px auto 0;
    }
    .shadow-down {
        border-bottom:1px dashed #ddd;
        border-top: 0;
        height: 20px;
        height: 50px;
        /*box-shadow: 0 3px 3px -3px #ddd;*/
        margin: -35px auto 0;
    }
    h3 {
        color: rgba(0, 0, 0, .25) !important;
    }
</style>
