import jwtInterceopter from '../../components/jwtInterceopter';
class ExaminationApi {
   async get(params) {
      return await jwtInterceopter.get('service/examination', { params });
   }
   async getById(id) {
      return await jwtInterceopter.get(`service/examination/${id}`);
   }
}
export default new ExaminationApi();
