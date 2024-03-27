import jwtInterceopter from '../../components/jwtInterceopter';
class EmployeeServices {
   async getEmployee(conf) {
      return await jwtInterceopter.get('organization/employee', conf);
   }
   async patchEmployee(id, body) {
      return await jwtInterceopter.patch('organization/employee/' + id, body);
   }
}
export default new EmployeeServices();
