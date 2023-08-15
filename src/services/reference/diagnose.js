import jwtInterceopter from '../../components/jwtInterceopter';
class Country {
   async get(conf) {
      return await jwtInterceopter.get('reference/diagnose', conf);
   }
}
export default new Country();
