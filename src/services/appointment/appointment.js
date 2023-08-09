import jwtInterceopter from '../../components/jwtInterceopter';
class Appointment {
   async get() {
      return await jwtInterceopter.get('appointment');
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('appointment', conf);
   }
   async postAppointment(data) {
      return await jwtInterceopter.post('appointment', data);
   }
}
export default new Appointment();
