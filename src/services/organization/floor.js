import jwtInterceopter from '../../components/jwtInterceopter';
class FloorServices {
   async get(conf) {
      return await jwtInterceopter.get('organization/floor', conf);
   }
}
export default new FloorServices();
