import React from 'react';
import { Input, Row } from 'antd';
import { renderFormItem } from '../utils';

export const SendCheckLicenseInfo = () => {
   return (
      <Row gutter={6} style={{ width: '100%' }}>
         {renderFormItem('Эмчийн регистрийн дугаар', 'Register', [], <Input placeholder="-----" />, 22)}
      </Row>
   );
};

