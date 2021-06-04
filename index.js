// JavaScript source code
const axios = require('axios');
    
axios({
    method: 'get',
    url: 'https://v1.nocodeapi.com/madskillzteampcf/cx/GMOxsTputoxNcsfM/rates?source=&target=', 
    params: {},
}).then(function (response) {
        // handle success
        console.log(response.data);
}).catch(function (error) {
        // handle error
        console.log(error);
})