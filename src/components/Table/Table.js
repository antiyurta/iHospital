import React from 'react';
import { ConfigProvider, Table } from 'antd';
import { localMn } from '../comman';

const { Column, ColumnGroup } = Table;

function NewColumn(props) {
   return <Column {...props}>{children}</Column>;
}

function NewColumnGroup(props) {
   return <ColumnGroup {...props}>{children}</ColumnGroup>;
}

function NewTable(props) {
   const { children, prop, meta, isLoading, isPagination, onChange } = props;
   return (
      <ConfigProvider locale={localMn()}>
         <Table
            {...prop}
            rowClassName="hover: cursor-pointer"
            loading={{
               spinning: isLoading,
               tip: 'Уншиж байна....'
            }}
            pagination={
               isPagination
                  ? {
                       position: ['topCenter', 'bottomCenter'],
                       size: 'small',
                       current: meta.page,
                       total: meta.itemCount,
                       showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                       pageSize: meta.limit,
                       showSizeChanger: true,
                       pageSizeOptions: ['5', '10', '20', '50'],
                       showQuickJumper: true,
                       onChange: (page, pageSize) => onChange(page, pageSize)
                    }
                  : false
            }
         >
            <NewColumn
               title="№"
               width={10}
               render={(_value, _row, index) => {
                  return meta.page * meta.limit - (meta.limit - index - 1);
               }}
            />
            {children}
         </Table>
      </ConfigProvider>
   );
}
export { NewTable, NewColumn, NewColumnGroup };