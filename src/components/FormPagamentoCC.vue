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
                            <!-- Nome -->
                            <b-form-input id="nome-beneficiario"
                                          placeholder="João Antônio Almeida"
                                          v-model="formPagamentoCC.informacoesBeneficiario.nome"
                                          @blur="setFormClass(formPagamentoCC.validations.informacoesBeneficiario.nome, 'nome-beneficiario')"
                                          @focus="setDirty"
                                          v-mask="customTokens"
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
                        <div class="text-left invalid-feedback" :style="{ display: isBeneficiarioNomeDirty && !isBeneficiarioNomeValido ? 'block' : 'none' }">
                            <div v-if="isBeneficiarioNomeNaoInformado">O nome deve ser informado</div>
                        </div>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="email-beneficiario">E-mail</label>
                        <b-input-group>
                            <!-- Email -->
                            <b-form-input id="email-beneficiario"
                                          placeholder="joao.almeida@email.com"
                                          v-model="formPagamentoCC.informacoesBeneficiario.email"
                                          @blur="setFormClass(formPagamentoCC.validations.informacoesBeneficiario.email, 'email-beneficiario')"
                                          @focus="setDirty"
                                          autocomplete="new-password"
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
                        <div class="text-left invalid-feedback" :style="{ display: isBeneficiarioEmailDirty && !isBeneficiarioEmailValido ? 'block' : 'none' }">
                            <div v-if="isBeneficiarioEmailNaoInformado">O E-mail deve ser informado</div>
                            <div v-if="isBeneficiarioEmailInvalido">Informe um e-email válido</div>
                        </div>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="6" lg="4">
                    <b-form-group class="text-center">
                        <label for="telefone-beneficiario">Telefone</label>
                        <b-input-group>
                            <!-- Telefone -->
                            <b-form-input id="telefone-beneficiario"
                                          placeholder="(00) 00000-0000"
                                          v-model="formPagamentoCC.informacoesBeneficiario.telefone"
                                          @blur="setFormClass(formPagamentoCC.validations.informacoesBeneficiario.telefone, 'telefone-beneficiario')"
                                          @focus="setDirty"
                                          v-mask="['(##) ####-####', '(##) #####-####']"
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
                                    <!-- Número do cartão -->
                                    <b-form-input id="numero-cartao-beneficiario"
                                                  placeholder="0000 0000 0000 0000"
                                                  v-model="formPagamentoCC.dadosCartaoCredito.numeroCartao"
                                                  @blur="setFormClass(formPagamentoCC.validations.dadosCartaoCredito.numeroCartao, 'numero-cartao-beneficiario')"
                                                  @focus="setDirty"
                                                  v-mask="'#### #### #### ####'"
                                                  class="text-center font-inconsolata"></b-form-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.dadosCartaoCredito.numeroCartao.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isNumeroCartaoCreditoValido"></i>
                                            <i class="fa fa-times fa-fw red" v-else></i>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-exclamation-triangle fa-fw"></i>
                                        </div>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group class="text-center">
                                <label for="nome-cartao-beneficiario">Nome no Cartão</label>
                                <b-input-group>
                                    <!-- Nome no cartão -->
                                    <b-form-input id="nome-cartao-beneficiario"
                                                  placeholder="José Antônio Almeida"
                                                  v-model="formPagamentoCC.dadosCartaoCredito.nomeImpresso"
                                                  @blur="setFormClass(formPagamentoCC.validations.dadosCartaoCredito.nomeImpresso, 'nome-cartao-beneficiario')"
                                                  @focus="setDirty"
                                                  v-mask="customTokens"
                                                  class="text-center"></b-form-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.dadosCartaoCredito.nomeImpresso.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isNomeCartaoCreditoValido"></i>
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
                    <b-row>
                        <b-col cols="12" sm="6" md="3">
                            <b-form-group class="text-center">
                                <label for="validade-cartao-beneficiario">Validade</label>
                                <b-input-group>
                                    <!-- Validade do cartão -->
                                    <b-form-input id="validade-cartao-beneficiario"
                                                  placeholder="00/0000"
                                                  v-model="formPagamentoCC.dadosCartaoCredito.validade"
                                                  @blur="setFormClass(formPagamentoCC.validations.dadosCartaoCredito.validade, 'validade-cartao-beneficiario')"
                                                  @focus="setDirty"
                                                  v-mask="'##/####'"
                                                  class="text-center font-inconsolata"></b-form-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.dadosCartaoCredito.validade.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isValidadeCartaoCreditoValido"></i>
                                            <i class="fa fa-times fa-fw red" v-else></i>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-exclamation-triangle fa-fw"></i>
                                        </div>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" sm="6" md="3">
                            <b-form-group class="text-center">
                                <label for="cvc-cartao-beneficiario">CVC</label>
                                <b-input-group>
                                    <!-- CVC do cartão -->
                                    <b-input id="cvc-cartao-beneficiario"
                                             placeholder="000"
                                             v-model="formPagamentoCC.dadosCartaoCredito.cvc"
                                             @blur="setFormClass(formPagamentoCC.validations.dadosCartaoCredito.cvc, 'cvc-cartao-beneficiario')"
                                             @focus="setDirty"
                                             v-mask="'###'"
                                             class="text-center font-inconsolata"></b-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.dadosCartaoCredito.cvc.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isCVCCartaoCreditoValido"></i>
                                            <i class="fa fa-times fa-fw red" v-else></i>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-exclamation-triangle fa-fw"></i>
                                        </div>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group class="text-center">
                                <label for="cpf-cartao-beneficiario">CPF do Titular</label>
                                <b-input-group>
                                    <!-- CPF do titular -->
                                    <b-input id="cpf-cartao-beneficiario"
                                             placeholder="000.000.000-00"
                                             v-model="formPagamentoCC.dadosCartaoCredito.cpfTitular"
                                             @blur="setFormClass(formPagamentoCC.validations.dadosCartaoCredito.cpfTitular, 'cpf-cartao-beneficiario')"
                                             @focus="setDirty"
                                             v-mask="'###.###.###-##'"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.dadosCartaoCredito.cpfTitular.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isCPFCartaoCreditoValido"></i>
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
                                    <!-- CEP -->
                                    <b-input id="cep-beneficiario"
                                             placeholder="70390-700"
                                             v-model="formPagamentoCC.endereco.cep"
                                             @blur="setFormClass(formPagamentoCC.validations.endereco.cep, 'cep-beneficiario')"
                                             @focus="setDirty"
                                             v-mask="'#####-###'"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.endereco.cep.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isEnderecoCEPValido"></i>
                                            <i class="fa fa-times fa-fw red" v-else></i>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-exclamation-triangle fa-fw"></i>
                                        </div>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group class="text-center">
                                <label for="logradouro-beneficiario">Logradouro</label>
                                <b-input-group>
                                    <!-- Logradouro -->
                                    <b-input id="logradouro-beneficiario"
                                             placeholder="Q SHLS, 716, Conj B Bloco 5"
                                             v-model="formPagamentoCC.endereco.logradouro"
                                             @blur="setFormClass(formPagamentoCC.validations.endereco.logradouro, 'logradouro-beneficiario')"
                                             @focus="setDirty"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.endereco.logradouro.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isEnderecoLogradouroValido"></i>
                                            <i class="fa fa-times fa-fw red" v-else></i>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-exclamation-triangle fa-fw"></i>
                                        </div>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="8" md="4">
                            <b-form-group class="text-center">
                                <label for="bairro-beneficiario">Bairro</label>
                                <b-input-group>
                                    <!-- Bairro -->
                                    <b-input id="bairro-beneficiario"
                                             placeholder="Asa Sul"
                                             v-model="formPagamentoCC.endereco.bairro"
                                             @blur="setFormClass(formPagamentoCC.validations.endereco.bairro, 'bairro-beneficiario')"
                                             @focus="setDirty"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.endereco.bairro.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isEnderecoBairroValido"></i>
                                            <i class="fa fa-times fa-fw red" v-else></i>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-exclamation-triangle fa-fw"></i>
                                        </div>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="2">
                            <b-form-group class="text-center">
                                <label for="uf-beneficiario">UF</label>
                                <b-input-group>
                                    <!-- UF -->
                                    <b-input id="uf-beneficiario"
                                             placeholder="DF"
                                             v-model="formPagamentoCC.endereco.uf"
                                             @blur="setFormClass(formPagamentoCC.validations.endereco.uf, 'uf-beneficiario')"
                                             @focus="setDirty"
                                             v-mask="'SS'"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.endereco.uf.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isEnderecoUFValido"></i>
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
                    <b-row>
                        <b-col sm="8" md="3" offset-md="3">
                            <b-form-group class="text-center">
                                <label for="localidade-beneficiario">Cidade</label>
                                <b-input-group>
                                    <!-- Cidade -->
                                    <b-input id="localidade-beneficiario"
                                             placeholder="Brasília"
                                             v-model="formPagamentoCC.endereco.cidade"
                                             @blur="setFormClass(formPagamentoCC.validations.endereco.cidade, 'localidade-beneficiario')"
                                             @focus="setDirty"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.endereco.cidade.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isEnderecoCidadeValido"></i>
                                            <i class="fa fa-times fa-fw red" v-else></i>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-exclamation-triangle fa-fw"></i>
                                        </div>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="3">
                            <b-form-group class="text-center">
                                <label for="complemento-beneficiario">Complemento</label>
                                <b-input-group>
                                    <!-- Complemento -->
                                    <b-input id="complemento-beneficiario"
                                             placeholder="Sala 704"
                                             v-model="formPagamentoCC.endereco.complemento"
                                             @blur="setFormClass(formPagamentoCC.validations.endereco.complemento, 'complemento-beneficiario')"
                                             @focus="setDirty"
                                             class="text-center"></b-input>
                                    <b-input-group-append>
                                        <div v-if="formPagamentoCC.validations.endereco.complemento.dirty">
                                            <i class="fa fa-check fa-fw green" v-if="isEnderecoComplementoValido"></i>
                                            <i class="fa fa-times fa-fw red" v-else></i>
                                        </div>
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
                    <b-btn variant="success"
                           class="btn-lg font-condensed"
                           :disabled="!isFormValid"
                           block>
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
                                valid: false,
                                message: undefined
                            },
                            email: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            telefone: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            }
                        },
                        dadosCartaoCredito: {
                            numeroCartao: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            validade: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            cvc: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            nomeImpresso: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            cpfTitular: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            }
                        },
                        endereco: {
                            cep: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            logradouro: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            bairro: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            uf: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            cidade: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            },
                            complemento: {
                                dirty: false,
                                valid: false,
                                message: undefined
                            }
                        },
                    }
                },
                // Regex de máscaras personalizados
                customTokens: {
                    mask: 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN',
                    tokens: {
                        'N': {
                            pattern: /[a-zA-Z\s]/,
                            transform: function(v) {
                                return v;
                            }
                        }
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
                        this.formPagamentoCC.validations.informacoesBeneficiario.nome.dirty = true;
                        break;
                    case 'email-beneficiario':
                        this.formPagamentoCC.validations.informacoesBeneficiario.email.dirty = true;
                        break;
                    case 'telefone-beneficiario':
                        this.formPagamentoCC.validations.informacoesBeneficiario.telefone.dirty = true;
                        break;
                    case 'numero-cartao-beneficiario':
                        this.formPagamentoCC.validations.dadosCartaoCredito.numeroCartao.dirty = true;
                        break;
                    case 'nome-cartao-beneficiario':
                        this.formPagamentoCC.validations.dadosCartaoCredito.nomeImpresso.dirty = true;
                        break;
                    case 'validade-cartao-beneficiario':
                        this.formPagamentoCC.validations.dadosCartaoCredito.validade.dirty = true;
                        break;
                    case 'cvc-cartao-beneficiario':
                        this.formPagamentoCC.validations.dadosCartaoCredito.cvc.dirty = true;
                        break;
                    case 'cpf-cartao-beneficiario':
                        this.formPagamentoCC.validations.dadosCartaoCredito.cpfTitular.dirty = true;
                        break;
                    case 'cep-beneficiario':
                        this.formPagamentoCC.validations.endereco.cep.dirty = true;
                        break;
                    case 'logradouro-beneficiario':
                        this.formPagamentoCC.validations.endereco.logradouro.dirty = true;
                        break;
                    case 'bairro-beneficiario':
                        this.formPagamentoCC.validations.endereco.bairro.dirty = true;
                        break;
                    case 'uf-beneficiario':
                        this.formPagamentoCC.validations.endereco.uf.dirty = true;
                        break;
                    case 'localidade-beneficiario':
                        this.formPagamentoCC.validations.endereco.cidade.dirty = true;
                        break;
                    case 'complemento-beneficiario':
                        this.formPagamentoCC.validations.endereco.complemento.dirty = true;
                        break;
                }
            },
            /**
             * -----------------------------------------------------------------
             * Adiciona/Remove classes que setam os campos com cores diferentes,
             * de acordo com a situação.
             * - válido: verde
             * - inválido: vermelho
             * -----------------------------------------------------------------
             */
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
        },
        computed: {
            // Verifica se o nome está válido
            isBeneficiarioNomeValido: function() {
                let isValid = this.formPagamentoCC.informacoesBeneficiario.nome
                    && this.formPagamentoCC.informacoesBeneficiario.nome.length > 0
                    && this.formPagamentoCC.informacoesBeneficiario.nome.length <= 70;
                this.formPagamentoCC.validations.informacoesBeneficiario.nome.valid = isValid;
                return isValid;
            },
            // Verifica se o nome foi informado
            isBeneficiarioNomeNaoInformado: function() {
                return !this.formPagamentoCC.informacoesBeneficiario.nome;
            },
            // Verifica se o email está válido
            isBeneficiarioEmailValido: function () {
                const regexpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let isValid = this.formPagamentoCC.informacoesBeneficiario.email
                    && this.formPagamentoCC.informacoesBeneficiario.email.length > 0
                    && this.formPagamentoCC.informacoesBeneficiario.email.length < 70
                    && regexpEmail.test(this.formPagamentoCC.informacoesBeneficiario.email);
                this.formPagamentoCC.validations.informacoesBeneficiario.email.valid = isValid;
                return isValid;
            },
            // Verifica se o email foi informado
            isBeneficiarioEmailNaoInformado: function() {
                return !this.formPagamentoCC.informacoesBeneficiario.email;
            },
            // Verifica se o email atende ao padrão especificado
            isBeneficiarioEmailInvalido: function() {
                const regexpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return !regexpEmail.test(this.formPagamentoCC.informacoesBeneficiario.email);
            },
            isBeneficiarioTelefoneValido: function () {
                let isValid = this.formPagamentoCC.informacoesBeneficiario.telefone
                    && this.formPagamentoCC.informacoesBeneficiario.telefone.length > 0
                    && (this.formPagamentoCC.informacoesBeneficiario.telefone.length == 15 || this.formPagamentoCC.informacoesBeneficiario.telefone.length == 14);
                this.formPagamentoCC.validations.informacoesBeneficiario.telefone.valid = isValid;
                return isValid;
            },
            isNumeroCartaoCreditoValido: function () {
                let isValid = this.formPagamentoCC.dadosCartaoCredito.numeroCartao
                    && this.formPagamentoCC.dadosCartaoCredito.numeroCartao.length > 0
                    && this.formPagamentoCC.dadosCartaoCredito.numeroCartao.length == 19
                this.formPagamentoCC.validations.dadosCartaoCredito.numeroCartao.valid = isValid;
                return isValid;
            },
            isNomeCartaoCreditoValido: function() {
                let isValid = this.formPagamentoCC.dadosCartaoCredito.nomeImpresso
                    && this.formPagamentoCC.dadosCartaoCredito.nomeImpresso.length > 0
                    && this.formPagamentoCC.dadosCartaoCredito.nomeImpresso.length < 100;
                this.formPagamentoCC.validations.dadosCartaoCredito.nomeImpresso.valid = isValid;
                return isValid;
            },
            isValidadeCartaoCreditoValido:function() {
                let isValid = this.formPagamentoCC.dadosCartaoCredito.validade
                    && this.formPagamentoCC.dadosCartaoCredito.validade.length > 0
                    && this.formPagamentoCC.dadosCartaoCredito.validade.length == 7;
                    //&& !isNaN(this.formPagamentoCC.dadosCartaoCredito.validade);
                this.formPagamentoCC.validations.dadosCartaoCredito.validade.valid = isValid;
                return isValid;
            },
            isCVCCartaoCreditoValido: function() {
                let isValid = this.formPagamentoCC.dadosCartaoCredito.cvc
                    && this.formPagamentoCC.dadosCartaoCredito.cvc.length == 3
                    && !isNaN(this.formPagamentoCC.dadosCartaoCredito.cvc);
                this.formPagamentoCC.validations.dadosCartaoCredito.cvc.valid = isValid;
                return isValid;
            },
            isCPFCartaoCreditoValido: function() {
                let isValid = this.formPagamentoCC.dadosCartaoCredito.cpfTitular
                    && this.formPagamentoCC.dadosCartaoCredito.cpfTitular.length == 14;
                this.formPagamentoCC.validations.dadosCartaoCredito.cpfTitular.valid = isValid;
                return isValid;
            },
            isEnderecoCEPValido: function() {
                let isValid = this.formPagamentoCC.endereco.cep
                    && this.formPagamentoCC.endereco.cep.length > 0
                    && this.formPagamentoCC.endereco.cep.length < 11;
                this.formPagamentoCC.validations.endereco.cep.valid = isValid;
                return isValid;
            },
            isEnderecoLogradouroValido: function() {
                let isValid = this.formPagamentoCC.endereco.logradouro
                    && this.formPagamentoCC.endereco.logradouro.length > 0
                    && this.formPagamentoCC.endereco.logradouro.length < 100;
                this.formPagamentoCC.validations.endereco.logradouro.valid = isValid;
                return isValid;
            },
            isEnderecoBairroValido: function() {
                let isValid = this.formPagamentoCC.endereco.bairro
                    && this.formPagamentoCC.endereco.bairro.length > 0
                    && this.formPagamentoCC.endereco.bairro.length < 100;
                this.formPagamentoCC.validations.endereco.bairro.valid = isValid;
                return isValid;
            },
            isEnderecoUFValido: function() {
                let isValid = this.formPagamentoCC.endereco.uf
                    && this.formPagamentoCC.endereco.uf.length > 0
                    && this.formPagamentoCC.endereco.uf.length < 100;
                this.formPagamentoCC.validations.endereco.uf.valid = isValid;
                return isValid;
            },
            isEnderecoCidadeValido: function() {
                let isValid = this.formPagamentoCC.endereco.cidade
                    && this.formPagamentoCC.endereco.cidade.length > 0
                    && this.formPagamentoCC.endereco.cidade.length < 100;
                this.formPagamentoCC.validations.endereco.cidade.valid = isValid;
                return isValid;
            },
            isEnderecoComplementoValido: function () {
                this.formPagamentoCC.validations.endereco.complemento.valid = true;
                return true;
            },
            isFormValid: function() {
                return this.isBeneficiarioNomeValido
                    && this.isBeneficiarioEmailValido
                    && this.isBeneficiarioTelefoneValido
                    && this.isNumeroCartaoCreditoValido
                    && this.isNomeCartaoCreditoValido
                    && this.isValidadeCartaoCreditoValido
                    && this.isCVCCartaoCreditoValido
                    && this.isCPFCartaoCreditoValido
                    && this.isEnderecoCEPValido
                    && this.isEnderecoLogradouroValido
                    && this.isEnderecoBairroValido
                    && this.isEnderecoUFValido
                    && this.isEnderecoCidadeValido
                    && this.isEnderecoComplementoValido
            },
            isBeneficiarioNomeDirty() {
                return this.formPagamentoCC.validations.informacoesBeneficiario.nome.dirty;
            },
            isBeneficiarioEmailDirty() {
                return this.formPagamentoCC.validations.informacoesBeneficiario.email.dirty;
            },
            isBeneficiarioTelefoneDirty() {
                return this.formPagamentoCC.validations.informacoesBeneficiario.telefone.dirty;
            },
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
    .invalid-feedback {
        color: #bd811c;
    }
    .invalid-feedback > div::before {
        font-family: FontAwesome;
        content: "\f071";
        display: inline-block;
        padding-right: 5px;
        font-weight: 400;
    }
</style>
