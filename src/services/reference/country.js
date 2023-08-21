import jwtInterceopter from '../../components/jwtInterceopter';
class Country {
   async get() {
      return await jwtInterceopter.get('reference/country');
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('reference/country', conf);
   }
}
export default new Country();
