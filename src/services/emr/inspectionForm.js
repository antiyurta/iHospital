import jwtInterceopter from '../../components/jwtInterceopter';
class InspectionForm {
   async get(config) {
      return await jwtInterceopter.get('emr/inspection-form', config);
   }
   async post(data) {
      return await jwtInterceopter.post('emr/inspection-form', data);
   }
   async delete(id) {
      return await jwtInterceopter.delete('emr/inspection-form/' + id);
   }
}
export default new InspectionForm();
