import jwtInterceopter from '../../components/jwtInterceopter';
class ApiInsurance {
   async getInsuranceServiceIdName(id) {
      return await jwtInterceopter.get('insurance/hics-service' + id);
   }
   async getInsuranceService(params) {
      return await jwtInterceopter.get('insurance/hics-service-group', params);
   }
   /** 4.24 Оношилгоо, шинжилгээний кодын сан дуудах */
   async getAllHicsExams() {
      return await jwtInterceopter.get('hics-exam');
   }
   /** 4.24 Оношилгоо, шинжилгээний кодын сан хадгалах */
   async createHicsExams() {
      return await jwtInterceopter.post('hics-exam');
   }
   /** 4.47 Тусламж үйлчилгээг эхлүүлэх сервис */
   async hicsAmbulatoryStart(fingerprint, patientId, hicsServiceId) {
      return await jwtInterceopter.post('hics-ambulatory-start', { fingerprint, patientId, hicsServiceId });
   }
   /** Битүүмжлэх үйлчилгээ эхлүүлэх үед */
   async createHicsSeal(data) {
      return await jwtInterceopter.post('hics-seal', data);
   }
   /** Битүүмж илгээх */
   async requestHicsSeal(id, data) {
      return await jwtInterceopter.patch(`hics-seal/${id}`, data);
   }
   /** Эмнэлэг доторх битүүмжүүд дуудах */
   async getAllHicsSeals(params) {
      return await jwtInterceopter.get('hics-seal', { params });
   }
   /** Төлбөрийн мэдээлэл даатгалруу илгээх */
   async createHicsPayment(data) {
      return await jwtInterceopter.post('hics-payment', data);
   }
}
export default new ApiInsurance();
