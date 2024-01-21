import jwtInterceopter from '../../components/jwtInterceopter';
class Role {
   async get(conf) {
      return await jwtInterceopter.get('reference/role', conf);
   }
}
export default new Role();
