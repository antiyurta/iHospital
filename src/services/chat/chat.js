import axios from 'axios';
const CHAT_URL = process.env.REACT_APP_DEV_CHAT_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
let tokens = JSON.parse(localStorage.getItem('tokens'));
class Chat {
   async getOnlineUsers(conf) {
      return axios.get(CHAT_URL + 'users', {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         },
         params: conf
      });
   }
}
export default new Chat();
