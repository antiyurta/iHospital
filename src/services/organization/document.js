import jwtInterceopter from '../../components/jwtInterceopter';
class DocumentsFormPatient {
   async get(config) {
      return await jwtInterceopter.get('document-middleware/', config);
   }
   async getById(id) {
      return await jwtInterceopter.get('document-middleware/' + id);
   }
   async post(data) {
      return await jwtInterceopter.post('document-middleware', data);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('document-middleware/' + id, data);
   }
   async getByDocument(id, params) {
      return await jwtInterceopter.get('document-middleware/patientId/' + id, {
         params: params
      });
   }
   async deleteDocument(id) {
      return await jwtInterceopter.delete('document-middleware/' + id);
   }
}
export default new DocumentsFormPatient();
