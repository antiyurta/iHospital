import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { localMn } from '../../common';
const { Search } = Input;
import ReferenceDiagnoseServices from '../../../services/reference/diagnose';
const DiagnoseWindow = (props) => {
   const { handleClick, disabled = false } = props;
   const [paramValue, setParamValue] = useState('');
   const [param, setParam] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [diagnosis, setDiagnosis] = useState([]);
   const [meta, setMeta] = useState({});
   const [isOpenModal, setIsOpenModal] = useState(false);
   const getDiagnosis = async (page, pageSize, e, v) => {
      setIsLoading(true);
      const conf = {
         params: {
            page: page,
            limit: pageSize,
            types: [0, 1, 2]
         }
      };
      if (e && v) {
         setParam(v);
         setParamValue(e);
         conf.params[v] = e;
      }
      await ReferenceDiagnoseServices.get(conf)
         .then(({ data: { response } }) => {
            setDiagnosis(response.data);
            setMeta(response.meta);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   useEffect(() => {
      isOpenModal && getDiagnosis(1, 10, paramValue, param);
   }, [isOpenModal]);
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
            }}
            style={{
               minWidth: 120
            }}
            disabled={disabled}
         >
            Онош сонгох
         </Button>
         <Modal
            title="Онош"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            width={'90%'}
            okText="Хадгалах"
            cancelText="Болих"
         >
            <div className="flex flex-col gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <Search
                        placeholder={'Код , Нэрүүдээр хайх'}
                        allowClear
                        onSearch={(e) => getDiagnosis(1, 10, e, 'filter')}
                        enterButton={'Хайх'}
                     />
                  </div>
               </div>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <p
                        className="pb-3"
                        style={{
                           fontWeight: '600'
                        }}
                     >
                        Онош сонгох хэсэг
                     </p>
                     <ConfigProvider locale={localMn()}>
                        <Table
                           rowKey={'id'}
                           loading={isLoading}
                           bordered
                           columns={[
                              {
                                 title: 'Код',
                                 dataIndex: 'code'
                              },
                              {
                                 title: 'Монгол нэр',
                                 dataIndex: 'nameMn'
                              },
                              {
                                 title: 'Англи нэр',
                                 dataIndex: 'nameEn'
                              },
                              {
                                 title: 'Орос нэр',
                                 dataIndex: 'nameRu'
                              },
                              {
                                 title: '',
                                 render: (_, row) => {
                                    return (
                                       <Button
                                          icon={
                                             <ArrowRightOutlined
                                                style={{
                                                   font: 24,
                                                   color: '#4a7fc1'
                                                }}
                                             />
                                          }
                                          onClick={() => {
                                             handleClick(row);
                                             setIsOpenModal(false);
                                          }}
                                       />
                                    );
                                 }
                              }
                           ]}
                           dataSource={diagnosis}
                           pagination={{
                              position: ['bottomCenter'],
                              size: 'small',
                              current: meta.page,
                              total: meta.itemCount,
                              showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                              pageSize: meta.limit,
                              showSizeChanger: true,
                              pageSizeOptions: ['5', '10', '20', '50'],
                              showQuickJumper: true,
                              onChange: (page, pageSize) => getDiagnosis(page, pageSize, paramValue, param)
                           }}
                        />
                     </ConfigProvider>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
};
export default DiagnoseWindow;
