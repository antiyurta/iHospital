import jwtInterceopter from '../../components/jwtInterceopter';
class Insurance {
   async getInsuranceServiceIdName(id) {
      return await jwtInterceopter.get('insurance/hics-service' + id);
   }
   async getHicsService() {
      return await jwtInterceopter.get('insurance/hics-service');
   }
   async getInsuranceService(params) {
      return await jwtInterceopter.get('insurance/hics-service-group', params);
   }
}
export default new Insurance();
