import React from 'react';
import { DynamicComp } from '../utils';

const formItems = [
   { name: 'appId', label: 'Тогтмол - систем бүрд олгоно.' },
   { name: 'serviceName', label: 'Тусламж, үйлчилгээний нэр' },
   { name: 'serviceId', label: 'Тусламж, үйлчилгээний код', number: true },
   { name: 'regNum', label: 'Регистрийн дугаар' },
   { name: 'civilId', label: 'Иргэний бүртгэлийн дугаар' },
   { name: 'title', label: 'Мэдэгдлийн гарчиг' },
   { name: 'notification', label: 'Мэдэгдэлд дамжуулах текст', span: 22 }
];

export const SendEsbNotification = () => <DynamicComp items={formItems} />;

