import jwtInterceopter from '../../components/jwtInterceopter';
class EmployeeServices {
   async getEmployee(conf) {
      return await jwtInterceopter.get('organization/employee', conf);
   }
}
export default new EmployeeServices();
