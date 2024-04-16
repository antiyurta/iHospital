import jwtInterceopter from '../../components/jwtInterceopter';
class MedicineApi {
   async getGlobal(params) {
      return await jwtInterceopter.get('service/global-medicine', { params });
   }
   async getInternal(params) {
      return await jwtInterceopter.get('material', { params });
   }
}
export default new MedicineApi();
