/** Нийгмийн даатгал төлдөг иргэний Амбулаторийн тусламж, үйлчилгээ хөнгөлөгдөх журам */
export const calculateAmbulatory = (drgCode, counter, amountHi) => {
   if (drgCode === SUPPORT_AMBULATORY_CODE) {
      let amountCit = 0;
      if (counter === 2) {
         amountCit = amountHi * 0.3;
         amountHi *= 0.7;
      } else if (counter === 3) {
         amountCit = amountHi * 0.5;
         amountHi *= 0.5;
      } else if (counter >= 4) {
         amountCit = amountHi * 0.7;
         amountHi *= 0.3;
      }
      return { amountCit, amountHi };
   }
   return null;
};
