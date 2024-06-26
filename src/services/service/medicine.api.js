import jwtInterceopter from '../../components/jwtInterceopter';
class MedicineApi {
   async getGlobal(params) {
      return await jwtInterceopter.get('service/global-medicine', { params });
   }
   async getInternal(params) {
      return await jwtInterceopter.get('material', { params });
   }
   /** plan */
   async getMedicinePlan(params) {
      return await jwtInterceopter.get('medicine-plan', {
         params
      });
   }
   async patchMedicinePlan(id, body) {
      return await jwtInterceopter.patch('medicine-plan/' + id, body);
   }
}
export default new MedicineApi();
