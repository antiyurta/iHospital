import jwtInterceopter from '../../components/jwtInterceopter';
class PermissionServices {
   async getUserMenu(conf) {
      return await jwtInterceopter.get('organization/permission/role/user', conf);
   }
}
export default new PermissionServices();
