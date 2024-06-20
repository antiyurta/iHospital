import React from 'react';

const GridColTwo = ({ children }) => (
   <div
      style={{
         display: 'grid',
         gridTemplateColumns: 'repeat(2, minmax(0, 1fr)) '
      }}
   >
      {children}
   </div>
);

const FlexRow = ({ gap, justify, children }) => (
   <div
      style={{
         display: 'flex',
         flexDirection: 'row',
         gap: gap || 0,
         justifyContent: justify || ''
      }}
   >
      {children}
   </div>
);

const FlexCol = ({ gap, justify, children }) => (
   <div
      style={{
         display: 'flex',
         flexDirection: 'column',
         gap: gap || 0,
         justifyContent: justify || ''
      }}
   >
      {children}
   </div>
);

const DocumentCheckbox = ({ value, title, groupValue }) => {
   if (groupValue?.includes(value)) {
      return (
         <div
            style={{
               display: 'flex',
               flexDirection: 'row',
               gap: 12,
               alignItems: 'center'
            }}
         >
            <div className="checkbox checked" />
            <Paragraph>{title}</Paragraph>
         </div>
      );
   }
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center'
         }}
      >
         <div className="checkbox" />
         <Paragraph>{title}</Paragraph>
      </div>
   );
};

const DocumentCheckboxGroup = ({ value, children }) => {
   const entireChild = (child) => {
      if (child.props?.children?.length > 0) {
         return child.props?.children?.map((prop) => entireChild(prop));
      }
      return React.cloneElement(child, { groupValue: value });
   };
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0
         }}
      >
         {React.Children.map(children, (child) => entireChild(child))}
      </div>
   );
};

const Paragraph = ({ isBold, isUpper, align, style, children }) => {
   let className = 'document-paragraph';
   if (isBold) {
      className += ' bold';
   }
   if (isUpper) {
      className += ' upper';
   }
   if (align) {
      className += ` ${align}`;
   }
   return (
      <div
         className={className}
         style={{
            ...style
         }}
      >
         {children}
      </div>
   );
};

const Box = ({ width, maxWidth, minWidth, top, right, bottom, left, children, style }) => {
   return (
      <div
         style={{
            width: width || 'auto',
            minWidth: minWidth || 'auto',
            maxWidth: maxWidth || 'auto',
            borderTop: top && '1px solid black',
            borderRight: right && '1px solid black',
            borderBottom: bottom && '1px solid black',
            borderLeft: left && '1px solid black',
            padding: '0px 6px',
            ...style
         }}
      >
         {children}
      </div>
   );
};
const TextUnderline = ({ value, title, groupValue }) => {
   const isChecked = groupValue?.includes(value);

   return (
      <div>
         <Paragraph style={{ textDecoration: isChecked ? 'underline' : 'none', }}>{title}</Paragraph>
      </div>
   );
};
const TextUnderlineGroup = ({ value, children, style }) => {
   const entireChild = (child) => {
      if (child.props?.children?.length > 0) {
         return child.props?.children?.map((prop) => entireChild(prop));
      }
      return React.cloneElement(child, { groupValue: value });
   };
   return (
      <div
         style={{
            gap: 2,
            ...style
         }}
      >
         {React.Children.map(children, (child) => entireChild(child))}
      </div>
   );
}; const TextWithUnderline = ({ children }) => {
   return (
      <span className="px-2 border-b border-black h-fit"> {children}</span>
   );
}

export { FlexRow, FlexCol, GridColTwo, Paragraph, DocumentCheckbox, DocumentCheckboxGroup, Box, TextUnderline, TextUnderlineGroup, TextWithUnderline };
