import { Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';

// components
import NewModal from '../../Modal/Modal';
import { NewInput, NewOption, NewSearch, NewSelect, NewTextArea } from '../../Input/Input';
// servicesuud
import RecentRecipeService from '../../../services/service/prescription';
import DiagnoseService from '../../../services/reference/diagnose';
import { NewColumn, NewTable } from '../../Table/Table';
import { CloseOutlined, PlusCircleFilled } from '@ant-design/icons';
import OrderForm from './OrderTable/OrderForm';

function RecentRecipe() {
   const [form] = Form.useForm();
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [recentRecipe, setRecentRecipe] = useState([]);
   const [meta, setMeta] = useState({});
   const [diagnoses, setDiagnoses] = useState([]);
   const [diagnoseMeta, setDiagnoseMeta] = useState({});
   const [searchValue, setSearchValue] = useState('');
   // functions
   const getRecentRepice = async () => {
      await RecentRecipeService.get().then((response) => {
         console.log(response);
      });
   };
   const getDiagnoses = async (page, pageSize, value) => {
      setSearchValue(value);
      await DiagnoseService.get({
         params: {
            filter: value,
            page: page,
            limit: pageSize,
            types: [0, 1, 2]
         }
      }).then((response) => {
         if (response.data.success) {
            setDiagnoses(response.data.response.data);
            setDiagnoseMeta(response.data.response.meta);
         }
      });
   };
   //
   const PrescriptionTable = (props) => {
      const { services, remove } = props;
      const [isOpen, setIsOpen] = useState(false);
      return (
         <>
            <div className="flex flex-col gap-3">
               <div className="flex justify-between">
                  <p>Эмийн нэмэх</p>
                  <Button
                     onClick={() => setIsOpen(true)}
                     icon={
                        <PlusCircleFilled
                           style={{
                              color: 'green'
                           }}
                        />
                     }
                  />
               </div>
               <NewTable
                  prop={{
                     rowKey: 'id',
                     bordered: true,
                     dataSource: services
                  }}
                  meta={{
                     page: 1,
                     limit: services.length
                  }}
                  isLoading={false}
                  isPagination={false}
               >
                  <NewColumn
                     title="Нэр"
                     render={(value, row, index) => {
                        return (
                           <OrderForm
                              rules={[
                                 {
                                    required: true,
                                    message: 'sadas'
                                 }
                              ]}
                              noStyle
                              name={[index, 'serviceName']}
                              editing={false}
                           >
                              <NewInput />
                           </OrderForm>
                        );
                     }}
                  />
                  <NewColumn
                     title="Үйлдэл"
                     width={40}
                     render={(value, row, index) => {
                        return (
                           <Button
                              onClick={() => remove(index)}
                              icon={
                                 <CloseOutlined
                                    style={{
                                       color: 'red'
                                    }}
                                 />
                              }
                           />
                        );
                     }}
                  />
               </NewTable>
            </div>
         </>
      );
   };
   //
   useEffect(() => {
      if (isOpenModal) {
         getRecentRepice();
         // getDiagnoses();
      }
   }, [isOpenModal]);
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            Өмнөх жор
         </Button>
         <NewModal title="Өмнөх жор" open={isOpenModal} onCancel={() => setIsOpenModal(false)}>
            <Form form={form} layout="vertical">
               <div className="flex flex-col gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flex justify-between">
                           <p
                              style={{
                                 fontWeight: 600
                              }}
                           >
                              Онош сонгох
                           </p>
                           <NewSearch
                              style={{
                                 backgroundColor: 'white',
                                 width: 300
                              }}
                              placeholder={'Кодоор хайх'}
                              onSearch={(e) => getDiagnoses(1, 10, e)}
                           />
                        </div>
                        <NewTable
                           prop={{
                              rowKey: 'di',
                              bordered: true,
                              dataSource: diagnoses
                           }}
                           meta={diagnoseMeta}
                           isLoading={false}
                           isPagination={true}
                           onChange={(page, pageSize) => getDiagnoses(page, pageSize, searchValue)}
                        >
                           <NewColumn dataIndex={'code'} title="Код" />
                           <NewColumn dataIndex={'nameMn'} title="Монгол нэр" />
                        </NewTable>
                     </div>
                  </div>
                  <Form.Item
                     name="description"
                     label="Өмнөх жор тайлбар"
                     rules={[
                        {
                           required: true,
                           message: 'Өмнөх жор тайлбар заавал'
                        }
                     ]}
                  >
                     <NewTextArea />
                  </Form.Item>
                  <Form.List name="prescriptions">
                     {(services, { remove }) => {
                        return <PrescriptionTable services={services} remove={remove} />;
                     }}
                  </Form.List>
               </div>
            </Form>
         </NewModal>
      </>
   );
}
export default RecentRecipe;
