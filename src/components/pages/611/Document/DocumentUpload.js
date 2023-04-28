import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Upload } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { DefualtGet } from '../../../comman';
import { ReturnById, ReturnDetails } from './Index';
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
function DocumentUpload() {
   const token = useSelector(selectCurrentToken);
   const [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [jsFilePath, setJsFilePath] = useState('');
   const [uploadForm] = Form.useForm();
   const [dd, setdd] = useState(false);
   const [comp, setComp] = useState(
      `<div class="page"><div class="subpage"></div></div>`
   );
   const headers = {
      Authorization: `Bearer ${token}`,
      'x-api-key': API_KEY
   };
   const beforeUpload = (file) => {
      console.log(file);
      const jsFile = file.type === 'application/pdf';
      if (!jsFile) {
         message.error('JS File байх');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
         message.error('2MB бага байна');
      }
      return jsFile && isLt2M;
   };
   const handleChange = (info) => {
      if (info.file.status === 'uploading') {
         setLoading(true);
         return;
      }
      if (info.file.status === 'done') {
         setJsFilePath(info.file.response.response.id);
         setLoading(false);
      }
   };
   const uploadButton = (
      <div>
         {loading ? <LoadingOutlined /> : <PlusOutlined />}
         <div
            style={{
               marginTop: 8
            }}
         >
            Зураг оруулах
         </div>
      </div>
   );
   const getDocumentById = async (id) => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet('global-files/' + id, token, conf);
      console.log(response);
      setComp(response);
      setdd(true);
   };
   const UploadDocument = (values) => {
      console.log(values);
   };
   const handleChange2 = (values) => {
      uploadForm.setFieldValue('ids', values);
   };
   return (
      <>
         <Button onClick={() => setIsOpen(true)}>sdas</Button>
         <Button onClick={() => getDocumentById(5)}>asdasdsa</Button>
         <ReturnById id={1} />
         <ReturnDetails />
         <ul>
            <li>A41</li>
            <li>uploads\\documents\\68f11a4e1ba3d81d54724d82edd388bf</li>
            <li>uploads\documents\17489c7e2e398a3adb937852b9c05ce4</li>
            <li></li>
         </ul>
         <Modal
            title="ASdasd"
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            onOk={() =>
               uploadForm.validateFields().then((values) => {
                  UploadDocument(values);
               })
            }
         >
            <Form form={uploadForm}>
               <Upload
                  maxCount={1}
                  action={`${DEV_URL}global-files/document-upload`}
                  headers={headers}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
               >
                  {uploadButton}
               </Upload>
               <Form.Item name="ids" label="sdsa">
                  <ReturnDetails handleChange={handleChange2} />
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
}
export default DocumentUpload;
