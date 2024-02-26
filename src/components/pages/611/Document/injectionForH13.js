import dayjs from 'dayjs';
import { formatNameForDoc } from '../../../comman';
const StatusIo = {
   Morning: 'q2-1', // Өглөө
   Afternoon: 'q2-2', // Өдөр
   Evening: 'q2-3' // Орой
};

const calcPageCount = (items, history, pageInSize) => {
   let data = [];
   const datas = [];
   items.map((item, index) => {
      data.push(item);
      if ((index + 1) % pageInSize === 0) {
         datas.push(data);
         data = [];
      } else if (index + 1 === items.length) {
         datas.push(data);
      }
   });
   return { data: datas, history: history };
};

export const calcTotal = (data) => {
   data.map((el) => {
      el.map((item) => {
         let morningTotal = 0;
         let afternoonTotal = 0;
         let eveningTotal = 0;
         item.inputs?.map((value) => {
            morningTotal += value.morning;
            afternoonTotal += value.afternoon;
            eveningTotal += value.evening;
         });
         item['iMorningTotal'] = morningTotal;
         item['iAfternoonTotal'] = afternoonTotal;
         item['iEveningTotal'] = eveningTotal;
         morningTotal = 0;
         afternoonTotal = 0;
         eveningTotal = 0;
         item.outputs?.map((value) => {
            morningTotal += value.morning;
            afternoonTotal += value.afternoon;
            eveningTotal += value.evening;
         });
         item['oMorningTotal'] = morningTotal;
         item['oAfternoonTotal'] = afternoonTotal;
         item['oEveningTotal'] = eveningTotal;
      });
   });
   return data;
};
export const configureData = (formData) => {
   const history = formData?.find((data) => data.history._id)?.history;
   const result = [];
   formData?.map((item) => {
      const date = dayjs(item.createdAt).format('YYYY/MM/DD');
      if (result.filter((res) => res.date === date).length === 0) {
         const filterData = formData.filter((item) => dayjs(item.createdAt).format('YYYY/MM/DD') === date);
         const inputs = [];
         const outputs = [];
         const nurses = [];
         const filterInputs = filterData.filter((data) => data?.data?.q1 === 'q1-1');
         const filterOutputs = filterData.filter((data) => data.data?.q1 === 'q1-2');
         const inputNurse = {};
         const outputNurse = {};
         const oralBalance = {};
         const tubeBalance = {};
         const veinBalance = {};
         const otherBalance = {};
         const urineBalance = {};
         const pooBalance = {};
         const outTubeBalance = {};
         const vomitBalance = {};
         const inputNurseObject = (statusIo) => {
            const data = filterInputs.find((res) => res.data?.q2 === statusIo);
            if (data) {
               return formatNameForDoc(data?.createdBy?.lastName, data?.createdBy?.firstName);
            } else return '';
         };
         const outputNurseObject = (statusIo) => {
            const data = filterOutputs.find((res) => res.data?.q2 === statusIo);
            if (data) {
               return formatNameForDoc(data?.createdBy?.lastName, data?.createdBy?.firstName);
            } else return '';
         };
         const inputObject = (statusIo, param) => {
            const data = filterInputs.find((res) => res.data?.q2 === statusIo && res['data'][param] > 0);
            if (data && data['data'][param]) {
               return data['data'][param];
            } else return 0;
         };
         const outputObject = (statusIo, param) => {
            const data = filterOutputs.find((res) => res.data?.q2 === statusIo && res['data'][param] > 0);
            if (data && data['data'][param]) {
               return data['data'][param];
            } else return 0;
         };
         // Сувилагч
         inputNurse.morning = inputNurseObject(StatusIo.Morning);
         inputNurse.afternoon = inputNurseObject(StatusIo.Afternoon);
         inputNurse.evening = inputNurseObject(StatusIo.Evening);
         nurses.push(inputNurse);
         outputNurse.morning = outputNurseObject(StatusIo.Morning);
         outputNurse.afternoon = outputNurseObject(StatusIo.Afternoon);
         outputNurse.evening = outputNurseObject(StatusIo.Evening);
         nurses.push(outputNurse);
         // Амаар
         oralBalance.how = 'Амаар';
         oralBalance.morning = inputObject(StatusIo.Morning, 'q3');
         oralBalance.afternoon = inputObject(StatusIo.Afternoon, 'q3');
         oralBalance.evening = inputObject(StatusIo.Evening, 'q3');
         // Гуурсаар
         tubeBalance.how = 'Гуурсаар';
         tubeBalance.morning = inputObject(StatusIo.Morning, 'q4');
         tubeBalance.afternoon = inputObject(StatusIo.Afternoon, 'q4');
         tubeBalance.evening = inputObject(StatusIo.Evening, 'q4');
         // Судсаар
         veinBalance.how = 'Судсаар';
         veinBalance.morning = inputObject(StatusIo.Morning, 'q5');
         veinBalance.afternoon = inputObject(StatusIo.Afternoon, 'q5');
         veinBalance.evening = inputObject(StatusIo.Evening, 'q5');
         // Бусад
         otherBalance.how = 'Бусад';
         otherBalance.morning = inputObject(StatusIo.Morning, 'q6');
         otherBalance.afternoon = inputObject(StatusIo.Afternoon, 'q6');
         otherBalance.evening = inputObject(StatusIo.Evening, 'q6');
         inputs.push(oralBalance, tubeBalance, veinBalance, otherBalance);
         // Шээсээр
         urineBalance.how = 'Шээсээр';
         urineBalance.morning = outputObject(StatusIo.Morning, 'q3');
         urineBalance.afternoon = outputObject(StatusIo.Afternoon, 'q3');
         urineBalance.evening = outputObject(StatusIo.Evening, 'q3');
         // Өтгөнөөр
         pooBalance.how = 'Өтгөнөөр';
         pooBalance.morning = outputObject(StatusIo.Morning, 'q4');
         pooBalance.afternoon = outputObject(StatusIo.Afternoon, 'q4');
         pooBalance.evening = outputObject(StatusIo.Evening, 'q4');
         // Гуурсаар
         outTubeBalance.how = 'Гуурсаар';
         outTubeBalance.morning = outputObject(StatusIo.Morning, 'q5');
         outTubeBalance.afternoon = outputObject(StatusIo.Afternoon, 'q5');
         outTubeBalance.evening = outputObject(StatusIo.Evening, 'q5');
         // Бусад бөөлжүүлэх
         vomitBalance.how = 'Бусад /Бөөлжүүлэх/';
         vomitBalance.morning = outputObject(StatusIo.Morning, 'q6');
         vomitBalance.afternoon = outputObject(StatusIo.Afternoon, 'q6');
         vomitBalance.evening = outputObject(StatusIo.Evening, 'q6');
         outputs.push(urineBalance, pooBalance, outTubeBalance, vomitBalance);
         result.push({ date: date, inputs: inputs, outputs: outputs, nurses: nurses });
      }
      return calcPageCount(result, history, 3);
   });
   return calcPageCount(result, history, 3);
};
