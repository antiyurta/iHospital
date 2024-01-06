import jwtInterceopter from '../../components/jwtInterceopter';
class InspectionNote {
   async getByPatientId(patientId) {
      return await jwtInterceopter.get('emr/inspectionNote', {
         params: {
            patientId: patientId
         }
      });
   }
   async post(data) {
      return await jwtInterceopter.post('emr/inspectionNote', data);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('emr/inspectionNote/' + id, data);
   }
}
export default new InspectionNote();
