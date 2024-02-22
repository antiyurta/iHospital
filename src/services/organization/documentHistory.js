import jwtInterceopter from '../../components/jwtInterceopter';
class DocumentHistory {
   async getById(id) {
      return await jwtInterceopter.get('document-history/' + id);
   }
   async patch(id, data, config) {
      return await jwtInterceopter.patch('document-history/' + id, data, config);
   }
}
export default new DocumentHistory();
