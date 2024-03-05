import jwtInterceopter from '../../components/jwtInterceopter';
class PatientHistory {
   async getPatientHistory(config) {
      return await jwtInterceopter.get('emr/patient-history', config);
   }
   async postPatientHistory(data) {
      return await jwtInterceopter.post('emr/patient-history', data);
   }
   async patchPatientHistory(id, data) {
      return await jwtInterceopter.patch('emr/patient-history/' + id, data);
   }
}
export default new PatientHistory();
