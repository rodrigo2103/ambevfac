import axios from 'axios';
import { getToken } from "../services/auth";

    const instance = axios.create({
      baseURL: 'https://lit-escarpment-21884.herokuapp.com',
    });

    instance.interceptors.request.use(async config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

export default instance;
