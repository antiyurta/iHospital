import jwtInterceopter from '@Comman/jwtInterceopter';
class UrgentApi {
   async getEmergencySorters(config) {
      return await jwtInterceopter.get('/emergency-sorters', config);
   }
   async postEmergencySorters(body) {
      return await jwtInterceopter.post('/emergency-sorters', body);
   }
   async patchEmergencySorters(id, body) {
      return await jwtInterceopter.patch('/emergency-sorters/' + id, body);
   }
   async deleteEmergencySorters(id) {
      return await jwtInterceopter.delete('/emergency-sorters/' + id);
   }
   async getCallEmergency(params) {
      return await jwtInterceopter.get('/call-emergency', { params });
   }
   async postCallEmergency(body) {
      return await jwtInterceopter.post('/call-emergency', body);
   }
}
export default new UrgentApi();
