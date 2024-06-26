import React from 'react';
import { App, message as _message, notification as _notification } from 'antd';
import 'dayjs/locale/mn';
import dayjs from 'dayjs';
dayjs.locale('mn');
let message;
let modal;
let notification;

function EscapeAntd({ children }) {
   const [messageApi, contextHolderMessage] = _message.useMessage();
   const [notificationApi, contextHolderNotification] = _notification.useNotification();
   message = messageApi;
   notification = notificationApi;
   return (
      <App>
         {contextHolderMessage}
         {contextHolderNotification}
         {children}
      </App>
   );
}

export { message, modal, notification };
export default EscapeAntd;
