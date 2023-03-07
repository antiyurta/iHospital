import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
const { TextArea } = Input;
function General() {
   return (
      <>
         <Table bordered className="story mb-0">
            <thead>
               <tr>
                  <th className="text-center">Бие ерөнхий байдал</th>
                  <th className="text-center">Ухаан санаа</th>
                  <th className="text-center">Арьс салст</th>
               </tr>
               <tr>
                  <td>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
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
                  </td>
                  <td>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'mindStatus']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={0}>
                              Саруул
                           </Checkbox>
                           <Checkbox value={1}>Бүдгэвтэр</Checkbox>
                           <Checkbox value={2}>Ухаангүй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td style={{ width: 280 }}>
                     <span>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['general', 'skincolor']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={0}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={1}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['general', 'unNormalskincolor']}
                        >
                           <Input className="w-24" />
                        </Form.Item>
                     </span>
                  </td>
               </tr>
               <tr>
                  <th colSpan={3}>Амьсгалын эрхтэн тогтолцоо</th>
               </tr>
            </thead>
         </Table>
         <Table bordered className="story mb-0">
            <thead>
               <tr style={{ borderTopWidth: 0 }}>
                  <td className="w-64">
                     <span>
                        Амьсгалын 1 минутанд
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['general', 'breathOneMinute']}
                        >
                           <Input
                              className="amaraInput w-10"
                              style={{ textAlign: 'center' }}
                           />
                        </Form.Item>
                        удаа
                     </span>
                  </td>
                  <td>
                     <div className="flex flex-wrap">
                        <div className="basis-1/2">
                           <p className="font-bold">Чагналтаар:</p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['general', 'hear']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={0}>
                                    Уушги цулцангийн
                                 </Checkbox>
                                 <Checkbox value={1}>Гуурсан хоолойн</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="basis-1/2">
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['general', 'hear']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={2}>
                                    Хэржигнүүртэй
                                 </Checkbox>
                                 <Checkbox value={3}>Амьсгал сулавтар</Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                           <span>
                              (
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={['general', 'unNormalBreath']}
                              >
                                 <Checkbox.Group className="inline">
                                    <Checkbox className="test" value={0}>
                                       баруун
                                    </Checkbox>
                                    ,
                                    <Checkbox className="ml-0 test" value={1}>
                                       зүүн
                                    </Checkbox>
                                    ,
                                    <Checkbox className="ml-0 test" value={2}>
                                       2 талдаа
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                              )
                           </span>
                        </div>
                     </div>
                  </td>
               </tr>
            </thead>
         </Table>
         <Table bordered className="story mb-0">
            <thead>
               <tr style={{ borderTopWidth: 0 }}>
                  <th colSpan={3}>Цусны эргэлтийн тогтолцоо</th>
               </tr>
               <tr>
                  <td className="w-36">
                     <p>Судасны цохилт 1</p>
                     <p>
                        минутанд
                        <span>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['general', 'veinsOneMinute']}
                           >
                              <Input
                                 className="amaraInput w-10"
                                 style={{ textAlign: 'center' }}
                              />
                           </Form.Item>
                        </span>
                        удаа
                     </p>
                     <p>Хүчдэл</p>
                     <p>
                        дүүрэлт
                        <span>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['general', 'voltage']}
                           >
                              <Input
                                 className="amaraInput w-14"
                                 style={{ textAlign: 'center' }}
                              />
                           </Form.Item>
                        </span>
                     </p>
                  </td>
                  <td className="w-36">
                     <p className="font-bold">Тогшилтоор:</p>
                     <p>Зүрхний хил</p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'touchHeart']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2 w-full" value={0}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-4" value={1}>
                              Томорсон
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <span>
                        (
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['general', 'touchHeartUnNormal']}
                        >
                           <Checkbox.Group className="inline">
                              <Checkbox className="test" value={0}>
                                 баруун
                              </Checkbox>
                              ,
                              <Checkbox className="ml-0 test" value={1}>
                                 зүүн
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        талдаа)
                     </span>
                  </td>
                  <td style={{ width: 280 }}>
                     <p className="font-bold">Чагналтаар:</p>
                     <p>Зүрхний хил</p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'hearHeart']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={0}>
                              Тод
                           </Checkbox>
                           <Checkbox value={1}>Бүдэг</Checkbox>
                           <Checkbox value={2}>Бүдгэвтэр</Checkbox>
                           <Checkbox value={3}>Хэм жигд</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'hearHeart']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={4}>
                              Жигд бус
                           </Checkbox>
                           <Checkbox value={5}>Хэм алдалттай</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>
                        АД баруун талд
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['general', 'adRight']}
                        >
                           <Input
                              className="w-10"
                              style={{ textAlign: 'center' }}
                           />
                        </Form.Item>
                        Зүүн талд
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['general', 'adLeft']}
                        >
                           <Input
                              className="w-10"
                              style={{ textAlign: 'center' }}
                           />
                        </Form.Item>
                        талдаа
                     </p>
                  </td>
               </tr>
               <tr>
                  <th colSpan={3}>Хоол шингээх эрхтэн тогтолцоо</th>
               </tr>
               <tr>
                  <td>
                     <p>Хэл</p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'tongue']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={0}>
                              Ердийн
                           </Checkbox>
                           <Checkbox value={1}>Хуурай</Checkbox>
                           <Checkbox value={2}>Өнгөргүй</Checkbox>
                           <Checkbox value={3}>Өнгөртэй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td colSpan={2}>
                     <p>Хэвлийн үзлэг:</p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'abdominal']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={0}>
                              Өнгөц тэмтрэлтээр
                           </Checkbox>
                           <Checkbox value={1}>Гүн тэмтрэлтээр</Checkbox>
                           <Checkbox value={2}>Эмзэглэлтэй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p className="ml-24">
                        (байрлал:&nbsp;
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['general', 'injury2']}
                        >
                           <Input className="w-16" />
                        </Form.Item>
                        )
                     </p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'abdominal']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={3}>
                              Ердийн
                           </Checkbox>
                           <Checkbox value={4}>
                              Зөөлөн гялтан цочрол үгүй
                           </Checkbox>
                           <Checkbox value={5}>
                              Гялтан цочролыэн шинж илэрсэн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
            </thead>
         </Table>
         <Table bordered className="story mb-0">
            <thead>
               <tr style={{ borderTopWidth: 0 }}>
                  <th colSpan={2}>Мэдрэлийн тогтолцоо</th>
               </tr>
               <tr>
                  <td>
                     <p>Сонсох чадвахи:</p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'hearStatus']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={0}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={1}>Буурсан</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     (
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'hearStatusIsLow']}
                     >
                        <Checkbox.Group className="inline">
                           <Checkbox className="test" value={0}>
                              баруун
                           </Checkbox>
                           ,
                           <Checkbox className="ml-0 test" value={1}>
                              зүүн
                           </Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     )
                  </td>
                  <td>
                     <p>Рефлексүүд:</p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['general', 'reflex']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={0}>
                              Хадгалагдана
                           </Checkbox>
                           <Checkbox value={1}>Хадгалагдахгүй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <td colSpan={2}>
                     <p>
                        Бусад &nbsp;:
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['general', 'others']}
                        >
                           <Input className="w-11/12" />
                        </Form.Item>
                     </p>
                     <p>
                        <span>
                           Сэтгэцийн байдал &nbsp;:
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['general', 'mindStatus2']}
                           >
                              <TextArea style={{ width: '15cm' }} />
                           </Form.Item>
                        </span>
                     </p>
                  </td>
               </tr>
            </thead>
         </Table>
      </>
   );
}
export default General;
