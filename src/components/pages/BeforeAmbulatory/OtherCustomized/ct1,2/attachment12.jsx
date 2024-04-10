import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import { Button, Form, Modal, Table, Input } from 'antd';
import jwtInterceopter from '../../../../jwtInterceopter';
import Customized from '../../../BeforeAmbulatory/Customized/Index';
import dayjs from 'dayjs';
import { formatNameForDoc } from '../../../../common';
import { ArrowRightOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EmrContext from '../../../../../features/EmrContext';
import DocumentViewer from '../../../EMR/DocumentViewer';
import { regularByDocumentValueIn } from '../../../../documentInjection';
const { TextArea } = Input;
const InTitle = {
   q3: 'Хэрэгжүүлэлт',
   q4: 'Дүгнэлт'
};
const Attachment2 = ({ document }) => {
   const { isViewDocument, setDocumentView } = useContext(EmrContext);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [form] = Form.useForm();
   const [currentIndex, setCurrentIndex] = useState(null);
   const [selectedRow, setSelectedRow] = useState({});
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenModalSecond, setIsOpenModalSecond] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);

   const columns = [
      {
         title: 'Огноо/цаг',
         dataIndex: 'createdAt',
         width: 50,
         render: (text) => {
            return dayjs(text).format('YYYY/MM/DD HH:mm');
         }
      },
      {
         title: 'Асуудлын дугаар#',
         width: 50,
         dataIndex: ['data', 'q1'],
         render: (q1) => q1.join(',')
      },
      {
         title: 'Сувилах төлөвлөгөө',
         dataIndex: ['data', 'q2']
      },
      {
         title: 'Хэрэгжүүлэлт',
         dataIndex: ['data', 'q3'],
         render: (q3, row) => {
            if (!q3) {
               return (
                  <Button
                     type="primary"
                     icon={<EditOutlined />}
                     onClick={() => {
                        setCurrentIndex('q3');
                        setSelectedRow(row);
                        setIsOpenModalSecond(true);
                     }}
                  >
                     Бичих
                  </Button>
               );
            }
            return <span className="max-w-[100px] whitespace-pre-wrap">{q3}</span>;
         }
      },
      {
         title: 'Дүгнэлт',
         dataIndex: ['data', 'q4'],
         render: (q4, row) => {
            if (!q4) {
               return (
                  <Button
                     type="primary"
                     icon={<EditOutlined />}
                     onClick={() => {
                        setCurrentIndex('q4');
                        setSelectedRow(row);
                        setIsOpenModalSecond(true);
                     }}
                  >
                     Бичих
                  </Button>
               );
            }
            return q4;
         }
      },
      {
         title: 'Сувилагч',
         dataIndex: 'createdBy',
         render: (text) => {
            return formatNameForDoc(text.lastName, text.firstName);
         }
      }
   ];
   const getData = async () => {
      setIsLoading(true);
      await jwtInterceopter
         .get('document-middleware', {
            params: {
               appointmentId: incomeEmrData.inpatientRequestId,
               patientId: incomeEmrData.patientId,
               documentId: 90,
               usageType: incomeEmrData.usageType
            }
         })
         .then(({ data: { response } }) => {
            setData(response);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const patchData = async (data) => {
      setIsLoading(true);
      await jwtInterceopter
         .patch('document-middleware/' + selectedRow._id, {
            data: {
               ...selectedRow.data,
               ...data
            }
         })
         .finally(() => {
            setIsOpenModalSecond(false);
            getData();
            setIsLoading(false);
         });
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <>
         {isViewDocument ? (
            <DocumentViewer />
         ) : (
            <div className="attachment-12">
               <div className="list">
                  <div className="head">
                     <p>Түүх</p>
                     <div className="flex flex-row gap-2">
                        <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => setIsOpenModal(true)}>
                           Нэмэх
                        </Button>
                        <Button
                           icon={<ArrowRightOutlined />}
                           onClick={() => {
                              const documents = regularByDocumentValueIn(data);
                              setDocumentView(true, documents, 'many');
                           }}
                        >
                           Дэлгэрэнгүй
                        </Button>
                     </div>
                  </div>
                  <Table
                     rowKey={'_id'}
                     bordered
                     loading={{
                        spinning: isLoading,
                        tip: 'Уншиж байна'
                     }}
                     scroll={{
                        x: 500
                     }}
                     columns={columns}
                     dataSource={data}
                     pagination={false}
                  />
               </div>
            </div>
         )}

         <Modal title="Маягт бөглөх" open={isOpenModal} onCancel={() => setIsOpenModal(false)} footer={null}>
            <Customized
               propsUsageType={incomeEmrData.usageType}
               isEdit={false}
               editId={null}
               document={document}
               documentValue={90}
               documentType={0}
               onOk={(state) => {
                  getData();
                  setIsOpenModal(state);
               }}
               isBackButton={false}
               handleBackButton={() => {}}
            />
         </Modal>
         <Modal
            title={`${InTitle[currentIndex]} бичих`}
            cancelText="Болих"
            okText="Хадгалах"
            open={isOpenModalSecond}
            onCancel={() => setIsOpenModalSecond(false)}
            onOk={() => {
               form.validateFields().then((values) => {
                  patchData(values);
               });
            }}
            confirmLoading={isLoading}
         >
            <Form form={form} layout="vertical">
               <Form.Item label={`${InTitle[currentIndex]}`} name={currentIndex}>
                  <TextArea rows={5} placeholder={`${InTitle[currentIndex]} бичих`} />
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
};
export default Attachment2;
