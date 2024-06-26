import jwtInterceopter from '../components/jwtInterceopter';
class DeviceApi {
   async get(params) {
      return await jwtInterceopter.get('device', {
         params: params
      });
   }
   /** equipment */
   async getEquipment() {
      return await jwtInterceopter.get('equipment');
   }
   async postEquipment(body) {
      return await jwtInterceopter.get('equipment', body);
   }
   async patchEquipment(id, body) {
      return await jwtInterceopter.get('equipment/' + id, body);
   }
   /** equipment */
}
export default new DeviceApi();
