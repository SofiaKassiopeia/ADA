//const axios = require('axios') //common js
import axios from 'axios';
var superObjeto = {}

axios.get('http://localhost:3000/users/listjson')
.then(function(res){
    console.log(res.data)
    superObjeto.respuesta1 = res.data;
    return axios.get('http://localhost:3000/users/listjson2')
})

.then(function(res){
    console.log('respuesta de listjson2')
    superObjeto.respuesta2 = res.data;
})

.then(function(){
    console.log('superObjeto')
})

.catch(function(err){
    console.log('catch')
})
console.log()