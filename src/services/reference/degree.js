import jwtInterceopter from '../../components/jwtInterceopter';
class Degree {
   async get(conf) {
      return await jwtInterceopter.get('reference/degree', conf);
   }
}
export default new Degree();
