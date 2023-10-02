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
   setPatientReturn: 'SET_PATIENT_RETURN',
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
