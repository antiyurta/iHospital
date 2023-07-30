import jwtInterceopter from '../components/jwtInterceopter';
class ServiceRequest {
   async post(data) {
      return await jwtInterceopter.post('service-request', data);
   }
}
export default new ServiceRequest();
