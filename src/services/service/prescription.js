import jwtInterceopter from '../../components/jwtInterceopter';
class Prescription {
   async get(conf) {
      return await jwtInterceopter.get('service/prescription', conf);
   }
   async getById(id) {
      return await jwtInterceopter.get('service/prescription/' + id);
   }
}
export default new Prescription();
