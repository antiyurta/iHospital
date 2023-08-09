import jwtInterceopter from '../components/jwtInterceopter';
class Schedule {
   async get(conf) {
      return await jwtInterceopter.get('schedule', conf);
   }
   async getDeviceSlot(conf) {
      return await jwtInterceopter.get('device/slot', conf);
   }
   async getTreatmentSlot(conf) {
      return await jwtInterceopter.get('treatment/slot', conf);
   }
   async getDoctorSlot(conf) {
      return await jwtInterceopter.get('slot', conf);
   }
   async postReturnSlot(data) {
      return await jwtInterceopter.post('appoinment/return', data);
   }
   async postChangeSlot(data) {
      return await jwtInterceopter.post('appoinment/return/change', data);
   }
}
export default new Schedule();
