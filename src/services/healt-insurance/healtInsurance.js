import jwtInterceopter from '../../components/jwtInterceopter';
class HealtInsurance {
   async getHicsServiceGroup() {
      return await jwtInterceopter.get('insurance/hics-service-group');
   }
   async postCancelService(data) {
      return await jwtInterceopter.post('health-insurance/cancel-service', data);
   }
   async postRepair(data) {
      return await jwtInterceopter.post('health-insurance/repair', data);
   }
   async postCitizenInfo(data) {
      return await jwtInterceopter.post('health-insurance/citizen-info', data);
   }
   async getPatientSheet(regno) {
      return await jwtInterceopter.get(`health-insurance/patient-sheet/${regno}`);
   }
   async setPatientSheet(data) {
      return await jwtInterceopter.post('/health-insurance/patient-sheet', data);
   }
   async getSentReason(params) {
      return await jwtInterceopter.get('/health-insurance/sent-reason', params);
   }
   async saveHics(data) {
      return await jwtInterceopter.post('/health-insurance/hics-service', data);
   }
   async getApprovalList(regno) {
      return await jwtInterceopter.post(`/health-insurance/approval-list/${regno}`);
   }
}
export default new HealtInsurance();
