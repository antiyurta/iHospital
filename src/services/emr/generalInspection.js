import jwtInterceopter from '../../components/jwtInterceopter';
class GeneralInspection {
   async getGeneralInspection(config) {
      return await jwtInterceopter.get('emr/general-inspection', config);
   }
   async postGeneralInspection(data) {
      return await jwtInterceopter.post('emr/general-inspection', data);
   }
   async patchGeneralInspection(id, data) {
      return await jwtInterceopter.patch('emr/general-inspection/' + id, data);
   }
}
export default new GeneralInspection();
