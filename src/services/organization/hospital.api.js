import jwtInterceopter from '../../components/jwtInterceopter';
class HospitalApi {
   async get(params) {
      return await jwtInterceopter.get('organization/hospital', { params });
   }
   async getById(id) {
      return await jwtInterceopter.get(`organization/hospital/${id}`);
   }
   async post(body) {
      return await jwtInterceopter.post('organization/hospital', body);
   }
   async patch(id, body) {
      return await jwtInterceopter.patch(`organization/hospital/${id}`, body);
   }
}
export default new HospitalApi();
