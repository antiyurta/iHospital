import jwtInterceopter from '../../components/jwtInterceopter';
class Ebarimt {
   async getInformation() {
      return await jwtInterceopter.get('ebarimt/information');
   }
   async getOrganizationInfo(customerId) {
      return await jwtInterceopter.get(`ebarimt/organization/${customerId}`);
   }
   async ReturnBill(billId) {
      return await jwtInterceopter.get('ebarimt/return-bill/' + billId);
   }
   async sendData() {
      return await jwtInterceopter.get('ebarimt/sendData');
   }
}
export default new Ebarimt();
