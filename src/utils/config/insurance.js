const AmbulatoryGroupIds = [201];

const OperationIds = [];

const xrayTreatmentIds = [20120, 20340];

const AmbulatoryGroupId = 201;

const InpatientGroupIds = [208, 212];

const UrgentGroupId = 201;

export { AmbulatoryGroupId, AmbulatoryGroupIds, InpatientGroupIds, UrgentGroupId, xrayTreatmentIds };

//api
import inspectionNoteApi from '@ApiServices/emr/inspectionNote';
import insuranceApi from '@ApiServices/healt-insurance/insurance';
import healtInsurance from '@ApiServices/healt-insurance/healtInsurance';
import { openNofi } from '@Comman/common';

const getInspectionNote = async (id) => {
   if (id) {
      return await inspectionNoteApi.getById(id).then(({ data: { response } }) => {
         if (response.inspection) return JSON.parse(response.inspection)?.['Бодит үзлэг'];
         return undefined;
      });
   }
   return 'TEST';
};

const getHicsSeal = async (id) => {
   if (id) {
      return await insuranceApi
         .getByIdHicsSeals(id)
         .then(({ data: { response } }) => response)
         .catch((error) => {
            return error;
         });
   }
   return {
      description: 'Битүүмж олдохгүй байна'
   };
};

export const setSealForHics = async (patient, hicsSealId, values, isInsurance) => {
   try {
      console.log('hicsSeal=========>', hicsSealId);
      const hicsSeal = await getHicsSeal(hicsSealId);
      console.log('hicsSeal=========>', hicsSeal);
      const data = {
         patientRegno: patient.registerNumber,
         patientFingerprint: values.finger,
         patientFirstname: patient.firstName,
         patientLastname: patient.lastName,
         startDate: hicsSeal.startAt,
         endDate: hicsSeal.endAt || new Date(),
         hicsServiceId: hicsSeal.hicsServiceId,
         hicsApprovalCode: hicsSeal.hicsApprovalCode,
         parentServiceNumber: null,
         doctorServiceNumber: hicsSeal.doctorServiceNumber,
         sent13RequestNo: hicsSeal.sent13RequestNo,
         departNo: hicsSeal.department?.id,
         departName: hicsSeal.department?.name,
         isForeign: 0,
         freeTypeId: 0,
         historyCode: hicsSeal.patientHistoryCode,
         phoneNo: patient.phoneNo,
         bloodType: hicsSeal.bloodType,
         diagnosis: {
            ...(hicsSeal.diagnosis || addHics.diagnosis),
            description: hicsSeal.description || (await getInspectionNote())
         },
         isLiver: patient.isLiver ? 1 : 2,
         startCode: hicsSeal.hicsStartCode,
         xypResponse: {
            requestId: patient.requestId,
            resultMsg: patient.resultMsg
         },
         personalInfo: getPersonalInfo(patient),
         employment: {
            ...hicsSeal.employment,
            employmentId: patient.employmentId || '1',
            employmentName: patient.employmentName || '- Цалин хөлстэй ажиллагч',
            isEmployment: patient.isEmployment,
            emplessDescriptionId: patient.emplessDescriptionId,
            emplessDescription: patient.emplessDescription
         },
         healthInfo: hicsSeal.healthInfo,
         paymentType: isInsurance ? 0 : 1
      };
      return await healtInsurance.saveHics(data).then(async ({ data }) => {
         if (data.code === 200) {
            openNofi('success', 'Амжилттай', data.description);
            return await insuranceApi
               .requestHicsSeal(hicsSeal.id, {
                  ...hicsSeal,
                  hicsSealCode: data.result.serviceNumber,
                  process: 1
               })
               .then(async ({ data: { response: ourHicsResponse } }) => {
                  return ourHicsResponse;
               });
         } else if (data.code === 400) {
            openNofi('error', 'Амжилтгүй', data.description);
         }
      });
   } catch (error) {
      console.log('=======>', error);
   }
};

export const getPersonalInfo = (patient) => {
   const {
      civilId: patientCivilId,
      familyName: patientSurname,
      aimagCityCode: patientAimagCode,
      aimagCityName: patientAimagName,
      soumDistrictCode: patientSoumCode,
      soumDistrictName: patientSoumName,
      contacts: patientContacts,
      ...otherInfoPatient
   } = patient;
   return {
      patientCivilId: patientCivilId,
      isRaped: 2,
      surname: patientSurname,
      aimagCode: patientAimagCode,
      aimgName: patientAimagName,
      soumCode: patientSoumCode,
      soumName: patientSoumName,
      parentPhoneNo: parseInt(patientContacts?.[0]?.contactPhoneNo) || null,
      ...otherInfoPatient,
      age: 27,
      workplace: '1'
      // isDonor: 2
      // donorTypeId
      // donorTypeName
   };
};
