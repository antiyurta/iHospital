import xypFieldJson from './xypFieldJson';
/** Албан тушаал position 1 */
export const position = xypFieldJson.filter((field) => field.fieldId === 1);
/** Хүчиндүүлсэн эсэх isRaped 2 */
export const isRaped = xypFieldJson.filter((field) => field.fieldId === 2);
/** Хүйс gender 3 */
export const gender = xypFieldJson.filter((field) => field.fieldId === 3);
export const getGender = (value) => gender.find((gndr) => gndr.valueId === value)?.valueName;
/** education 4 */
export const education = xypFieldJson.filter((field) => field.fieldId === 4);
/** employment 5 */
export const employment = xypFieldJson.filter((field) => field.fieldId === 5);
/** isEmployment 6 */
export const isEmployment = xypFieldJson.filter((field) => field.fieldId === 6);
/** emplessDescription 7 */
export const emplessDescription = xypFieldJson.filter((field) => field.fieldId === 7);
/** Эрүүл мэндийн төрөл healthType 8 */
export const healthType = xypFieldJson.filter((field) => field.fieldId === 8);
/** Жирэмсэн эсэх isPregnancy 9 */
export const isPregnancy = xypFieldJson.filter((field) => field.fieldId === 9);
/** Хөгжлийн бэрхшээлтэй эсэх isImpairment 10  */
export const isImpairment = xypFieldJson.filter((field) => field.fieldId === 10);
/** Эмнэлгээс гарагчийн төрөл inpatientStatus 11 */
export const inpatientStatus = xypFieldJson.filter((field) => field.fieldId === 11);
/** Өвчний төгсгөл treatmentResult 12 */
export const treatmentResult = xypFieldJson.filter((field) => field.fieldId === 12);
/**  Mэс засал хийлгэсэн эсэх hasSurgery 13 */
export const hasSurgery = xypFieldJson.filter((field) => field.fieldId === 13);
/** Өвчлөл disease 15 */
export const disease = xypFieldJson.filter((field) => field.fieldId === 15);
/** Дээд шатлалд илгээсэн эсэх isSendSubstate 16 */
export const isSendSubstate = xypFieldJson.filter((field) => field.fieldId === 16);
/** Төлбөрийн төрөл paymentType 17 */
export const paymentType = xypFieldJson.filter((field) => field.fieldId === 17);
/** Жирэмсний төрөл pregnancyActivity 18 */
export const pregnancyActivity = xypFieldJson.filter((field) => field.fieldId === 18);
/** Сүүлийн 4 долоо хоногт мэс засал хийлгэсэн эсэх hasSurgeryFourWeeks 19 */
export const hasSurgeryFourWeeks = xypFieldJson.filter((field) => field.fieldId === 19);
/** Асуумжаар дүгнэлт шинжилгээ /VA WHO 2016 standart/ хийсэн эсэх hasQuestionnaire 20 */
export const hasQuestionnaire = xypFieldJson.filter((field) => field.fieldId === 20);
/** Хэрэв тийм бол баталгаажуулахад ашигласан эсэх isQuestionnaireUsed 21 */
export const isQuestionnaireUsed = xypFieldJson.filter((field) => field.fieldId === 21);
/** Нас барсан хэлбэр deathType 22  */
export const deathType = xypFieldJson.filter((field) => field.fieldId === 22);
/** Нас барсан газар deathLocation 23 */
export const deathLocation = xypFieldJson.filter((field) => field.fieldId === 23);
/** Ураг болон нярайн эндэгдэл fetalMortality 24 */
export const fetalMortality = xypFieldJson.filter((field) => field.fieldId === 24);
/** Ихэр эсэх isTwin 25 */
export const isTwin = xypFieldJson.filter((field) => field.fieldId === 25);
/** Амьгүй төрөлт isStillBirth 26 */
export const isStillBirth = xypFieldJson.filter((field) => field.fieldId === 26);
/** Эхийн эндэгдэлтэй эсэх isMotherMortality 27 */
export const isMotherMortality = xypFieldJson.filter((field) => field.fieldId === 27);
/** Эхийн эндэгдэлт motherMortality 28 */
export const motherMortality = xypFieldJson.filter((field) => field.fieldId === 28);
/** Жирэмслэлт нь нас баралтын шалтгаан болсон эсэх motherMortalityResult 29  */
export const motherMortalityResult = xypFieldJson.filter((field) => field.fieldId === 29);
/** Гэр бүлийн байдал relationship 30 */
export const relationship = xypFieldJson.filter((field) => field.fieldId === 30);
/** Төрлөгийн хэлбэр birthType 31  */
export const birthType = xypFieldJson.filter((field) => field.fieldId === 31);
/** Жирэмсний хүндрэлтэй эсэх hasPregnantSeverity 32 */
export const hasPregnantSeverity = xypFieldJson.filter((field) => field.fieldId === 32);
/** Тээгч эх эсэх isSurrogateMother 33 */
export const isSurrogateMother = xypFieldJson.filter((field) => field.fieldId === 33);
/** Цусны бүлэг bloodType 34 */
export const bloodType = xypFieldJson.filter((field) => field.fieldId === 34);
/** Ажлын газар workplace 35 */
export const workplace = xypFieldJson.filter((field) => field.fieldId === 35);
/** Мэргэжил occupation 36 */
export const occupation = xypFieldJson.filter((field) => field.fieldId === 36);
/** Мэс заслын төрөл surgeryType 37 */
export const surgeryType = xypFieldJson.filter((field) => field.fieldId === 37);
/** Мэс заслын хүндрэл surgerySeverity 38 */
export const surgerySeverity = xypFieldJson.filter((field) => field.fieldId === 38);
/** Төрөлт удирдсан manageBirth 39  */
export const manageBirth = xypFieldJson.filter((field) => field.fieldId === 39);
/** Донорын төрөл donerType 40 */
export const donerType = xypFieldJson.filter((field) => field.fieldId === 40);
/** Донор эсэх isDoner 41 */
export const isDoner = xypFieldJson.filter((field) => field.fieldId === 41);
/** Төрсөн газар birthPlace */
export const birthPlace = xypFieldJson.filter((field) => field.fieldId === 42);
