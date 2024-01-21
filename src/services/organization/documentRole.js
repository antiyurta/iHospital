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
   async post(data) {
      return await jwtInterceopter.post('organization/document-role', data);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('organization/document-role/' + id, data);
   }
   async delete(id) {
      return await jwtInterceopter.delete('organization/document-role/' + id);
   }
}
export default new DocumentRole();
