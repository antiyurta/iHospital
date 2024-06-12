import jwtInterceopter from '../../components/jwtInterceopter';
class Zone {
   async get(params) {
      return await jwtInterceopter.get('reference/zone', { params });
   }
}
export default new Zone();
