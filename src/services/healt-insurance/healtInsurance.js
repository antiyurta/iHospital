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
   /** 4.7 Онош-д хамаарах эмийн мэдээлэл лавлах сервис*/
   async getTabletByDiagnosis(data) {
      return await jwtInterceopter.get('health-insurance/tablet-by-diagnosis', {
         params: {
            ...data
         }
      });
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
   /** 4.26 Өртгийн жингийн мэдээлэл татах сервис */
   async getHicsCostList(params) {
      return await jwtInterceopter.get('health-insurance/hics-cost-list', {
         params
      });
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
      const newIcdCode = icdCode.replace(/\s/g, '');
      return await jwtInterceopter.get('health-insurance/hics-cost-by-field', {
         params: {
            serviceId,
            icdCode: newIcdCode
         }
      });
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
   /** 4.48 Өвчтнийг кабинет хооронд шилжүүлэх сервис */
   async postSkipHicsService(data) {
      return await jwtInterceopter.post('health-insurance/skip-hics-service', data);
   }
   /** 4.49 /4.29, 4.30/ сервисийн талбарууд дээр дамжуулах утгын мэдээлэл лавлах сервис */
   async getEsbRefValues(fieldId) {
      return await jwtInterceopter.get('health-insurance/get-esb-ref-values', {
         params: {
            fieldId
         }
      });
   }
   /** 4.50 Иргэний шинжилгээ болон дүрс оношлогооны мэдээлэл илгээх сервис */
   async postSendEsbMedicalExamHistory(data) {
      return await jwtInterceopter.post('health-insurance/send-esb-medical-exam-history', data);
   }
   /** 4.51 Асуумжийн бүлгийн мэдээлэл лавлах сервис */
   async getQuestionCategories(regNo) {
      return await jwtInterceopter.get('health-insurance/send-esb-medical-exam-history/' + regNo);
   }
   /** 4.52 Асуумжийн мэдээлэл лавлах сервис */
   async getQuestionsByCategory(regNo, category) {
      return await jwtInterceopter.get('health-insurance/send-esb-medical-exam-history/', {
         params: {
            regNo,
            category
         }
      });
   }
   /** 4.53 Энгийн эмийн бүлгийн мэдээлэл лавлах сервис */
   async getTabledCategories() {
      return await jwtInterceopter.get('');
   }
   /** 4.54 Энгийн эмийн мэдээлэл лавлах сервис */
   async getTabledCategories(data) {
      return await jwtInterceopter.get('sadasd', {
         params: {
            ...data
         }
      });
   }
   /** 4.55 Иргэн рүү e-Mongolia-р дамжуулан мэдэгдэл илгээх сервис */
   async postSendEsbNotification(data) {
      return jwtInterceopter.post('sadasd', data);
   }
   /** 4.56 Эмнэлгийн мэдээлэл шинэчлэх сервис */
   async patch(d) {
      return await jwtInterceopter.patch('sadas');
   }
   /** 4.57 Эмчийн лицензийн мэдээлэл шалгах сервис */
   async postCheckLicenseInfo(regno) {
      return await jwtInterceopter.get(`health-insurance/check-license/${regno.Register}`);
   }
   /** 4.58 medicalLinks засварлах сервис */
   async postEditMedicalLink(data) {
      return await jwtInterceopter.post('health-insurance/edit-medical-link', data);
   }
   /** 4.59 Эмнэлгийн үйл ажиллагааны чиглэлийн мэдээллийг лавлах сервис */
   async getHospitalOperation(params) {
      return await jwtInterceopter.get('health-insurance/hospital-operation', { params });
   }
   /** 4.60 Дархлаажуулалтын мэдээллийг регистрийн дугаараа шалгах сервис */
   async getVaccineByRegno(regNo) {
      return await jwtInterceopter.get('asdasd', {
         params: {
            regNo
         }
      });
   }
   /** 4.61 Эмчийн үзлэгийн мэдээлэл илгээх сервис/Зөвхөн амбулаторийн цогц тусламж үйлчилгээ */
   async postAddHicsService(data) {
      return await jwtInterceopter.post('/health-insurance/add-hics-service', data);
   }
   /** 4.62 Тусламж үйлчилгээг дуусгавар болгох сервис – Зөвхөн Амбулаторийн цогц тусламж,үйлчилгээ*/
   async postDirectSendService(data) {
      return await jwtInterceopter.post('health-insurance/direct-send-service', data);
   }
   /** 4.63 Жирэмсний хяналтын дэвтрийн мэдээллийг илгээх талбарын утгуудыг лавлах сервис */
   async getFormData(dataType) {
      return await jwtInterceopter.get('health-insurance/form-data/' + dataType);
   }
   /** 4.64 Жирэмсний хяналтын дэвтрийн мэдээллийг илгээх сервис */
   async postSendFormData(data) {
      return await jwtInterceopter.post('health-insurance/send-form-data', data);
   }
   /** 4.65 Амбулаторийн цогц тусламжийн үзлэг болон шинжилгээний мэдээлэл лавлах сервис */
   async getAmbulatory(regno, serviceNumber) {
      return await jwtInterceopter.get('health-insurance/ambulatory', {
         params: {
            regno,
            serviceNumber
         }
      });
   }
   /** 4.67 Эмнэлгийн мэдээлэл лавлах сервис */
   async getHospital() {
      return await jwtInterceopter.get('health-insurance/get-hospital');
   }
   /** 4.68 Иргэний жирэмсний хяналтын тусламж, үйлчилгээний мэдээллийг лавлах сервис */
   async getDataByFormSummery(datatype, regno, year) {
      return await jwtInterceopter.get('health-insurance/get-data-by-form-summary', {
         params: {
            datatype,
            regno,
            year
         }
      });
   }
   /** 4.69 Иргэний жирэмсний хяналтын дэвтрийн мэдээллийг лавлах сервис */
   async getDataFormData(regno, serviceNo) {
      return await jwtInterceopter.get('health-insurance/data-form-data', {
         params: {
            regno,
            serviceNo
         }
      });
   }
   /** 4.70 Төрсөн хүүхдийн мэдээлэл лавлах сервис */
   async getCt4(regno) {
      return await jwtInterceopter.get('health-insurance/ct-4', {
         params: {
            regno
         }
      });
   }
   /** 4.71 Иргэний дүрс оношилгоо, шинжилгээ, үзлэгийн маягтын линкүүдийг багцаар харах хүсэлт үүсгэх сервис  */
   async postSendMedLinkRequest(body) {
      return await jwtInterceopter.post('health-insurance/send-med-link-request', body);
   }
   /** 4.72 Багц үүсгэсэн линкүүдийг лавлах сервис */
   async postGetMedLinkRequestByRequestNo(regNo, reqeustNo) {
      return await jwtInterceopter.post('health-insurance/get-med-link-request', {
         regNo,
         reqeustNo
      });
   }
   /** 4.73 Жирэмсний хяналтын дэвтрийн ерөнхий мэдээллийг илгээх сервис  */
   /** Энэхүү сервисээр тухайн ээжийн ерөнхий мэдээллийг илгээх ба жирэмсний дугаар үүсгэх юм */
   async postSavePregnantSummary(body) {
      return await jwtInterceopter.post('health-insurance/save-pregnant-summary', body);
   }
   /** 4.74 Идэвхтэй жирэмсний мэдээллийг лавлах сервис */
   async getPregnantSummary(regNo) {
      return await jwtInterceopter.get(`health-insurance/get-pregnant-summary/${regNo}`);
   }
   /** 4.75 Жирэмсний хяналтын дэвтрийн тухайн товлол дахь мэдээллийг илгээх сервис */
   async postSendPregnantFormData(body) {
      return await jwtInterceopter.post('health-insurance/send-pregnant-form-data', body);
   }
   /** 4.76 Тухайн жирэмсний хяналт дээр бүртгэгдсэн жирэмсний товлолуудыг лавлах сервис */
   async getPregnantAppointment(pregnancyNo, regNo) {
      return await jwtInterceopter.get('health-insurance/get-pregnant-appointment', {
         params: {
            pregnancyNo,
            regNo
         }
      });
   }
   /** 4.77 Жирэмсний хяналтын дэвтрийн тухайн товлол дахь мэдээллийг лавлах сервис */
   async getPregnantFormData(pregnancyNo, regno, appointWeek) {
      return await jwtInterceopter.get('health-insurance/get-pregnant-form-data', {
         params: {
            pregnancyNo,
            regno,
            appointWeek
         }
      });
   }
   /** 4.78 Тухайн үүсгэсэн багц дотор тухайн линк байгаа эсэхийг лавлах сервис */
   async postVerifyMedLink(body) {
      return await jwtInterceopter.post('health-insurance/verify-med-link', body);
   }
   /** 4.79 Эх хүүхдийн цахим дэвтрийг нээх сервис */
   /** Энэхүү сервисээр хүүхдийн төрөлтийн талаарх мэдээллийг бүртгэх бөгөөд Эх хүүхдийн дэвтрийн цахим дугаарыг үүсгэх юм. */
   async postCreateRequestChildBook(body) {
      return await jwtInterceopter.post('health-insurance/create-request-child-book', body);
   }
   /** 4.80 Эх хүүхдийн цахим дэвтрийн ерөнхий мэдээллийг лавлах сервис */
   async getChildBook(type, regno) {
      return await jwtInterceopter.get('health-insurance/get-child-book', {
         params: {
            type,
            regno
         }
      });
   }
   /** 4.81 Тухайн эх хүүхдийн дэвтрийн формын мэдээллийг илгээх сервис */
   async postSendChildBookData(body) {
      return await jwtInterceopter.post('health-insurance/send-child-book-data', body);
   }
   /** 4.82 Тухайн эх хүүхдийн дэвтрийн илгээгдсэн мэдээллийг лавлах сервис */
   async getChildBookData(regno, bookNo, catId) {
      return await jwtInterceopter.get('health-insurance/get-child-book-data', {
         params: {
            regno,
            bookNo,
            catId
         }
      });
   }

   async getTabletCategories() {
      return await jwtInterceopter.get('health-insurance/tablet-categories');
   }
   async getTabletsByCategory() {
      return await jwtInterceopter.get('health-insurance/tablets-by-category');
   }
   async postEsbNotification(data) {
      return await jwtInterceopter.post('health-insurance/send-esb-notification', data);
   }
   async postHostpitalInfo(data) {
      return await jwtInterceopter.post('health-insurance/hospital-info', data);
   }
   async getHostpitalOperation() {
      return await jwtInterceopter.get('health-insurance/hospital-operation');
   }
   async getVaccineByRegno() {
      return await jwtInterceopter.get('health-insurance/get-vaccine-by-regno');
   }
   async getDrgType() {
      return await jwtInterceopter.get('health-insurance/drg-type');
   }
}
export default new HealthInsurance();
