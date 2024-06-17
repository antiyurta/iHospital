import jwtInterceopter from '../../components/jwtInterceopter';
class ApiInsurance {
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
   /** Битүүмж update oruulah */
   async requestHicsSeal(id, data) {
      return await jwtInterceopter.patch(`hics-seal/${id}`, data);
   }
   /** Битүүмж илгээх -> Үзлэг дуусгах */
   async requestHicsSealSent(id, data) {
      return await jwtInterceopter.patch(`hics-seal/sent/${id}`, data);
   }
   //** Битүүмж цуцлах 4.17 */
   async requestHicsSealCancel(id, data) {
      return await jwtInterceopter.patch(`hics-seal/cancel/${id}`, data);
   }
   /** 20120 дуусгавар болгох */
   async requestHicsSealConfirm(id, data) {
      return await jwtInterceopter.patch(`hics-seal/confirm/${id}`);
   }
   /** Цогц дээр эмчин үзлэг нээх */
   async createAddHics(data) {
      return await jwtInterceopter.post('hics-seal-addHics', data);
   }
   async deleteAddHics(id) {
      return await jwtInterceopter.delete('hics-seal-addHics/' + id);
   }
   async getByIdAddHics(id) {
      return await jwtInterceopter.get(`hics-seal-addHics/${id}`);
   }
   /** Цогц дээр эмчин үзлэг засах */
   async requestAddHics(id, data) {
      return await jwtInterceopter.patch(`hics-seal-addHics/${id}`, data);
   }
   /** Эмнэлэг доторх битүүмжүүд дуудах */
   async getByIdHicsSeals(id) {
      return await jwtInterceopter.get(`hics-seal/${id}`);
   }
   async getAllHicsSeals(params) {
      return await jwtInterceopter.get('hics-seal', { params });
   }
   /** Төлбөрийн мэдээлэл даатгалруу илгээх */
   async createHicsPayment(data) {
      return await jwtInterceopter.post('hics-payment', data);
   }
   //** 4.56 Эмнэлэгийн мэдээлэл илгээх */
   async postHospitalInfo() {
      return await jwtInterceopter.post('health-insurance/hospital-info');
   }
}
export default new ApiInsurance();
