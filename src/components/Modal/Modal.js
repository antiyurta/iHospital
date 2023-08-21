import React from 'react';
import { Modal } from 'antd';

function NewModal(props) {
   return <Modal {...props}>{props.children}</Modal>;
}
export default NewModal;
