import jwtInterceopter from '../../components/jwtInterceopter';
class Service {
   async getSetOrder(conf) {
      return await jwtInterceopter.get('service/setorder', conf);
   }
   async postSetOrder(data) {
      return await jwtInterceopter.post('service/setorder', data);
   }
   async postInpatientRequest(data) {
      return await jwtInterceopter.post('service/inpatient-request', data);
   }
   async patchSetOrder(id, data) {
      return await jwtInterceopter.patch('service/setorder/' + id, data);
   }
}
export default new Service();
