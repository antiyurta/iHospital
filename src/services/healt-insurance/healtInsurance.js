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
}
export default new HealtInsurance();
