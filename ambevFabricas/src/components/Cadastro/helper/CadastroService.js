import http from '../../../helper/http';

export default class CadastroService {
  createAccount = (payload) => {
    return http.post('/user/cadastro', payload);
  }
  
}
