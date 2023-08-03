import jwtInterceopter from '../../components/jwtInterceopter';
class Payment {
   async get(conf) {
      return await jwtInterceopter.get('payment/invoice', conf);
   }
   async getPaymentById(id) {
      return await jwtInterceopter.get('payment/payment/' + id);
   }
   async getPayment(conf) {
      return await jwtInterceopter.get('payment/payment', conf);
   }
   async getDiscount() {
      return await jwtInterceopter.get('payment/discount');
   }
   async patchPayment(id) {
      return await jwtInterceopter.patch('payment/payment/' + id, {
         id: id
      });
   }
}
export default new Payment();
