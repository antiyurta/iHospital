import jwtInterceopter from '../../components/jwtInterceopter';
class ApiAppointmentService {
   async get() {
      return await jwtInterceopter.get('appointment');
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('appointment', conf);
   }
   async postAppointment(data) {
      return await jwtInterceopter.post('appointment', data);
   }
   async patchAppointment(id, data) {
      return await jwtInterceopter.patch('appointment/' + id, data);
   }
}
export default new ApiAppointmentService();
