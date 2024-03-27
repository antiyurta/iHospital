import jwtInterceopter from '../../components/jwtInterceopter';
class PacsService {
   async get(conf) {
      return await jwtInterceopter.get('pacs', conf);
   }
   async getBySerialNumber(number) {
      return await jwtInterceopter.get('pacs/' + number);
   }
}
export default new PacsService();
