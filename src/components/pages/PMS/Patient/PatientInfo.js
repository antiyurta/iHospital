import React, { useState } from 'react';
import { Form, Spin, Tabs } from 'antd';
import GeneralInfo from './GeneralInfo';
import MoreInfo from './MoreInfo';
import ResidentialAddress from './ResidentialAddress';
import Contact from './Contact';

const PatientInfo = ({ form }) => {
   const [isLoading, setIsLoading] = useState(false);
   const items = [
      {
         forceRender: true,
         label: 'Ерөнхий мэдээлэл',
         key: 1,
         children: <GeneralInfo form={form} gbase={true} />
      },
      { forceRender: true, label: 'Нэмэлт мэдээлэл', key: 2, children: <MoreInfo form={form} /> },
      {
         forceRender: true,
         label: 'Оршин суугаа хаяг',
         key: 3,
         children: <ResidentialAddress form={form} />
      },
      {
         forceRender: true,
         label: 'Асран хамгаалагч',
         key: 5,
         children: <Contact form={form} />
      }
   ];

   return (
      <Spin spinning={isLoading}>
         <div className="flex flex-col gap-1">
            <Tabs tabPosition="left" destroyInactiveTabPane items={items} />
         </div>
      </Spin>
   );
};
export default PatientInfo;
