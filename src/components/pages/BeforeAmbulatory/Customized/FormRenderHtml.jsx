import React, { useEffect, useMemo, useState } from 'react';

import OrganizationDocumentFormService from '../../../../services/organization/documentForm';

const FormRenderHtml = (props) => {
   const { formId, documentData } = props;
   console.log(documentData);
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
   const Render = (props) => {
      const { keyWord, answer } = props;
      const form = documentForm.find((dform) => dform.keyWord === keyWord);
      if (form) {
         if (form.type === 'input') {
            let pattern = /\.{1,}/g;
            const text = form.question.replace(
               pattern,
               `<span style="text-decoration: underline; padding:0px 2px;">${answer}</span>`
            );
            return <p dangerouslySetInnerHTML={{ __html: text }}></p>;
         } else if (form.type === 'textarea') {
            return <p>{`${form?.question}${answer}`}</p>;
         } else if (form.type === 'checkbox' || form.type === 'radio') {
            const childrens = documentForm.filter((dform) => dform.parentIndex === form.index);
            const filtered = childrens.filter((children) => answer.includes(children.keyWord));
            return (
               <p>
                  <span className="font-semibold pr-1">{form.question}</span>
                  <span>{filtered.map((filter) => filter.question)}</span>
               </p>
            );
         }
      }
      return;
   };

   const testData = useMemo(() => {
      convertTree(documentForm);
   }, [formId]);

   useEffect(() => {
      formId && getDocumentForm();
   }, [formId]);
   return (
      <div>
         {Object.entries(documentData)?.map(([key, value], index) => {
            if (key != 'createdAt' && key != 'cabinetId') {
               return <Render key={index} keyWord={key} answer={value} />;
            }
         })}
      </div>
   );
};
export default FormRenderHtml;
