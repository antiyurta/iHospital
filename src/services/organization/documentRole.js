import jwtInterceopter from '../../components/jwtInterceopter';
class DocumentRole {
   async get() {
      return await jwtInterceopter.get('organization/document-role');
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('organization/document-role', conf);
   }
   async getByPageFilterShow(conf) {
      return await jwtInterceopter.get('organization/document-role/show', conf);
   }
}
export default new DocumentRole();
