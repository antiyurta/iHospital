import axios from 'axios';
import { openNofi } from './common';

const API_KEY = process.env.REACT_APP_API_KEY;
const DEV_URL = process.env.REACT_APP_DEV_URL;

var jwtInterceopter = axios.create({});

jwtInterceopter.defaults.baseURL = DEV_URL;

jwtInterceopter.interceptors.request.use((config) => {
   config.headers['Content-Type'] = 'application/json';
   let tokens = JSON.parse(localStorage.getItem('tokens'));
   if (tokens) {
      config.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
   }
   config.headers['x-api-key'] = API_KEY;
   return config;
});

jwtInterceopter.interceptors.response.use(
   (response) => {
      return response;
   },
   async (error) => {
      const originalConfig = error.config;
      if (originalConfig?.url !== '/auth/login' && error.response) {
         if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
               let tokens = JSON.parse(localStorage.getItem('tokens'));
               const response = await axios.get(DEV_URL + 'authentication/refresh', {
                  headers: {
                     Authorization: `Bearer ${tokens.accessToken}`,
                     'refresh-token': `${tokens.refreshToken}`,
                     'x-api-key': API_KEY
                  }
               });
               localStorage.setItem('tokens', JSON.stringify(response.data.response));
               error.config.headers['Authorization'] = `bearer ${response.data.response.accessToken}`;
               error.config.headers['x-api-key'] = API_KEY;
               return axios(error.config);
            } catch (error) {
               console.log(error);
               openNofi('info', 'Анхааруулга', 'Системд нэвтрэх хугацаа дууссан байна.');
               localStorage.removeItem('tokens');
               window.location.href = '/auth/login';
               return Promise.reject(error);
            }
         }
      }
      return Promise.reject(error);
   }
);

export default jwtInterceopter;
