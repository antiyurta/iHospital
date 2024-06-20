import React, { useEffect, useState } from 'react';
import '../document.css';
import { Paragraph, Box, TextWithUnderline, FlexRow, } from '../Components';
const CT1ClinalDiagnose = (props) => {
   const [formData, setFormData] = useState({});
   useEffect(() => {
      if (props?.data?.formData) {
         setFormData(props?.data?.formData);
      }
   }, [props]);
   return (
      <div className="print-remove-p">
         <div className='page'>
            <div className='subpage'>
               <Box left top right >
                  <Paragraph style={{ textAlign: 'center' }}>КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ</Paragraph>
               </Box>
               <Box left top right style={{ height: "60px" }}>
                  <Paragraph >Үндсэн онош:
                     <TextWithUnderline> {formData?.q1}</TextWithUnderline>
                  </Paragraph>
               </Box>
               <Box left top right style={{ height: "70px" }}>
                  <Paragraph>Дагалдах онош:
                     <TextWithUnderline> {formData?.q2}</TextWithUnderline>
                  </Paragraph>
               </Box>
               <Box left top right style={{ height: "100px" }}>
                  <Paragraph>Хүндрэл
                     <TextWithUnderline> {formData?.q3}</TextWithUnderline>
                  </Paragraph>
               </Box>
               <FlexRow >
                  <Box width={'30%'} left top style={{ height: "300px" }} >
                     <Paragraph>Ялган оношлох эмгэгүүд ба хам шинжүүд:
                        <TextWithUnderline> {formData?.q4}</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <Box width={'30%'} left top >
                     <Paragraph>Хийгдэх шинжилгээ:
                        <TextWithUnderline> {formData?.q5}</TextWithUnderline>
                     </Paragraph>
                  </Box>
                  <Box width={'40%'} left top right>
                     <Paragraph>Яаралтай хийгдэх эмчилгээ:
                        <TextWithUnderline> {formData?.q6}</TextWithUnderline>
                     </Paragraph>
                  </Box>
               </FlexRow>
               <Box left top right bottom style={{ display: 'flex', justifyContent: "space-around", height: "30px" }}>
                  <Paragraph>Эмчийн нэр: </Paragraph>
                  <Paragraph> Гарын үсэг </Paragraph>
                  <Paragraph style={{ display: 'flex', gap: "30px" }}>
                     <span>Он</span>
                     <span>сар</span>
                     <span>өдөр</span>
                  </Paragraph>
               </Box>
            </div>
         </div>
      </div>


   )
}

export default CT1ClinalDiagnose;
