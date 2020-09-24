import http from '../../../helper/http';

export default class LoginService {

  // login = (payload) => {
  //   return this.http.post('http://192.168.15.8:8000/login', payload);
  // }

  login = (payload) => {
    return http.post('/login', payload);
  }

}
