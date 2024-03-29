import jwtInterceopter from '../../components/jwtInterceopter';
class TreatmentApi {
   async get(params) {
      return await jwtInterceopter.get('service/treatment', { params });
   }
   async getById(id) {
      return await jwtInterceopter.get(`service/treatment/${id}`);
   }
}
export default new TreatmentApi();
