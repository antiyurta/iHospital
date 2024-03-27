import jwtInterceopter from '../components/jwtInterceopter';
class RegularApi {
   async get(url, conf) {
      return await jwtInterceopter.get(url, conf);
   }
   async post(url, body) {
      return await jwtInterceopter.post(url, body);
   }
   async patch(url, body) {
      return await jwtInterceopter.patch(url, body);
   }
   async delete(url, id) {
      return await jwtInterceopter.post(url, body);
   }
}
export default new RegularApi();
