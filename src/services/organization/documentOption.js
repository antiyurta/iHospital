import jwtInterceopter from '../../components/jwtInterceopter';
class DocumentOption {
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('organization/document-option', conf);
   }
}
export default new DocumentOption();
