import jwtInterceopter from '../../components/jwtInterceopter';
class province {
   async get(params) {
      return await jwtInterceopter.get('reference/province', { params });
   }
}
export default new province();
