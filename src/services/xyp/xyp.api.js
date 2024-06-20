import jwtInterceopter from '../../components/jwtInterceopter';
class XypApi {
   /** Иргэний үнэмлэхний мэдээлэл дамжуулах сервис */
   async citizenCard(data) {
      return await jwtInterceopter.post('xyp/citizen-card', data);
   }
   /** OTP үүсгэх хүсэлт бүртгэх сервис */
   async registerOtp(regnum) {
      return await jwtInterceopter.post('xyp/register-otp/', {
         regnum,
         jsonWSList: [{ ws: 'WS100101_getCitizenIDCardInfo' }],
         phoneNum: 0,
         isEmail: 0,
         isSms: 1,
         isKiosk: 0,
         isApp: 0
      });
   }
   /** Иргэнийг баталгаажуулах OTP шалгах сервис */
   async checkOtp(regnum, otp) {
      return await jwtInterceopter.post('xyp/check-otp', { regnum, otp });
   }
   /** Эцэг эсвэл эхийн регистрээр  хүүхдүүдийн мэдээлэл харуулах */
   async childrenInfo(regnum, searchType) {
      return await jwtInterceopter.get('xyp/children-info', { params: { regnum, searchType } });
   }
   /** Гадаад иргэний мэдээлэл */
   async foreignPersonInfo(regnum, username, password) {
      return await jwtInterceopter.get('xyp/foreign-person-info', { params: { regnum, username, password } });
   }
   /** Иргэний цусны бүлгийн мэдээлэл дуудах сервис */
   async bloodType(regnum) {
      return await jwtInterceopter.get('xyp/blood-type/' + regnum);
   }
   /** Өрхийн гишүүдийн мэдээлэл */
   async householdMemberInfo(householdNumber) {
      return await jwtInterceopter.get('xyp/household-memberinfo' + householdNumber);
   }
   /** Өрхийн мэдээлэл */
   async householdInfo(householdNumber) {
      return await jwtInterceopter.get('xyp/household-info' + householdNumber);
   }
   /** Иргэн гэрлэлтийн мэдээлэл дамжуулах сервис */
   async marriageInfo(regnum, civilId = '') {
      return await jwtInterceopter.get('xyp/marriage-info', { params: { regnum, civilId } });
   }
   /** Гэрлэлт бүртгэлгүй мэдээлэл  дамжуулах сервис */
   async noMarriageInfo(regnum, civilId = '') {
      return await jwtInterceopter.get('xyp/no-marriage-info', { params: { regnum, civilId } });
   }
   /** Иргэнийг баталгаажуулах OTP үүсгэх хүсэлт бүртгэх сервис */
   async authServiceOtp(regnum, serviceInfo, phoneNum) {
      return await jwtInterceopter.post('xyp/auth-service-otp', { regnum, serviceInfo, phoneNum });
   }
   /** Иргэнийг баталгаажуулах OTP шалгах сервис */
   async authServiceCheckOtp(regnum, otp) {
      return await jwtInterceopter.post('xyp/auth-service-check-otp', { regnum, otp });
   }
   /** Дархлаажуулалтын мэдээллийг регистрийн дугаараар шалгах сервис */
   async vaccineByRegno(regnum) {
      return await jwtInterceopter.get('xyp/vaccine-by-regno' + regnum);
   }
   /** Иргэний мэдээлэл */
   async personInfo(regnum, lastName, firstName) {
      return await jwtInterceopter.get('xyp/person-info', { params: { regnum, lastName, firstName } });
   }
   /** Эмнэлгийн хуудас бичихэд шаардлагатай байгууллагын мэдээлэл */
   async organizationInfo(regnum) {
      return await jwtInterceopter.get('xyp/organization-info' + regnum);
   }
}
export default new XypApi();
