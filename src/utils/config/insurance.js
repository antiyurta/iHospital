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

import InsuranceApi from '@ApiServices/healt-insurance/insurance';
import { useDispatch } from 'react-redux';

const createPayment = async (patientId, amount, serviceList) => {
   return await createInvoice(patientId, amount).then(async (invoiceId) => {
      return await regularApi
         .post('payment/payment', {
            patientId: patientId,
            paymentTypeId: 1,
            paymentStatus: 'paid',
            invoiceIds: [invoiceId],
            discountPercentId: null,
            paidAmount: 0, // irgne tolson
            insuranceAmount: amount,
            totalAmount: amount,
            prePaymentId: null,
            type: 'B2C_RECEIPT'
         })
         .then(({ data: { response } }) => ({
            posRno: response.billId,
            totalAmount: response.totalAmount,
            discountAmount: 0,
            vatAmount: response.totalAmount,
            payedAmount: response.paidAmount,
            salesName: 'AMARBAT',
            salesDate: new Date(),
            serviceList: serviceList
         }));
   });
};

const createInvoice = async (patientId, amount) => {
   return await regularApi
      .post('payment/invoice', {
         patientId: patientId,
         amount: amount,
         type: 5,
         typeId: 0
      })
      .then(({ data: { response } }) => response.id);
};

export const getSendData = async (patient, hicsSealId, fingerPrint, addHicsId) => {
   try {
      const dataD = async (amount, serviceList) => ({
         patientFingerprint: fingerPrint,
         patientFirstname: patient.firstName,
         patientLastName: patient.lastName,
         patientRegNo: patient.registerNumber,
         payments: [await createPayment(patient.id, amount, serviceList)]
      });
      return await InsuracneApi.getByIdHicsSeals(hicsSealId)
         .then(({ data: { response: hicsSeal } }) => {
            let newAmountCit = 0;
            let newAmountHi = 0;
            let newAmountTotal = 0;
            if (hicsSeal.hicsServiceId === 20120) {
               const lastAddHics = hicsSeal?.addHics.find((addHi) => addHi.id === addHicsId);
               let doctorAmount = hicsSeal?.addHics?.length * 15000;
               let examAmountCit = 0;
               let examAmountHi = 0;
               let examAmountTotal = 0;
               const exams = hicsSeal?.addHics
                  ?.flatMap((elAddHics) =>
                     elAddHics?.exams?.map((exam) => {
                        if (exam.examCode) return exam;
                        return null;
                     })
                  )
                  .filter(Boolean);
               examAmountCit = exams?.reduce((total, exam) => (total += exam.amountCit), 0);
               examAmountHi = exams?.reduce((total, exam) => (total += exam.amountHi), 0);
               examAmountTotal = exams?.reduce((total, exam) => (total += exam.oPrice), 0);

               console.log('allAddHics  ========>', hicsSeal.addHics);
               console.log('lastAddHics ========>', lastAddHics);
               console.log('exams ==============>', exams);

               if (!lastAddHics.hasExam) {
                  if (lastAddHics.amountHi * 0.71 <= doctorAmount + examAmountHi) {
                     newAmountCit = 0;
                     newAmountHi = lastAddHics.amountHi;
                     newAmountTotal = lastAddHics.amountHi;
                     console.log('70% hurne 100% nehemjleh', lastAddHics.amountHi);
                  } else {
                     newAmountCit = 0;
                     newAmountHi = doctorAmount + examAmountHi;
                     newAmountTotal = doctorAmount + examAmountHi;
                     console.log('71% hurehgu', doctorAmount + examAmountHi);
                  }
               } else {
                  if (lastAddHics.amountHi * 0.71 <= doctorAmount + examAmountHi) {
                     newAmountCit = 0;
                     newAmountHi = lastAddHics.amountHi * 0.7;
                     newAmountTotal = lastAddHics.amountHi * 0.7;
                     console.log('70% hurne ghde 70% aar nehemjleh', lastAddHics.amountHi);
                  } else {
                     newAmountCit = 0;
                     newAmountHi = (doctorAmount + examAmountHi) * 0.9;
                     newAmountTotal = (doctorAmount + examAmountHi) * 0.9;
                     console.log('71% hurehgu gargasan zardalin 90% nehemjleh', doctorAmount + examAmountHi);
                  }
               }
               return dataD(newAmountTotal, {
                  startDate: lastAddHics.startDate,
                  endDate: new Date(),
                  hicsServiceId: 20120,
                  parentServiceNumber: hicsSeal.hicsSealCode,
                  doctorServiceNumber: null,
                  startCode: lastAddHics.startCode,
                  departNo: lastAddHics.departNo,
                  departName: lastAddHics.departName,
                  discountAmount: 0,
                  payedAmount: examAmountCit,
                  totalAmount: examAmountTotal,
                  pregnantWeek: 0,
                  isConfirm: 1,
                  diagnosis: lastAddHics.diagnosis,
                  packages: hicsSeal.addHics
                     ?.filter((addHic) => addHic.hasExam)
                     ?.flatMap((fAddHics) =>
                        fAddHics?.exams?.map((exam) => ({
                           checkupId: fAddHics.checkupId,
                           inDate: new Date(), // gehde start oloh
                           icd10: fAddHics.diagnosis?.icdCode,
                           icd9: fAddHics.diagnosis?.icd9Code,
                           packId: 1,
                           examCode: exam.examCode,
                           descr: exam.description
                        }))
                     )
               });
            } else if (hicsSeal.hicsServiceId === 20200) {
            }
         })
         .catch((error) => {
            console.log(error);
            return {
               state: false,
               amountHi: 0,
               amountCit: 0,
               ammounTotal: 0
            };
         });
   } catch (error) {
      console.log('eerr', error);
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
