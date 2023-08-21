import React from 'react';
import { Card } from 'antd';

function NewCard(props) {
   return (
      <Card
         bordered={false}
         title={<h6 className="font-semibold m-0">{props.title}</h6>}
         className="header-solid max-h-max rounded-md"
         {...props}
         bodyStyle={{
            paddingTop: 0,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10
         }}
      >
         {props.children}
      </Card>
   );
}
export default NewCard;
