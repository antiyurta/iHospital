import dayjs from 'dayjs';
import React, { useContext, useState } from 'react';
import { Each } from '../../../../../features/Each';
import { ReturnByIdToName } from '../../../611/Document/Index';
import arrowNext from '../../ListOfIssues/arrowNext.svg';
import { Button, Modal } from 'antd';

import checkIcon from './icon/checkIcon.svg';
import inlineIcon from './icon/inlineIcon.svg';
import folderIcon from './icon/folderIcon.svg';
import expandIcon from './icon/expandIcon.svg';
import expandedIcon from './icon/expandedIcon.svg';
import EmrContext from '../../../../../features/EmrContext';
import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons';

import PatientSupport from '../../../PMS/patientSupport';
import { openNofi } from '../../../../comman';
//service
import patientApi from '../../../../../services/pms/patient.api';
import DocumentHistoryApi from '../../../../../services/organization/documentHistory';
import DocumentsFormPatientService from '../../../../../services/organization/document';

const RenderDate = ({ date }) => {
   if (date?.startDate && date?.endDate) {
      const startDate = dayjs(date.startDate).format('YYYY.MM.DD');
      const endDate = dayjs(date.endDate).format('YYYY.MM.DD');
      return <p className="text-[#4E5969] text-sm font-medium">{`${startDate} - ${endDate}`}</p>;
   }
   return <p className="text-[#4E5969] text-sm font-medium">{`Яаралтай - Яаралтай`}</p>;
};

const DocumentIn = (props) => {
   const { setDocumentView, setIsReloadDocumentHistory } = useContext(EmrContext);
   const checkStatus = (id) => {
      // if (percent > 10) {
      return <img src={checkIcon} alt="icon" />;
      // } else {
      //    return <img src={inlineIcon} alt="icon" />;
      // }
   };
   const [expanded, setExpanded] = useState(false);

   const changeSaveStatus = (_id) => {
      Modal.confirm({
         content: 'Та маягтаа бүрэнгүйцэт бөглөөрөй',
         cancelText: 'Болих',
         okText: 'Тийм',
         onOk: async () => {
            return await DocumentsFormPatientService.patch(_id, {
               saveType: 'Draft'
            }).then(() => {
               setIsReloadDocumentHistory(true);
            });
         }
      });
   };

   const ReturnNameByColor = ({ document }) => {
      if (document.children) {
         return <p className="text-sm font-medium text-[#EC7A09]">{ReturnByIdToName(props.document.documentId)}</p>;
      }
      return <p className="text-sm font-medium text-[#22A06B]">{ReturnByIdToName(props.document.documentId)}</p>;
   };

   return (
      <div className="flex flex-col gap-1 hover:cursor-pointer">
         <div className="flex flex-row justify-between gap-3 items-center" onClick={() => setExpanded(!expanded)}>
            <div className="flex flex-row gap-2 items-center">
               {checkStatus(props.document?.documentId)}
               <p className="text-sm font-medium">{props.index + 1}.</p>
               <ReturnNameByColor document={props.document} />
            </div>
            {expanded ? <img src={expandIcon} alt="icon" /> : <img src={expandedIcon} alt="icon" />}
         </div>
         {expanded ? (
            <div className="flex flex-col gap-1 px-6">
               <p>{`Огноо: ${dayjs(props.document.createdAt)?.format('YYYY/MM/DD')}`}</p>
               <p>{`Цаг: ${dayjs(props.document.createdAt)?.format('HH:mm:ss')}`}</p>
               <p>{`Давтамж: ${props.document.isExpand ? props.document.children.length : 1}`}</p>
               <div className="flex flex-row gap-1">
                  <button
                     className="flex bg-white rounded-lg items-center justify-center px-3 py-[6px]"
                     onClick={() => {
                        setDocumentView(true, props.document, 'one');
                     }}
                  >
                     Дэлгэрэнгүй <img src={arrowNext} alt="arr" />
                  </button>
                  <button
                     className="flex bg-white rounded-lg items-center justify-center px-3 py-[6px]"
                     onClick={() => {
                        changeSaveStatus(props.document?._id);
                     }}
                  >
                     Ноорогруу оруулах
                  </button>
               </div>
            </div>
         ) : null}
         <div className="w-full h-[1px] bg-[#C9CDD4]" />
      </div>
   );
};

