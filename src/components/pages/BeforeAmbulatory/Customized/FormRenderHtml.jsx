import React, { useEffect, useMemo, useState } from 'react';

import OrganizationDocumentFormService from '../../../../services/organization/documentForm';
import dayjs from 'dayjs';

const FormRenderHtml = (props) => {
   const { formId, documentData } = props;
   const [documentForm, setDocumentForm] = useState([]);
   const getDocumentForm = async () => {
      await OrganizationDocumentFormService.getById(formId)
         .then((response) => {
            setDocumentForm(response.data.response.documentForm);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const convertTree = (data) => {
      let root = [];
      const cloneData = data.map((item) => ({
         ...item
      }));
      const idMapping = cloneData.reduce((acc, el, i) => {
         acc[el.index] = i;
         return acc;
      }, []);
      cloneData?.forEach((el) => {
         if (el.parentIndex === null) {
            root.push(el);
            return;
         }
         const parentEl = cloneData?.[idMapping[el.parentIndex]];
         parentEl.options = [...(parentEl?.options || []), el];
      });
      return root;
   };
   const RenderOptions = ({ item }) => {
      const answer = Object.entries(documentData).find(([key, value]) => key === item.keyWord)?.[1];
      if (item.type == 'other') {
         if (answer) return <span>{answer}</span>;
         return;
      } else if (item.type === 'input' || item.type === 'inputNumber') {
         if (answer) {
            let pattern = /\.{1,}/g;
            const text = item.question.replace(
               pattern,
               `<span style="text-decoration: underline; font-weight: 300;"> ${answer} </span>`
            );
            return (
               <span
                  dangerouslySetInnerHTML={{ __html: text }}
                  style={{
                     paddingRight: 3
                  }}
               />
            );
         }
         return;
      } else if (item.type === 'radio' || item.type === 'checkbox') {
         var other;
         if (item.isOther) {
            other = (
               <RenderOptions
                  item={{
                     type: 'other',
                     keyWord: `${item.keyWord}Other`
                  }}
               />
            );
         }
         const selectedAnswer = item?.options?.find((option) => option.keyWord === answer)?.question;
         console.log('selectedAnswer', selectedAnswer);
         if (item.type === 'checkbox') {
            const dd = item.options?.filter((option) => answer?.includes(option.keyWord));
            const ched = dd.map((d, index) => (
               <span
                  key={index}
                  style={{
                     paddingRight: 3
                  }}
               >
                  {d.question},
               </span>
            ));
            return (
               <span className="flex flex-wrap gap-1">
                  <span>{item.question}</span>
                  {ched}
                  <span>{other}</span>
               </span>
            );
         }
         return (
            <span className="flex flex-wrap gap-1">
               <span>{item.question}</span>
               {selectedAnswer}
               <span>{other}</span>
            </span>
         );
      } else if (item.type === 'textarea') {
         return (
            <p>
               <span className="font-semibold pr-1">{item.question}</span>
               <span>{answer}</span>
            </p>
         );
      } else if (item.type === 'datepicker') {
         console.log(item);
         return (
            <p>
               <span className="pr-1">{item.question}</span>
               {answer ? <span className="underline">{dayjs(answer).format('YYYY-MM-DD')}</span> : null}
            </p>
         );
      } else if (item.type === 'title') {
         return <span className="font-bold pr-1">{item.question}</span>;
      }
      return;
   };

   const renderHTML = (item) => {
      if (!item.options) {
         return <RenderOptions key={item.index} item={item} />;
      }
      return (
         <span className="flex flex-wrap" key={item.index}>
            <RenderOptions item={item} />
            {item.options.map(renderHTML)}
         </span>
      );
   };

   const testData = useMemo(() => {
      console.log('tree', convertTree(documentForm));
      return convertTree(documentForm);
   }, [documentForm]);

   useEffect(() => {
      formId && getDocumentForm();
   }, [formId]);
   return <div>{testData?.map(renderHTML)}</div>;
};
export default FormRenderHtml;
