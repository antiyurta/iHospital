import jwtInterceopter from '../../components/jwtInterceopter';
class RoomServices {
   async get() {
      return await jwtInterceopter.get('organization/room');
   }
   async getByPageFilter(conf) {
      return await jwtInterceopter.get('organization/room', conf);
   }
}
export default new RoomServices();
