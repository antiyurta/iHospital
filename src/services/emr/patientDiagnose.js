import jwtInterceopter from '../../components/jwtInterceopter';
class PatientDiagnose {
   async getByPageFilter(params) {
      return await jwtInterceopter.get('emr/patient-diagnose', params);
   }
   async post(body) {
      return await jwtInterceopter.post('emr/patient-diagnose', body);
   }
   async patch(id, body) {
      return await jwtInterceopter.patch('emr/patient-diagnose/' + id, body);
   }
   async delete(id) {
      return await jwtInterceopter.delete('emr/patient-diagnose/' + id);
   }
}
export default new PatientDiagnose();
