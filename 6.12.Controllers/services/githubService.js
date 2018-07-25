import axios from 'axios';

const service = {}

service.getRepositories = function (githubUser) {
return axios
  .get('https://api.github.com/users/ezeggonzalez/repos');
  .then(function(res){
 return res.data
})
}
//llamada de github con axios para obtener repos
module.exports = service;
