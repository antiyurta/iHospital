import jwtInterceopter from '../../components/jwtInterceopter';
class Examniation {
   async get(conf) {
      return await jwtInterceopter.get('service/examination', conf);
   }
   async getById(id) {
      return await jwtInterceopter.get('service/examination/' + id);
   }
}
export default new Examniation();
