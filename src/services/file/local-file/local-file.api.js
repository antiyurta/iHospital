import jwtInterceopter from '../../../components/jwtInterceopter';

class LocalFileApi {
   async getImage(id) {
      return jwtInterceopter.get('local-files/' + id, {
         responseType: 'blob'
      });
   }
   async getFile(id) {
      return await this.getImage(id).then((response) => {
         const file = new Blob([response.data], { type: response.data.type });
         const fileUrl = URL.createObjectURL(file);
         return fileUrl;
      });
   }
   async postFileUpload(file) {
      return await jwtInterceopter.post(
         'local-files/fileUpload',
         { file },
         {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         }
      );
   }
   async remove(id) {
      return await jwtInterceopter.delete(`local-files/${id}`);
   }
}
export default new LocalFileApi();
