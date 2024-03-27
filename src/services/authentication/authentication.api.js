import jwtInterceopter from '../../components/jwtInterceopter';
class AuthenticationApi {
   async get() {
      return await jwtInterceopter.get('authentication');
   }
   async changePassword(body) {
      return await jwtInterceopter.post('authentication/change-password', body);
   }
}
export default new AuthenticationApi();
