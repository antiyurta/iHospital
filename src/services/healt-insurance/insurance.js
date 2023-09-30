import jwtInterceopter from '../../components/jwtInterceopter';
class Insurance {
   async getInsuranceServiceIdName(id) {
      return await jwtInterceopter.get('insurance/hics-service' + id);
   }
   async getHicsService() {
      return await jwtInterceopter.get('insurance/hics-service');
   }
}
export default new Insurance();
