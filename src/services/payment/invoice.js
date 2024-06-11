import jwtInterceopter from '../../components/jwtInterceopter';
class Invoice {
   async get(conf) {
      return await jwtInterceopter.get('payment/invoice', conf);
   }
   async post(body) {
      return await jwtInterceopter.post('payment/invoice', body);
   }
   async delete(id) {
      return await jwtInterceopter.delete('payment/invoice/' + id);
   }
}
export default new Invoice();
