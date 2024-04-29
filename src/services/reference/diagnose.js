import jwtInterceopter from '../../components/jwtInterceopter';
class Diagnose {
   async get(conf) {
      return await jwtInterceopter.get('reference/diagnose', conf);
   }
   async getById(id) {
      return await jwtInterceopter.get('reference/diagnose/' + id);
   }
}
export default new Diagnose();
