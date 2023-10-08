export const highPressureRightCalculator = (highPressureRight) => {
   if (highPressureRight >= 91 && highPressureRight <= 100) {
      return 2;
   } else if (highPressureRight >= 101 && highPressureRight <= 110) {
      return 1;
   } else if (highPressureRight >= 111 && highPressureRight <= 219) {
      return 0;
   } else if (highPressureRight <= 90 || highPressureRight >= 220) {
      return 3;
   }
   return 0;
};

export const pulseCalculator = (pulse) => {
   if (pulse >= 111 && pulse <= 130) {
      return 2;
   } else if ((pulse >= 41 && pulse <= 50) || (pulse >= 91 && pulse <= 110)) {
      return 1;
   } else if (pulse >= 51 && pulse <= 90) {
      return 0;
   } else if (pulse <= 40 || pulse >= 131) {
      return 3;
   }
   return 0;
};

export const tempCalculator = (temp) => {
   if ((temp >= 35.1 && temp <= 36) || (temp >= 38.1 && temp <= 39)) {
      return 1;
   } else if (temp >= 36.1 && temp <= 38) {
      return 0;
   } else if (temp <= 35.0) {
      return 3;
   } else if (temp >= 39.1) {
      return 2;
   }
   return 0;
};

export const respiratoryRateCalculator = (respiratoryRate) => {
   if (respiratoryRate >= 21 && respiratoryRate <= 24) {
      return 2;
   } else if (respiratoryRate >= 9 && respiratoryRate <= 11) {
      return 1;
   } else if (respiratoryRate >= 12 && respiratoryRate <= 20) {
      return 0;
   } else if (respiratoryRate <= 8 || respiratoryRate >= 25) {
      return 3;
   }
   return 0;
};

export const spO2Calculator = (spO2) => {
   if (spO2 <= 91) {
      return 3;
   } else if (spO2 >= 92 && spO2 <= 93) {
      return 2;
   } else if (spO2 >= 94 && spO2 <= 95) {
      return 1;
   } else if (spO2 >= 96) {
      return 0;
   }
   return 0;
};

export const mindCalculator = (mind) => {
   if (mind == 'A') {
      return 0;
   } else if (mind == 'V,P,U') {
      return 3;
   }
   return 0;
};

export const totalCalculator = (values) => {
   const { highPressureRight, pulse, temp, respiratoryRate, spO2, mind } = values;
   const mindEWS = mindCalculator(mind);
   const spoEWS = spO2Calculator(spO2);
   const respiratoryEWS = respiratoryRateCalculator(respiratoryRate);
   const tempEWS = tempCalculator(temp);
   const pulseEWS = pulseCalculator(pulse);
   const systolEWS = highPressureRightCalculator(highPressureRight);
   const total = systolEWS + pulseEWS + tempEWS + respiratoryEWS + spoEWS + mindEWS;
   let message = '';
   if (total >= 0 && total <= 4) {
      message =
         'Хариуцсан сувилагч өвчтөнг үнэлэх ба хяналтын давтамжийг өөрчлөх, эсвэл эмнэлзүйн ямар нэгэн арга' +
         'хэмжээ авах талаар шийдвэр гаргана.  <br/> ';
   } else if (
      total == 5 ||
      total == 6 ||
      systolEWS == 3 ||
      tempEWS == 3 ||
      respiratoryEWS == 3 ||
      pulseEWS == 3 ||
      spoEWS == 3 ||
      (mindEWS == 3 && total < 7)
   ) {
      message =
         'Эмчлэгч эмчид яаралтай мэдэгдэх бөгөөд эмчлэгч эмч өвчтөнг үнэлж яаралтай тусламжийн багийг дуудах эсэх ' +
         'шийдвэрийг гаргана.  <br/>';
   } else if (total >= 7) {
      message =
         '- Эмнэлзүйн/яаралтай тусламжийн багийг яаралтай дуудан, үнэлгээ' +
         'хийж өвчтөнг ихэвчлэн дараагийн шатлалын тусламж үзүүлэх.  <br/> ';
   }
   return { total, message };
};

const colorGray = '#C0C0C0';
const colorYellow = '#f1e55a';
const colorGreen = '#99FF99';
const colorRed = '#FF6666';

export const colorSystolews = (systol) => {
   const systolEWS = highPressureRightCalculator(systol);
   if (systolEWS == 0) return colorGray;
   else if (systolEWS == 1) return colorGreen;
   else if (systolEWS == 2) return colorYellow;
   else if (systolEWS == 3) return colorRed;
   return '#fff';
};

