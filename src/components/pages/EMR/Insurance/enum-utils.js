export const HEALTH_SERVICES_TITLE = {
   savePrescription: 'SAVE_PRESCRIPTION',
   switchSupport: 'SWITCH_SUPPORT',
   cancelService: 'CANCEL_SERVICE',
   saveHics: 'SAVE_HICS',
   setApproval: 'SET_APPROVAL',
   sendHics: 'SEND_HICS',
   setPatientSheet: 'SET_PATIENT_SHEET',
   confirmHics: 'CONFIRM_HICS',
   reConfirmHics: 'RE_CONFIRM_HICS',
   fingerRequest: 'FINGER_REQUEST',
   repairHics: 'REPAIR_HICS_SERVICE',
   setPatientReturn: 'SET_PATIENT_RETURN',
   startHics: 'START_HICS',
   skipHics: 'SKIP_HICS',
   esbMedicalExam: 'ESB_MEDICAL_EXAM',
   sendEsbNotf: 'SEND_ESB_NOTF',
   sendHospitalInfo: 'SET_HOSPITAL_INFO',
   sendCheckLicenseInfo: 'CHECK_LICENSE_INFO',
   sendEditMedicalLink: 'EDIT_MEDICAL_LINK',
   sendAddHicsService: 'ADD_HICS_SERVICE',
   sendDirectService: 'DIRECT_SEND_SERVICE',
   sendFormData: 'SEND_FORM_DATA',
   sendFixDoctorExams: 'FIX_DOCTOR_EXAMS'
};

export const HICS_PROCESS = {
   SEAL_PENDING: 0, // Битүүмж хүлээгдэж байгаа.
   SEAL_CONFIRM: 1, // Битүүмж амжилттай үүссэн байна.
   PAYMENT_FAILED: 2, // Төлбөрийн мэдээлэл илгээгүй байна.
   PAYMENT_CONFIRM: 3, // Төлбөрийн мэдээлэл илгээсэн байна.
   REFUND_SERVICE: 4 // Буцаалт хийсэн байна.
};

const HST = HEALTH_SERVICES_TITLE;
export const HEALTH_SERVCES_DESCRIPTION = (title) =>
   ({
      [HST.savePrescription]: '4.6 Цахим жор үүсгэх сервис',
      [HST.switchSupport]: '4.6.1 Тусламж үйлчилгээг солих',
      [HST.cancelService]: '4.17 Эрүүл мэндийн тусламж үйлчилгээг цуцлах',
      [HST.saveHics]: '4.29 Битүүмж үүсгэх сервис',
      [HST.sendHics]: '4.30 Төлбөрийн мэдээлэл илгээх сервис',
      [HST.setApproval]: '4.32 Эмчийн заалтыг бүртгэх сервис',
      [HST.setPatientSheet]: '4.36 Эмнэлэгт өвчтөн илгээх хуудас үүсгэх сервис',
      [HST.confirmHics]:
         '4.40 Тусламж үйлчилгээг дуусгавар болгох сервис – Зөвхөн Амбулаторийн үзлэг оношилгоо, шинжилгээний багц */',
      [HST.reConfirmHics]: '4.41 Дахин баталгаажуулах сервис',
      [HST.fingerRequest]: '4.43 Хурууны хээ танихгүй иргэнийг бүртгэх сервис',
      [HST.repairHics]: '4.44 Регистрийн дугаар болон оношийн мэдээлэл буруу илгээгдсэн гүйцэтгэлийг засварлах сервис',
      [HST.setPatientReturn]: '4.46 Эмнэлгээс өвчтөн илгээх хуудас үүсгэх сервис',
      [HST.startHics]: '4.47 Тусламж үйлчилгээг эхлүүлэх сервис',
      [HST.skipHics]: '4.48 Өвчтнийг кабинет хооронд шилжүүлэх сервис',
      [HST.esbMedicalExam]: '4.50 Иргэний шинжилгээ болон дүрс оношлогооны мэдээлэл илгээх сервис',
      [HST.sendEsbNotf]: '4.55 Иргэн рүү e-Mongolia-р дамжуулан мэдэгдэл илгээх сервис',
      [HST.sendHospitalInfo]: '4.56 Эмнэлгийн мэдээлэл шинэчлэх сервис',
      [HST.sendCheckLicenseInfo]: '4.57 Эмчийн лицензийн мэдээлэл шалгах сервис',
      [HST.sendEditMedicalLink]: '4.58 medicalLinks засварлах сервис',
      [HST.sendAddHicsService]:
         '4.61 Эмчийн үзлэгийн мэдээлэл илгээх сервис/Зөвхөн амбулаторийн цогц тусламж үйлчилгээ',
      [HST.sendDirectService]:
         '4.62 Тусламж үйлчилгээг дуусгавар болгох сервис – Зөвхөн Амбулаторийн цогц тусламж, үйлчилгээ',
      [HST.sendFormData]: '4.64 Жирэмсний хяналтын дэвтрийн мэдээллийг илгээх сервис',
      [HST.sendFixDoctorExams]: '4.66 Эмчийн үзлэгийн мэдээлэл засварлах сервис/Зөвхөн амбулаторийн цогц тусламж'
   })[title];

/** Амбулторийн тусламж үйлчилгээний DRGCODE */
const SUPPORT_AMBULATORY_CODE = '300011';
/** Амбулторийн жирэмсэний хяналтийн hicsId багцтай үзлэг */
const SUPPORT_PREGNANT = { hicsId: 20160, isPack: true, isRequired: true };
/** Амбулторийн хяналтийн үзлэг hicsId багцтай үзлэг */
const SUPPORT_CONTROL = { hicsId: 20150, isPack: true, isRequired: false };
/** Багцийн мэдээлэл */
const HICS_PACKAGE = {
   packId: 1, // эмчийн үзлэг
   packId: 2 // оношилгоо шинжилгээний мэдээлэл
};
/** Хос онош шаардах хорт хавдрын тусламж, үйлчилгээн дээр заавал дамжуулна. icdCode1 нь хорт хавдрын С-тэй онош байх ёстой. */
const SUPPORT_CARE = [
   { hicsId: 20320, isRequired: true },
   { hicsId: 20330, isRequired: true },
   { hicsId: 20550, isRequired: true },
   { hicsId: 20150, isRequired: false }
];
const SUPPORT_CARE_DIAGNOSE = 'C';
/** Эрхтэн шилжүүлэх тусламж, үйлчилгээ дээр заавал secondRegno дамжуулна. */
export const SUPPORT_ORGAN_TRANSPLANT = 20540;

