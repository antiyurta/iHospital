import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import localFileApi from '../../services/file/local-file/local-file.api';
import { openNofi } from '../comman';
import axios from 'axios';

export const UploadImage = ({ form, itemName }) => {
   const [fileList, setFileList] = useState([]);
   const [imageIds, setImageIds] = useState();
   const imageId = Form.useWatch([itemName], form);
   const base64String = Form.useWatch('base64String', form);
   let tokens = JSON.parse(localStorage.getItem('tokens'));
   const headers = {
      Authorization: `Bearer ${tokens.accessToken}`,
      'x-api-key': `${process.env.REACT_APP_API_KEY}`
   };
   const renderImage = async (fileId) => {
      const blobImage = await localFileApi.getFile(fileId);
      setFileList([
         {
            uid: `-rc-uplload`,
            name: fileId.toString(),
            status: 'done',
            url: blobImage,
            response: {
               response: {
                  id: fileId
               }
            }
         }
      ]);
   };
   const onPreview = (info) => {
      var my = window.open('about:blank', '_blank');
      my?.document.write(`<image src="${info.url}" alt="any" />`);
   };
   const onChange = (info) => {
      setFileList(info.fileList);
      if (info.file.status === 'done' || info.file.status === 'removed') {
         info.fileList?.map((file) => {
            setImageIds(file.response.response.id);
         });
      }
   };
   const handleRemove = async (info) => {
      setFileList([]);
      setImageIds(undefined);
      if (info.response?.response.id) {
         const id = info.response?.response.id;
         try {
            await localFileApi.remove(id).then((response) => {
               if (response.data.success) {
                  openNofi('success', 'Амжилттай', 'Зураг устгалаа.');
                  form.setFieldsValue({ [itemName]: undefined });
               }
            });
         } catch (error) {
            console.error('Error while removing file:', error);
         }
      }
   };
   const beforeUpload = () => {
      if (fileList && fileList.length > 0) {
         handleRemove(fileList[0]);
      }
   };
   const handleConvertAndUpload = async () => {
      if (base64String) {
         const blob = dataURItoBlob(base64String);
         const file = new File([blob], 'image.png', { type: 'image/png' });
         const fileUrl = URL.createObjectURL(file);
         const response = await axios.post(
            `${process.env.REACT_APP_DEV_URL}local-files/fileUpload`,
            { file },
            {
               headers: { 'Content-Type': 'multipart/form-data', ...headers }
            }
         );
         console.log('File uploaded successfully:', response.data);
         setFileList([
            {
               uid: `-rc-uplload`,
               name: file.name,
               status: 'done',
               url: fileUrl
            }
         ]);
         setImageIds(response.data.response.id);
      }
   };
   const dataURItoBlob = (dataURI) => {
      const byteString = atob(dataURI);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
         ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: 'image/png' });
   };
   useEffect(() => {
      if (imageIds) {
         form.setFieldsValue({ [itemName]: imageIds });
      }
   }, [imageIds]);
   useEffect(() => {
      if (imageId) {
         renderImage(imageId);
      } else {
         setFileList([]);
      }
   }, [imageId]);
   useEffect(() => {
      handleConvertAndUpload();
   }, [base64String]);
   return (
      <Upload
         maxCount={1}
         headers={headers}
         action={`${process.env.REACT_APP_DEV_URL}local-files/fileUpload`}
         fileList={fileList}
         listType="picture-card"
         beforeUpload={beforeUpload}
         onPreview={onPreview}
         onChange={onChange}
         onRemove={handleRemove}
      >
         {fileList.length >= 1 ? null : (
            <PlusOutlined
               style={{
                  fontSize: 24,
                  color: '#6c757d'
               }}
            />
         )}
      </Upload>
   );
};
