import axios from 'axios';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const jwtInterceopter = axios.create({});
jwtInterceopter.interceptors.request.use((config) => {
   let tokens = JSON.parse(localStorage.getItem('tokens'));
   config.url = DEV_URL + config.url;
   config.headers.common['Authorization'] = `Bearer ${tokens.accessToken}`;
   config.headers.common['x-api-key'] = API_KEY;
   return config;
});

jwtInterceopter.interceptors.response.use(
   (response) => {
      return response;
   },
   async (error) => {
      console.log(error);
      if (error.response.status === 401) {
         let tokens = JSON.parse(localStorage.getItem('tokens'));
         const payload = {
            access_token: tokens.accessToken,
            refresh_token: tokens.refreshToken
         };
         let apiResponse = await axios.post(DEV_URL + 'auth/refreshtoken', payload);
         console.log(apiResponse);
         error.config.headers['Authorization'] = `Bearer ${apiResponse.accessToken}`;
         error.config.headers['x-api-key'] = API_KEY;
         return axios(error.config);
      } else {
         return Promise.reject(error);
      }
   }
);

export default jwtInterceopter;
