import { Checkbox, Form } from 'antd';

function Page1({ form }) {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-extrabold">
               ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ЭМЧИЙН ҮЗЛЭГ
            </p>
            <div className="flex flex-wrap">
               <div className="w-4/12 amaraDeer amaraZuun">
                  <p className="text-center font-bold">Биеийн ерөнхий байдал</p>
               </div>
               <div className="w-4/12 amaraDeer amaraZuun">
                  <p className="text-center font-bold">Ухаан санаа</p>
               </div>
               <div className="w-4/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="text-center font-bold">Арьс салст</p>
               </div>
               <div className="w-4/12 amaraDeer amaraZuun">
                  <Form.Item
                     name={['Ерөнхий', 'Биеийн ерөнхий байдал']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox value={'Дунд'}>Дунд</Checkbox>
                        <Checkbox value={'Хүндэвтэр'}>Хүндэвтэр</Checkbox>
                        <Checkbox value={'Хүнд'}>Хүнд</Checkbox>
                        <Checkbox className="ml-0" value={'Маш хүнд'}>
                           Маш хүнд
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-4/12 amaraDeer amaraZuun">
                  <Form.Item name={['Ерөнхий', 'Ухаан санаа']} className="mb-0">
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox value={'Саруул'}>Саруул</Checkbox>
                        <Checkbox value={'Бүдгэрсэн'}>Бүдгэрсэн</Checkbox>
                        <Checkbox className="ml-0" value={'Ухаангүй'}>
                           Ухаангүй
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-4/12 amaraDeer amaraZuun amaraBaruun">
                  <Form.Item name={['Ерөнхий', 'Арьс салст']} className="mb-0">
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox value={'Хэвийн'}>Хэвийн</Checkbox>
                        <Checkbox value={'Хэвийн бус'}>Хэвийн бус</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="text-start font-bold">
                     Амьсгалын эрхтэн тогтолцоо
                  </p>
               </div>
               <div className="w-5/12 amaraDeer amaraZuun">
                  <div className="inline-flex">
                     <p className="pr-1">Амьсгал 1 минутанд</p>
                     <p className="pr-1 underline">
                        {form.getFieldValue(['Ерөнхий', 'Амьсгал 1 минутанд'])}
                     </p>
                     <p>удаа</p>
                  </div>
               </div>
               <div className="w-7/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2 font-bold">Чагналтаар:</p>
                  <Form.Item
                     name={['Ерөнхий', 'Чагналтаар']}
                     className="mb-0"
                     labelCol={{ span: 24 }}
                  >
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox value={'Уушги цулцангийн'}>
                           Уушги цулцангийн
                        </Checkbox>
                        <Checkbox value={'Хэржигнүүртэй'}>
                           Хэржигнүүртэй
                        </Checkbox>
                        <Checkbox value={'Гуурсан хоолойн'}>
                           Гуурсан хоолойн
                        </Checkbox>
                        <Checkbox value={'Амьсгал сулавтар'}>
                           Амьсгал сулавтар
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="text-start font-bold">
                     Цусны эргэлтийн тогтолцоо
                  </p>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="pr-1">Судасны цохилт 1</p>
                  <div className="inline-flex">
                     <p className="pr-1">минутанд</p>
                     <p className="pr-1 underline">
                        {form.getFieldValue([
                           'Цусны эргэлтийн тогтолцоо',
                           'Судасны цохилт 1 минутанд'
                        ])}
                     </p>
                     <p>удаа</p>
                  </div>
                  <div className="inline-flex">
                     <p className="pr-1">Хүчдэл дүүрэлт</p>
                     <p className="pr-1 underline">
                        {form.getFieldValue([
                           'Цусны эргэлтийн тогтолцоо',
                           'Хүчдэл дүүргэлт'
                        ])}
                     </p>
                  </div>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2 font-bold">Тогшилтоор:</p>
                  <p className="ml-2 font-bold">Зүрхний хил</p>
                  <Form.Item
                     name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Томорсон (зүүн, баруун)'}>
                           Томорсон (зүүн, баруун)
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-7/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2 font-bold">Чагналтаар:</p>
                  <p className="ml-2">Зүрхний авиа</p>
                  <Form.Item
                     name={['Цусны эргэлтийн тогтолцоо', 'Зүрхний авиа']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox className="ml-2" value={'Тод'}>
                           Тод
                        </Checkbox>
                        <Checkbox value={'Бүдэг'}>Бүдэг</Checkbox>
                        <Checkbox value={'Бүдгэвтэр'}>Бүдгэвтэр</Checkbox>
                        <Checkbox value={'Хэм жигд'}>Хэм жигд</Checkbox>
                        <Checkbox value={'Жигд бус'}>Жигд бус</Checkbox>
                        <Checkbox value={'Хэм алдалттай'}>
                           Хэм алдалттай
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
                  <div className="inline-flex">
                     <p className="ml-2">АД баруун талд</p>
                     <p className="ml-2 underline">
                        {form.getFieldValue([
                           'Цусны эргэлтийн тогтолцоо',
                           'АД баруун талд'
                        ])}
                     </p>
                     <p className="ml-2">Зүүн талд</p>
                     <p className="ml-2 underline">
                        {form.getFieldValue([
                           'Цусны эргэлтийн тогтолцоо',
                           'АД зүүн талд'
                        ])}
                     </p>
                  </div>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="text-start ml-2 font-bold">
                     Хоол шингээх эрхтэн тогтолцоо
                  </p>
               </div>
               <div className="w-4/12 amaraDeer amaraZuun">
                  <p className="ml-2">Хэл</p>
                  <Form.Item
                     name={['Хоол шингээх эрхтэн тогтолцоо', 'Хэл']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox className="ml-2" value={'Ердийн'}>
                           Ердийн
                        </Checkbox>
                        <Checkbox value={'Хуурай'}>Хуурай</Checkbox>
                        <Checkbox value={'Өнгөргүй'}>Өнгөргүй</Checkbox>
                        <Checkbox value={'Өнгөртэй'}>Өнгөртэй</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-8/12 amaraDeer amaraZuun amaraBaruun">
                  <div className="inline-flex">
                     <p className="ml-2">Хэвлийн үзлэг:</p>
                     <p className="ml-2">Өнгөц тэмтрэлтээр:</p>
                     <Form.Item
                        name={[
                           'Хоол шингээх эрхтэн тогтолцоо',
                           'Хэвлийн үзлэг'
                        ]}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-1" value={'Гүн тэмтрэлтээр'}>
                              Гүн тэмтрэлтээр
                           </Checkbox>
                           <Checkbox value={'Эмзэглэлтэй'}>
                              Эмзэглэлтэй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
                  <Form.Item
                     name={['Хоол шингээх эрхтэн тогтолцоо', 'Хэвлийн үзлэг']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox className="" value={'Өнгөргүй'}>
                           Ердийн
                        </Checkbox>
                        <Checkbox value={'Өнгөртэй'}>
                           Зөөлөн гялтан цочрол үгүй
                        </Checkbox>
                        <Checkbox value={'Өнгөртэй'}>
                           <p style={{ width: 150 }}>
                              Гялтан цочролын шинж илэрсэн
                           </p>
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="text-start ml-2 font-bold">
                     Мэдрэлийн тогтолцоо
                  </p>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun">
                  <div className="inline-flex">
                     <p className="ml-2">Сонсох чадавхи:</p>
                     <Form.Item
                        name={['Мэдрэлийн тогтолцоо', 'Сонсох чадавхи']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-1" value={'Хэвийн'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="ml-1" value={'Буурсан'}>
                              Буурсан(баруун,зүүн)
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun amaraBaruun">
                  <div className="inline-flex">
                     <p className="ml-2">Рефлексүүд:</p>
                     <Form.Item
                        name={['Мэдрэлийн тогтолцоо', 'Рефлексүүд']}
                        className="mb-0"
                     >
                        <Checkbox.Group className="ddd ml-0">
                           <Checkbox className="ml-1" value={'Хадгалагдана'}>
                              Хадгалагдана
                           </Checkbox>
                           <Checkbox value={'Хадгалагдахгүй'}>
                              Хадгалагдахгүй
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">
                     Бусад:
                     {form.getFieldValue(['Мэдрэлийн тогтолцоо', 'Бусад'])}
                  </p>
                  <p className="ml-2">
                     Сэтгэцийн байдал:
                     {form.getFieldValue([
                        'Мэдрэлийн тогтолцоо',
                        'Сэтгэцийн байдал'
                     ])}
                  </p>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="text-center font-bold">
                     ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ҮЗЛЭГ
                  </p>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="text-center font-bold">END ZURAG BAINA</p>
               </div>
               <div className="w-4/12 amaraDeer amaraZuun">
                  <p className="ml-2 font-bold">Зовиур:</p>
                  <p>
                     {form.getFieldValue([
                        'Дотоод шүүрэл судлалын үзлэг',
                        'Зовиур'
                     ])}
                  </p>
               </div>
               <div className="w-5/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2 font-bold">Бамбайн томролын зэрэг:</p>
                  <Form.Item
                     name={[
                        'Дотоод шүүрэл судлалын үзлэг',
                        'Бамбайн томролын зэрэг'
                     ]}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox
                           className="ml-1"
                           value={'0-р зэрэг (Харагдахгүй, тэмтрэгдэнэ)'}
                        >
                           0-р зэрэг (Харагдахгүй, тэмтрэгдэнэ)
                        </Checkbox>
                        <Checkbox
                           className="ml-1"
                           value={'1-р зэрэг (Харагдахгүй, тэмтрэгдэнэ)'}
                        >
                           1-р зэрэг (Харагдахгүй, тэмтрэгдэнэ)
                        </Checkbox>
                        <Checkbox
                           className="ml-1"
                           value={'2-р зэрэг (Харагдахгүй, тэмтрэгдэнэ)'}
                        >
                           2-р зэрэг (Харагдахгүй, тэмтрэгдэнэ)
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2 font-bold">Нүдний бүлтийлт:</p>
                  <p className="ml-2">Нүдний шинж</p>
                  <Form.Item
                     name={['Дотоод шүүрэл судлалын үзлэг', 'Нүдний бүлтийлт']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox className="ml-1" value={'Крауссийн шинж'}>
                           Крауссийн шинж
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Грефийн шинж'}>
                           Грефийн шинж
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Кохерийн шинж'}>
                           Кохерийн шинж
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Мебиусийн шинж'}>
                           Мебиусийн шинж
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <Form.Item
                     name={['Дотоод шүүрэл судлалын үзлэг', 'Нүдний бүлтийлт']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd ml-0">
                        <Checkbox className="ml-1" value={'Штельвагийн шинж'}>
                           Штельвагийн шинж
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Дельримплийн шинж'}>
                           Дельримплийн шинж
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Еленикийн шинж'}>
                           Еленикийн шинж
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Розенбахын шинж'}>
                           Розенбахын шинж
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Боткиний шинж'}>
                           Боткиний шинж
                        </Checkbox>
                        <Checkbox className="ml-1" value={'Жоффруагийн шинж'}>
                           Жоффруагийн шинж
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-6/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">Марийн шинж</p>
                  <p className="ml-2 underline">
                     {form.getFieldValue([
                        'Дотоод шүүрэл судлалын үзлэг',
                        'Марийн шинж'
                     ])}
                  </p>
                  <p className="ml-2">Цахилгаан бүхээгний шинж</p>
                  <p className="ml-2 underline">
                     {form.getFieldValue([
                        'Дотоод шүүрэл судлалын үзлэг',
                        'Цахилгаан бүхээгний шинж'
                     ])}
                  </p>
                  <p className="ml-2">
                     Дермографизм (улаан, түргэн тогтвортой)
                  </p>
                  <p className="ml-2 underline">
                     {form.getFieldValue([
                        'Дотоод шүүрэл судлалын үзлэг',
                        'Дермографизм (улаан, түргэн тогтвортой)'
                     ])}
                  </p>
               </div>
               <div className="w-full">
                  <div className="flex flex-wrap">
                     <div className="w-5/12 amaraDeer amaraZuun">
                        <p>(Экзофтальмометрээр)</p>
                     </div>
                     <div className="w-7/12">
                        <div className="flex flex-wrap">
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p className="text-center">Үзүүлэлт</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p className="text-center">Хариу</p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun">
                              <p className="text-center">Хэвийн хэмжээ</p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p>Чөлөөлт Т3</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p>
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Чөлөөт T3'
                                 ])}
                              </p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun"></div>
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p>Чөлөөт T4</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p>
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Чөлөөт T4'
                                 ])}
                              </p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun"></div>
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p>Нийт Т3</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p>
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Нийт Т3'
                                 ])}
                              </p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun"></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full">
                  <div className="flex flex-wrap">
                     <div className="w-5/12 amaraDeer amaraZuun amaraDoor">
                        <p className="ml-2 font-bold">
                           Бамбайн хэт авиан шинжилгээ:
                        </p>
                     </div>
                     <div className="w-7/12">
                        <div className="flex flex-wrap">
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p>Нийт Т4</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p>
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Нийт Т4'
                                 ])}
                              </p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun"></div>
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p>TSH</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p>
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Чөлөөт T3'
                                 ])}
                              </p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun"></div>
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p>TR-Ab</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p>
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Чөлөөт T4'
                                 ])}
                              </p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun"></div>
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p>TG-Ab</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p>
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Нийт Т3'
                                 ])}
                              </p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun"></div>
                           <div className="w-1/5 amaraDeer amaraZuun">
                              <p>TPO-Ab</p>
                           </div>
                           <div className="w-3/5 amaraDeer amaraZuun">
                              <p>
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Нийт Т3'
                                 ])}
                              </p>
                           </div>
                           <div className="w-1/5 amaraDeer amaraZuun amaraBaruun"></div>
                           <div className="w-full amaraDeer amaraZuun amaraDoor amaraBaruun">
                              <p className="ml-2 font-bold">
                                 Бамбайн цөмийн изотоп шинжилгээ:
                              </p>
                              <p className="ml-2 underline">
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Бамбайн цөмийн изотоп шинжилгээ'
                                 ])}
                              </p>
                              <p className="ml-2 font-bold">
                                 Бамбайн эсийн шинжилгээ:
                              </p>
                              <p className="ml-2 underline">
                                 {form.getFieldValue([
                                    'Дотоод шүүрэл судлалын үзлэг',
                                    'Бамбайн эсийн шинжилгээ'
                                 ])}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Page1;
