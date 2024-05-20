import jwtInterceopter from '../../components/jwtInterceopter';
class XrayApi {
   async get(params) {
      return await jwtInterceopter.get('service/xray', { params });
   }
   async getById(id) {
      return await jwtInterceopter.get(`service/xray/${id}`);
   }
   async post(body) {
      return await jwtInterceopter.post('service/xray', body);
   }
}
export default new XrayApi();
