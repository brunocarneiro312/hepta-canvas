<template>
    <div class="flip-card">
        <div id="card-inner" class="flip-card-inner">
            <div class="flip-card-front">
                <b-row class="no-gutters p-1">
                    <b-col class="section-1">
                        <b-row class="text-center">
                            <b-col class="card-brands large-text">
                                <i class="fa fa-cc-visa fa-fw"></i>
                                <i class="fa fa-cc-mastercard fa-fw"></i>
                                <i class="fa fa-cc-discover fa-fw"></i>
                                <i class="fa fa-cc-diners-club fa-fw"></i>
                                <i class="fa fa-cc-amex fa-fw"></i>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="no-gutters p-2">
                    <b-col class="section-2">
                        <b-row>
                            <b-col>
                                <div class="tiny-text">
                                    <b>NÚMERO DO CARTÃO</b>
                                </div>
                                <div class="big-text">
                                    {{ formattedCardNumber || '0000 0000 0000 0000' }}
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="no-gutters p-2">
                    <b-col class="section-3">
                        <b-row>
                            <b-col cols="8">
                                <div class="tiny-text">
                                    <b>NOME IMPRESSO</b>
                                </div>
                                <div>
                                    <b class="text-uppercase">{{ formattedName || 'seu nome'}}</b>
                                </div>
                            </b-col>
                            <b-col class="text-right">
                                <div class="tiny-text">
                                    <b>VALIDADE</b>
                                </div>
                                <div>
                                    <b>{{ expiration || '00/0000'}}</b>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </div>
            <div class="flip-card-back">
                <b-row class="no-gutters mt-3">
                    <b-col class="section-1">
                        <b-row class="text-center">

                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="no-gutters p-2">
                    <b-col class="section-2">
                        <b-row>
                            <b-col cols="10">

                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="no-gutters p-2">
                    <b-col class="section-3">
                        <b-row>
                            <b-col>
                                <div>
                                    <b-row class="cvv-stripe font-inconsolata no-gutters p-0">
                                        <b-col class="text-center big-text" offset="10" style="background: #ddd">
                                            {{ cvv || '000' }}
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="tiny-text text-center mr-3">
                                    <b-row>
                                        <b-col offset="10">
                                            <b>CVV</b>
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VisualCard",
        props: {
            name: String,
            cardNumber: String,
            expiration: String,
            cvv: String,
            flip: Boolean
        },
        data: function() {
            return {

            }
        },
        computed: {
            formattedCardNumber() {
                return this.cardNumber;
            },
            formattedName() {
                if (this.name && this.name.length) {
                    return this.name.split('').slice(0, 20).join('');
                }
                return this.name;
            }
        },
        watch: {
            flip: function(newVal, oldVal) {
                this.flipCard();
            },
            name: function(newVal, oldVal) {

            },
            cardNumber: function(newVal, oldVal) {

            },
            cvv: function(newVal, oldVal) {

            },
            expiration: function(newVal, oldVal)  {

            }
        },
        methods: {
            flipCard() {
                if (this.flip) {
                    document.querySelector("#card-inner").classList.add('rotateY180deg');
                }
                else {
                    document.querySelector("#card-inner").classList.remove('rotateY180deg');
                }
            }
        }
    }
</script>

<style scoped>
    .flip-card {
        background-color: transparent;
        width: 100%;
        height: 220px;
        perspective: 1000px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        -moz-transition: transform 0.6s;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        -webkit-transition: -webkit-transform 0.6s;
        transition: transform 0.6s, -webkit-transform 0.6s;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 15px;
    }

    .rotateY180deg {
        transform: rotateY(180deg);transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .flip-card-front {
        color: black;
        background: rgb(255,255,255);
        background: linear-gradient(159deg, rgba(255,255,255,1) 0%, rgba(221,221,221,1) 100%, rgba(0,212,255,1) 100%);
        border: 2px solid #999;
        border-radius: 15px;
    }

    .flip-card-back {
        transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        background: rgb(255,255,255);
        background: linear-gradient(159deg, rgba(255,255,255,1) 0%, rgba(221,221,221,1) 100%, rgba(0,212,255,1) 100%);
        border: 2px solid #999;
        border-radius: 15px;
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        max-width: 400px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-font-smoothing: antialiased;
    }

    .section-1 {
        height: 60px;
    }

    .section-2,
    .section-3 {
        color: rgba(0, 0, 0, .5);
        font-family: 'Source Code Pro', monospace;
        font-weight: 500;
        margin-top: 10px;
    }

    .card-brands i {
        margin-right: 7.5px;
        color: rgba(0, 0, 0, .65);
    }

    .flip-card-back .section-1 {
        background: #222222;
        height: 40px;
    }

    .cvv-stripe {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 5px;
    }
</style>


