import axios from 'axios';
const CHAT_URL = process.env.REACT_APP_DEV_CHAT_URL;
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
      return axios.get(`${CHAT_URL}users/online-users`, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         },
         params: conf
      });
   }
   async postRoom(data) {
      return axios.post(`${CHAT_URL}rooms`, data, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         }
      });
   }
   async updateRoom(id, data) {
      return axios.patch(`${CHAT_URL}rooms/${id}`, data, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         }
      });
   }
   async getRooms(id) {
      return axios.get(`${CHAT_URL}myRooms/${id}`, {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`
         }
      });
   }
   async getRoomMessages(roomId, page, limit) {
      return axios.get(`${CHAT_URL}messages/room/${roomId}`, {
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
      return axios.get(`${CHAT_URL}messages`, {
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
