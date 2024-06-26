import jwtInterceopter from '../components/jwtInterceopter';
class Schedule {
   async get(conf) {
      return await jwtInterceopter.get('schedule', conf);
   }
   async postSchedule(data) {
      return await jwtInterceopter.post('schedule', data);
   }
   async patchSchedule(id, data) {
      return await jwtInterceopter.patch('schedule/' + id, data);
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
   async patchSlot(id, data) {
      return await jwtInterceopter.patch('slot/' + id, data);
   }
}
export default new Schedule();
