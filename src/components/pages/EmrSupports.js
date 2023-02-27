import { PrinterFilled } from '@ant-design/icons';
import { Button, Card, Modal, Table } from 'antd';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../features/authReducer';
import { Get } from '../comman';
//
import PaintStory from '../pages/EMR/InPatient/document/painStory/Index';
//

function EmrSupports({ appointmentId, usageType }) {
   const token = useSelector(selectCurrentToken);
   let location = useLocation();
   const [storyLists, setStoryLists] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const getStoryTEST = async () => {
      const conf = {
         headers: {},
         params: {
            patientId: location?.state?.patientId
         }
      };
      var response = await Get('inpatient/story', token, conf);
      setStoryLists(response.data);
   };
   useEffect(() => {
      getStoryTEST();
   }, [isOpen]);
   //
   return (
      <>
         <Card
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
               paddingTop: 10,
               paddingLeft: 10,
               paddingRight: 10,
               paddingBottom: 10,
               minHeight: 50,
               maxHeight: 50
            }}
         >
            <Button onClick={() => setIsOpen(true)}>Өвчний түүх</Button>
         </Card>
         <Modal
            title="Өвчний түүх"
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            width={'23cm'}
         >
            <Table
               rowKey={'id'}
               columns={[
                  {
                     title: 'Түүх нээсэн огноо',
                     dataIndex: 'createdAt',
                     render: (text) => {
                        return moment(text).format('YYYY-MM-DD HH:mm');
                     }
                  },
                  {
                     title: 'Үйлдэл',
                     render: (_, row) => {
                        return <PaintStory data={row} />;
                     }
                  }
               ]}
               dataSource={storyLists}
            />
         </Modal>
      </>
   );
}
export default EmrSupports;
