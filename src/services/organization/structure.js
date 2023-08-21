import jwtInterceopter from '../../components/jwtInterceopter';
class Structure {
   async get(conf) {
      return await jwtInterceopter.get('organization/structure', conf);
   }
}
export default new Structure();
