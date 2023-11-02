import jwtInterceopter from '../../components/jwtInterceopter';
class SurgeryApi {
   async get(params) {
      return await jwtInterceopter.get('service/surgery', { params });
   }
   async getById(id) {
      return await jwtInterceopter.get(`service/surgery/${id}`);
   }
}
export default new SurgeryApi();
