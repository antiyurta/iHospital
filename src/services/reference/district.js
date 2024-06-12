import jwtInterceopter from '../../components/jwtInterceopter';
class district {
   async get(params) {
      return await jwtInterceopter.get('reference/district', { params });
   }
}
export default new district();
