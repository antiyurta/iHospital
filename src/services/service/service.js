import jwtInterceopter from '../../components/jwtInterceopter';
class Service {
   async getSetOrder(conf) {
      return await jwtInterceopter.get('service/setorder', conf);
   }
   async postSetOrder(data) {
      return await jwtInterceopter.post('service/setorder', data);
   }
   async getXrayRequest(conf) {
      return await jwtInterceopter.get('service/xrayRequest', conf);
   }
   async patchXrayRequest(id, data) {
      return await jwtInterceopter.patch('service/xrayRequest/' + id, data);
   }
   async getInpatientRequestById(id) {
      return await jwtInterceopter.get('service/inpatient-request/show/' + id);
   }
   async getInpatientRequest(conf) {
      return await jwtInterceopter.get('service/inpatient-request', conf);
   }
   async postInpatientRequest(data) {
      return await jwtInterceopter.post('service/inpatient-request', data);
   }
   async patchSetOrder(id, data) {
      return await jwtInterceopter.patch('service/setorder/' + id, data);
   }
   async deleteSetOrder(id) {
      return await jwtInterceopter.delete('service/setorder/' + id);
   }
   async getServiceErequest(conf) {
      return await jwtInterceopter.get('service/erequest', conf);
   }
   async getErequestDetail(params) {
      return await jwtInterceopter.get('service/examination-request-detail', {
         params: params
      });
   }
   async patchErequestDetail(id, body) {
      return await jwtInterceopter.patch('service/examination-request-detail/' + id, body);
   }
   async getErequestParameter(conf) {
      return await jwtInterceopter.get('service/parameter', conf);
   }
   async postErequestParameter(body) {
      return await jwtInterceopter.post('service/parameter', body);
   }
   async patchErequestParameter(id, body) {
      return await jwtInterceopter.patch('service/parameter/' + id, body);
   }
   async getResultForExamination(conf) {
      return await jwtInterceopter.get('service/examinationResult', conf);
   }
   async getResultForExaminationByBarcode(conf) {
      return await jwtInterceopter.get('laboratory', conf);
   }
   async getInfoForEmr(conf) {
      return await jwtInterceopter.get('service/erequest/result', conf);
   }
   async postResultForExamination(body) {
      return await jwtInterceopter.post('service/examinationResult', body);
   }
   async patchResultForExamination(id, body) {
      return await jwtInterceopter.patch('service/examinationResult/' + id, body);
   }
   //
   async getOperation(params) {
      return await jwtInterceopter.get('service/operation-request', {
         params: params
      });
   }
   async patchOperation(id, body) {
      return await jwtInterceopter.patch('service/operation-request/' + id, body);
   }
}
export default new Service();
