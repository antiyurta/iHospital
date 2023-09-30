import jwtInterceopter from '../../components/jwtInterceopter';
class PatientDiagnose {
   async getByPageFilter(params) {
      return await jwtInterceopter.get('emr/patient-diagnose', params);
   }
}
export default new PatientDiagnose();
