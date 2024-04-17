import React, { useEffect, useState } from 'react';
import { Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
//common
import { openNofi } from '../common';
//api
import localFileApi from '@ApiServices/file/local-file/local-file.api';
//defualts

const ImageUpload = (props) => {
   const { form, name, setImageId, ...rest } = props;
   const Dummy = (dProps) => {
      const [fileList, setFileList] = useState([]);
      let tokens = JSON.parse(localStorage.getItem('tokens'));
      const headers = {
         Authorization: `Bearer ${tokens.accessToken}`,
         'x-api-key': `${process.env.REACT_APP_API_KEY}`
      };
      const onChange = (info) => {
         setFileList(info.fileList);
         if (info.file.status === 'done' || info.file.status === 'removed') {
            info.fileList?.map((file) => {
               setImageId(file.response.response.id);
               if (file.response.success) {
                  openNofi('success', 'Амжилттай', 'Зураг хадгалагдлаа.');
               }
            });
         }
      };
      const handleRemove = async (info) => {
         setImageId(null);
         setFileList([]);
         if (info.response?.response.id) {
            const id = info.response?.response.id;
            try {
               await localFileApi.removeGlobal(id).then((response) => {
                  if (response.data.success) {
                     openNofi('success', 'Амжилттай', 'Зураг устгалаа.');
                     setImageId(null);
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
      const renderImage = async (fileId) => {
         const blobImage = await localFileApi.getFileGlobal(fileId);
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
      useEffect(() => {
         dProps.value && renderImage(dProps.value);
      }, [dProps]);
      return (
         <Upload
            maxCount={1}
            headers={headers}
            action={`${process.env.REACT_APP_DEV_URL}global-files/fileUpload`}
            fileList={fileList}
            listType="picture-card"
            beforeUpload={beforeUpload}
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
   return (
      <Form.Item name={name} {...rest}>
         <Dummy />
      </Form.Item>
   );
};
export default ImageUpload;
