import axios from 'axios';
// const CHAT_URL = process.env.REACT_APP_DEV_CHAT_URL;
// const CHAT_URL = 'http://192.82.92.173:8989/';
const dd = 'https://ihospital.mn/chat/';
const API_KEY = process.env.REACT_APP_API_KEY;
let tokens = JSON.parse(localStorage.getItem('tokens'));
class Chat {
   async getAllUsers(conf) {
      return axios.get(`${CHAT_URL}users`, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         },
         params: conf
      });
   }
   async getOnlineUsers(conf) {
      return axios.get(`${dd}users/online-users`, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         },
         params: conf
      });
   }
   async postRoom(data) {
      return axios.post(`${dd}rooms`, data, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         }
      });
   }
   async updateRoom(id, data) {
      return axios.patch(`${dd}rooms/${id}`, data, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         }
      });
   }
   async getRooms(id) {
      return axios.get(`${dd}myRooms/${id}`, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         }
      });
   }
   async getRoomMessages(roomId, page, limit) {
      return axios.get(`${dd}messages/room/${roomId}`, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         },
         params: {
            page: page,
            limit: limit
         }
      });
   }
   async getAllMessages(page, limit) {
      return axios.get(`${dd}messages`, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         },
         params: {
            page: page,
            limit: limit
         }
      });
   }
}
export default new Chat();
