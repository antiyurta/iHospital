import { Checkbox, Form } from 'antd';

function Page2({ form }) {
   return (
      <div className="page">
         <div className="subpage">
            <div className="flex flex-wrap">
               <div className="w-full amaraZuun amaraBaruun amaraDeer">
                  <p className="text-center font-bold">
                     Чихрийн шижингийн үзлэг
                  </p>
               </div>
               <div className="w-5/12 amaraZuun amaraDeer">
                  <p className="ml-2 font-bold">
                     Чихрийн шижингийн эрсдэлт хүчин зүйлс:
                  </p>
                  <Form.Item
                     name={[
                        'Чихрийн шижингийн үзлэг',
                        'Чихрийн шижингийн эрсдэлт хүчин зүйлс'
                     ]}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd ml-0 grid">
                        <Checkbox className="ml-1" value={'Тарган удам'}>
                           Тарган удам
                        </Checkbox>
                        <Checkbox className="ml-1" value={'ЧШ-гийн удам'}>
                           ЧШ-гийн удам
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Жин (хамгийн их)'}>
                           Жин (хамгийн их)
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Гепатит'}>
                           Гепатит
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Панкреатит'}>
                           Панкреатит
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Жирэмсний ЧШ'}>
                           Жирэмсний ЧШ
                        </Checkbox>
                        <Checkbox className="ml-1" value={'4 кг дээш хүүхэд'}>
                           4 кг дээш хүүхэд
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Архи'}>
                           Архи
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Тамхи'}>
                           Тамхи
                        </Checkbox>
                        <Checkbox
                           className="ml-1"
                           value={'Хоолны дэглэм: сайн /дунд/ муу'}
                        >
                           Хоолны дэглэм: сайн /дунд/ муу
                        </Checkbox>
                        <Checkbox
                           className="ml-1"
                           value={'Хөдөлгөөн: сайн /дунд/ муу'}
                        >
                           Хөдөлгөөн: сайн /дунд/ муу
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-7/12 amaraZuun amaraDeer amaraBaruun">
                  <p className="ml-2 font-bold">
                     Оношлогдсон он:{' '}
                     {form.getFieldValue([
                        'Чихрийн шижингийн үзлэг',
                        'Оношлогдсон он'
                     ])}
                  </p>
                  <p className="ml-2 font-bold">
                     Хэрэглэдэг эмийн бэлдмэл:{' '}
                     {form.getFieldValue([
                        'Чихрийн шижингийн үзлэг',
                        'Хэрэглэдэг эмийн бэлдмэл'
                     ])}
                  </p>
               </div>
               <div className="w-4/12 amaraZuun amaraDeer">
                  <p className="ml-2 font-bold">Биеийн бялдарын үзүүлэлт:</p>
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Жин</p>
                        <p className="ml-2 underline">
                           {form.getFieldValue([
                              'Чихрийн шижингийн үзлэг',
                              'Жин'
                           ])}
                        </p>
                        <p className="ml-2">кг</p>
                     </div>
                  </p>
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Өндөр</p>
                        <p className="ml-2 underline">
                           {form.getFieldValue([
                              'Чихрийн шижингийн үзлэг',
                              'Өндөр'
                           ])}
                        </p>
                        <p className="ml-2">см</p>
                     </div>
                  </p>
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Биеийн өөхний хэмжээ</p>
                        <p className="ml-2 underline">
                           {form.getFieldValue([
                              'Чихрийн шижингийн үзлэг',
                              'Биеийн өөхний хэмжээ'
                           ])}
                        </p>
                        <p className="ml-2">%</p>
                     </div>
                     <p className="text-center">{'эр<25%; эм<30%'}</p>
                  </p>
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Бүсэлхийн тойрог</p>
                        <p className="ml-2 underline">
                           {form.getFieldValue([
                              'Чихрийн шижингийн үзлэг',
                              'Бүсэлхийн тойрог'
                           ])}
                        </p>
                        <p className="ml-2">см</p>
                     </div>
                     <p className="text-center">{'Ази - эр<94см; эм<80см'}</p>
                     <p className="text-center">
                        {'Европ - эр<102см; эм<88см'}
                     </p>
                  </p>
               </div>
               <div className="w-8/12 amaraZuun amaraDeer amaraBaruun"></div>
               <div className="w-full text-center amaraDeer amaraZuun amaraBaruun">
                  <div className="inline-flex">
                     <p>Биеийн жингийн индекс(БЖИ)</p>
                     <p className="ml-2 underline">
                        {form.getFieldValue([
                           'Чихрийн шижингийн үзлэг',
                           'Биеийн жингийн индекс (БЖИ)'
                        ])}
                     </p>
                     <p>кг/м2</p>
                  </div>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">Жингийн дутагдал</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">Хэвийн жинтэй</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">Жингийн илүүдэл</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">Таргалалтын l зэрэг</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">Таргалалтын ll зэрэг</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="text-center">Таргалалтын lll зэрэг</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">{'<18кг/м2'}</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">{'18-24.9кг/м2'}</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">{'25-29.9кг/м2'}</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">{'30-34.9кг/м2'}</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="text-center">{'35-39.9кг/м2'}</p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="text-center">{'40кг/м2<'}</p>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="text-center font-bold">
                     Чихрийн шижингийн хяналт
                  </p>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2 font-bold">Өөрийн хяналт:</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p>Өлөн үеийн глюкоз</p>
                  <p>{'(<6.0 ммоль/л)'}</p>
               </div>
               <div className="w-9/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">
                     {form.getFieldValue([
                        'Чихрийн шижингийн хяналт',
                        'Өлөн үеийн глюкоз (<6.0 ммоль/л)'
                     ])}
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p>Хоолны дараах глюкоз</p>
                  <p>{'(<8.0 ммоль/л)'}</p>
               </div>
               <div className="w-9/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">
                     {form.getFieldValue([
                        'Чихрийн шижингийн хяналт',
                        'Хоолны дараах глюкоз (<8.0 ммоль/л)'
                     ])}
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p>|</p>
               </div>
               <div className="w-9/12 amaraDeer amaraZuun amaraBaruun">
                  <p>|</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2 font-bold">Эмчийн хяналт</p>
               </div>
               <div className="w-9/12 amaraDeer amaraZuun amaraBaruun">
                  <p></p>
               </div>
               <div className="w-full text-center amaraDeer amaraZuun amaraBaruun">
                  <div className="inline-flex">
                     <p className="font-bold">HbA1C</p>
                     <p className="ml-2 underline">
                        {form.getFieldValue([
                           'Чихрийн шижингийн хяналт',
                           'HbA1C'
                        ])}
                     </p>
                     <p className="ml-2">%</p>
                  </div>
               </div>
               <div className="w-1/4 amaraDeer amaraZuun">
                  <p className="text-center">Эрүүл</p>
               </div>
               <div className="w-1/4 amaraDeer amaraZuun">
                  <p className="text-center">Сайн</p>
               </div>
               <div className="w-1/4 amaraDeer amaraZuun">
                  <p className="text-center">Дунд</p>
               </div>
               <div className="w-1/4 amaraDeer amaraZuun amaraBaruun">
                  <p className="text-center">Муу</p>
               </div>
               <div className="w-1/4 amaraDeer amaraZuun">
                  <p className="text-center">4-6%</p>
               </div>
               <div className="w-1/4 amaraDeer amaraZuun">
                  <p className="text-center">{'<6.5%'}</p>
               </div>
               <div className="w-1/4 amaraDeer amaraZuun">
                  <p className="text-center">6.5-7.5%</p>
               </div>
               <div className="w-1/4 amaraDeer amaraZuun amaraBaruun">
                  <p className="text-center">{'7.5%<'}</p>
               </div>
               <div className="w-1/2 amaraDeer amaraZuun">
                  <p className="ml-2 font-bold">Anti-GAD/IA2</p>
                  <p className="ml-2 underline">
                     {form.getFieldValue([
                        'Чихрийн шижингийн хяналт',
                        'Anti- GAD/IA2'
                     ])}
                  </p>
               </div>
               <div className="w-1/2 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2 font-bold">Глюкозын ачаалалтай сорил:</p>
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Өлөн үеийн глюкоз</p>
                        <p className="ml-2 underline">
                           {form.getFieldValue([
                              'Чихрийн шижингийн хяналт',
                              'Өлөн үеийн глюкоз'
                           ])}
                        </p>
                        <p className="ml-2">ммоль/л</p>
                     </div>
                  </p>
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">2 цагийн дараах глюкоз</p>
                        <p className="ml-2 underline">
                           {form.getFieldValue([
                              'Чихрийн шижингийн хяналт',
                              '2 цагийн дараах глюкоз'
                           ])}
                        </p>
                        <p className="ml-2">ммол</p>
                     </div>
                  </p>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Чихрийн шижингийн хүндрэл Нүд:</p>
                        <p className="ml-2 underline">
                           {form.getFieldValue([
                              'Чихрийн шижингийн хяналт',
                              'Чихрийн шижингийн хүндрнл (Нүд)'
                           ])}
                        </p>
                     </div>
                  </p>
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Зүрх:</p>
                        <p className="ml-2 underline">
                           {form.getFieldValue([
                              'Чихрийн шижингийн хяналт',
                              'Чихрийн шижингийн хүндрнл (Зүрх)'
                           ])}
                        </p>
                     </div>
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="text-center font-bold">Өөх тосны үзүүлэлтүүд</p>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  <p className="text-center font-bold">Хариу</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="text-center font-bold">Хэвийн хэмжээ</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2">Холестерол</p>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  <p className="ml-2">
                     {form.getFieldValue([
                        'Чихрийн шижингийн хяналт',
                        'Холестерол'
                     ])}
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">{'< 4ммоль/л'}</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2">БНЛП</p>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  <p className="ml-2">
                     {form.getFieldValue(['Чихрийн шижингийн хяналт', 'БНЛП'])}
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">{'< 2ммоль/л'}</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2">ИНЛП</p>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  <p className="ml-2">
                     {form.getFieldValue(['Чихрийн шижингийн хяналт', 'ИНЛП'])}
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">{'эр< 1.0ммоль/л'}</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  {/* <p className="ml-2"></p> */}
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  {/* <p className="ml-2">{form.getFieldValue(['Чихрийн шижингийн хяналт', 'ИНЛП'])}</p> */}
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">{'эм< 1.2ммоль/л'}</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2">Триглицерид</p>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  <p className="ml-2">
                     {form.getFieldValue([
                        'Чихрийн шижингийн хяналт',
                        'Триглицерид'
                     ])}
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">{'< 1.7ммоль/л'}</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2">ИНЛП-с бусад</p>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  <p className="ml-2">
                     {form.getFieldValue([
                        'Чихрийн шижингийн хяналт',
                        'ИНЛП-с бусад'
                     ])}
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">{'< 3.3ммоль/л'}</p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2">Холест/ИНЛП</p>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  <p className="ml-2">
                     {form.getFieldValue([
                        'Чихрийн шижингийн хяналт',
                        'Холест/ИНЛП'
                     ])}
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">{'< 5ммоль/л'}</p>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun amaraDoor">
                  <div className="inline-flex">
                     <p className="ml-2 font-bold">CRP</p>
                     <p className="ml-2 underline">
                        {form.getFieldValue([
                           'Чихрийн шижингийн хяналт',
                           'CRP'
                        ])}
                     </p>
                     <p className="ml-2">{'<5.0мг/л'}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Page2;
