import jwtInterceopter from '../../components/jwtInterceopter';
class BlockServices {
   async get(conf) {
      return await jwtInterceopter.get('organization/block', conf);
   }
}
export default new BlockServices();
