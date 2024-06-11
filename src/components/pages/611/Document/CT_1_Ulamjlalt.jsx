import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';

const CT_1_Ulamjlalt = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">УЛАМЖЛАЛТЫН ЭМЧИЙН ҮЗЛЭГ</th>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="text-center">
                        <th>Биеийн ерөнхий байдал</th>
                        <th>Ухаан санаа</th>
                        <th colSpan={4}>Арьс салст</th>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th>
                           <Checkbox.Group value={formData?.q1}>
                              <Checkbox className="ml-2" value={'q1-1'}>
                                 Дунд
                              </Checkbox>
                              <Checkbox value={'q1-2'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'q1-3'}>Хүнд</Checkbox>
                              <Checkbox value={'q1-4'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q2}>
                              <Checkbox className="ml-2" value={'q2-1'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'q2-2'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'q2-3'}>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4}>
                           <Checkbox.Group value={formData?.q3}>
                              <Checkbox className="ml-2" value={'q3-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q3-2'}>
                                 Хэвийн бус
                                 <Input
                                    className="amaraInput w-10 mb-2"
                                    value={formData?.['q3-2-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4}>
                           <p>Амьсгалын эрхтэн тогтолцоо</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[220px]" id="cls">
                           Амьсгал 1 минутанд
                           <Input className=" w-10 mb-2" value={formData?.['q4']} style={{ textAlign: 'center' }} />
                           удаа
                        </th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5} id="child">
                              <Checkbox value={'q5-1'} className="ml-2">
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Уушги цулцангийн</Checkbox>
                              <Checkbox value={'q5-3'}>Гуурсан хоолойн</Checkbox>
                              <Checkbox value={'q5-4'}>
                                 <div className="flex items-center">
                                    <span> Амьсгал сулавтар</span>
                                    <p>
                                       <span className="text-[11px]">
                                          (
                                          <Checkbox.Group value={formData?.['q5-4-1']} className="inline">
                                             <Checkbox className="test" value={'q5-4-1-1'}>
                                                <span className="text-[11px]">Баруун,</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q5-4-1-2'}>
                                                <span className="text-[11px]">зүүн,</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q5-4-1-3'}>
                                                <span className="text-[11px]">2 талдаа</span>
                                             </Checkbox>
                                             &nbsp;
                                          </Checkbox.Group>
                                          )
                                       </span>
                                    </p>
                                 </div>
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <p className="mb-2">Цусны эргэлтийн тогтолцоо</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="cls">
                           <p>
                              Судасны цохилт 1 минутанд
                              <Input className="amaraInput w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                              удаа
                           </p>
                           <p>
                              Хүчдэл дүүрэлт
                              <Input className="amaraInput w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
                           </p>
                        </th>
                        <th>
                           <p>Тогшилтоор:</p>
                           <p id="cls">Зүрхний хил:</p>
                           <Checkbox.Group value={formData?.q8}>
                              <Checkbox className="ml-2" value={'q8-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q8-2'}>
                                 Томорсон
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q8-2-1']} className="inline">
                                          <Checkbox className="test" value={'q8-2-1-1'}>
                                             <span className="text-[11px]">Баруун,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q8-2-1-2'}>
                                             <span className="text-[11px]">зүүн,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Чагналтаар::</p>
                           <p id="cls">Зүрхний авиа</p>
                           <Checkbox.Group value={formData?.q9}>
                              <Checkbox className="ml-2" value={'q9-1'}>
                                 Тод
                              </Checkbox>
                              <Checkbox value={'q9-2'}>Бүдэг</Checkbox>
                              <Checkbox value={'q9-3'}>Бүдгэвтэр</Checkbox>
                              <Checkbox value={'q9-4'}>Хэм жигд</Checkbox>
                              <Checkbox value={'q9-5'}>Жигд бус </Checkbox>
                              <Checkbox value={'q9-6'}>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <th id="cls">
                              АД баруун талд
                              <Input
                                 className="amaraInput w-8"
                                 value={formData?.['q9-6-1']}
                                 style={{ textAlign: 'center' }}
                              />
                           </th>
                           <th id="cls">
                              Зүүн талд
                              <Input
                                 className="amaraInput w-8"
                                 value={formData?.['q9-6-3']}
                                 style={{ textAlign: 'center' }}
                              />
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0  ">
                        <th colSpan={4}>
                           <p className="mb-2">Хоол шингээх эрхтэн тогтолцоо</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[150px]">
                           Хэл
                           <Checkbox.Group value={formData?.q10}>
                              <Checkbox className="ml-2" value={'q10-1'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'q10-2'}>Хуурай</Checkbox>
                              <Checkbox value={'q10-3'}>Өнгөргүй</Checkbox>
                              <Checkbox value={'q10-4'}>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={3}>
                           <p> Хэвлийн үзлэг:</p>
                           <Checkbox.Group value={formData?.q11}>
                              <Checkbox value={'q11-1'}>Өнгөц тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q11-2'}>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox className="" value={'q11-3'}>
                                 Эмзэглэлтэй (байрлал
                                 <Input
                                    className="amaraInput w-8"
                                    value={formData?.['q11-3-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 )
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group>
                              <Checkbox value={'q11-4'}>Ердийн</Checkbox>
                              <Checkbox value={'q11-5'}>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox value={'q11-6'}> Гялтан цочролын шинж илэрсэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Мэдрэлийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="cls">
                           <div className="flex items-center gap-2">
                              <p>Сонсох чадвахи:</p>
                              <div className="flex items-center">
                                 <Checkbox.Group value={formData?.q12}>
                                    <Checkbox value={'q12-1'}>Хэвийн</Checkbox>
                                    <Checkbox value={'q12-2'}>Буурсан</Checkbox>
                                 </Checkbox.Group>
                                 <p>
                                    <span className="text-[11px]">
                                       (
                                       <Checkbox.Group value={formData?.['q12-2-1']} className="inline">
                                          <Checkbox className="test" value={'q12-2-1-1'}>
                                             <span className="text-[11px]">Баруун,</span>
                                          </Checkbox>
                                          &nbsp;
                                          <Checkbox className="ml-0 test" value={'q12-2-1-2'}>
                                             <span className="text-[11px]">зүүн,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </th>
                        <th>
                           <div className="flex items-center gap-2">
                              <p id="cls">Рефлексүүд:</p>
                              <Checkbox.Group value={formData?.q13}>
                                 <Checkbox value={'q13-1'}>Хадгалагдана</Checkbox>
                                 <Checkbox value={'q13-2'}>Хадгалагдана</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4} id="cls">
                           <p className="w-full">
                              Бусад
                              <Input
                                 className="amaraInput w-[670px] mb-3"
                                 value={formData?.q14}
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                           <p>
                              Сэтгэцийн байдал:
                              <Input
                                 className="amaraInput w-[600px] mb-1"
                                 value={formData?.q15}
                                 style={{ textAlign: 'center' }}
                              />
                           </p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Өвөрчлөл:</th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           <div className="flex justify-between">
                              <Checkbox.Group className="flex flex-col ml-2">
                                 <Checkbox className="ml-2">Хий</Checkbox>
                                 <Checkbox>Шар</Checkbox>
                                 <Checkbox>Бадган</Checkbox>
                                 <Checkbox>Хий шар хавсарсан</Checkbox>
                              </Checkbox.Group>
                              <Checkbox.Group className="flex flex-col">
                                 <Checkbox className="ml-2">Хий бадган хавсарсан</Checkbox>
                                 <Checkbox>Шар бадган хавсарсан</Checkbox>
                                 <Checkbox>Хий, шар, бадган хурсан </Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                        <th>
                           <p>Цог сүлд:</p>
                           <Checkbox.Group>
                              <Checkbox>Сайн</Checkbox>
                              <Checkbox>Дунд</Checkbox>
                              <Checkbox>Буурсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="text-center">
                        <th className="w-[100px]"></th>
                        <th>Хий</th>
                        <th>Шар</th>
                        <th className="w-[30%]">Бадган</th>
                     </tr>
                     <tr>
                        <th colSpan={4} className="text-center">
                           Үзэх шинжилгээ
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story ">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[16%]" id="cls">
                           Нүүр царай
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хуурай ширүүн</Checkbox>
                              <Checkbox>Бор хүрэн хар, хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Зөөлөн чийглэг хөлс ихтэй, тослог</Checkbox>
                              <Checkbox>Улаа бутарсан шар, шаргал өнгөтэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Сэлхэрсэн</Checkbox>
                              <Checkbox className="w-full">Цайвар өнгөтэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Нүд</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цагаан нүд хөхөлбөр</Checkbox>
                              <Checkbox>Харц тогтворгүй</Checkbox>
                              <Checkbox>Олон анивчина</Checkbox>
                              <Checkbox className="w-full">Нулимс гоожно</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цагаан нүд улаан, шар, шаргал</Checkbox>
                              <Checkbox>Махан ургацагтай</Checkbox>
                              <Checkbox> Харц ширүүн</Checkbox>
                              <Checkbox>Шар ус, нуух гоожно</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цагаан нүд цагаан, цайвар</Checkbox>
                              <Checkbox>Өөхөн ургацагтай</Checkbox>
                              <Checkbox>Харц дөлгөөн</Checkbox>
                              <Checkbox className="w-full">Зовхи сэлхэрнэ</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Чих</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Шуугина загатнана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Улаан шар өнгөтэй</Checkbox>
                              <Checkbox>Шар ус өгрий булаг гоожно</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цагаан өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Хулхи ихтэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Хамар </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Хамар битүүрэх</Checkbox>
                              <Checkbox className="w-full">Үнэр мэдрэхгүй болох</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хамар улайх, цус гарах, хуурайших</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хамраас ялгадас гарах, хамрын үзүүр цайх </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th className="w-[16%]" id="cls">
                           Уруул{' '}
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Муруйна</Checkbox>
                              <Checkbox className="w-full">Чичирч таталдана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Улбар шаргал өнгөтэй</Checkbox>
                              <Checkbox>Хатаж хуурайшина хагарна</Checkbox>
                              <Checkbox className="w-full">Цус гарна</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цайвар өнгөтэй </Checkbox>
                              <Checkbox className="w-full">Өнгөртэй, өрөмтэй</Checkbox>
                              <Checkbox className="w-full">Ялбарна, шүүс гоожино</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[16%]" id="cls">
                           Хэл{' '}
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Улаан, хөхөлбөр, ягаан өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Хуурай ширүүн</Checkbox>
                              <Checkbox className="w-full">Өнгөргүй</Checkbox>
                              <Checkbox className="w-full">Хийн гүвдрүүтэй</Checkbox>
                              <Checkbox>Хөшүүн охор богино үзүүр нарийн, хэл чулчирна хэлгийрнэ таталдана</Checkbox>
                              <Checkbox className="w-full">Эхүүн амтагдана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Улаавтар өнгөтэй</Checkbox>
                              <Checkbox>Нимгэн зузаан шаргал шар өнгөртэй</Checkbox>
                              <Checkbox className="w-full">Улаан бэржрүү гүвдрүүтэй</Checkbox>
                              <Checkbox className="w-full">Хар толбо зураастай</Checkbox>
                              <Checkbox className="w-full">Давслаг гашуун амтагдана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[28%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цайвар ягаан өнгөтэй </Checkbox>
                              <Checkbox className="w-full">Том</Checkbox>
                              <Checkbox className="w-full">Чийглэг зөөлөн</Checkbox>
                              <Checkbox>Нимгэн зузаан цайвар өнгөртэй, зах ирмэгээрээ шүдний оромтой</Checkbox>
                              <Checkbox className="w-full">Ам заваарна</Checkbox>
                              <Checkbox className="w-full">Амтлаг амтагдана</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="cls">Баас </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Шингэн</Checkbox>
                              <Checkbox className="w-full">Хөөс ихтэй</Checkbox>
                              <Checkbox className="w-full">Хоргослож хатна</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Шар өнгөтэй</Checkbox>
                              <Checkbox>Цус өгрийн хольцтой</Checkbox>
                              <Checkbox className="w-full">Өмхий үнэртэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цайвар шаргал өнгөтэй </Checkbox>
                              <Checkbox className="w-full"> Эс шингэсэн идээ ундаа салсын хольцтой</Checkbox>
                              <Checkbox className="w-full">Наалдамтгай</Checkbox>
                              <Checkbox className="w-full">Исгэлэн үнэртэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="cls">Шээс </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хөхөлбөр өнгөтэй</Checkbox>
                              <Checkbox className="w-full">Ус адил тунгалаг</Checkbox>
                              <Checkbox className="w-full">Үнэр уур багатай</Checkbox>
                              <Checkbox>Хөөс том, дуутай хагарч арилна</Checkbox>
                              <Checkbox>Дээрээ бутарсан нарийн ширхэглэг язмагтай</Checkbox>
                              <Checkbox>Хувирсаны сүүлд хөхөлбөр өнгөтэй, тунгалаг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Шар, улбар шар, улаан өнгөтэй</Checkbox>
                              <Checkbox>Үнэр уур ихтэй, уур нь удаан арилна </Checkbox>
                              <Checkbox>Хөөс нь жижиг түргэн арилна</Checkbox>
                              <Checkbox>Зузаан өрөмтэй</Checkbox>
                              <Checkbox>Дундаа хөвсөн зузаан бөөгнөрсөн язмагтай</Checkbox>
                              <Checkbox>Хувирсаны сүүлд шар улбар хүрэн өнгөтэй өтгөн</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Цайвар шаргал өнгөтэй </Checkbox>
                              <Checkbox className="w-full"> Үнэр уур багатай</Checkbox>
                              <Checkbox>Хөөс нь жижиг удаан арилна, савны хананд наалдана</Checkbox>
                              <Checkbox>Доороо нарийн бөөгнөрсөн тунасан язмагтай</Checkbox>
                              <Checkbox>Хувирсаны сүүлд цайвар шар өнгөтэй, шингэн</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="cls">Хөлс </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Бага хэмжээтэй </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2"> Их хэмжээтэй, үнэрлэг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дунд зэрэг </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="cls">Үс </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Бор хар өнгөтэй </Checkbox>
                              <Checkbox className="w-full">Хар</Checkbox>
                              <Checkbox className="w-full">Хуурай</Checkbox>
                              <Checkbox className="w-full">Буржгар</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full"> Бараан, гялалзсан</Checkbox>
                              <Checkbox className=" w-full"> Тослог</Checkbox>
                              <Checkbox className=" w-full"> Даахирсан</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дунд зэрэг </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="cls">Шүд </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дорсгор иржгэр </Checkbox>
                              <Checkbox className="w-full">Том</Checkbox>
                              <Checkbox className="w-full">Эцэнхий буйлтай</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full"> Шарласан</Checkbox>
                              <Checkbox className=" w-full"> Тослог</Checkbox>
                              <Checkbox> Зөөлөн буйлтай</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Цагаан </Checkbox>
                              <Checkbox className="w-full">Хатуу</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th id="cls">Хумс </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хөхрөх </Checkbox>
                              <Checkbox className="w-full"> Хувхайрах</Checkbox>
                              <Checkbox className="w-full">Зузаарах</Checkbox>
                              <Checkbox className="w-full">Хатуу болох</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full"> Шарлах</Checkbox>
                              <Checkbox className=" w-full"> Харавтар зураас тогтох</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Цайх </Checkbox>
                              <Checkbox className="w-full">Цагаан толбо, дусал адил бусаар гарах</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story">
                  <thead>
                     <tr className="text-center">
                        <th colSpan={4} id="cls">
                           Хүрэлцэх шинжилгээ
                        </th>
                     </tr>
                     <tr>
                        <th rowSpan={4} className="w-[20%] " id="cls">
                           Бэлчир орон
                        </th>
                        <th colSpan={3} className="text-center" id="cls">
                           Өврийн бэлчир
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хар цагааны завсар</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Гэдэсний дээд</Checkbox>
                              <Checkbox className="w-full">Гэдэсний доод</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Аюулхайн</Checkbox>
                              <Checkbox className="w-full">Галын илч буурсан</Checkbox>
                              <Checkbox className="w-full">Бэтгийн</Checkbox>
                              <Checkbox className="w-full">Давсагны</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="text-center" id="cls">
                           Арын бэлчир
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full"> Th1 – Хий</Checkbox>
                              <Checkbox className=" w-full"> Th6 – Амин судас</Checkbox>
                              <Checkbox className=" w-full"> Th7 – Зүрх</Checkbox>
                              <Checkbox className=" w-full"> L4 - Олгой</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Th2 – Шар</Checkbox>
                              <Checkbox className="w-full">Th9 – Элэг</Checkbox>
                              <Checkbox className="w-full"> Th10 – Цөс</Checkbox>
                              <Checkbox className="w-full"> L5 – Гэдэс</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Th3 – Бадган</Checkbox>
                              <Checkbox className="w-full">Th11 – Дэлүү </Checkbox>
                              <Checkbox className="w-full">Th12 – Ходоод</Checkbox>
                              <Checkbox className="w-full">S1 – Давсаг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Хаван, хавдар</th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">
                                 Хуурай, ширүүн, хүйтэн, ихсэж багасах нь түргэн
                              </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Өвчин эмзэглэл ихтэй, халуун</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хүйтэн, өвчин эмзэглэл бага, тогтвортой</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Арьс </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хуурай </Checkbox>
                              <Checkbox className=" w-full">Ширүүн </Checkbox>
                              <Checkbox className=" w-full">Хүйтэн </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Зөөлөн </Checkbox>
                              <Checkbox className=" w-full">Тослог </Checkbox>
                              <Checkbox className=" w-full">Бүлээн, халуун </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Өөхлөг </Checkbox>
                              <Checkbox className=" w-full">Тослог </Checkbox>
                              <Checkbox className=" w-full">Хүйтэн </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="text-center">
                        <th colSpan={4}>Өлсөх</th>
                     </tr>
                     <tr>
                        <th id="cls">Өлсөх </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Тогтмол бус </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Их </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Бага </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Ундаасах </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Тогтмол бус </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Их </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Бага </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Нойр</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Өнгөц сэрэмтгий </Checkbox>
                              <Checkbox className="w-full">Их зүүдлэнэ, хар дарна </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Шөнө унтаж чадахгүй </Checkbox>
                              <Checkbox className=" w-full">Өдөр нойр их хүрнэ</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Нойр их </Checkbox>
                              <Checkbox className=" w-full">Алжааж нойрмоглоно </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Яриа</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Түргэн </Checkbox>
                              <Checkbox className="w-full"> Олон үглэнэ</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хурц ширүүн, түрэмгий</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Удаан алгуур </Checkbox>
                              <Checkbox className=" w-full">Үг дуу цөөн </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls"> Галбир</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Туранхай </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дунд зэрэг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Тарган </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Биеийн идэвхи</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хөдөлгөөн түргэн</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дунд зэрэг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хөдөлгөөн удаан </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Оюуны идэвхи</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Санаж сэдсэн, идэвхитэй</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Түрэмгий ухаалаг</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Амгалан, удаан </Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Мөн чанар</th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дан</Checkbox>
                              <Checkbox className="w-full">Хавсарсан</Checkbox>
                              <Checkbox>Хурсан</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дан</Checkbox>
                              <Checkbox className="w-full">Хавсарсан</Checkbox>
                              <Checkbox>Хурсан</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Дан</Checkbox>
                              <Checkbox className="w-full">Хавсарсан</Checkbox>
                              <Checkbox>Хурсан</Checkbox>
                              <Checkbox>Бусад</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th id="cls">Судас</th>
                        <th colSpan={3}></th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th className="w-[21%] h-10" id="cls">
                           Судас
                        </th>
                        <th className="w-[79%]" id="cls"></th>
                     </tr>
                     <tr>
                        <th className="h-14" id="cls">
                           УАУ-ны онош /код/{' '}
                        </th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="h-16" id="cls">
                           Эмчилгээний зарчим
                        </th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={3}>
                           <p className="text-center mb-2"> КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-14">
                           <p> Үндсэн онош</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-20">
                           <p> Дагалдах онош</p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} className="h-32">
                           <p> Хүндрэл</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="h-80 w-[200px] text-center">Ялган оношлох эмгэгүүд ба хам шинжүүд</th>
                        <th className="text-center"> Хийгдэх шинжилгээ</th>
                        <th>Яаралтай хийгдэх эмчилгээ</th>
                     </tr>
                     <tr>
                        <th className=" border-r-0">
                           <p className="mt-2 ">Эмчийн нэр: </p>
                        </th>
                        <th className="border-l-0">
                           <p className="mt-2">Гарын үсэг</p>
                        </th>
                        <th>
                           <div className="flex justify-center gap-4">
                              <p>он </p>
                              <p>сар </p>
                              <p>өдөр</p>
                           </div>
                           <div className="gap-8 flex justify-center">
                              <p>/</p>
                              <p>/</p>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Ulamjlalt;
