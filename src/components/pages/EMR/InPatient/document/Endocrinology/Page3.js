import { Checkbox, Form } from 'antd';
import Index from '../ClinicalDiagnosis/Index';
import React from 'react';
function Page3({ form }) {
   return (
      <div className="page">
         <div className="subpage">
            <div className="flex flex-wrap">
               <div className="w-full amaraZuun amaraBaruun amaraDeer">
                  <p className="ml-2 font-bold">
                     Зүрх судасны вегетатив невропати:
                  </p>
               </div>
               <div className="w-full amaraZuun amaraBaruun amaraDeer">
                  <p className="ml-2 font-bold">Бөөр:</p>
               </div>
               <div className="flex flex-wrap">
                  <div className="w-1/2 amaraDeer amaraZuun">
                     <div className="flex flex-wrap">
                        <div className="w-4/12 amaraBaruun">
                           <p className="text-center">Үзүүлэлтүүд</p>
                        </div>
                        <div className="w-4/12 amaraBaruun">
                           <p className="text-center">Хариу</p>
                        </div>
                        <div className="w-4/12">
                           <p className="text-center">Хэвийн хэмжээ</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">Сахар</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">
                              {form.getFieldValue(['Бөөр', 'Сахар'])}
                           </p>
                        </div>
                        <div className="w-4/12 amaraDeer">
                           <p className="text-center">Хэвийн хэмжээ</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">Кетон</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">
                              {form.getFieldValue(['Бөөр', 'Кетон'])}
                           </p>
                        </div>
                        <div className="w-4/12 amaraDeer">
                           <p className="text-center">Хэвийн хэмжээ</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">Уураг</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">
                              {form.getFieldValue(['Бөөр', 'Уураг'])}
                           </p>
                        </div>
                        <div className="w-4/12 amaraDeer">
                           <p className="text-center">Хэвийн хэмжээ</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">Цагаан эс</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">
                              {form.getFieldValue(['Бөөр', 'Цагаан эс'])}
                           </p>
                        </div>
                        <div className="w-4/12 amaraDeer">
                           <p className="text-center">Хэвийн хэмжээ</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">Улаан эс</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">
                              {form.getFieldValue(['Бөөр', 'Улаан эс'])}
                           </p>
                        </div>
                        <div className="w-4/12 amaraDeer">
                           <p className="text-center">Хэвийн хэмжээ</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">Цилиндр</p>
                        </div>
                        <div className="w-4/12 amaraBaruun amaraDeer">
                           <p className="text-center">
                              {form.getFieldValue(['Бөөр', 'Цилиндр'])}
                           </p>
                        </div>
                        <div className="w-4/12 amaraDeer">
                           <p className="text-center">Хэвийн хэмжээ</p>
                        </div>
                     </div>
                  </div>
                  <div className="w-1/2 amaraDeer amaraZuun">
                     <div className="flex flex-wrap">
                        <div className="w-full amaraBaruun">
                           <p className="ml-2 font-bold">
                              Микроальбуминурийн шинжилгээ
                           </p>
                        </div>
                        <div className="w-7/12 amaraDeer amaraBaruun">
                           <p>sdasd</p>
                        </div>
                        <div className="w-5/12 amaraDeer">
                           <div className="flex flex-wrap">
                              <div className="w-2/3 amaraBaruun">
                                 <p>{'< 20'}</p>
                              </div>
                              <div className="w-1/3 amaraBaruun">
                                 <p></p>
                              </div>
                              <div className="w-2/3 amaraDeer amaraBaruun">
                                 <p>20-200</p>
                              </div>
                              <div className="w-1/3 amaraDeer amaraBaruun">
                                 <p></p>
                              </div>
                              <div className="w-2/3 amaraDeer amaraBaruun">
                                 <p>200</p>
                              </div>
                              <div className="w-1/3 amaraDeer amaraBaruun">
                                 <p></p>
                              </div>
                           </div>
                        </div>
                        <div className="w-7/12 amaraDeer amaraBaruun">
                           <p className="ml-2 font-bold">Креатинин</p>
                        </div>
                        <div className="w-5/12">
                           <div className="flex flex-wrap">
                              <div className="w-2/3 amaraDeer amaraBaruun">
                                 <p>|</p>
                              </div>
                              <div className="w-1/3 amaraDeer amaraBaruun">
                                 <p>|</p>
                              </div>
                           </div>
                        </div>
                        <div className="w-7/12 amaraDeer amaraBaruun">
                           <p>АКХ</p>
                           <p>(Альбумин/Креатинины харьцаа)</p>
                        </div>
                        <div className="w-5/12 amaraDeer">
                           <div className="flex flex-wrap">
                              <div className="w-2/3 amaraBaruun">
                                 <p>{'< 2.5/эр/'}</p>
                              </div>
                              <div className="w-1/3 amaraBaruun">
                                 <p></p>
                              </div>
                              <div className="w-2/3 amaraDeer amaraBaruun">
                                 <p>{'< 3.5/эр/'}</p>
                              </div>
                              <div className="w-1/3 amaraDeer amaraBaruun">
                                 <p></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun">
                  <p className="ml-2 font-bold">Хөл:</p>
               </div>
               <div className="w-4/12 amaraDeer amaraZuun">
                  <p className="ml-2">Арьсны өнгө:</p>
                  <Form.Item name={['Хөл', 'Арьсны өнгө']} className="mb-0">
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox value={'Хэвийн'}>Хэвийн</Checkbox>
                        <Checkbox value={'Өөрчлөлттэй'}>Өөрчлөлттэй</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
                  <p className="ml-2">Арьс хуурайшилт:</p>
                  <Form.Item name={['Хөл', 'Арьс хуурайшилт']} className="mb-0">
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox value={'Хэвийн'}>Хэвийн</Checkbox>
                        <Checkbox value={'Өөрчлөлттэй'}>Өөрчлөлттэй</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
                  <p className="ml-2">Хумсны байдал:</p>
                  <Form.Item name={['Хөл', 'Хумсны байдал']} className="mb-0">
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox value={'Хэвийн'}>Хэвийн</Checkbox>
                        <Checkbox value={'Өөрчлөлттэй'}>Өөрчлөлттэй</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
                  <p className="ml-2">Хөлийн хэлбэр:</p>
                  <Form.Item name={['Хөл', 'Хөлийн хэлбэр']} className="mb-0">
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox value={'Хэвийн'}>Хэвийн</Checkbox>
                        <Checkbox value={'Өөрчлөлттэй'}>Өөрчлөлттэй</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-2/12 amaraDeer amaraZuun">
                  <p className="ml-2">Дараах өөрчлөлт илэрсэн эсэх:</p>
                  <Form.Item
                     name={['Хөл', 'Дараах өөрчлөлт илэрсэн эсэх']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox className="ml-2" value={'Эвэр'}>
                           Эвэр
                        </Checkbox>
                        <Checkbox value={'Үрэвсэл'}>Үрэвсэл</Checkbox>
                        <Checkbox value={'Зузаарал'}>Зузаарал</Checkbox>
                        <Checkbox value={'Шарх'}>Шарх</Checkbox>
                        <Checkbox value={'Хагарал'}>Хагарал</Checkbox>
                        <Checkbox value={'Ампутаци'}>Ампутаци</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">Хөлийн судасны лугшилт:</p>
                  <p className="ml-2">a.pedis dorsalis:</p>
                  <Form.Item
                     name={['Хөлийн судасны лугшилт', 'a.pedis dorsalis']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Сул'}>Сул</Checkbox>
                        <Checkbox value={'Тэмтрэгдэхгүй'}>
                           Тэмтрэгдэхгүй
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
                  <p className="ml-2">a.tibialis posterior:</p>
                  <Form.Item
                     name={['Хөлийн судасны лугшилт', 'a.tabialis posterior']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Сул'}>Сул</Checkbox>
                        <Checkbox value={'Тэмтрэгдэхгүй'}>
                           Тэмтрэгдэхгүй
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">Хөлийн мэдрэхүй: /тэмдэглэ/</p>
               </div>
               <div className="w-1/5 amaraDeer amaraZuun">
                  <p className="ml-2">Доргионы:</p>
                  <Form.Item
                     name={['Хөлийн мэдрэхүй', 'Доргионы']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Сул'}>Сул</Checkbox>
                        <Checkbox value={'Тэмтрэгдэхгүй'}>
                           Тэмтрэгдэхгүй
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-1/5 amaraDeer amaraZuun">
                  <p className="ml-2">Хүрэлцэхүйн:</p>
                  <Form.Item
                     name={['Хөлийн мэдрэхүй', 'Хүрэлцэхүйн']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Сул'}>Сул</Checkbox>
                        <Checkbox value={'Тэмтрэгдэхгүй'}>
                           Тэмтрэгдэхгүй
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-1/5 amaraDeer amaraZuun">
                  <p className="ml-2">Температурын:</p>
                  <Form.Item
                     name={['Хөлийн мэдрэхүй', 'Температурын']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Сул'}>Сул</Checkbox>
                        <Checkbox value={'Тэмтрэгдэхгүй'}>
                           Тэмтрэгдэхгүй
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-1/5 amaraDeer amaraZuun">
                  <p className="ml-2">Өвдөлтийн:</p>
                  <Form.Item
                     name={['Хөлийн мэдрэхүй', 'Өвдөлтийн']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Сул'}>Сул</Checkbox>
                        <Checkbox value={'Тэмтрэгдэхгүй'}>
                           Тэмтрэгдэхгүй
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-1/5 amaraDeer amaraZuun amaraBaruun">
                  <p className="ml-2">Монофиламент:</p>
                  <Form.Item
                     name={['Хөлийн мэдрэхүй', 'Монофиламент']}
                     className="mb-0"
                  >
                     <Checkbox.Group className="ddd mx-auto">
                        <Checkbox className="ml-2" value={'Хэвийн'}>
                           Хэвийн
                        </Checkbox>
                        <Checkbox value={'Сул'}>Сул</Checkbox>
                        <Checkbox value={'Тэмтрэгдэхгүй'}>
                           Тэмтрэгдэхгүй
                        </Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
               <div className="w-full amaraDeer amaraZuun amaraBaruun">
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Шагай, Бугалганы индекс:</p>
                        <Form.Item
                           name={['Хөлийн мэдрэхүй', 'Шагай, Бугалгын индекс']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd mx-auto">
                              <Checkbox className="ml-2" value={'Баруун'}>
                                 Баруун
                              </Checkbox>
                              <Checkbox value={'Зүүн'}>Зүүн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </p>
                  <p>
                     <div className="inline-flex">
                        <p className="ml-2">Борвины рефлекс:</p>
                        <Form.Item
                           name={['Хөлийн мэдрэхүй', 'Борвины рефлекс']}
                           className="mb-0"
                        >
                           <Checkbox.Group className="ddd mx-auto">
                              <Checkbox className="ml-2" value={'Баруун'}>
                                 Баруун
                              </Checkbox>
                              <Checkbox value={'Зүүн'}>Зүүн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </p>
               </div>
               <Index form={form} />
            </div>
         </div>
      </div>
   );
}
export default Page3;
