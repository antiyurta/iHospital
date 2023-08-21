import jwtInterceopter from '../../components/jwtInterceopter';
class DocumentForm {
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('organization/document-form', conf);
   }
}
export default new DocumentForm();
