import jwtInterceopter from '../../components/jwtInterceopter';
class Devices {
   async get(conf) {
      return await jwtInterceopter.get('device', conf);
   }
}
export default new Devices();
