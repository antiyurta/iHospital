import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';

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
                        name={['doctorInspection', 'general', 'bodyCondition']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'middle'}>
                              Дунд
                           </Checkbox>
                           <Checkbox value={'moreHeavy'}>Хүндэвтэр</Checkbox>
                           <Checkbox value={'heavy'}>Хүнд</Checkbox>
                           <Checkbox value={'veryHeavy'}>Маш хүнд</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['doctorInspection', 'general', 'mindStatus']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'normal'}>
                              Саруул
                           </Checkbox>
                           <Checkbox value={'dim'}>Бүдгэвтэр</Checkbox>
                           <Checkbox value={'noSense'}>Ухаангүй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td style={{ width: 280 }}>
                     <span>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'skin']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'normal'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'unNormal'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'isSkin']}
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
                           name={[
                              'doctorInspection',
                              'general',
                              'breathOneMinute'
                           ]}
                        >
                           <Input className="w-24" />
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
                              name={['doctorInspection', 'general', 'hear']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={'lungs'}>
                                    Уушги цулцангийн
                                 </Checkbox>
                                 <Checkbox value={'tube'}>
                                    Гуурсан хоолойн
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="basis-1/2">
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['doctorInspection', 'general', 'hear2']}
                           >
                              <Checkbox.Group className="ml-0">
                                 <Checkbox className="ml-2" value={'unNormal'}>
                                    Хэржигнүүртэй
                                 </Checkbox>
                                 <Checkbox value={'breathSlow'}>
                                    Амьсгал сулавтар
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                           <span>
                              (
                              <Form.Item
                                 shouldUpdate
                                 className="mb-0"
                                 noStyle
                                 name={[
                                    'doctorInspection',
                                    'general',
                                    'breathSlow'
                                 ]}
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
                              name={[
                                 'doctorInspection',
                                 'general',
                                 'vascularOneMinute'
                              ]}
                           >
                              <Input className="w-14" />
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
                              name={[
                                 'doctorInspection',
                                 'general',
                                 'strongFull'
                              ]}
                           >
                              <Input className="w-14" />
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
                        name={['doctorInspection', 'general', 'touchHeart']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2 w-full" value={'normal'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox className="w-4" value={'bigger'}>
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
                           name={[
                              'doctorInspection',
                              'general',
                              'touchHeartBigger'
                           ]}
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
                        name={['doctorInspection', 'general', 'hearHeart']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'bright'}>
                              Тод
                           </Checkbox>
                           <Checkbox value={'dim'}>Бүдэг</Checkbox>
                           <Checkbox value={'dimmer'}>Бүдгэвтэр</Checkbox>
                           <Checkbox value={'normal'}>Хэм жигд</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['doctorInspection', 'general', 'hearHeart2']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'unNormal'}>
                              Жигд бус
                           </Checkbox>
                           <Checkbox value={'lossHem'}>Хэм алдалттай</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p>
                        АД баруун талд
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'adRightOne']}
                        >
                           <Input className="w-10" />
                        </Form.Item>
                        /
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'adRightTwo']}
                        >
                           <Input className="w-10" />
                        </Form.Item>
                        Зүүн талд
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'adLeftOne']}
                        >
                           <Input className="w-10" />
                        </Form.Item>
                        /
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'adLeftTwo']}
                        >
                           <Input className="w-10" />
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
                        name={['doctorInspection', 'general', 'toungh']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'normal'}>
                              Ердийн
                           </Checkbox>
                           <Checkbox value={'dry'}>Хуурай</Checkbox>
                           <Checkbox value={'noColor'}>Өнгөргүй</Checkbox>
                           <Checkbox value={'color'}>Өнгөртэй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
                  <td colSpan={2}>
                     <p>Хэвлийн үзлэг:</p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['doctorInspection', 'general', 'abdominal']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'lowerTouch'}>
                              Өнгөц тэмтрэлтээр
                           </Checkbox>
                           <Checkbox value={'highTouch'}>
                              Гүн тэмтрэлтээр
                           </Checkbox>
                           <Checkbox value={'painFul'}>Эмзэглэлтэй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     <p className="ml-24">
                        (байрлал
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'position']}
                        >
                           <Input className="w-16" />
                        </Form.Item>
                        )
                     </p>
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={['doctorInspection', 'general', 'abdominal2']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'normal'}>
                              Ердийн
                           </Checkbox>
                           <Checkbox value={'isSoft'}>
                              Зөөлөн гялтан цочрол үгүй
                           </Checkbox>
                           <Checkbox value={'isIssuse'}>
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
                        name={['doctorInspection', 'general', 'listenAbility']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'normal'}>
                              Хэвийн
                           </Checkbox>
                           <Checkbox value={'decreased'}>Буурсан</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                     (
                     <Form.Item
                        shouldUpdate
                        className="mb-0"
                        noStyle
                        name={[
                           'doctorInspection',
                           'general',
                           'listenAbilityDecreased'
                        ]}
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
                        name={['doctorInspection', 'general', 'reflex']}
                     >
                        <Checkbox.Group className="ml-0">
                           <Checkbox className="ml-2" value={'saved'}>
                              Хадгалагдана
                           </Checkbox>
                           <Checkbox value={'unSaved'}>Хадгалагдахгүй</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  </td>
               </tr>
               <tr>
                  <td colSpan={2}>
                     <p>
                        Бусад
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'others']}
                        >
                           <Input className="w-11/12" />
                        </Form.Item>
                     </p>
                     <p>
                        Сэтгэцийн байдал:
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['doctorInspection', 'general', 'mentalState']}
                        >
                           <Input className="w-10/12" />
                        </Form.Item>
                     </p>
                     <p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={[
                              'doctorInspection',
                              'general',
                              'mentalState2'
                           ]}
                        >
                           <Input className="w-full mb-1" />
                        </Form.Item>
                     </p>
                  </td>
               </tr>
            </thead>
         </Table>
      </>
   );
}
export default General;
