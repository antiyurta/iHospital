import jwtInterceopter from '../../components/jwtInterceopter';
class DocumentsFormPatient {
   async post(data) {
      return await jwtInterceopter.post('document-middleware', data);
   }
   async getByDocument(id, params) {
      return await jwtInterceopter.get('document-middleware/patientId/' + id, {
         params: params
      });
   }
}
export default new DocumentsFormPatient();
