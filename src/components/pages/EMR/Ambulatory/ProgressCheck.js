import { Collapse } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import Allergy from '../Problems/Allergy';
import Birth from '../Problems/Birth';
import EpidemicQuestion from '../Problems/EpidemicQuestion';
import GeneticQuestion from '../Problems/GeneticQuestion';
import HealthRecord from '../Problems/HealthRecord';
import LifeCondition from '../Problems/LifeCondition';
import LifeStyle from '../Problems/LifeStyle';
import UsuallyMedicine from '../Problems/UsuallyMedicine';
const { Panel } = Collapse;
function ProgressCheck({ PatientId }) {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [history, setHistory] = useState([]);
   const getProgressChecks = async (id) => {
      config.params.patientId = id;
      const response = await Get('emr/patient-history', token, config);
      if (response.data?.length > 0) {
         setHistory(response.data.slice(-1)[0]);
      }
   };
   useEffect(() => {
      if (PatientId) {
         getProgressChecks(PatientId);
      }
   }, [PatientId]);
   return (
      <>
         {history != '' ? (
            <Collapse accordion>
               {history?.hasOwnProperty('birth') ? (
                  <Panel header="Төрөлт, өсөлт бойжилт" key="1">
                     <Birth data={history?.birth} />
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('healthRecord') ? (
                  <Panel header="Өвчний түүх" key="2">
                     <HealthRecord data={history.healthRecord} />
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('lifeStyle') ? (
                  <Panel header="Амьдралын хэв маяг" key="3">
                     <LifeStyle data={history['lifeStyle']} />
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('lifeCondition') ? (
                  <Panel header="Амьдралын нөхцөл" key="14">
                     <LifeCondition data={history['lifeCondition']} />
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('allergy') ? (
                  <Panel header="Харшил" key="5">
                     <Allergy data={history['allergy']} />
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('usuallyMedicine') ? (
                  <Panel header="Эмийн хэрэглээ" key="6">
                     <UsuallyMedicine data={history['usuallyMedicine']} />
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('epidemicQuestion') ? (
                  <Panel header="Тархвар зүйн асуумж" key="7">
                     <EpidemicQuestion data={history['epidemicQuestion']} />
                  </Panel>
               ) : null}
               {history?.hasOwnProperty('geneticQuestion') ? (
                  <Panel header="Удамшлын асуумж" key="8">
                     <GeneticQuestion data={history['geneticQuestion']} />
                  </Panel>
               ) : null}
            </Collapse>
         ) : null}
      </>
   );
}
export default ProgressCheck;
