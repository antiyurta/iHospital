import jwtInterceopter from '../../components/jwtInterceopter';
class Xray {
   async get(conf) {
      return await jwtInterceopter.get('service/xray', conf);
   }
   async getById(id) {
      return await jwtInterceopter.get('service/xray/' + id);
   }
}
export default new Xray();
