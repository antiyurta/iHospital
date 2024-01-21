import jwtInterceopter from '../../components/jwtInterceopter';
class InPatientApi {
   async get(params) {
      return await jwtInterceopter.get('service/treatment', { params });
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('service/inpatient-request/bed/' + id, data);
   }
}
export default new InPatientApi();
