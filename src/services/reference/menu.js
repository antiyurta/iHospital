import jwtInterceopter from '../../components/jwtInterceopter';
class Menu {
   async get(conf) {
      return await jwtInterceopter.get('reference/menu', conf);
   }
   async getShow(id) {
      return await jwtInterceopter.get('reference/menu/show/' + id);
   }
   async post(data) {
      return await jwtInterceopter.post('reference/menu', data);
   }
   async patch(id, data) {
      return await jwtInterceopter.patch('reference/menu/' + id, data);
   }
   async remove(id) {
      return await jwtInterceopter.delete('reference/menu/' + id);
   }
}
export default new Menu();
