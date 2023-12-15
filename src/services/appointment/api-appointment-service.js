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
      return await jwtInterceopter.patch(`appointment/${id}`, data);
   }
   async getAllStatusHistories(params) {
      return await jwtInterceopter.get('appointment-status-history/', {
         params
      });
   }
   async getPreOrder(conf) {
      return await jwtInterceopter.get('appointment/pre-order', conf);
   }
   async patchPreOrder(id, data) {
      return await jwtInterceopter.patch(`appointment/pre-order/${id}`, data);
   }
}
export default new ApiAppointmentService();
