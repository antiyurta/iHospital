import jwtInterceopter from '../../components/jwtInterceopter';
class InspectionNote {
   async getByPatientId(patientId) {
      return await jwtInterceopter.get('emr/inspectionNote', {
         params: {
            patientId: patientId
         }
      });
   }
}
export default new InspectionNote();
