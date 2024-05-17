import React from 'react';
import { Input, Select } from 'antd';
import { DynamicComp } from '../utils';

const diagnosisOptions = [
   { value: 1, label: 'Дүрс оношлогоо дүгнэлт' },
   { value: 2, label: 'Шинжилгээ' },
   { value: 3, label: 'Үзлэгийн бүртгэл' },
   { value: 4, label: 'Дүрс оношлогоо зураг' }
];

const defaultPlaceholder = '- - - - -';

const formItems = [
   { name: 'regNum', label: 'Иргэний регистр', placeholder: defaultPlaceholder, span: 11, row: true },
   { name: 'serviceId', label: 'Тусламж, үйлчилгээний дугаар', placeholder: defaultPlaceholder, span: 11 },
   { name: 'serviceName', label: 'Тусламж, үйлчилгээний нэр', placeholder: defaultPlaceholder, span: 11 },
   { name: 'indate', label: 'Огноо', placeholder: defaultPlaceholder, span: 11 },
   {
      name: 'type',
      label: 'Үйлчилгээний төрөл сонгох',
      placeholder: 'Сонгох',
      span: 11,
      component: <Select placeholder="Сонгох" options={diagnosisOptions} />
   },
   { name: 'link', label: 'Холбоос', placeholder: 'https://example.com', span: 22 }
];

export const SendMedicalExam = ({ form }) => <DynamicComp items={formItems} />;

