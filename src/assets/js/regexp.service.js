/**
 * ---------------------------------
 * Serviço que fornece padrões regex
 * ---------------------------------
 */
export class RegexpService {

    // Regex para E-mail
    getEmailRegexPattern = function() {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
}