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
         index: 2,
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
         index: 3,
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
         index: 4,
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
      keyWord: 'q804-3',
      question: 'Яриа',
      parentIndex: 12
   },
   {
      type: 'input',
      index: 16,
      isHead: true,
      isOther: false,
      keyWord: 'q805',
      isNumber: false,
      question: 'Арьс салст:',
      parentIndex: null
   },
   {
      type: 'input',
      index: 17,
      isHead: true,
      isOther: false,
      keyWord: 'q806',
      isNumber: false,
      question: 'Тунгалгийн булчирхай:',
      parentIndex: null
   },
   {
      type: 'input',
      index: 18,
      isHead: true,
      isOther: false,
      keyWord: 'q807',
      isNumber: false,
      question: 'Хүүхэн хараа:',
      parentIndex: null
   },
   {
      type: 'input',
      index: 18,
      isHead: true,
      isOther: false,
      keyWord: 'q808',
      isNumber: false,
      question: 'Зүрх:',
      parentIndex: null
   },
   {
      type: 'input',
      index: 19,
      isHead: true,
      isOther: false,
      keyWord: 'q809',
      isNumber: false,
      question: 'Уушиг:',
      parentIndex: null
   },
   {
      type: 'input',
      index: 20,
      isHead: true,
      isOther: false,
      keyWord: 'q810',
      isNumber: false,
      question: 'Хэвлийн тойм үзлэг:',
      parentIndex: null
   },
   {
      type: 'human32a',
      index: 21,
      isHead: true,
      isOther: false,
      keyWord: 'q811',
      isNumber: false,
      question: 'Хэсэг газрын үзлэг:',
      parentIndex: null
   },
   {
      type: 'title',
      index: 22,
      isHead: true,
      isOther: false,
      keyWord: '',
      isNumber: false,
      question: 'Шинжилгээний төлөвлөгөө',
      parentIndex: null
   },
   {
      type: 'checkbox',
      grid: {
         state: true,
         cols: 4
      },
      index: 23,
      isHead: true,
      isOther: false,
      keyWord: 'q812',
      isNumber: false,
      question: 'Шинжилгээний төлөвлөгөө',
      parentIndex: null
   },
   {
      index: 24,
      isHead: false,
      keyWord: 'q812-1',
      question: 'Цусны сахарын түргэвчилсэн үнэлгээ',
      parentIndex: 23
   },
   {
      index: 25,
      isHead: false,
      keyWord: 'q812-2',
      question: 'ЦЕШ',
      parentIndex: 23
   },
   {
      index: 26,
      isHead: false,
      keyWord: 'q812-3',
      question: 'УТХ',
      parentIndex: 23
   },
   {
      index: 27,
      isHead: false,
      keyWord: 'q812-4',
      question: 'Лейкограмм',
      parentIndex: 23
   },
   {
      index: 28,
      isHead: false,
      keyWord: 'q812-5',
      question: 'Коагулограмм',
      parentIndex: 23
   },
   {
      index: 29,
      isHead: false,
      keyWord: 'q812-6',
      question: 'ШЕШ',
      parentIndex: 23
   },
   {
      index: 30,
      isHead: false,
      keyWord: 'q812-7',
      question: 'ЗЦБ',
      parentIndex: 23
   },
   {
      index: 31,
      isHead: false,
      keyWord: 'q812-8',
      question: 'ДОХ, В, С вирус',
      parentIndex: 23
   },
   {
      index: 32,
      isHead: false,
      keyWord: 'q812-9',
      question: 'Бактериологи',
      parentIndex: 23
   },
   {
      index: 33,
      isHead: false,
      keyWord: 'q812-10',
      question: 'ЭХО',
      parentIndex: 23
   },
   {
      index: 34,
      isHead: false,
      keyWord: 'q812-11',
      question: 'Дуран',
      parentIndex: 23
   },
   {
      index: 35,
      isHead: false,
      keyWord: 'q812-12',
      question: 'Рентген',
      parentIndex: 23
   },
   {
      index: 36,
      isHead: false,
      keyWord: 'q812-13',
      question: 'КТГ',
      parentIndex: 23
   },
   {
      index: 37,
      isHead: false,
      keyWord: 'q812-14',
      question: 'Бусад',
      parentIndex: 23
   },
   {
      type: 'checkbox',
      grid: {
         state: true,
         cols: 5
      },
      index: 38,
      isHead: true,
      isOther: false,
      keyWord: 'q813',
      isNumber: false,
      question: ' ',
      parentIndex: null
   },
   {
      index: 39,
      isHead: false,
      keyWord: 'q813-1',
      question: 'Биохимийн шинжилгээ',
      parentIndex: 38
   },
   {
      index: 40,
      isHead: false,
      keyWord: 'q813-2',
      question: 'Нийт бил',
      parentIndex: 38
   },
   {
      index: 41,
      isHead: false,
      keyWord: 'q813-3',
      question: 'Шууд бил',
      parentIndex: 38
   },
   {
      index: 42,
      isHead: false,
      keyWord: 'q813-4',
      question: 'Нийт уураг',
      parentIndex: 38
   },
   {
      index: 43,
      isHead: false,
      keyWord: 'q813-5',
      question: 'Альбумин',
      parentIndex: 38
   },
   {
      index: 44,
      isHead: false,
      keyWord: 'q813-6',
      question: 'Алат',
      parentIndex: 38
   },
   {
      index: 45,
      isHead: false,
      keyWord: 'q813-7',
      question: 'Асат',
      parentIndex: 38
   },
   {
      index: 46,
      isHead: false,
      keyWord: 'q813-8',
      question: 'Амилаза',
      parentIndex: 38
   },
   {
      index: 47,
      isHead: false,
      keyWord: 'q813-9',
      question: 'Холестрин',
      parentIndex: 38
   },
   {
      index: 48,
      isHead: false,
      keyWord: 'q813-10',
      question: 'Аммони',
      parentIndex: 38
   },
   {
      index: 49,
      isHead: false,
      keyWord: 'q813-11',
      question: 'Креатинин',
      parentIndex: 38
   },
   {
      index: 50,
      isHead: false,
      keyWord: 'q813-12',
      question: 'Тропинин',
      parentIndex: 38
   },
   {
      index: 51,
      isHead: false,
      keyWord: 'q813-13',
      question: 'Миоглобулин',
      parentIndex: 38
   },
   {
      index: 52,
      isHead: false,
      keyWord: 'q813-14',
      question: 'Мочевин',
      parentIndex: 38
   },
   {
      index: 53,
      isHead: false,
      keyWord: 'q813-15',
      question: 'Үлдэгдэл азот',
      parentIndex: 38
   },
   {
      index: 54,
      isHead: false,
      keyWord: 'q813-16',
      question: 'СРБ',
      parentIndex: 38
   },
   {
      index: 55,
      isHead: false,
      keyWord: 'q813-17',
      question: 'ШФ',
      parentIndex: 38
   },
   {
      index: 56,
      isHead: false,
      keyWord: 'q813-18',
      question: 'Сахар',
      parentIndex: 38
   },
   {
      index: 57,
      isHead: false,
      keyWord: 'q813-19',
      question: 'КФК',
      parentIndex: 38
   },
   {
      index: 58,
      isHead: false,
      keyWord: 'q813-20',
      question: 'ЛДГ',
      parentIndex: 38
   },
   {
      index: 59,
      isHead: false,
      keyWord: 'q813-21',
      question: 'K',
      parentIndex: 38
   },
   {
      index: 60,
      isHead: false,
      keyWord: 'q813-22',
      question: 'Na',
      parentIndex: 38
   },
   {
      index: 61,
      isHead: false,
      keyWord: 'q813-23',
      question: 'Mg',
      parentIndex: 38
   },
   {
      index: 62,
      isHead: false,
      keyWord: 'q813-24',
      question: 'Ca',
      parentIndex: 38
   },
   {
      index: 63,
      isHead: false,
      keyWord: 'q813-25',
      question: 'CI',
      parentIndex: 38
   },
   {
      index: 64,
      isHead: false,
      keyWord: 'q813-26',
      question: 'бусад',
      parentIndex: 38
   },
   {
      type: 'diagnose',
      index: 65,
      isHead: true,
      isOther: false,
      keyWord: 'q814',
      isNumber: false,
      question: 'Урьдчилсан онош:',
      parentIndex: null
   },
   {
      type: 'diagnose',
      index: 66,
      isHead: true,
      isOther: false,
      keyWord: 'q815',
      isNumber: false,
      question: 'Ялгах онош:',
      parentIndex: null
   },
   {
      type: 'textarea',
      index: 66,
      isHead: true,
      isOther: false,
      keyWord: 'q816',
      isNumber: false,
      question: 'Шийдвэрлэсэн байдал:',
      parentIndex: null
   }
];
