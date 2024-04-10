import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Button, Modal, Table, Tabs } from 'antd';
import { ArrowRightOutlined, MinusOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Customized from '../../../BeforeAmbulatory/Customized/Index';
import { regularByDocumentValueIn } from '../../../../documentInjection';
import EmrContext from '../../../../../features/EmrContext';
import DocumentViewer from '../../../EMR/DocumentViewer';
import DocumentsFormServices from '../../../../../services/organization/document';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import dayjs from 'dayjs';
import { formatNameForDoc } from '../../../../common';

export const tubeChild = [
   {
      value: 0,
      label: 'Сарвууны ард вен'
   },
   {
      value: 1,
      label: 'Эрхий хурууны ард вен'
   },
   {
      value: 2,
      label: 'Шууны судсанд'
   },
   {
      value: 3,
      label: 'Тохойн өмнөх вен'
   },
   {
      value: 4,
      label: 'Эрхий хуруунд'
   },
   {
      value: 5,
      label: 'Чигчий хуруунд'
   },
   {
      value: 6,
      label: 'Шагайн вен'
   },
   {
      value: 7,
      label: 'Тавхайн урд вен'
   },
   {
      value: 8,
      label: 'Шагайн дор вен'
   }
];

export const tubeAreaOptions = [
   {
      label: 'Баруун гар',
      value: 0
   },
   {
      label: 'Зүүн гар',
      value: 1
   },
   {
      label: 'Баруун хөл',
      value: 2
   },
   {
      label: 'Зүүн хөл',
      value: 3
   },
   {
      label: 'Тандсан',
      value: 4
   }
];

const Attachment3 = ({ document }) => {
   const [type, setType] = useState(0);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { setDocumentView, isViewDocument } = useContext(EmrContext);
   const [editMode, setEditMode] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [needleData, setNeedleData] = useState([]);
   const [tubeData, setTubeData] = useState([]);
   const [selectedData, setSelectedData] = useState({});

   const findTubeChild = (value) => {
      return tubeChild.find((item) => item.value === value)?.label;
   };
   const findTubeAreaOptions = (value) => {
      return tubeAreaOptions.find((item) => item.value === value)?.label;
   };

   const getData = async () => {
      await DocumentsFormServices.get({
         params: {
            appointmentId: incomeEmrData.inpatientRequestId,
            patientId: incomeEmrData.patientId,
            documentId: 97,
            usageType: incomeEmrData.usageType
         }
      })
         .then(({ data: { response } }) => {
            setNeedleData(response?.filter((res) => res.data?.q0 === 0));
            setTubeData(response?.filter((res) => res.data?.q0 === 1));
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const deleteData = async (id) => {
      await DocumentsFormServices.deleteDocument(id).then(() => {
         getData();
      });
   };
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return dayjs(text).format('YYYY/MM/DD HH:mm');
         }
      },
      {
         title: 'Гуурс тавьсан талбай',
         className: 'rotate-180 text-rtl',
         render: (_, row) => {
            const first = findTubeAreaOptions(Number(row.data.q1)) || '';
            const second = findTubeChild(Number(row.data?.['q1-1'])) || '';
            return <span className="rotate-180 text-tb">{`${first} / ${second}`}</span>;
         }
      },
      {
         title: 'Гуурс cольсон шалтгаан',
         className: 'rotate-180 text-rtl',
         dataIndex: ['data', 'q2'],
         render: (q2) => <span className="rotate-180 text-tb">{q2}</span>
      },
      {
         title: 'Судасны гуурсны халдварын шинж тэмдэгээр тандах хуудас',
         children: [
            {
               title: 'Ерөнхий шинж',
               children: [
                  {
                     title: 'Халуурна /38С дээш/',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q3'],
                     render: (q3) => {
                        if (q3 === 'q3-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q3 === 'q3-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'АД ситол буурсан',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q4'],
                     render: (q4) => {
                        if (q4 === 'q4-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q4 === 'q4-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'Пульс түргэснэ',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q5'],
                     render: (q5) => {
                        if (q5 === 'q5-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q5 === 'q5-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'Шээсний гарц багасана <20мл/цаг',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q6'],
                     render: (q6) => {
                        if (q6 === 'q6-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q6 === 'q6-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'Арьс зэвхий саарал',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q7'],
                     render: (q7) => {
                        if (q7 === 'q7-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q7 === 'q7-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'Хоолонд дургүй',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q8'],
                     render: (q8) => {
                        if (q8 === 'q8-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q8 === 'q8-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  }
               ]
            },
            {
               title: 'Хэсэг гэзрын шинж',
               children: [
                  {
                     title: 'Хатгасан хэсэгт улаан',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q9'],
                     render: (q9) => {
                        if (q9 === 'q9-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q9 === 'q9-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'Хатгасан хэсэгт эмзэг өвчтэй',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q10'],
                     render: (q10) => {
                        if (q10 === 'q10-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q10 === 'q10-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'Хатгасан хэсэгт халуун үрэвссэн',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q11'],
                     render: (q11) => {
                        if (q11 === 'q11-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q11 === 'q11-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'Тэмтэрэхэд судас гүвдрүүтсэн',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q12'],
                     render: (q12) => {
                        if (q12 === 'q12-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q12 === 'q12-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  },
                  {
                     title: 'Хатгасан хэсэгт буглаатай идээтэй',
                     className: 'rotate-180 text-rtl',
                     dataIndex: ['data', 'q13'],
                     render: (q13) => {
                        if (q13 === 'q13-1')
                           return (
                              <PlusOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           );
                        else if (q13 === 'q13-2') {
                           return (
                              <MinusOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           );
                        }
                        return;
                     }
                  }
               ]
            }
         ]
      },
      {
         title: 'Авсан арга хэмжээ',
         children: [
            {
               title: (
                  <span className="flex flex-col">
                     <span>ЦАЧ шинжилгээ авсан эсэх</span>
                     <span>илэрсэн үүсгэгч</span>
                  </span>
               ),
               className: 'rotate-180 text-rtl',
               dataIndex: ['data', 'q14'],
               render: (q14) => {
                  if (q14 === 'q14-1')
                     return (
                        <PlusOutlined
                           style={{
                              color: 'green'
                           }}
                        />
                     );
                  else if (q14 === 'q14-2') {
                     return (
                        <MinusOutlined
                           style={{
                              color: 'red'
                           }}
                        />
                     );
                  }
                  return;
               }
            },
            {
               title: (
                  <span className="flex flex-col">
                     <span>Гуурсны үзүүрээс нян</span>
                     <span>судлалын шинжилгээ</span>
                     <span>авсан эсэх, илэрсэн</span>
                     <span>үүсгэгч</span>
                  </span>
               ),
               className: 'rotate-180 text-rtl',
               dataIndex: ['data', 'q15'],
               render: (q15) => {
                  if (q15 === 'q15-1')
                     return (
                        <PlusOutlined
                           style={{
                              color: 'green'
                           }}
                        />
                     );
                  else if (q15 === 'q15-2') {
                     return (
                        <MinusOutlined
                           style={{
                              color: 'red'
                           }}
                        />
                     );
                  }
                  return;
               }
            },
            {
               title: (
                  <span className="flex flex-col">
                     <span>Үрэвслийн шингэн</span>
                     <span>идээнээс нян судлалын</span>
                     <span>шинжилгээ авсан</span>
                     <span>эсэх, илэрсэн үүсгэгч</span>
                  </span>
               ),
               className: 'rotate-180 text-rtl',
               dataIndex: ['data', 'q16'],
               render: (q16) => {
                  if (q16 === 'q16-1')
                     return (
                        <PlusOutlined
                           style={{
                              color: 'green'
                           }}
                        />
                     );
                  else if (q16 === 'q16-2') {
                     return (
                        <MinusOutlined
                           style={{
                              color: 'red'
                           }}
                        />
                     );
                  }
                  return;
               }
            },
            {
               title: 'Авсан арга хэмжээ',
               className: 'rotate-180 text-rtl',
               dataIndex: ['data', 'q17'],
               render: (q17) => <span className="rotate-180 text-tb">{q17}</span>
            }
         ]
      },
      {
         title: 'Уян зүү тавьсан сувилагчийн гарын үсэг',
         className: 'rotate-180 text-rtl',
         dataIndex: 'createdBy',
         render: (createdBy) => {
            return (
               <span className="rotate-180 text-tb">{formatNameForDoc(createdBy?.lastName, createdBy?.firstName)}</span>
            );
         }
      },
      {
         title: 'Тандалт хийсэн ажилтны гарын үсэг',
         className: 'rotate-180 text-rtl'
      },
      {
         title: '',
         render: (_, row) => (
            <div className="flex flex-row gap-2">
               <Button
                  onClick={() => {
                     setEditMode(true);
                     setIsOpenModal(true);
                     setSelectedData(row);
                  }}
               >
                  edit
               </Button>
               <Button
                  onClick={() => {
                     deleteData(row._id);
                  }}
               >
                  delete
               </Button>
            </div>
         )
      }
   ];
   const index = useMemo(
      () => (
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
                           const documents = regularByDocumentValueIn(type === 0 ? needleData : tubeData);
                           setDocumentView(true, documents, 'many');
                        }}
                     >
                        Дэлгэрэнгүй
                     </Button>
                  </div>
               </div>
               <Table
                  bordered
                  rowKey={'_id'}
                  loading={{
                     spinning: isLoading,
                     tip: 'Уншиж байна'
                  }}
                  scroll={{
                     x: 500
                  }}
                  columns={columns}
                  dataSource={type === 0 ? needleData : tubeData}
                  pagination={false}
               />
            </div>
         </div>
      ),
      [type, needleData, tubeData]
   );

   useEffect(() => {
      getData();
   }, []);
   return (
      <>
         {isViewDocument ? (
            <DocumentViewer />
         ) : (
            <Tabs
               type="card"
               activeKey={type}
               onChange={setType}
               items={[
                  {
                     label: 'Уян зүү',
                     key: 0,
                     children: index
                  },
                  {
                     label: 'Төвийн веннийн гуурс',
                     key: 1,
                     children: index
                  }
               ]}
            />
         )}

         <Modal
            title="Маягт бөглөх"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            destroyOnClose
            footer={null}
         >
            <Customized
               propsUsageType={incomeEmrData.usageType}
               isEdit={editMode}
               editId={editMode ? selectedData._id : null}
               document={editMode ? selectedData : document}
               documentValue={97}
               documentType={0}
               onOk={(state) => {
                  getData();
                  setIsOpenModal(state);
               }}
               isBackButton={false}
               handleBackButton={() => null}
               extraData={{
                  q0: type
               }}
            />
         </Modal>
      </>
   );
};
export default Attachment3;
