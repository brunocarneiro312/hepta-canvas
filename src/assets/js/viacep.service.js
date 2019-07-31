
const axios = require('axios');

/**
 * ----------------------------------------
 * Realiza uma requisição à API Viacep para
 * recuperar o endereço à partir do CEP
 * ----------------------------------------
 * @param cep
 */
export function requestViacep(cep) {
     return axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error;
        });
}