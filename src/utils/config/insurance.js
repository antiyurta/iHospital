//api
import regularApi from '@ApiServices/regular.api';
import InsuracneApi from '@ApiServices/healt-insurance/insurance';

const AmbulatoryGroupIds = [201];

const OperationIds = [];

const xrayTreatmentIds = [20120, 20340];

const AmbulatoryGroupId = 201;

const InpatientGroupIds = [208, 212];

const UrgentGroupId = 201;

export { AmbulatoryGroupId, AmbulatoryGroupIds, InpatientGroupIds, UrgentGroupId, xrayTreatmentIds };

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
