import jwtInterceopter from '../../components/jwtInterceopter';
/** Тусламж үйлчилгээний төрлүүд татах сервис */
class ApiCareType {
   async get(params) {
      return await jwtInterceopter.get('reference-care-type', { params });
   }
}
export default new ApiCareType();
