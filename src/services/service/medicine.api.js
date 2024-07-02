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
      return await jwtInterceopter.get('service/material-request', {
         params
      });
   }
   async postMedicinePlan(params) {
      return await jwtInterceopter.post('material-request-history/', params);
   }
}

export default new MedicineApi();
