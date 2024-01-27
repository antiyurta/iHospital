import React, { useEffect, useMemo, useState } from 'react';

import OrganizationDocumentFormService from '../../../../services/organization/documentForm';

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
      if (item.isHead && item.type === 'title') {
         return <span className="font-semibold pr-1">{item.question}</span>;
      }
      if (documentData.hasOwnProperty(item.keyWord)) {
         const answer = Object.entries(documentData).find(([key, value]) => key === item.keyWord)?.[1];
         if (item.type == 'other') {
            return <span>Бусад: {answer}</span>;
         } else if (item.type === 'input' || item.type === 'inputNumber') {
            let pattern = /\.{1,}/g;
            const text = item.question.replace(pattern, `<span style="text-decoration: underline;"> ${answer} </span>`);
            return (
               <span
                  dangerouslySetInnerHTML={{ __html: text }}
                  style={{
                     paddingRight: 3
                  }}
               />
            );
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
            const selectedAnswer = item.options.find((option) => option.keyWord === answer)?.question;
            if (item.type === 'checkbox') {
               const dd = item.options.filter((option) => answer.includes(option.keyWord));
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
                  <span>
                     {ched}
                     <span>{other}</span>
                  </span>
               );
            }
            return (
               <span>
                  {selectedAnswer},<span>{other}</span>
               </span>
            );
         } else if (item.type === 'textarea') {
            return (
               <p>
                  <span className="font-semibold pr-1">{item.question}</span>
                  <span>{answer}</span>
               </p>
            );
         }
      }
      return;
   };
   const RenderUnOptions = ({ item }) => {
      if (item.isHead) {
         return (
            <>
               <span className="font-semibold pr-1">{item.question}</span>
               <RenderOptions item={item} />
            </>
         );
      }
      return;
   };

   const renderHTML = (item) => {
      if (!item.options) {
         return <RenderOptions key={item.index} item={item} />;
      }
      return (
         <p className="flex flex-wrap" key={item.index}>
            <RenderUnOptions key={item.index} item={item}></RenderUnOptions>
            {item.options.map(renderHTML)}
         </p>
      );
   };

   const testData = useMemo(() => {
      return convertTree(documentForm);
   }, [documentForm]);

   useEffect(() => {
      formId && getDocumentForm();
   }, [formId]);
   return <div>{testData?.map(renderHTML)}</div>;
};
export default FormRenderHtml;
