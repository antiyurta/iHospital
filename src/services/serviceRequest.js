import jwtInterceopter from '../components/jwtInterceopter';
class ServiceRequest {
   async get(conf) {
      return await jwtInterceopter.get('service-request', conf);
   }
   async post(data) {
      return await jwtInterceopter.post('service-request', data);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('service-request/' + id, data);
   }
}
export default new ServiceRequest();
