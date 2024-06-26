import jwtInterceopter from '../../components/jwtInterceopter';
class Service {
   /** service/package */
   async getPackage(params) {
      return await jwtInterceopter.get('service/package', {
         params
      });
   }
   async getPackageById(id) {
      return await jwtInterceopter.get('service/package/' + id);
   }
   async postPackage(body) {
      return await jwtInterceopter.post('service/package', body);
   }
   async patchPackage(id, body) {
      return await jwtInterceopter.patch('service/package/' + id, body);
   }
   async deletePackage(id) {
      return await jwtInterceopter.delete('service/package/' + id);
   }
   /** service/package */
   //** set-order */
   async getSetOrder(conf) {
      return await jwtInterceopter.get('service/setorder', conf);
   }
   async getSetOrderById(id) {
      return await jwtInterceopter.get('service/setorder/' + id);
   }
   async postSetOrder(data) {
      return await jwtInterceopter.post('service/setorder', data);
   }
   async patchSetOrder(id, data) {
      return await jwtInterceopter.patch('service/setorder/' + id, data);
   }
   async deleteSetOrder(id) {
      return await jwtInterceopter.delete('service/setorder/' + id);
   }
   async getXrayRequest(conf) {
      return await jwtInterceopter.get('service/xrayRequest', conf);
   }
   async getXrayRequestById(id) {
      return await jwtInterceopter.get('service/xrayRequest/' + id);
   }
   async patchXrayRequest(id, data) {
      return await jwtInterceopter.patch('service/xrayRequest/' + id, data);
   }
   async getTreatmentRequest(conf) {
      return await jwtInterceopter.get('service/treatmentRequest', conf);
   }
   async getTreatmentRequestById(id) {
      return await jwtInterceopter.get('service/treatmentRequest/' + id);
   }
   async patchTreatmentRequest(id, data) {
      return await jwtInterceopter.patch('service/treatmentRequest/' + id, data);
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
   //** service parameter */
   async getErequestParameter(conf) {
      return await jwtInterceopter.get('service/parameter', conf);
   }
   async postErequestParameter(body) {
      return await jwtInterceopter.post('service/parameter', body);
   }
   async patchErequestParameter(id, body) {
      return await jwtInterceopter.patch('service/parameter/' + id, body);
   }
   async deleteErequestParameter(id) {
      return await jwtInterceopter.delete('service/parameter/' + id);
   }
   //
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