const GroupDocument = (props) => {
   const { setDocumentView, setIsReloadDocumentHistory, setDocumentTrigger } = useContext(EmrContext);
   const [expanded, setExpanded] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [history, setHistory] = useState({});
   const [patientId, setPatientId] = useState(null);
   const [isGlobalDb, setIsGlobalDb] = useState(null);
   const findHistory = (documents) => {
      const histories = documents?.map((document) => {
         if (document.isExpand) {
            return document.children?.find((child) => child.history._id)?.history;
         } else {
            return document?.history;
         }
      });
      if (histories?.length > 0) {
         const history = histories[0];
         setHistory(history);
         setPatientId(history?.patientId);
         setIsOpenModal(true);
      } else {
         openNofi('error', 'Алдаа', 'Өвчтөн байхгүй');
      }
   };
   const updatePatientData = async (data) => {
      data['isGlobalDb'] = isGlobalDb;
      data['isEmergency'] = false;
      if (data?.contacts === undefined || data?.contacts === null || data?.contacts.length === 0) {
         openNofi('warning', 'Заавал', 'Холбоо барих хүний мэдээлэл заавал');
      } else {
         await patientApi.patch(patientId, data).then(() => {
            setIsOpenModal(false);
            updateHistory();
         });
      }
   };
   const updateHistory = async () => {
      await DocumentHistoryApi.patch(
         history._id,
         {},
         {
            params: {
               patientId: patientId
            }
         }
      ).then((res) => {
         if (res.status === 200) {
            openNofi('success', 'Амжилттай', 'Амжилттай өвчтөний мэдээлэл заслаа');
         }
         setIsReloadDocumentHistory(true);
      });
   };

   const groupDocument = () => {
      const documents = props.document.documents;
      const result = documents.reduce((r, a) => {
         r[a.documentId] = r[a.documentId] || {};
         r[a.documentId] = a;
         return r;
      }, Object.create(null));
      setDocumentTrigger(result);
   };
   return (
      <>
         <div
            className={expanded ? 'document-in expanded' : 'document-in'}
            onClick={() => {
               if (!expanded) {
                  groupDocument();
               }
               setExpanded(!expanded);
            }}
         >
            <div className="flex flex-row gap-2">
               <img src={folderIcon} alt="icon" />
               <RenderDate date={props.document.date} />
            </div>
            {expanded ? <img src={expandIcon} alt="icon" /> : <img src={expandedIcon} alt="icon" />}
         </div>
         {expanded ? (
            <>
               <div className="document-in-body">
                  <div className="flex flex-row gap-1 justify-between">
                     <Button
                        type="primary"
                        icon={<UserOutlined />}
                        onClick={() => findHistory(props.document?.documents)}
                     >
                        Өвчтөн засах
                     </Button>
                     <Button
                        icon={<ArrowRightOutlined />}
                        type="primary"
                        onClick={() => setDocumentView(true, props.document.documents, 'many')}
                     >
                        Дэлгэрэнгүй
                     </Button>
                  </div>
                  <Each
                     of={props.document?.documents}
                     render={(document, index) => <DocumentIn key={index} document={document} index={index} />}
                  />
               </div>
            </>
         ) : null}
         <Modal
            title={'Өвчтөн засах'}
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            width="18cm"
            footer={null}
         >
            <PatientSupport
               editMode={true}
               patientId={patientId}
               setGlobalDb={(state) => {
                  setIsGlobalDb(state);
               }}
               filterTowns={(result) => {
                  // filterTowns(result);
                  console.log(result);
               }}
               onFinish={updatePatientData}
            />
         </Modal>
      </>
   );
};
export default GroupDocument;
