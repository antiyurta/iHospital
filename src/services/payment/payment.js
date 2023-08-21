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
   async getPaymentType() {
      return await jwtInterceopter.get('payment-type');
   }
   async postPayment(data) {
      return await jwtInterceopter.post('payment/payment', data);
   }
   async postPrePayment(data) {
      return await jwtInterceopter.post('payment/payment/pre', data);
   }
   async patchPayment(id, data) {
      return await jwtInterceopter.patch('payment/payment/' + id, data);
   }
}
export default new Payment();
