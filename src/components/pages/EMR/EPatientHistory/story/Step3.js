import { Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;
function Step3({ id }) {
   return (
      <>
         {id === 1 ? (
            <div className="flex flex-wrap">
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Биеийн ерөнхий байдал:"
                           name={['general', 'bodyCondition']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'easy'}>
                                 Хөнгөн
                              </Checkbox>
                              <Checkbox value={'middle'}>Дунд</Checkbox>
                              <Checkbox value={'hard'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'harder'}>Хүнд</Checkbox>
                              <Checkbox value={'soHard'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Ухаан санаа:"
                           name={['general', 'mindStatus']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'faded'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'stupor'}>Ступор</Checkbox>
                              <Checkbox value={'solor'}>Солор</Checkbox>
                              <Checkbox value={'coma'}>Кома</Checkbox>
                              <Checkbox value={'other'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Орчиндоо:"
                           name={['general', 'area']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Харьцаатай
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Харьцаагүй</Checkbox>
                              <Checkbox value={'unknown'}>Сул</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Байрлал:"
                           name={['general', 'position']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'active'}>
                                 Идэвхтэй
                              </Checkbox>
                              <Checkbox value={'inactive'}>Идэвхгүй</Checkbox>
                              <Checkbox value={'pusher'}>Албадмал</Checkbox>
                              <Checkbox value={'haf'}>Хагас суугаа</Checkbox>
                              <Checkbox value={'inbed'}>Хэвтрийн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <h5>Арьс салстын байдал:</h5>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="а. Арьс салсын өнгө:"
                           name={['general', 'skincolor']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="б. Арьсны уян чанар:"
                           name={['general', 'skinElasticity']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'increased'}>Ихэссэн</Checkbox>
                              <Checkbox value={'decreased'}>Алдагдсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="в.Арьсны чийглэг байдал:"
                           name={['general', 'skinMoisture']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'increased'}>
                                 Хэвийн ихэссэн
                              </Checkbox>
                              <Checkbox value={'decreased'}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="г.Арьсан дээрх тууралт:"
                           name={['general', 'skinRash']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'noRash'}>
                                 Тууралтгүй
                              </Checkbox>
                              <Checkbox value={'rash'}>Тууралттай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Хаван:"
                           name={['general', 'edema']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'noEdema'}>
                                 Хавангүй
                              </Checkbox>
                              <Checkbox value={'edema'}>Хавантай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="а. Ерөнхий б. Хэсгийн:"
                           name={['general', 'skinArea']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'face'}>
                                 Нүүрэнд
                              </Checkbox>
                              <Checkbox value={'eye'}>Зовхинд</Checkbox>
                              <Checkbox value={'stomach'}>Хэвлийд</Checkbox>
                              <Checkbox value={'foot'}>Шилбээр</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Захын тунгалагийн булчирхай: а. Хэмжээ"
                           name={['general', 'ztb']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'hard'}>
                                 Харахад томорсон
                              </Checkbox>
                              <Checkbox value={'harder'}>
                                 Тэмтрэлтээр томорсон
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="б. Байрлал"
                           name={['general', 'b.position']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'neck'}>
                                 Хүзүүний
                              </Checkbox>
                              <Checkbox value={'armpit'}>Суганы</Checkbox>
                              <Checkbox value={'groin'}>Цавины</Checkbox>
                              <Checkbox value={'others'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="в. Эмзэглэл"
                           name={['general', 'injury']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'injury'}>
                                 Эмзэглэлтэй
                              </Checkbox>
                              <Checkbox value={'uninjury'}>
                                 Эмзэглэлгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Үе мөчний хэлбэр:"
                           name={['general', 'bodyShape']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'unNormal'}>
                                 Өөрчлөгдсөн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Үений хөдөлгөөн:"
                           name={['general', 'bodyMove']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'active'}>
                                 Идэвхтэй
                              </Checkbox>
                              <Checkbox value={'inactive'}>Идэвхгүй</Checkbox>
                              <Checkbox value={'limited'}>
                                 Хязгаарлагдмал
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div className="flex flex-wrap">
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Биеийн ерөнхий байдал:"
                           name={['general', 'bodyCondition']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Дунд
                              </Checkbox>
                              <Checkbox value={1}>Хүндэвтэр</Checkbox>
                              <Checkbox value={2}>Хүнд</Checkbox>
                              <Checkbox value={3}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Ухаан санаа:"
                           name={['general', 'mindStatus']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={1}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={2}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Арьс салст"
                           name={['general', 'skincolor']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Арьс салст хэвийн бус бол:"
                           name={['general', 'unNormalskincolor']}
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <h5>Амьсгалын эрхтэн тогтолцоо:</h5>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Амьсгал 1 минутанд:"
                           name={['general', 'breathOneMinute']}
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Чагналтаар:"
                           name={['general', 'hear']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Уушги цулцангийн
                              </Checkbox>
                              <Checkbox value={1}>Хэржигнүүртэй</Checkbox>
                              <Checkbox value={2}>Гуурсан хоолойн</Checkbox>
                              <Checkbox value={3}>Хэм жигд</Checkbox>
                              <Checkbox value={4}>Амьсгал сулавтар</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Амьсгал сулавтар бол:"
                           name={['general', 'unNormalBreath']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 баруун
                              </Checkbox>
                              <Checkbox value={1}>зүүн</Checkbox>
                              <Checkbox value={2}>2 талдаа</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <h5>Цусны эргэлтийн тогтолцоо:</h5>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Судасны цохилт 1 минутанд:"
                           name={['general', 'veinsOneMinute']}
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Хүчдэл дүүрэлт:"
                           name={['general', 'voltage']}
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Тогшилтоор Зүрхний хил:"
                           name={['general', 'touchHeart']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Томорсон</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Томорсон бол:"
                           name={['general', 'touchHeartUnNormal']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 зүүн
                              </Checkbox>
                              <Checkbox value={1}>баруун</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Чагналтаар зүрхний авиа:"
                           name={['general', 'hearHeart']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={1}>Бүдэг</Checkbox>
                              <Checkbox value={2}>Бүдгэвтэр</Checkbox>
                              <Checkbox value={3}>Хэм жигд</Checkbox>
                              <Checkbox value={4}>Жигд бус</Checkbox>
                              <Checkbox value={5}>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="АД баруун талд:"
                           name={['general', 'adRight']}
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="АД Зүүн талд:"
                           name={['general', 'adLeft']}
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <h5>Хоол шингээх эрхтэн тогтолцоо:</h5>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Хэл:"
                           name={['general', 'tongue']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={1}>Хуурай</Checkbox>
                              <Checkbox value={2}>Өнгөргүй</Checkbox>
                              <Checkbox value={3}>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Хэвлийн үзлэг:"
                           name={['general', 'abdominal']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Өнгөц тэмтрэлтээр
                              </Checkbox>
                              <Checkbox value={1}>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox value={2}>Эмзэглэлтэй</Checkbox>
                              <Checkbox value={3}>Ердийн</Checkbox>
                              <Checkbox value={4}>
                                 Зөөлөн гялтан цочрол үгүй
                              </Checkbox>
                              <Checkbox value={5}>
                                 Гялтан цочролын шинж илэрсэн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Хэвлийн үзлэг эмзэглэлтэй бол:"
                           name={['general', 'injury2']}
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <h5>Мэдрэлийн тогтолцоо:</h5>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Сонсох чадвахи:"
                           name={['general', 'hearStatus']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Сонсох чадвахи Буурсан бол:"
                           name={['general', 'hearStatusIsLow']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 баруун
                              </Checkbox>
                              <Checkbox value={1}>зүүн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-1/5 p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Рефлексүүд:"
                           name={['general', 'reflex']}
                        >
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={0}>
                                 Хадгалагдана
                              </Checkbox>
                              <Checkbox value={1}>Хадгалагдахгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Бусад:"
                           name={['general', 'others']}
                        >
                           <TextArea />
                        </Form.Item>
                     </div>
                  </div>
               </div>
               <div className="w-full p-1">
                  <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           className="mb-0"
                           label="Сэтгэцийн байдал:"
                           name={['general', 'mindStatus2']}
                        >
                           <TextArea />
                        </Form.Item>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
export default Step3;
