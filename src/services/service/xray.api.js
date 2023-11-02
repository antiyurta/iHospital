import jwtInterceopter from '../../components/jwtInterceopter';
class XrayApi {
   async get(params) {
      return await jwtInterceopter.get('service/xray', { params });
   }
   async getById(id) {
      return await jwtInterceopter.get(`service/xray/${id}`);
   }
}
export default new XrayApi();
