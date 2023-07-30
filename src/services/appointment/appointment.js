import jwtInterceopter from '../../components/jwtInterceopter';
class Appointment {
   async get() {
      return await jwtInterceopter.get('appointment');
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('appointment', conf);
   }
}
export default new Appointment();
