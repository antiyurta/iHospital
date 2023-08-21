import jwtInterceopter from '../../components/jwtInterceopter';
class BedServices {
   async get() {
      return await jwtInterceopter.get('organization/bed');
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('organization/bed', conf);
   }
   async getById(id) {
      return await jwtInterceopter.get('organization/bed/' + id);
   }
   async post(data) {
      return await jwtInterceopter.post('organization/bed', data);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('organization/bed/' + id, data);
   }
   async delete(id) {
      return await jwtInterceopter.delete('organization/bed/' + id);
   }
}
export default new BedServices();
