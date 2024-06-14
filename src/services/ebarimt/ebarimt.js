import jwtInterceopter from '../../components/jwtInterceopter';
class Ebarimt {
   async getInformation() {
      return await jwtInterceopter.get('ebarimt/information');
   }
   async getOrganizationInfo(customerId) {
      return await jwtInterceopter.get(`ebarimt/organization/${customerId}`);
   }
   async consumerByRegno(regno) {
      return await jwtInterceopter.get('/ebarimt/easy-by-regno/' + regno);
   }
   async consumerByPhone(phone) {
      return await jwtInterceopter.get('/ebarimt/easy-by-phone/' + phone);
   }
   async ReturnBill(billId) {
      return await jwtInterceopter.get('ebarimt/return-bill/' + billId);
   }
   async sendData() {
      return await jwtInterceopter.get('ebarimt/sendData');
   }
   async easyRegister(customerNo, qrData) {
      return await jwtInterceopter.post('/ebarimt/easy/register', { customerNo, qrData });
   }
}
export default new Ebarimt();
