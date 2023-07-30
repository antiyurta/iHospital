import jwtInterceopter from '../../components/jwtInterceopter';
class Payment {
   async get(conf) {
      return await jwtInterceopter.get('payment/invoice', conf);
   }
}
export default new Payment();
