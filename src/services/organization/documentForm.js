import jwtInterceopter from '../../components/jwtInterceopter';
class DocumentForm {
   async getById(id) {
      return await jwtInterceopter.get('organization/document-form/' + id);
   }
   async getAll() {
      return await jwtInterceopter.get('organization/document-form');
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('organization/document-form', conf);
   }
   async post(data) {
      return await jwtInterceopter.post('organization/document-form', data);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('organization/document-form/' + id, data);
   }
   async delete(id) {
      return await jwtInterceopter.delete('organization/document-form/' + id);
   }
}
export default new DocumentForm();
