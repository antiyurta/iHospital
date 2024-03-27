import React from 'react';
import { ConfigProvider, Table } from 'antd';
import { localMn } from '../common';

const { Column, ColumnGroup } = Table;

function NewColumn(props) {
   return <Column {...props}>{children}</Column>;
}

function NewColumnGroup(props) {
   return <ColumnGroup {...props}>{children}</ColumnGroup>;
}

function NewSummaryRow(props) {
   return <Table.Summary.Row {...props}>{props.children}</Table.Summary.Row>;
}

function NewSummaryCell(props) {
   return <Table.Summary.Cell {...props}>{props.children}</Table.Summary.Cell>;
}

function NewTable(props) {
   const { children, prop, meta, isLoading, isPagination, onChange } = props;
   return (
      <ConfigProvider locale={localMn()}>
         <Table
            rowClassName={!prop.rowClassName && 'hover: cursor-pointer'}
            {...prop}
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
               width={50}
               render={(_value, _row, index) => {
                  return meta.page * meta.limit - (meta.limit - index - 1);
               }}
            />
            {children}
         </Table>
      </ConfigProvider>
   );
}

export { NewTable, NewColumn, NewSummaryRow, NewSummaryCell, NewColumnGroup };
