import jwtInterceopter from '../../components/jwtInterceopter';
class OperationApi {
   async get(params) {
      return await jwtInterceopter.get('service/operation', { params });
   }
   async getById(id) {
      return await jwtInterceopter.get(`service/operation/${id}`);
   }
   async patch(id, body) {
      return await jwtInterceopter.patch(`service/operation/${id}`, body);
   }
}
export default new OperationApi();
