import React, { useContext, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Each } from '@Features/Each';
import EmrContext from '@Features/EmrContext';
const RegularTree = ({ data, searchValue, getData }) => {
   const { expandedKeys, activeKey, setKeys } = useContext(EmrContext);
   const configure = (state, key) => {
      if (state && !expandedKeys?.includes(key)) {
         if (expandedKeys) {
            setKeys([...expandedKeys, key]);
         } else {
            setKeys([key]);
         }
      } else {
         setKeys(expandedKeys.filter((sKey) => sKey !== key));
      }
   };
   const Head = (props) => {
      const CollapseIconFolder = () => (
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
               d="M17.3729 6.46955C17.8003 7.01419 17.3289 7.70833 16.6366 7.70833H2.66675C2.11446 7.70833 1.66675 7.26062 1.66675 6.70833V5.35C1.66675 3.31667 3.31675 1.66667 5.35008 1.66667H7.28342C8.64175 1.66667 9.06675 2.10833 9.60842 2.83333L10.7751 4.38333C11.0334 4.725 11.0667 4.76667 11.5501 4.76667H13.8751C15.2939 4.76667 16.5589 5.43218 17.3729 6.46955Z"
               fill="#F09833"
            />
            <path
               d="M17.3201 8.95812C17.8711 8.95811 18.3183 9.40377 18.3201 9.95473L18.3334 13.875C18.3334 16.3333 16.3334 18.3333 13.8751 18.3333H6.12508C3.66675 18.3333 1.66675 16.3333 1.66675 13.875V9.95832C1.66675 9.40604 2.11446 8.95832 2.66673 8.95832L17.3201 8.95812Z"
               fill="#F09833"
            />
         </svg>
      );
      const CollapseIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
               d="M10.1334 6.99333L8.82004 5.68L6.68004 3.54C6.2267 3.09333 5.45337 3.41333 5.45337 4.05333V8.20667V11.9467C5.45337 12.5867 6.2267 12.9067 6.68004 12.4533L10.1334 9C10.6867 8.45333 10.6867 7.54667 10.1334 6.99333Z"
               fill="#4E5969"
            />
         </svg>
      );
      const ExpandIconFolder = () => (
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
               d="M17.5501 9.85L17.4167 9.66667C17.1834 9.38333 16.9084 9.15833 16.5917 8.99167C16.1667 8.75 15.6834 8.625 15.1834 8.625H4.80842C4.30842 8.625 3.83342 8.75 3.40008 8.99167C3.07508 9.16667 2.78342 9.40833 2.54175 9.70833C2.06675 10.3167 1.84175 11.0667 1.91675 11.8167L2.22508 15.7083C2.33342 16.8833 2.47508 18.3333 5.11675 18.3333H14.8834C17.5251 18.3333 17.6584 16.8833 17.7751 15.7L18.0834 11.825C18.1584 11.125 17.9751 10.425 17.5501 9.85ZM11.9918 14.45H8.00008C7.67508 14.45 7.41675 14.1833 7.41675 13.8667C7.41675 13.55 7.67508 13.2833 8.00008 13.2833H11.9918C12.3168 13.2833 12.5751 13.55 12.5751 13.8667C12.5751 14.1917 12.3168 14.45 11.9918 14.45Z"
               fill="#F09833"
            />
            <path
               d="M17.1188 7.01932C17.1643 7.40132 16.7471 7.66018 16.3782 7.55127C15.9989 7.43931 15.6024 7.38333 15.1919 7.38333H4.80856C4.39289 7.38333 3.98296 7.4436 3.59561 7.55907C3.23127 7.66769 2.81689 7.4184 2.81689 7.03822V5.55C2.81689 2.575 3.72523 1.66667 6.70023 1.66667H7.68356C8.87523 1.66667 9.25023 2.05 9.73356 2.675L10.7336 4.00833C10.9419 4.29167 10.9502 4.30833 11.3169 4.30833H13.3002C15.846 4.30833 16.8758 4.97479 17.1188 7.01932Z"
               fill="#F09833"
            />
         </svg>
      );
      const ExpandIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
               d="M11.9467 5.45333H7.79341H4.05341C3.41341 5.45333 3.09341 6.22667 3.54674 6.68L7.00008 10.1333C7.55341 10.6867 8.45341 10.6867 9.00674 10.1333L10.3201 8.82L12.4601 6.68C12.9067 6.22667 12.5867 5.45333 11.9467 5.45333Z"
               fill="#4E5969"
            />
         </svg>
      );
      const state = expandedKeys?.includes(props.title);
      const [expanded, setExpanded] = useState(state);
      return (
         <div className="head-tree">
            <div
               className="top"
               onClick={() => {
                  configure(!expanded, props.title);
                  setExpanded(!expanded);
               }}
            >
               {expanded ? <ExpandIcon /> : <CollapseIcon />}
               {expanded ? <ExpandIconFolder /> : <CollapseIconFolder />}
               <p>{props.title}</p>
            </div>
            <>
               {expanded
                  ? props.children.map((child, index) => (
                       <div key={index} className="body-tree">
                          {child}
                       </div>
                    ))
                  : null}
            </>
         </div>
      );
   };
   const Body = (props) => {
      const PageIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
               opacity="0.4"
               d="M17.0835 8.49167H14.6752C12.7002 8.49167 11.0918 6.88333 11.0918 4.90833V2.5C11.0918 2.04167 10.7168 1.66667 10.2585 1.66667H6.72516C4.1585 1.66667 2.0835 3.33333 2.0835 6.30833V13.6917C2.0835 16.6667 4.1585 18.3333 6.72516 18.3333H13.2752C15.8418 18.3333 17.9168 16.6667 17.9168 13.6917V9.325C17.9168 8.86667 17.5418 8.49167 17.0835 8.49167Z"
               fill="#F09833"
            />
            <path
               d="M13.1667 1.84167C12.8251 1.5 12.2334 1.73333 12.2334 2.20833V5.11667C12.2334 6.33333 13.2667 7.34167 14.5251 7.34167C15.3167 7.35 16.4167 7.35 17.3584 7.35C17.8334 7.35 18.0834 6.79167 17.7501 6.45833C16.5501 5.25 14.4001 3.075 13.1667 1.84167Z"
               fill="#F09833"
            />
            <path
               d="M11.25 11.4583H6.25C5.90833 11.4583 5.625 11.175 5.625 10.8333C5.625 10.4917 5.90833 10.2083 6.25 10.2083H11.25C11.5917 10.2083 11.875 10.4917 11.875 10.8333C11.875 11.175 11.5917 11.4583 11.25 11.4583Z"
               fill="#F09833"
            />
            <path
               d="M9.58333 14.7917H6.25C5.90833 14.7917 5.625 14.5083 5.625 14.1667C5.625 13.825 5.90833 13.5417 6.25 13.5417H9.58333C9.925 13.5417 10.2083 13.825 10.2083 14.1667C10.2083 14.5083 9.925 14.7917 9.58333 14.7917Z"
               fill="#F09833"
            />
         </svg>
      );
      return (
         <div className="body-tree-content">
            <Each
               of={props.data}
               render={(item, index) => (
                  <div
                     key={index}
                     className={activeKey === item.key ? 'body-tree-content-item active' : 'body-tree-content-item'}
                     onClick={() => getData(item)}
                  >
                     <div className="w-[20px] h-[20px] p-1">
                        <PageIcon />
                     </div>
                     <Highlighter
                        className="p-1 hover:cursor-pointer hover:bg-gray-50 hover:rounded"
                        highlightClassName="YourHighlightClass"
                        searchWords={[searchValue]}
                        autoEscape={true}
                        textToHighlight={item.title}
                     />
                  </div>
               )}
            />
         </div>
      );
   };
   const renderHTML = ([key, value]) => {
      if (value.length > 0) {
         return <Body key={key} data={value} />;
      }
      const renderedItems = Object.entries(value).map(renderHTML);
      return (
         <Head key={key} title={key}>
            {renderedItems}
         </Head>
      );
   };
   return <div className="regular-tree">{Object.entries(data).map(renderHTML)}</div>;
};
export default RegularTree;
