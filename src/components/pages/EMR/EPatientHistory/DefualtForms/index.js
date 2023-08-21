export function defaultForm() {
   return {
      pain: [
         {
            label: 'Зовиур',
            options: [
               {
                  type: 'textarea',
                  value: 'Зовиур'
               }
            ],
            inspectionType: 'pain'
         }
      ],
      question: [
         {
            label: 'Асуумж',
            options: [
               {
                  type: 'textarea',
                  value: 'Асуумж'
               }
            ],
            inspectionType: 'question'
         }
      ],
      inspection: [
         {
            label: 'Бодит үзлэг',
            options: [
               {
                  type: 'textarea',
                  value: 'Бодит үзлэг'
               }
            ],
            inspectionType: 'inspection'
         }
      ],
      plan: [
         {
            label: 'Төлөвлөгөө',
            options: [
               {
                  type: 'textarea',
                  value: 'Төлөвлөгөө'
               }
            ],
            inspectionType: 'plan'
         }
      ]
   };
}
