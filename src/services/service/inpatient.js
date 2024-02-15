import jwtInterceopter from '../../components/jwtInterceopter';
class InPatientApi {
   async get(params) {
      return await jwtInterceopter.get('service/treatment', { params });
   }
   async getInpatient(config) {
      return await jwtInterceopter.get('service/inpatient-request', config);
   }
   async getBedPatient(id) {
      return await jwtInterceopter.get('service/inpatient-request/bedPatient/' + id);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('service/inpatient-request/bed/' + id, data);
   }
   async bedSwitch(id, data) {
      return await jwtInterceopter.patch('service/inpatient-request/switch/' + id, data);
   }
}
export default new InPatientApi();
