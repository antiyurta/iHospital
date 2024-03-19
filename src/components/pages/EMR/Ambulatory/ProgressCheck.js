import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import Allergy from '../Problems/Allergy';
import Birth from '../Problems/Birth';
import EpidemicQuestion from '../Problems/EpidemicQuestion';
import GeneticQuestion from '../Problems/GeneticQuestion';
import HealthRecord from '../Problems/HealthRecord';
import LifeCondition from '../Problems/LifeCondition';
import LifeStyle from '../Problems/LifeStyle';
import UsuallyMedicine from '../Problems/UsuallyMedicine';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../features/emrReducer';
import patientHistoryService from '../../../../services/emr/patientHistory';

const { Panel } = Collapse;
function ProgressCheck() {
   const incomeEMRData = useSelector(selectCurrentEmrData);
   const [history, setHistory] = useState([]);
   const getProgressChecks = async () => {
      await patientHistoryService
         .getPatientHistory({
            params: {
               patientId: incomeEMRData.patientId
            }
         })
         .then(({ data: { response } }) => {
            setHistory(response);
         });
   };
   useEffect(() => {
      incomeEMRData && getProgressChecks();
   }, []);
   return (
      <>
         {history != '' ? (
            <Collapse accordion>
               {history?.hasOwnProperty('birth') ? (
                  <Panel header="Төрөлт, өсөлт бойжилт" key="1">
                     <div
                        style={{
                           height: 200,
                           overflow: 'auto'
                        }}
                     >
                        <Birth data={history?.birth} />
                     </div>
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('healthRecord') ? (
                  <Panel header="Өвчний түүх" key="2">
                     <div
                        style={{
                           height: 200,
                           overflow: 'auto'
                        }}
                     >
                        <HealthRecord data={history.healthRecord} />
                     </div>
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('lifeStyle') ? (
                  <Panel header="Амьдралын хэв маяг" key="3">
                     <div
                        style={{
                           height: 200,
                           overflow: 'auto'
                        }}
                     >
                        <LifeStyle data={history['lifeStyle']} />
                     </div>
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('lifeCondition') ? (
                  <Panel header="Амьдралын нөхцөл" key="14">
                     <div
                        style={{
                           height: 200,
                           overflow: 'auto'
                        }}
                     >
                        <LifeCondition data={history['lifeCondition']} />
                     </div>
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('allergy') ? (
                  <Panel header="Харшил" key="5">
                     <div
                        style={{
                           height: 200,
                           overflow: 'auto'
                        }}
                     >
                        <Allergy data={history['allergy']} />
                     </div>
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('usuallyMedicine') ? (
                  <Panel header="Эмийн хэрэглээ" key="6">
                     <div
                        style={{
                           height: 200,
                           overflow: 'auto'
                        }}
                     >
                        <UsuallyMedicine data={history['usuallyMedicine']} />
                     </div>
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('epidemicQuestion') ? (
                  <Panel header="Тархвар зүйн асуумж" key="7">
                     <div
                        style={{
                           height: 200,
                           overflow: 'auto'
                        }}
                     >
                        <EpidemicQuestion data={history['epidemicQuestion']} />
                     </div>
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('geneticQuestion') ? (
                  <Panel header="Удамшлын асуумж" key="8">
                     <div
                        style={{
                           height: 200,
                           overflow: 'auto'
                        }}
                     >
                        <GeneticQuestion data={history['geneticQuestion']} />
                     </div>
                  </Panel>
               ) : null}
            </Collapse>
         ) : null}
      </>
   );
}
export default ProgressCheck;
