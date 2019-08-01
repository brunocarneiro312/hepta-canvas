
const axios = require('axios');

/**
 * -----------------------------------
 * Realiza uma requisição à API Viacep
 * -----------------------------------
 */
export class ViacepService {

    // Obtém o endereço do CEP passado como parâmetro
    requestViacep(cep) {
         return axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(function(response) {
                return response;
            })
            .catch(function(error) {
                return error;
            });
    }
}