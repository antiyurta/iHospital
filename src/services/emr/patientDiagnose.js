import jwtInterceopter from '../../components/jwtInterceopter';
class PatientDiagnose {
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('emr/patient-diagnose', conf);
   }
}
export default new PatientDiagnose();
