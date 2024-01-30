export const i18Little = {
   chest: 'Цээж',
   head: 'Толгой',
   leftArm: 'Зүүн шуу',
   leftFoot: 'Зүүн тавхай',
   leftHand: 'Зүүн гар',
   leftLeg: 'Зүүн хөл',
   leftShoulder: 'Зүүн мөр',
   rightArm: 'Баруун шуу',
   rightFoot: 'Баруун тавхай',
   rightHand: 'Баруун гар',
   rightLeg: 'Баруун хөл',
   rightShoulder: 'Баруун мөр',
   stomach: 'Гэдэс'
};

export const groupedByAppointmentId = (documents) => {
   // hewtengiin maygtuud angilah
   return documents.reduce((apps, document) => {
      const { appointmentId } = document;
      if (!apps[appointmentId]) {
         apps[appointmentId] = [];
      }
      apps[appointmentId].push(document);
      return apps;
   }, {});
};

export const regularByDocumentValueIn = (documents) => {
   var result = [];
   documents?.map((document, indx) => {
      const { formType, documentId } = document;
      if (formType != 1) {
         result.push({
            unikey: indx,
            isExpand: false,
            ...document
         });
      } else {
         const isInclude = !!result?.find((res) => res.documentId === documentId);
         if (isInclude) {
            const index = result.findIndex((res) => res.documentId === documentId);
            result[index].children.push(document);
         } else {
            result.push({
               unikey: indx,
               isExpand: true,
               documentId: documentId,
               children: [document]
            });
         }
      }
   });
   return result;
};

export const groupByDocumentValueIn = (groupedDocuments) => {
   var result = {};
   Object?.entries(groupedDocuments)?.map(([key, value]) => {
      result[key] = [];
      value?.map((document, index) => {
         const { formType, documentId } = document;
         if (formType != 1) {
            result[key].push({
               unikey: index,
               isExpand: false,
               ...document
            });
         } else {
            const isInclude = !!result[key]?.find((res) => res.documentId === documentId);
            if (isInclude) {
               const index = result[key].findIndex((res) => res.documentId === documentId);
               result[key][index].children.push(document);
            } else {
               result[key].push({
                  unikey: index,
                  isExpand: true,
                  documentId: documentId,
                  children: [document]
               });
            }
         }
      });
   });
   return result;
};
