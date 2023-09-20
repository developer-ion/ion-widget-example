const host = 'https://marsku-01.uniteus.id/crm_widget';
const auth = 'f26a3ad04687a984430c8436f730be3fdd234a84';

import axios from 'axios';

export default async function call(params){
    let url     = params?.url || null;
    let method  = params?.method || 'get';
    let data    = params?.data || null;

    let config  = {
                    method,
                    url: `${host}/${url}`,
                    timeout: 1000 * 60 * 3, //wait 3 minute
                    withCredentials: false,
                    headers: { 
                        'Content-Type': 'application/json',
                        'X-API-KEY': auth,
                        // 'Access-Control-Allow-Credentials':true
                    },
                };
    if(data){
        config.data = JSON.stringify(data);
    }

    if(params?.headers){
        config.headers = {...config.headers,...params.headers}
    }

    let result  = await axios(config).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error;
    });
    return result;
}