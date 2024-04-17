import jwtInterceopter from '../components/jwtInterceopter';
class DeviceApi {
   async get(params) {
      return await jwtInterceopter.get('device', {
         params: params
      });
   }
}
export default new DeviceApi();
