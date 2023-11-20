import jwtInterceopter from '../../components/jwtInterceopter';
class AuthenticationApi {
   async get() {
      return await jwtInterceopter.get('authentication');
   }
}
export default new AuthenticationApi();
