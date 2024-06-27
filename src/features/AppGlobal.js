import React from 'react';
import { App, message as _message, notification as _notification, Modal as _Modal } from 'antd';
import 'dayjs/locale/mn';
import dayjs from 'dayjs';
dayjs.locale('mn');
let message;
let modal;
let notification;

function EscapeAntd({ children }) {
   const [messageApi, contextHolderMessage] = _message.useMessage();
   const [notificationApi, contextHolderNotification] = _notification.useNotification();
   const [modalApi, contextHolderModal] = _Modal.useModal();
   message = messageApi;
   notification = notificationApi;
   modal = modalApi;
   return (
      <App>
         {contextHolderMessage}
         {contextHolderNotification}
         {contextHolderModal}
         {children}
      </App>
   );
}

export { message, modal, notification };
export default EscapeAntd;
