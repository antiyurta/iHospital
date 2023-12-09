import jwtInterceopter from '../../components/jwtInterceopter';
class PatientHistory {
   async getPatientHistory(params) {
      return await jwtInterceopter.get('emr/patient-history', params);
   }
   async postPatientHistory(data) {
      return await jwtInterceopter.post('emr/patient-history', data);
   }
}
export default new PatientHistory();
