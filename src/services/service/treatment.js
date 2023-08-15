import jwtInterceopter from '../../components/jwtInterceopter';
class Treatment {
   async get(conf) {
      return await jwtInterceopter.get('service/treatment', conf);
   }
   async getById(id) {
      return await jwtInterceopter.get('service/treatment/' + id);
   }
}
export default new Treatment();
