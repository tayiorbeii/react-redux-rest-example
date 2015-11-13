import { AUTH_URL } from '../constants/auth';
import { email, password, token  } from '../credentials';


let rp = require('request-promise');


function getAthletes() {
  let reqOptions = {
    url: 'http://localhost:4000/athletes',
    json: true
  };
  
  return new Promise(function(resolve, reject){
    rp(reqOptions)
      .then(function(response) {
        console.log(response)
        resolve(response);
      })
      .catch(function(err) {
        reject(err);
      })
  })

}


class Auth {
  getToken () {
    return (console.log('maybe this works' + getAthletes()));
  }
}

export default new Auth();
