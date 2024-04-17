import jwtInterceopter from '../../components/jwtInterceopter';
class AuthenticationApi {
   async get() {
      return await jwtInterceopter.get('authentication');
   }
   async changePassword(body) {
      return await jwtInterceopter.post('authentication/change-password', body);
   }
   async changeProfile(body) {
      return await jwtInterceopter.post('authentication/change-profile', body);
   }
}
export default new AuthenticationApi();
