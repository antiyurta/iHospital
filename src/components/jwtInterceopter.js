import axios from 'axios';
import { openNofi } from './comman';

const API_KEY = process.env.REACT_APP_API_KEY;

var jwtInterceopter = axios.create({});

jwtInterceopter.defaults.baseURL = '/api/';

jwtInterceopter.interceptors.request.use((config) => {
   config.headers['Content-Type'] = 'application/json';
   let tokens = JSON.parse(localStorage.getItem('tokens'));
   if (tokens) {
      config.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
      config.headers['x-api-key'] = API_KEY;
   }
   return config;
});

jwtInterceopter.interceptors.response.use(
   (response) => {
      return response;
   },
   async (error) => {
      console.log('============>', error);
      const originalConfig = error.config;
      if (originalConfig?.url !== '/login' && error.response) {
         console.log(error);
         if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
               let tokens = JSON.parse(localStorage.getItem('tokens'));
               const response = await axios.get('/api/authentication/refresh', {
                  headers: {
                     Authorization: `Bearer ${tokens.accessToken}`,
                     'refresh-token': `${tokens.refreshToken}`,
                     'x-api-key': API_KEY
                  }
               });
               console.log(response);
               localStorage.setItem('tokens', JSON.stringify(response.data.response));
               error.config.headers['Authorization'] = `bearer ${response.data.response.accessToken}`;
               error.config.headers['x-api-key'] = API_KEY;
               return axios(error.config);
            } catch (_error) {
               openNofi('info', 'Анхааруулга', 'Системд нэвтрэх хугацаа дууссан байна.');
               localStorage.removeItem('tokens');
               window.location.href = '/login';
               return Promise.reject(_error);
            }
         }
      }
      return Promise.reject(error);
   }
);

export default jwtInterceopter;
