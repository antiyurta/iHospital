import jwtInterceopter from '../../components/jwtInterceopter';
class insuranceSeal {
   async get() {
      return await jwtInterceopter.get('insurance-seal');
   }
   async getGPA(conf) {
      return await jwtInterceopter.get('insurance-seal/gpa', conf);
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('insurance-seal', conf);
   }
   async getById(id) {
      return await jwtInterceopter.get('insurance-seal/show/' + id);
   }
}
export default new insuranceSeal();
