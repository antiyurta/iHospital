import jwtInterceopter from '../../components/jwtInterceopter';
class XypApi {
   /** Иргэний мэдээлэл лавлах сервис */
   async citizenCard(data) {
      return await jwtInterceopter.post('xyp/citizen-card', data);
   }
   /** OTP үүсгэх хүсэлт бүртгэх сервис */
   async registerOtp(regnum) {
      return await jwtInterceopter.post('xyp/register-otp/' + regnum);
   }
   /** Иргэнийг баталгаажуулах OTP шалгах сервис */
   async checkOtp(regnum, otp) {
      return await jwtInterceopter.post('xyp/check-otp', { regnum, otp });
   }
}
export default new XypApi();
