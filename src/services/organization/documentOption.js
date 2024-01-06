import jwtInterceopter from '../../components/jwtInterceopter';
class DocumentOption {
   async getById(id) {
      return await jwtInterceopter.get('organization/document-option/' + id);
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('organization/document-option', conf);
   }
   async post(data) {
      return await jwtInterceopter.post('organization/document-option/custom-all', data);
   }
   async patch(data) {
      return await jwtInterceopter.patch('organization/document-option/update/custom', data);
   }
   async delete(id) {
      return await jwtInterceopter.delete('organization/document-option/' + id);
   }
}
export default new DocumentOption();
