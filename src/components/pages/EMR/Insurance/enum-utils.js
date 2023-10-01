export const HEALTH_SERVICES_TITLE = {
   saveHics: 'SAVE_HICS',
   setApproval: 'SET_APPROVAL',
   getPatientSheet: 'GET_PATIENT_SHEET',
   setPatientSheet: 'SET_PATIENT_SHEET',
   setPatientReturn: 'SET_PATIENT_RETURN'
};

export const HEALTH_SERVCES_DESCRIPTION = (title) => {
   switch (title) {
      case HEALTH_SERVICES_TITLE.setApproval:
         return '4.32 Эмчийн заалтыг бүртгэх сервис';
      case HEALTH_SERVICES_TITLE.getPatientSheet:
         return '4.35 Эмнэлэгт өвчтөн илгээх хуудасны мэдээлэл татах сервис';
      case HEALTH_SERVICES_TITLE.setPatientSheet:
         return '4.36 Эмнэлэгт өвчтөн илгээх хуудас үүсгэх сервис';
      case HEALTH_SERVICES_TITLE.saveHics:
         return '4.29 Битүүмж үүсгэх сервис';
      case HEALTH_SERVICES_TITLE.setPatientReturn:
         return '4.46 Эмнэлгээс өвчтөн илгээх хуудас үүсгэх сервис';
      default:
         break;
   }
};
