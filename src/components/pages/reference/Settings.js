import UTable from '../../UTable';

function Settings() {
   const column = [
      {
         index: 'inspectionTime',
         label: 'Үзлэгийн минут',
         isView: true,
         input: 'inputNumber',
         rules: [
            {
               required: true,
               message: 'Хоосон байж болохгүй'
            }
         ],
         col: 24
      }
   ];
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <UTable
               title={'Үзлэгийн минут'}
               url={'settings'}
               isCreate={true}
               isRead={true}
               isUpdate={true}
               isDelete={true}
               column={column}
               width="50%"
            />
         </div>
      </div>
   );
}
export default Settings;
