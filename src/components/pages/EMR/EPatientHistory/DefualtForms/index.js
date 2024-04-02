export const defualtForm = {
   pain: [
      {
         type: 'textarea',
         index: 1,
         isHead: true,
         isOther: false,
         keyWord: 'Зовиур',
         isNumber: false,
         question: '',
         parentIndex: null
      }
   ],
   question: [
      {
         type: 'textarea',
         index: 1,
         isHead: true,
         isOther: false,
         keyWord: 'Асуумж',
         isNumber: false,
         question: '',
         parentIndex: null
      }
   ],
   inspection: [
      {
         type: 'textarea',
         index: 1,
         isHead: true,
         isOther: false,
         keyWord: 'Бодит үзлэг',
         isNumber: false,
         question: '',
         parentIndex: null
      }
   ],
   plan: [
      {
         type: 'textarea',
         index: 1,
         isHead: true,
         isOther: false,
         keyWord: 'Төлөвлөгөө',
         isNumber: false,
         question: '',
         parentIndex: null
      }
   ]
};
export const ConAndAdForm = {
   conclusion: [
      {
         type: 'textarea',
         index: 1,
         isHead: true,
         isOther: false,
         keyWord: 'Дүгнэлт',
         isNumber: false,
         question: 'Дүгнэлт',
         parentIndex: null
      }
   ],
   advice: [
      {
         type: 'textarea',
         index: 1,
         isHead: true,
         isOther: false,
         keyWord: 'Зөвлөгөө',
         isNumber: false,
         question: 'Зөвлөгөө',
         parentIndex: null
      }
   ]
};
export const UrgentFormFirst = [
   {
      type: 'textarea',
      index: 1,
      isHead: true,
      isOther: false,
      keyWord: 'q998',
      isNumber: false,
      question: 'Үндсэн зовиур',
      parentIndex: null
   },
   {
      type: 'textarea',
      index: 2,
      isHead: true,
      isOther: false,
      keyWord: 'q999',
      isNumber: false,
      question: 'Одоогийн өвчний түүх',
      parentIndex: null
   }
];

export const UrgnetFormLast = [
   {
      type: 'title',
      index: 0,
      isHead: true,
      isOther: false,
      keyWord: '',
      isNumber: false,
      question: 'Шийдвэрлэсэн байдал',
      parentIndex: null
   },
   {
      type: 'radio',
      index: 1,
      isHead: true,
      isOther: false,
      keyWord: 'q800',
      isNumber: false,
      question: 'Шийдвэрлэсэн байдал',
      parentIndex: null
   },
   {
      index: 2,
      isHead: false,
      keyWord: 'q800-1',
      question: 'АЖИГЛАЛТ',
      parentIndex: 1
   },
   {
      index: 3,
      isHead: false,
      keyWord: 'q800-2',
      question: 'ЭЭТ',
      parentIndex: 1
   },
   {
      index: 4,
      isHead: false,
      keyWord: 'q800-3',
      question: 'БУСАД ТАСАГ',
      parentIndex: 1
   },
   {
      index: 5,
      isHead: false,
      keyWord: 'q800-4',
      question: 'НАС БАРСАН',
      parentIndex: 1
   },
   {
      index: 6,
      isHead: false,
      keyWord: 'q800-5',
      question: 'БУСАД ЭМНЭЛЭГРҮҮ ШИЛЖСЭН',
      parentIndex: 1
   },
   {
      index: 7,
      isHead: false,
      keyWord: 'q800-6',
      question: 'ЭМЧИЛГЭЭ ҮЙЛЧИЛГЭЭНЭЭС ТАТГАЛЗСАН',
      parentIndex: 1
   },
   {
      type: 'input',
      index: 8,
      isHead: true,
      isOther: false,
      keyWord: 'q800-3-1',
      isNumber: false,
      question: 'Тасгийн нэр:',
      parentIndex: 4
   },
   {
      type: 'input',
      index: 9,
      isHead: true,
      isOther: false,
      keyWord: 'q800-5-1',
      isNumber: false,
      question: 'Эмнэлгийн нэр:',
      parentIndex: 6
   },
   {
      type: 'input',
      index: 10,
      isHead: true,
      isOther: false,
      keyWord: 'q801',
      isNumber: false,
      question: 'ЭМИЙН ҮНЭ:',
      parentIndex: null
   },
   {
      type: 'title',
      index: 11,
      isHead: true,
      isOther: false,
      keyWord: '',
      isNumber: false,
      question: 'Бодит үзлэг',
      parentIndex: null
   },
   {
      type: 'input',
      index: 10,
      isHead: true,
      isOther: false,
      keyWord: 'q802',
      isNumber: false,
      question: 'Биеийн байдал:',
      parentIndex: null
   },
   {
      type: 'input',
      index: 11,
      isHead: true,
      isOther: false,
      keyWord: 'q803',
      isNumber: false,
      question: 'Глазго үнэлгээ:',
      parentIndex: null
   },
   {
      type: 'radio',
      index: 12,
      isHead: true,
      isOther: false,
      keyWord: 'q804',
      isNumber: false,
      question: 'Ухаан санаа:',
      parentIndex: null
   },
   {
      index: 13,
      isHead: false,
      keyWord: 'q804-1',
      question: 'Нүд',
      parentIndex: 12
   },
   {
      index: 14,
      isHead: false,
      keyWord: 'q804-2',
      question: 'Хөдөлгөөн',
      parentIndex: 12
   },
   {
      index: 15,
      isHead: false,
      keyWord: 'q804-2',
      question: 'Яриа',
      parentIndex: 12
   }
];
