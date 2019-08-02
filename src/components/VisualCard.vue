<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <b-row class="no-gutters p-1">
                    <b-col class="section-1">
                        <b-row class="text-center">
                            <b-col class="card-brands large-text">
                                <i class="fa fa-cc-visa fa-fw fa-lg"></i>
                                <i class="fa fa-cc-mastercard fa-fw fa-lg"></i>
                                <i class="fa fa-cc-discover fa-fw fa-lg"></i>
                                <i class="fa fa-cc-diners-club fa-fw fa-lg"></i>
                                <i class="fa fa-cc-amex fa-fw fa-lg"></i>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="no-gutters p-2">
                    <b-col class="section-2">
                        <b-row>
                            <b-col cols="10">
                                <div class="tiny-text">
                                    <b>NÚMERO DO CARTÃO</b>
                                </div>
                                <div class="big-text">
                                    {{ formattedCardNumber }}
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="no-gutters p-2">
                    <b-col class="section-3">
                        <b-row>
                            <b-col>
                                <div class="tiny-text">
                                    <b>NOME IMPRESSO</b>
                                </div>
                                <div>
                                    <b class="text-uppercase">{{ name }}</b>
                                </div>
                            </b-col>
                            <b-col class="text-right">
                                <div class="tiny-text">
                                    <b>VALIDADE</b>
                                </div>
                                <div>
                                    <b>{{ expiration }}</b>
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
                                            {{ cvv }}
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
            cvv: Number
        },
        mounted: function() {

        },
        data: function() {
            return {

            }
        },
        computed: {
            formattedCardNumber() {
                let group1 = this.cardNumber.split('').slice(0, 4).join('');
                let group2 = this.cardNumber.split('').slice(4, 8).join('');
                let group3 = this.cardNumber.split('').slice(8, 12).join('');
                let group4 = this.cardNumber.split('').slice(12).join('');

                return `${group1} ${group2} ${group3} ${group4}`;
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
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 15px;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .flip-card-front {
        color: black;
        background: white;
        border: 2px solid #999;
        border-radius: 15px;
    }

    .flip-card-back {
        transform: rotateY(180deg);
        background: white;
        border: 2px solid #999;
        border-radius: 15px;
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


