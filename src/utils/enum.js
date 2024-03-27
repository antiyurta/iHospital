/**Ашиглах төрөл */
export const UsageTypeEnum = {
   IN: 'IN',
   OUT: 'OUT'
};
/**Үзлэг */
export const InspectionEnum = {
   // appointment: AppointmentTypeEnum, // эмчийн үзлэг
   Xray: 11, // xray request
   Exo: 12, // exo request,
   Operation: 13 // operation request
};
export const ListIndexEnum = {
   Ambulatory: 0,
   PreOrder: 1,
   Inpatient: 2
};
export const ListIndexRequestEnum = {
   Xray: 0,
   Exo: 1,
   Ekg: 2
};
export const AppointmentTypeEnum = {
   Urgent: 1, // Яаралтай
   Directly: 2, // Шууд
   PreOrder: 3, // Урьдчилсан захиалга
   Prevent: 4 // Урьдчилан сэргийлэх
};
/**Үлзэгийн төрөл */
export const InspectionTypeEnum = {
   first: 1, // Анхан
   second: 2, // Давтан
   prevent: 3, // Урьдчилан сэргийлэх
   home: 4, // Гэрийн эргэлт
   activeControl: 5, // Идэвхтэй хяналт
   callBy: 6 // Дуудлагаар
};
