import jwtInterceopter from '../../components/jwtInterceopter';
class Structure {
   async get(conf) {
      return await jwtInterceopter.get('organization/structure', conf);
   }
   async getById(id) {
      return await jwtInterceopter.get('organization/structure/' + id);
   }
}
export default new Structure();
