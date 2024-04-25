import jwtInterceopter from '../../components/jwtInterceopter';
class AuthenticationApi {
   async get() {
      return await jwtInterceopter.get('authentication');
   }
   async postLogin(body) {
      return await jwtInterceopter.post('authentication/login', body);
   }
   async postLogout() {
      return await jwtInterceopter.post('authentication/logout');
   }
   async postOTP(body) {
      return await jwtInterceopter.post('authentication/sendOTP', body);
   }
   async verifyOTP(body) {
      return await jwtInterceopter.post('authentication/verify/otp', body);
   }
   async changePassword(body) {
      return await jwtInterceopter.post('authentication/change-password', body);
   }
   async changeProfile(body) {
      return await jwtInterceopter.post('authentication/change-profile', body);
   }
}
export default new AuthenticationApi();
