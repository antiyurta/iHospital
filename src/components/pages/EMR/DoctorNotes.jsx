import { Input, Popconfirm } from 'antd';
import notePublic from '../../../../src/assets/images/notePublic.svg';

import React, { useEffect, useState } from 'react';
import jwtInterceopter from '../../jwtInterceopter';
import { CloseOutlined, SendOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { formatNameForDoc } from '../../common';

const { TextArea } = Input;

const DoctorNotes = (props) => {
   const { patientId } = props;
   const [isLoading, setIsLoading] = useState(false);
   const [isPublic, setIsPublic] = useState(true);
   const [notes, setNotes] = useState([]);
   const [message, setMessage] = useState('');
   const getNotes = async () => {
      await jwtInterceopter
         .get('organization/note', {
            params: {
               noteType: isPublic ? 0 : 1,
               patientId: patientId
            }
         })
         .then(({ data: { response } }) => {
            setNotes(response.data);
         });
   };
   const sendNote = async () => {
      setIsLoading(true);
      await jwtInterceopter
         .post('organization/note', {
            patientId: patientId,
            note: message,
            noteType: isPublic ? 0 : 1
         })
         .then((response) => {
            if (response.status === 201) {
               setMessage('');
               getNotes();
            }
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const onDelete = async (id) => {
      setIsLoading(true);
      await jwtInterceopter
         .delete('organization/note/' + id)
         .then((response) => {
            if (response.status === 200) {
               setMessage('');
               getNotes();
            }
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   useEffect(() => {
      patientId && getNotes();
   }, [isPublic]);

   const Note = ({ data }) => {
      const { noteType, note, id } = data;
      return (
         <div className="note">
            <div className="header">
               <div className="flex flex-row gap-2">
                  <p
                     className="info"
                     style={{
                        backgroundColor: isPublic ? '#61c695' : '#ec7a09'
                     }}
                  >
                     {noteType === 0 ? 'Нийтэд' : 'Хувьд'}
                  </p>
                  <p className="doctor">Эмч: {formatNameForDoc(data.createdLastName, data.createdFirstName)}</p>
               </div>
               <div className="flex flex-row gap-1">
                  <p className="date">{dayjs(data.createdAt).format('YYYY/MM/DD HH:mm')}</p>
                  <Popconfirm
                     title="Устгах"
                     description="Та устгахдаа итгэлттэй байна уу?"
                     onConfirm={() => onDelete(id)}
                     okText="Тийм"
                     cancelText="Үгүй"
                  >
                     <CloseOutlined
                        style={{
                           color: 'red'
                        }}
                     />
                  </Popconfirm>
               </div>
            </div>
            <p
               style={{
                  fontSize: 12,
                  fontWeight: 400
               }}
            >
               {note}
            </p>
         </div>
      );
   };

   return (
      <div className={isPublic ? 'emr-doctor-notes-public' : 'emr-doctor-notes-private'}>
         <div className="content-notes">
            {notes?.map((note, index) => (
               <Note key={index} data={note} />
            ))}
         </div>
         <div className="flex justify-between gap-3">
            <button onClick={() => setIsPublic(!isPublic)}>
               <img src={notePublic} />
               {isPublic ? 'Нийтэд' : 'Хувьд'}
            </button>
            <div className="flex flex-row gap-1">
               <TextArea
                  rows={1}
                  value={message}
                  onChange={({ target: { value } }) => {
                     setMessage(value);
                  }}
                  placeholder="Тэмдэглэл бичих"
               />
               <button disabled={isLoading} onClick={() => sendNote()}>
                  <SendOutlined />
               </button>
            </div>
         </div>
      </div>
   );
};
export default DoctorNotes;
