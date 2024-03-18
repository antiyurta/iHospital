import jwtInterceopter from '../../components/jwtInterceopter';
class iBalanceApi {
   async getBooking(params) {
      return jwtInterceopter.get('booking', {
         params: params
      });
   }
   async postBookingLocal(body) {
      return jwtInterceopter.post('booking/local', body);
   }
   //
   async getWarehouse(params) {
      return jwtInterceopter.get('warehouse', {
         params: params
      });
   }
   //
   async getMaterials(params) {
      return jwtInterceopter.get('view-material', {
         params: params
      });
   }
}
export default new iBalanceApi();
