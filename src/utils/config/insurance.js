/** 10 min shaarddag service uud */
const RequireTenMinIds = [20110, 20120, 20810];
/** seal uusgeh */
const RequireCreateSealIds = [20150, 20160];
// ** approval
const isRequireHicsServiceIds = [20340, 20820];

const InpatientGroupIds = [208, 212];

export { RequireTenMinIds, RequireCreateSealIds, InpatientGroupIds, isRequireHicsServiceIds };
import { getAgeYear, openNofi } from '@Comman/common';
//api
import insuranceApi from '@ApiServices/healt-insurance/insurance';
import healtInsurance from '@ApiServices/healt-insurance/healtInsurance';

export const findInclueDiagnosis = (hicsSeal, addHics) => {
   if (hicsSeal.diagnosis != null) {
      return hicsSeal;
   }
   return addHics;
};

export const isPayAmountCit = (freeTypeId, hicsSeal, amounts) => {
   const icdCode = hicsSeal.diagnosis?.icdCode || null;
   if (
      (amounts.amountCit > 0 && freeTypeId > 0) ||
      (amounts.amountCit > 0 &&
         icdCode &&
         ['A', 'B', 'P', 'F', 'O'].some((char) => char.toLowerCase() === icdCode[0].toLowerCase()))
   ) {
      return {
         amountCit: 0,
         amountHi: hicsSeal.hicsServiceId === 20120 ? amounts.amountHi : amounts.amountTotal,
         price: amounts.amountTotal,
         oPrice: amounts.amountTotal
      };
   }
   return {
      amountCit: amounts.amountCit,
      amountHi: amounts.amountHi,
      price: amounts.amountTotal,
      oPrice: amounts.amountTotal
   };
};

export const getAddHics = async (id) => {
   if (id) {
      return await insuranceApi
         .getByIdAddHics(id)
         .then(({ data: { response } }) => response)
         .catch((error) => {
            return error;
         });
   }
   return {
      description: 'Битүүмж олдохгүй байна'
   };
};

export const getHicsSeal = async (id) => {
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

export const noteToString = (note) => {
   return Object.entries(note)
      ?.map(([_key, value]) => {
         let jsonString = JSON.stringify(value);
         let formattedString = jsonString.replace(/[{}"']/g, '');
         return formattedString;
      })
      ?.join(' ');
};

export const setSealForHics = async (patient, hicsSealId, values, isInsurance, addHicsId, note) => {
   try {
      const hicsSeal = await getHicsSeal(hicsSealId);
      const addHics = await getAddHics(addHicsId);
      const currentHics = findInclueDiagnosis(hicsSeal, addHics);
      const newNote = noteToString(note);
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
         freeTypeId: patient.freeTypeId || 0,
         historyCode: hicsSeal.patientHistoryCode,
         phoneNo: patient.phoneNo,
         bloodType: hicsSeal.bloodType,
         diagnosis: {
            ...currentHics.diagnosis,
            description: hicsSeal.description || newNote
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
            employmentId: patient.employmentId,
            employmentName: patient.employmentName,
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
   return {
      patientCivilId: patient.civilId,
      workplace: '1',
      // workplace: patient.workplace,
      positionId: patient.positionId,
      positionName: patient.positionName,
      occupationId: patient.occupationId,
      occupationName: patient.occupationName,
      isRaped: 2,
      gender: patient.gender,
      age: getAgeYear(patient.registerNumber),
      aimagCode: patient.aimagCityCode,
      aimagName: patient.aimagCityName,
      soumCode: patient.soumDistrictCode,
      soumName: patient.soumDistrictName,
      bagKhorooCode: patient.bagKhorooCode,
      bagKhorooName: patient.bagKhorooName,
      educationId: patient.educationId,
      educationName: patient.educationName,
      nationality: patient.nationality || 'Халх',
      ethnicity: patient.ethnicity || 'Монгол',
      communicationLanguage: 'Монгол',
      surname: patient.familyName,
      parentPhoneNo: parseInt(patient?.[0]?.contactPhoneNo) || null,
      isDonor: 2,
      donorTypeId: null,
      donorTypeName: null
   };
};
