import jwtInterceopter from '../../components/jwtInterceopter';
class XypApi {
   /** Иргэний мэдээлэл лавлах сервис */
   async post(data) {
      return await jwtInterceopter.post('xyp/citizen-card', data);
   }
}
export default new XypApi();
