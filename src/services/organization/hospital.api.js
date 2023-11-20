import jwtInterceopter from '../../components/jwtInterceopter';
class HospitalApi {
   async getById(id) {
      return await jwtInterceopter.get(`organization/hospital/${id}`);
   }
}
export default new HospitalApi();