export const colorTempews = (temp) => {
   const tempEWS = tempCalculator(temp);
   if (tempEWS == 0) return colorGray;
   else if (tempEWS == 1) return colorGreen;
   else if (tempEWS == 2) return colorYellow;
   else if (tempEWS == 3) return colorRed;
   return '#fff';
};

export const colorRespiratoryews = (respiratoryRate) => {
   const respiratoryEWS = respiratoryRateCalculator(respiratoryRate);
   if (respiratoryEWS == 0) return colorGray;
   else if (respiratoryEWS == 1) return colorGreen;
   else if (respiratoryEWS == 2) return colorYellow;
   else if (respiratoryEWS == 3) return colorRed;
   return '#fff';
};

export const colorSpoews = (spo2) => {
   const spo2ews = spO2Calculator(spo2);
   if (spo2ews == 0) return colorGray;
   else if (spo2ews == 1) return colorGreen;
   else if (spo2ews == 2) return colorYellow;
   else if (spo2ews == 3) return colorRed;
   return '#fff';
};

export const colorPulsews = (pulse) => {
   const pulseEWS = pulseCalculator(pulse);
   if (pulseEWS == 0) return colorGray;
   else if (pulseEWS == 1) return colorGreen;
   else if (pulseEWS == 2) return colorYellow;
   else if (pulseEWS == 3) return colorRed;
   return '#fff';
};

export const colorMindews = (mind) => {
   const mindEWS = mindCalculator(mind);
   if (mindEWS == 0) return colorGray;
   else if (mindEWS == 1) return colorGreen;
   else if (mindEWS == 2) return colorYellow;
   else if (mindEWS == 3) return colorRed;
   return '#fff';
};

export const colorTotal = (values) => {
   const { total, message } = totalCalculator(values);
   if (total >= 0 && total <= 4) return colorGray;
   else if (total == 3) return colorGreen;
   else if (total == 5 || total == 6) return colorYellow;
   else if (total >= 7) return colorRed;
   return '#fff';
};

export const colorCalculator = (systolEWS, pulsEWS, temEWS, respiratoryEWS, spoEWS, mindEWS, totalEWS) => {
   let colorSystolews = '';
   let colorPulsews = '';
   let colorTempews = '';
   let colorRespiratoryews = '';
   let colorSpoews = '';
   let colorMindews = '';
   let colorTotal = '';
   if (systolEWS == 0) colorSystolews = colorGray;
   else if (systolEWS == 1) colorSystolews = colorGreen;
   else if (systolEWS == 2) colorSystolews = colorYellow;
   else if (systolEWS == 3) colorSystolews = colorRed;

   if (pulsEWS == 0) colorPulsews = colorGray;
   else if (pulsEWS == 1) colorPulsews = colorGreen;
   else if (pulsEWS == 2) colorPulsews = colorYellow;
   else if (pulsEWS == 3) colorPulsews = colorRed;

   if (temEWS == 0) colorTempews = colorGray;
   else if (temEWS == 1) colorTempews = colorGreen;
   else if (temEWS == 2) colorTempews = colorYellow;
   else if (temEWS == 3) colorTempews = colorRed;

   if (respiratoryEWS == 0) colorRespiratoryews = colorGray;
   else if (respiratoryEWS == 1) colorRespiratoryews = colorGreen;
   else if (respiratoryEWS == 2) colorRespiratoryews = colorYellow;
   else if (respiratoryEWS == 3) colorRespiratoryews = colorRed;

   if (spoEWS == 0) colorSpoews = colorGray;
   else if (spoEWS == 1) colorSpoews = colorGreen;
   else if (spoEWS == 2) colorSpoews = colorYellow;
   else if (spoEWS == 3) colorSpoews = colorRed;

   if (mindEWS == 0) colorMindews = colorGray;
   else if (mindEWS == 1) colorMindews = colorGreen;
   else if (mindEWS == 2) colorMindews = colorYellow;
   else if (mindEWS == 3) colorMindews = colorRed;

   if (totalEWS >= 0 && totalEWS <= 4) colorTotal = colorGray;
   else if (totalEWS == 3) colorTotal = colorGreen;
   else if (totalEWS == 5 || totalEWS == 6) colorTotal = colorYellow;
   else if (totalEWS >= 7) colorTotal = colorRed;

   //    return {
   //       colorSystolews,
   //       colorPulsews,
   //       colorTempews,
   //       colorRespiratoryews,
   //       colorSpoews,
   //       colorMindews,
   //       colorTotal
   //    };
};
