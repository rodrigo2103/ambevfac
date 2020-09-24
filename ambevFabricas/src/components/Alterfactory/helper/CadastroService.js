import http from '../../../helper/http';

export default class CadastroService {
  createAccount = (payload) => {
    return http.post('/user/cadastro', payload);
  }
  // createAccount = (payload) => {
  //   return this.http.post('http://192.168.15.8:8000/user/cadastro', payload);
  // }
}
