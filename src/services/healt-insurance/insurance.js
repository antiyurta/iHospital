import jwtInterceopter from '../../components/jwtInterceopter';
class Insurance {
   async getInsuranceServiceIdName(id) {
      return await jwtInterceopter.get('insurance/hics-service' + id);
   }
}
export default new Insurance();
