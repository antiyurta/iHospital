import jwtInterceopter from '../../components/jwtInterceopter';
class Settings {
   async get(conf) {
      return await jwtInterceopter.get('settings', conf);
   }
}
export default new Settings();
