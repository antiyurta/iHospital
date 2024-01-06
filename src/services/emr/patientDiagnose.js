import jwtInterceopter from '../../components/jwtInterceopter';
class PatientDiagnose {
   async getByPageFilter(params) {
      return await jwtInterceopter.get('emr/patient-diagnose', params);
   }
   async delete(id) {
      return await jwtInterceopter.delete('emr/patient-diagnose/' + id);
   }
}
export default new PatientDiagnose();
