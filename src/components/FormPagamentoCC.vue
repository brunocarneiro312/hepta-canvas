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
            <b-row>
                <b-col>
                    {{ formPagamentoCC.validations.informacoesBeneficiario.nome }}
                </b-col>
            </b-row>
            <b-row class="mb-4">
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="nome-beneficiario">Nome</label>
                        <b-input-group>
                            <b-form-input id="nome-beneficiario"
                                          placeholder="João Antônio Almeida"
                                          v-model="formPagamentoCC.informacoesBeneficiario.nome"
                                          @blur="setFormClass(formPagamentoCC.validations.informacoesBeneficiario.nome, 'nome-beneficiario')"
                                          @focus="setDirty"
                                          autocomplete="new-password"
                                          class="text-center">
                            </b-form-input>
                            <b-input-group-append>
                                <div v-if="formPagamentoCC.validations.informacoesBeneficiario.nome.dirty">
                                    <i class="fa fa-check fa-fw green" v-if="isBeneficiarioNomeValido"></i>
                                    <i class="fa fa-times fa-fw red" v-else></i>
                                </div>
                                <div v-else>
                                    <i class="fa fa-exclamation-triangle fa-fw"></i>
                                </div>
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
                                          @blur="setFormClass(formPagamentoCC.validations.informacoesBeneficiario.email, 'email-beneficiario')"
                                          @focus="setDirty"
                                          class="text-center">
                            </b-form-input>
                            <b-input-group-append>
                                <div v-if="formPagamentoCC.validations.informacoesBeneficiario.email.dirty">
                                    <i class="fa fa-check fa-fw green" v-if="isBeneficiarioEmailValido"></i>
                                    <i class="fa fa-times fa-fw red" v-else></i>
                                </div>
                                <div v-else>
                                    <i class="fa fa-exclamation-triangle fa-fw"></i>
                                </div>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="telefone-beneficiario">Telefone</label>
                        <b-input-group>
                            <b-form-input id="telefone-beneficiario"
                                          placeholder="(00) 00000-0000"
                                          v-model="formPagamentoCC.informacoesBeneficiario.telefone"
                                          @blur="setFormClass(formPagamentoCC.validations.informacoesBeneficiario.telefone, 'telefone-beneficiario')"
                                          @focus="setDirty"
                                          class="text-center"></b-form-input>
                            <b-input-group-append>
                                <div v-if="formPagamentoCC.validations.informacoesBeneficiario.telefone.dirty">
                                    <i class="fa fa-check fa-fw green" v-if="isBeneficiarioTelefoneValido"></i>
                                    <i class="fa fa-times fa-fw red" v-else></i>
                                </div>
                                <div v-else>
                                    <i class="fa fa-exclamation-triangle fa-fw"></i>
                                </div>
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
                                <label for="numero-cartao-beneficiario">Número do Cartão</label>
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
                                <label for="validade-cartao-beneficiario">Validade</label>
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
                                <label for="cvc-cartao-beneficiario">CVC</label>
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
                                <label for="cpf-cartao-beneficiario">CPF do Titular</label>
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
                                <label for="cep-beneficiario">CEP</label>
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
                                <label for="logradouro-beneficiario">Logradouro</label>
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
                                <label for="bairro-beneficiario">Bairro</label>
                                <b-input-group>
                                    <b-input id="bairro-beneficiario"
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
                                <label for="uf-beneficiario">UF</label>
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
                                <label for="localidade-beneficiario">Cidade</label>
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
                                <label for="complemento-beneficiario">Complemento</label>
                                <b-input-group>
                                    <b-input id="complemento-beneficiario"
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
                // Formulário de pagamento
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
                    },
                    validations: {
                        informacoesBeneficiario: {
                            nome: {
                                dirty: false,
                                valid: false
                            },
                            email: {
                                dirty: false,
                                valid: false
                            },
                            telefone: {
                                dirty: false,
                                valid: false
                            }
                        },
                        dadosCartaoCredito: {
                            numeroCartao: {
                                dirty: false,
                                valid: false
                            },
                            validade: {
                                dirty: false,
                                valid: false
                            },
                            cvc: {
                                dirty: false,
                                valid: false
                            },
                            nomeImpresso: {
                                dirty: false,
                                valid: false
                            },
                            cpfTitular: {
                                dirty: false,
                                valid: false
                            }
                        },
                        endereco: {
                            cep: {
                                dirty: false,
                                valid: false
                            },
                            logradouro: {
                                dirty: false,
                                valid: false
                            },
                            bairro: {
                                dirty: false,
                                valid: false
                            },
                            uf: {
                                dirty: false,
                                valid: false
                            },
                            cidade: {
                                dirty: false,
                                valid: false
                            },
                            complemento: {
                                dirty: false,
                                valid: false
                            }
                        },
                    }
                },
            }
        },
        methods: {
            /**
             * -------------------------------------------------
             * Seta o campo como 'dirty' ao receber focus.
             * O campo é setado através do ID do elemento da DOM
             * -------------------------------------------------
             */
            setDirty(event) {
                switch (event.target.id) {
                    case 'nome-beneficiario':
                        this.formPagamentoCC.validations.informacoesBeneficiario.nome.dirty = true; break;
                    case 'email-beneficiario':
                        this.formPagamentoCC.validations.informacoesBeneficiario.email.dirty = true; break;
                    case 'telefone-beneficiario':
                        this.formPagamentoCC.validations.informacoesBeneficiario.telefone.dirty = true; break;
                }
            },

            /**
             * -----------------------------------------------------
             * Verifica se um campo encontra-se no estado 'dirty'.
             * A verificação é dada através do ID do elemento da DOM
             * -----------------------------------------------------
             */
            isDirty(event) {
                // switch (event.target.id) {
                //     case 'nome-beneficiario':
                //         return this.formPagamentoCC.validations.informacoesBeneficiario.nome.dirty;
                // }
            },

            setFormClass(form, formElementId) {
                if (form.dirty) {
                    if (form.valid) {
                        document.querySelector(`#${formElementId}`).classList.remove('red');
                        document.querySelector(`#${formElementId}`).classList.add('green');
                    }
                    else {
                        document.querySelector(`#${formElementId}`).classList.remove('green');
                        document.querySelector(`#${formElementId}`).classList.add('red');
                    }
                }
                else {
                    document.querySelector(`#${formElementId}`).classList.remove('red');
                    document.querySelector(`#${formElementId}`).classList.remove('green');
                }
            },

            /**
             * ------------------------------
             * Verifica se o nome está válido
             * ------------------------------
             */
            isNomeBeneficiarioValid() {
                return this.formPagamentoCC.validations.informacoesBeneficiario.nome.valid;
            },
            /**
             * -------------------------------
             * Verifica se o email está válido
             * -------------------------------
             */
            isEmailBeneficiarioValid() {
                return this.formPagamentoCC.validations.informacoesBeneficiario.email.valid;
            },
            /**
             * ----------------------------------
             * Verifica se o telefone está válido
             * ----------------------------------
             */
            isTelefoneBeneficiarioValid() {
                return this.formPagamentoCC.validations.informacoesBeneficiario.telefone.valid;
            },
        },
        computed: {
            // Verifica se o nome está válido
            isBeneficiarioNomeValido: function() {
                let isValid = this.formPagamentoCC.informacoesBeneficiario.nome
                    && this.formPagamentoCC.informacoesBeneficiario.nome.length > 0
                    && this.formPagamentoCC.informacoesBeneficiario.nome.length < 50;
                this.formPagamentoCC.validations.informacoesBeneficiario.nome.valid = isValid;
                return isValid;
            },
            // Verifica se o email está válido
            isBeneficiarioEmailValido: function () {
                const regexpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let isValid = this.formPagamentoCC.informacoesBeneficiario.email
                    && this.formPagamentoCC.informacoesBeneficiario.email.length > 0
                    && this.formPagamentoCC.informacoesBeneficiario.email.length < 100
                    && regexpEmail.test(this.formPagamentoCC.informacoesBeneficiario.email);
                this.formPagamentoCC.validations.informacoesBeneficiario.email.valid = isValid;
                return isValid;
            },
            isBeneficiarioTelefoneValido: function () {
                let isValid = this.formPagamentoCC.informacoesBeneficiario.telefone
                    && this.formPagamentoCC.informacoesBeneficiario.telefone.length > 0
                    && this.formPagamentoCC.informacoesBeneficiario.telefone.length < 12;
                this.formPagamentoCC.validations.informacoesBeneficiario.telefone.valid = isValid;
                return isValid;
            }
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
        color: black;
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
    .red {
        color: firebrick;
    }
    .green {
        color: darkgreen;
    }
</style>
