import React from 'react';
import { Checkbox, Col, Input, Row } from 'antd';

const centerClass = 'flex gap-2 justify-center items-center border text-xs text-black/80';
const startClass = 'border text-xs text-black/80 pl-2 font-[500]';
const headerClass = 'h-6 font-semibold text-sm text-black/80 border border-t-0 border-black flex items-center p-2';

export const RowComp = ({ heights, children }) => (
   <Row className={`h-${heights} text-xs text-black/80 font-medium`}>{children}</Row>
);

export const ColComp = ({ span, borderClass, children, text = '', notCenter = false }) => (
   <Col span={span} className={`${notCenter ? startClass : centerClass} ${borderClass} border-black`}>
      {text || children}
   </Col>
);

export const CheckboxComp = ({ options = [], groupValue = '', groupExtraValue = '', extraOptions = [] }) => (
   <Checkbox.Group value={groupValue}>
      {options.map((option, idx) => (
         <Checkbox className={idx === 0 && 'ml-2'} value={option.value} key={idx}>
            {option.label || ''}
            {!!groupExtraValue && option.value === groupValue && (
               <>
                  {console.log(extraOptions.length - 1)} (
                  {extraOptions.map(({ value, label }, idx) => {
                     let lastIndex = extraOptions.length - 1;
                     return (
                        <span className={value === groupExtraValue && 'underline'}>
                           {' '}
                           {label}
                           {idx !== lastIndex && ','}
                        </span>
                     );
                  })}
                  )
               </>
            )}
         </Checkbox>
      ))}
   </Checkbox.Group>
);

export const Header = ({ title }) => <div className={headerClass}>{title}</div>;

export const TextWithUnderline = ({ children }) => {
   return <span className="px-2 border-b border-black h-fit"> {children}</span>;
};
