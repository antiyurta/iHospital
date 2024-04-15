import jwtInterceopter from '../../components/jwtInterceopter';
class SurgeryApi {
   async get(params) {
      return await jwtInterceopter.get('service/surgery', { params });
   }
   async getById(id) {
      return await jwtInterceopter.get(`service/surgery/${id}`);
   }
   async getRequest(params) {
      return await jwtInterceopter.get('service/surgeryRequest', { params });
   }
   async getRequestById(id) {
      return await jwtInterceopter.get('service/surgeryRequest/' + id);
   }
   async postRequestConfirm(body) {
      return await jwtInterceopter.post('service/surgeryRequest/confirm', body);
   }
   async patchRequest(id, body) {
      return await jwtInterceopter.patch('service/surgeryRequest/' + id, body);
   }
   async putRequestPlan(id, body) {
      return await jwtInterceopter.put('service/surgeryRequest/plan/' + id, body);
   }
}
export default new SurgeryApi();
