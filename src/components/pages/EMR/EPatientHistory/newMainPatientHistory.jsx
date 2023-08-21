import React from 'react';
import { connect } from 'react-redux';
import jwtInterceopter from '../../../jwtInterceopter';
import { isObjectEmpty } from '../../../comman';
import { Form } from 'antd';
const getReduxDatas = (state) => {
   const IncomeEMRData = state.emrReducer.emrData;
   const IncomeInspection = state.noteReducer.note;
   return { IncomeEMRData, IncomeInspection };
};
class newMainPatientHistory extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         [Form]: Form.useForm()
      };
   }
   async getInspectionNote() {
      if (!isObjectEmpty(this.props.IncomeInspection?.inspectionNote)) {
         const inspectionNote = this.props.IncomeInspection.inspectionNote;
         var data = {};
         if (inspectionNote.inspection) {
            data['inspection'] = JSON.parse(inspectionNote.inspection);
         }
         if (inspectionNote.pain) {
            data['pain'] = JSON.parse(inspectionNote.pain);
         }
         if (inspectionNote.plan) {
            data['plan'] = JSON.parse(inspectionNote.plan);
         }
         if (inspectionNote.question) {
            data['question'] = JSON.parse(inspectionNote.question);
         }
         if (inspectionNote.advice) {
            data['advice'] = JSON.parse(inspectionNote.advice);
         }
         if (inspectionNote.conclusion) {
            data['conclusion'] = JSON.parse(inspectionNote.conclusion);
         }
         console.log(this.state.Form.getFieldsValue());
      }
   }
   async getDiagnosis() {
      if (this.props.IncomeInspection?.diagnosis.length > 0) {
         console.log('asdasdasdsad');
      }
   }
   async componentDidMount() {
      await this.getInspectionNote();
      await this.getDiagnosis();
   }
   render() {
      console.log(this.props);
      //   if (this.props.IncomeEMRData?.usageType === 'IN') {
      //      return <div>HEWTEN</div>;
      //   }
      //   return <div>AMB</div>;
   }
}
export default connect(getReduxDatas)(newMainPatientHistory);
