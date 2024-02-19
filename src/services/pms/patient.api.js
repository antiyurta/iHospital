import jwtInterceopter from '../../components/jwtInterceopter';
class PatientApi {
   async get() {
      return await jwtInterceopter.get('pms/patient');
   }
   async getFilter() {
      return await jwtInterceopter.get('pms/patient');
   }
   async getById(id) {
      return await jwtInterceopter.get(`pms/patient/${id}`);
   }
   async post(data) {
      return await jwtInterceopter.post('pms/patient', data);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch(`pms/patient/${id}`, data);
   }
   async delete(id) {
      return await jwtInterceopter.delete(`pms/patient/${id}`);
   }
   async getCheckRegNo(conf) {
      return await jwtInterceopter.get('pms/patient/check/regno', conf);
   }
   async getInsurancePayments(conf) {
      return await jwtInterceopter.get('pms/patient/insurance/payments', conf);
   }
}
export default new PatientApi();
