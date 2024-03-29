import jwtInterceopter from '../../components/jwtInterceopter';
class HealthInsurance {
   /** 4.4 Эмийн жагсаалтыг олон улсын нэршлээр авах сервис */
   async getTabletByGroups() {
      return await jwtInterceopter.get('health-insurance/tablet-groups');
   }
   /** 4.5 Иргэний мэдээлэл харах сервис */
   async postCitizenInfo(data) {
      return await jwtInterceopter.post('health-insurance/citizen-info', data);
   }
   /** 4.6 Цахим жор үүсгэх сервис */
   async savePrescription(data) {
      return await jwtInterceopter.post('health-insurance/save-prescription', data);
   }
   /** 4.17 Эрүүл мэндийн тусламж үйлчилгээг цуцлах */
   async cancelService(data) {
      return await jwtInterceopter.post('health-insurance/cancel-service', data);
   }
   /** 4.20 Үндсэн үйлчилгээний код, нэрийн лавлах сервис */
   async getHicsServiceGroup() {
      return await jwtInterceopter.get('health-insurance/hics-service-group');
   }
   /** 4.21 Дэд үйлчилгээний код, нэрийн лавлах сервис */
   async getHicsService() {
      return await jwtInterceopter.get('health-insurance/hics-service');
   }
   /** 4.23 Үндсэн болон дэд үйлчилгээний мэдээллийг лавлах сервис */
   async getHicsServiceAll() {
      return await jwtInterceopter.get('health-insurance/hics-service-all');
   }
   /** 4.24 Оношилгоо, шинжилгээний кодын сан татах сервис */
   async getHicsExam() {
      return await jwtInterceopter.get('health-insurance/hics-exam');
   }
   /** 4.27 Оношийн хамааралтай бүлгийн жагсаалт татах сервис */
   async drgCode() {
      return await jwtInterceopter.get('health-insurance/drg-codes');
   }
   /** 4.28 Иргэний авч байгаа тусламж үйлчилгээний жагсаалт татах сервис */
   async getPatientData(regno) {
      return await jwtInterceopter.get(`health-insurance/patient-data/${regno}`);
   }
   /** 4.29 Битүүмж үүсгэх сервис */
   async saveHics(data) {
      return await jwtInterceopter.post('health-insurance/hics-service', data);
   }
   /** 4.30 Төлбөрийн мэдээлэл илгээх сервис */
   async sendHicsService(data) {
      return await jwtInterceopter.post('health-insurance/send-hics-service', data);
   }
   /** 4.31 Эрүүл мэндийн байгууллагуудын жагсаалт татах сервис */
   async getHospitalList() {
      return await jwtInterceopter.get('health-insurance/hospital-list');
   }
   //** 4.32 Эмчийн заалтыг бүртгэх сервис */
   async postApproval(data) {
      return await jwtInterceopter.post('health-insurance/set-approval', data);
   }
   /** 4.33 Эмчийн заалтыг жагсаалтаар татах сервис */
   async getApprovalList(regno) {
      return await jwtInterceopter.get(`health-insurance/approval-list/${regno}`);
   }
   /** 4.34 Эмнэлэгт өвчтөн илгээх хуудасны илгээх шалтгаан татах сервис */
   async getSentReason(params) {
      return await jwtInterceopter.get('health-insurance/sent-reason', params);
   }
   /** 4.35 Эмнэлэгт өвчтөн илгээх хуудасны мэдээлэл татах сервис */
   async getPatientSheet(regno) {
      return await jwtInterceopter.get(`health-insurance/patient-sheet/${regno}`);
   }
   /** 4.36 Эмнэлэгт өвчтөн илгээх хуудас үүсгэх сервис */
   async setPatientSheet(data) {
      return await jwtInterceopter.post('health-insurance/patient-sheet', data);
   }
   /** 4.37 Өртгийн жингийн жагсаалтыг үйлчилгээний дугаар, оношоор татах сервис*/
   async getHicsCostByField(serviceId, icdCode) {
      return await jwtInterceopter.get('health-insurance/hics-cost-by-field', { params: { serviceId, icdCode } });
   }
   /** 4.38 Төр хариуцах иргэний төрөл татах сервис */
   async getFreeType() {
      return await jwtInterceopter.get('health-insurance/free-type');
   }
   /** 4.40 Тусламж үйлчилгээг дуусгавар болгох сервис – Зөвхөн Амбулаторийн үзлэг оношилгоо, шинжилгээний багц */
   async confirmHicsService(data) {
      return await jwtInterceopter.post('health-insurance/confirm-hics-service', data);
   }
   /** 4.41 Дахин баталгаажуулах сервис */
   async reConfirmService(data) {
      return await jwtInterceopter.post('health-insurance/re-confirm-service', data);
   }
   /** 4.43 Хурууны хээ танихгүй иргэнийг бүртгэх сервис */
   async fingerRequest(data) {
      return await jwtInterceopter.post('health-insurance/finger-request', data);
   }
   /** 4.44 Регистрийн дугаар болон оношийн мэдээлэл буруу илгээгдсэн гүйцэтгэлийг засварлах сервис */
   async postRepair(data) {
      return await jwtInterceopter.post('health-insurance/repair', data);
   }
   /** 4.46 Эмнэлгээс өвчтөн илгээх хуудас үүсгэх сервис */
   async postPatientReturn(data) {
      return await jwtInterceopter.post('health-insurance/set-patient-return', data);
   }
   /** 4.47 Тусламж үйлчилгээг эхлүүлэх сервис */
   async postStartHics(data) {
      return await jwtInterceopter.post('health-insurance/start-hics-service', data);
   }
}
export default new HealthInsurance();
