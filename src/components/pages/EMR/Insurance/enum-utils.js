export const HEALTH_SERVICES_TITLE = {
   savePrescription: 'SAVE_PRESCRIPTION',
   cancelService: 'CANCEL_SERVICE',
   saveHics: 'SAVE_HICS',
   setApproval: 'SET_APPROVAL',
   sendHics: 'SEND_HICS',
   setPatientSheet: 'SET_PATIENT_SHEET',
   confirmHics: 'CONFIRM_HICS',
   reConfirmHics: 'RE_CONFIRM_HICS',
   fingerRequest: 'FINGER_REQUEST',
   repairHics: 'REPAIR_HICS_SERVICE',
   setPatientReturn: 'SET_PATIENT_RETURN'
};
export const HICS_PROCESS = {
   SEAL_PENDING: 0, // Битүүмж хүлээгдэж байгаа.
   SEAL_CONFIRM: 1, // Битүүмж амжилттай үүссэн байна.
   PAYMENT_FAILED: 2, // Төлбөрийн мэдээлэл илгээгүй байна.
   PAYMENT_CONFIRM: 3, // Төлбөрийн мэдээлэл илгээсэн байна.
   REFUND_SERVICE: 4 // Буцаалт хийсэн байна.
};
export const HEALTH_SERVCES_DESCRIPTION = (title) => {
   switch (title) {
      case HEALTH_SERVICES_TITLE.savePrescription:
         return '4.6 Цахим жор үүсгэх сервис';
      case HEALTH_SERVICES_TITLE.cancelService:
         return '4.17 Эрүүл мэндийн тусламж үйлчилгээг цуцлах';
      case HEALTH_SERVICES_TITLE.saveHics:
         return '4.29 Битүүмж үүсгэх сервис';
      case HEALTH_SERVICES_TITLE.sendHics:
         return '4.30 Төлбөрийн мэдээлэл илгээх сервис';
      case HEALTH_SERVICES_TITLE.setApproval:
         return '4.32 Эмчийн заалтыг бүртгэх сервис';
      case HEALTH_SERVICES_TITLE.setPatientSheet:
         return '4.36 Эмнэлэгт өвчтөн илгээх хуудас үүсгэх сервис';
      case HEALTH_SERVICES_TITLE.confirmHics:
         return '4.40 Тусламж үйлчилгээг дуусгавар болгох сервис – Зөвхөн Амбулаторийн үзлэг оношилгоо, шинжилгээний багц */';
      case HEALTH_SERVICES_TITLE.reConfirmHics:
         return '4.41 Дахин баталгаажуулах сервис';
      case HEALTH_SERVICES_TITLE.fingerRequest:
         return '4.43 Хурууны хээ танихгүй иргэнийг бүртгэх сервис';
      case HEALTH_SERVICES_TITLE.repairHics:
         return '4.44 Регистрийн дугаар болон оношийн мэдээлэл буруу илгээгдсэн гүйцэтгэлийг засварлах сервис';
      case HEALTH_SERVICES_TITLE.setPatientReturn:
         return '4.46 Эмнэлгээс өвчтөн илгээх хуудас үүсгэх сервис';
      default:
         break;
   }
};
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
