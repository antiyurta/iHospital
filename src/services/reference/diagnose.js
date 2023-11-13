import jwtInterceopter from '../../components/jwtInterceopter';
class Diagnose {
   async get(conf) {
      return await jwtInterceopter.get('reference/diagnose', conf);
   }
}
export default new Diagnose();
