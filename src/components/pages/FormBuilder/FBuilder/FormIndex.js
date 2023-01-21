import { Tabs } from 'antd';
import SOAPForm from './SOAPForm';

function FormIndex() {
   const items = [
      {
         label: 'Амбулатори маягт',
         key: 'item-1',
         children: <SOAPForm docType={'OUT'} />
      },
      {
         label: 'Хэвтэн маягт',
         key: 'item-2',
         children: <SOAPForm docType={'IN'} />
      }
   ];
   return <Tabs type="card" items={items} />;
}
export default FormIndex;
