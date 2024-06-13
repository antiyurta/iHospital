import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';
const CT_1_Aris = (props) => {
   const {
      data: { formData }
   } = props;

   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">АРЬСНЫ ЭМЧИЙН ҮЗЛЭГ</th>
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
                                    className=" w-10"
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
                        <th colSpan={4}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th className="w-[220px]" id="child">
                           Амьсгал 1 минутанд
                           <Input className="w-10" value={formData?.q4} style={{ textAlign: 'center' }} />
                           удаа
                        </th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group value={formData?.q5}>
                              <Checkbox className="ml-2" value={'q5-3'}>
                                 Хэржигнүүртэй
                              </Checkbox>
                              <Checkbox value={'q5-1'}>Уушги цулцангийн</Checkbox>
                              <Checkbox value={'q5-4'}>
                                 Амьсгал сулавтар
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
                                             <span className="text-[11px]">2 талдаа,</span>
                                          </Checkbox>
                                          &nbsp;
                                       </Checkbox.Group>
                                       )
                                    </span>
                                 </p>
                              </Checkbox>
                              <Checkbox value={'q5-2'}>Гуурсан хоолойн</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Цусны эргэлтийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <div>
                              Судасны цохилт 1 минутанд
                              <Input className=" w-10" value={formData?.q6} style={{ textAlign: 'center' }} />
                              удаа
                           </div>
                           <div>
                              Хүчдэл дүүрэлт
                              <Input className=" w-10" value={formData?.q7} style={{ textAlign: 'center' }} />
                           </div>
                        </th>
                        <th>
                           <p>Тогшилтоор:</p>
                           <p id="child">Зүрхний хил</p>
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
                           <p>Чагналтаар:</p>
                           <p id="child">Зүрхний авиа</p>
                           <Checkbox.Group value={formData?.q9}>
                              <Checkbox value={'q9-1'} className="ml-2">
                                 Тод
                              </Checkbox>
                              <Checkbox value={'q9-2'}>Бүдэг</Checkbox>
                              <Checkbox value={'q9-3'}>Бүдгэвтэр</Checkbox>
                              <Checkbox value={'q9-4'}>Хэм жигд</Checkbox>
                              <Checkbox value={'q9-5'}>Жигд бус </Checkbox>
                              <Checkbox value={'q9-6'}>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <th id="child">
                              АД баруун талд
                              <Input className=" w-8" value={formData?.q10} style={{ textAlign: 'center' }} />
                           </th>
                           <th id="child">
                              Зүүн талд
                              <Input className=" w-8" value={formData?.q11} style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={4}>Хоол шингээх эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th className="w-[150px]">
                           Хэл
                           <Checkbox.Group value={formData?.q12}>
                              <Checkbox value={'q12-1'} className="ml-2">
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'q12-2'}>Хуурай</Checkbox>
                              <Checkbox value={'q12-3'}>Өнгөргүй</Checkbox>
                              <Checkbox value={'q12-4'}>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={3}>
                           <p> Хэвлийн үзлэг:</p>
                           <Checkbox.Group value={formData?.q13}>
                              <Checkbox value={'q13-1'}>Өнгөц тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-2'}>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox value={'q13-3'} className="">
                                 Эмзэглэлтэй (байрлал
                                 <Input
                                    className=" w-8"
                                    value={formData?.['q13-3-1']}
                                    style={{ textAlign: 'center' }}
                                 />
                                 )
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData?.q13}>
                              <Checkbox value={'q13-4'}>Ердийн</Checkbox>
                              <Checkbox value={'q13-5'}>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox value={'q13-6'}> Гялтан цочролын шинж илэрсэн</Checkbox>
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
                        <th>
                           <div className="flex  items-center gap-2">
                              <p> Сонсох чадвахи:</p>
                              <Checkbox.Group value={formData?.q14}>
                                 <Checkbox value={'q14-1'}>Хэвийн</Checkbox>
                                 <Checkbox value={'q14-2'}>
                                    <p>
                                       Буурсан
                                       <span className="text-[11px]">
                                          (
                                          <Checkbox.Group value={formData?.['q14-2-1']} className="inline">
                                             <Checkbox className="test" value={'q14-2-1-1'}>
                                                <span className="text-[11px]">Баруун,</span>
                                             </Checkbox>
                                             &nbsp;
                                             <Checkbox className="ml-0 test" value={'q14-2-1-2'}>
                                                <span className="text-[11px]">зүүн,</span>
                                             </Checkbox>
                                             &nbsp;
                                          </Checkbox.Group>
                                          )
                                       </span>
                                    </p>
                                 </Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                        <th>
                           <div className="flex items-center gap-2">
                              <p>Рефлексүүд:</p>
                              <Checkbox.Group value={formData?.q15}>
                                 <Checkbox value={'q15-1'}>Хадгалагдана</Checkbox>
                                 <Checkbox value={'q15-2'}>Хадгалагдахгүй</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th id="child">
                           <p className="w-full">
                              Бусад:
                              <Input className="ml-2 w-[650px]" value={formData?.q16} />
                           </p>
                           <p>
                              Сэтгэцийн байдал:
                              <Input className="ml-2 w-[580px] mb-1" value={formData?.q17} />
                           </p>
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p className="flex justify-center">Арьс, салст, дайвруудын үзлэг: </p>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           Арьсны хүрэлцэх мэдрэхүйн байдал:
                           <Checkbox.Group value={formData?.q18}>
                              <Checkbox className="ml-6" value={'q18-1'}>
                                 Мэдэрч байна{' '}
                              </Checkbox>
                              <Checkbox value={'q18-2'}>Мэдрэхгүй байна</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <div className="flex items-center">
                              <p>Арьсны байдал:</p>
                              <p className="ml-4 underline " id="child">{` ${formData?.q29}`}</p>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th id="child">Арьсны өнгө: :</th>
                           <Checkbox.Group value={formData?.q19}>
                              <Checkbox className="ml-2" value={'q19-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q19-2'}>Улаан цоохор</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q19}>
                              <Checkbox className="ml-2" value={'q19-3'}>
                                 Хэвийн бус
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q19-4'}>
                                 Зэвхий саарал
                              </Checkbox>
                              <Checkbox value={'q19-5'}>Шар</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q19}>
                              <Checkbox className="ml-2 w-full" value={'q19-6'}>
                                 Шарангуй
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q19-7'}>
                                 Хүрэн
                              </Checkbox>
                              <Checkbox value={'q19-8'}>Харласан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'q19-9'}>
                                 Хөхөрсөн
                              </Checkbox>
                              <Checkbox value={'q19-10'}>Цайж алагласан</Checkbox>
                              <Checkbox value={'q19-11'}>Хүрэл шиг</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th id="child">Уян чанар:</th>
                           <Checkbox.Group value={formData?.q20}>
                              <Checkbox className="ml-2 w-full" value={'q20-1'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q20-2'}>
                                 Ихэссэн
                              </Checkbox>
                              <Checkbox value={'q20-3'}>Алдагдсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th id="child">Арьсны халуун:</th>
                           <Checkbox.Group value={formData?.q21}>
                              <Checkbox value={'q21-1'} className="ml-2">
                                 Хэвийн бус
                              </Checkbox>
                              <Checkbox value={'q21-2'} className="ml-2 w-full">
                                 Халуун
                              </Checkbox>
                              <Checkbox value={'q21-3'}>Хүйтэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th id="child">Чийглэг байдал:</th>
                           <Checkbox.Group value={formData?.q22}>
                              <Checkbox value={'q22-1'} className="ml-2 w-full">
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'q22-2'} className="ml-2 w-full">
                                 Ихэссэн
                              </Checkbox>
                              <Checkbox value={'q22-3'}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>
                           <div className="flex justify-center">Хэсэг газрын үзлэг</div>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Тууралтын онцлог</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th id="child">Өнгө</th>
                           <Checkbox.Group value={formData?.q23}>
                              <Checkbox className="ml-2" value={'q23-1'}>
                                 Ягаан
                              </Checkbox>
                              <Checkbox value={'q23-2'}>Улаан</Checkbox>
                              <Checkbox value={'q23-3'}>Цагаан</Checkbox>
                              <Checkbox value={'q23-4'}>Цайвар бор</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q23}>
                              <Checkbox value={'q23-5'} className="ml-2">
                                 Бор
                              </Checkbox>
                              <Checkbox value={'q23-6'} className="ml-2 w-full">
                                 Хар
                              </Checkbox>
                              <Checkbox value={'q23-7'}>Хөх</Checkbox>
                              <Checkbox value={'q23-8'}>Саарал</Checkbox>
                              <Checkbox value={'q23-9'}>Шар</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th id="child">Хүрээ:</th>
                           <Checkbox.Group value={formData?.q24}>
                              <Checkbox value={'q24-1'} className="ml-2 w-full">
                                 Хил хязгаар нь тод
                              </Checkbox>
                              <Checkbox value={'q24-2'} className="ml-2 w-full">
                                 Тод бус (well defined) (Illdefined)
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th id="child">Хэлбэр:</th>
                           <Checkbox.Group value={formData?.q25}>
                              <Checkbox className="ml-2" value={'q25-1'}>
                                 Дугараг
                              </Checkbox>
                              <Checkbox value={'q25-2'}>Зууван</Checkbox>
                              <Checkbox value={'q25-3'}>Олон талт</Checkbox>
                              <Checkbox value={'q25-4'}>Олон цагирагт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q25}>
                              <Checkbox className="ml-2" value={'q25-5'}>
                                 Зоос хэлбэрийн
                              </Checkbox>
                              <Checkbox value={'q25-6'}>Могой хэлбэрийн</Checkbox>
                              <Checkbox value={'q25-7'}>Шугаман</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th id="child">Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData?.q26}>
                              <p id="child">Тогтоц нь</p>
                              <Checkbox value={'q26-1'}>Зөөлөн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q26}>
                              <Checkbox value={'q26-2'} className="ml-2">
                                 Хатуувтар
                              </Checkbox>
                              <Checkbox value={'q26-3'} className="ml-2 w-full">
                                 Нягт хатуу
                              </Checkbox>
                              <Checkbox value={'q26-4'}>Бамбалзсан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q26}>
                              <Checkbox value={'q26-5'} className="ml-2">
                                 Даргар
                              </Checkbox>
                              <Checkbox value={'q26-6'}>Халуун</Checkbox>
                              <Checkbox value={'q26-7'}>Хүйтэн</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q26}>
                              <Checkbox value={'q26-8'} className="ml-2 w-full">
                                 Хөдөлгөөнтэй
                              </Checkbox>
                              <Checkbox value={'q26-9'} className="ml-2 w-full">
                                 Хөдөлгөөнгүй
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q26}>
                              <Checkbox className="ml-2" value={'q26-10'}>
                                 {' '}
                                 Эмзэглэлтэй
                              </Checkbox>
                              <Checkbox value={'q26-11'}>Эмзэглэлгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={2}>
                           <p id="child"> Эмх цэгц, хэв маяг болон тархалт</p>
                           <div className="flex items-center gap-2">
                              <p id="child"> Тоо хэмжээ:</p>
                              <Checkbox.Group value={formData?.q27}>
                                 <Checkbox value={'q27-1'}>Нэг</Checkbox>
                                 <Checkbox value={'q27-2'}>Олон тууралт</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                        <th colSpan={4}>
                           <div className="flex items-center gap-2">
                              <p id="child">Эмх цэгц:</p>
                              <Checkbox.Group value={formData?.q28}>
                                 <Checkbox value={'q28-1'}>Бүлэглэсэн</Checkbox>
                                 <Checkbox value={'q28-2'}>Тархсан</Checkbox>
                              </Checkbox.Group>
                           </div>
                           <div className="flex items-center gap-2">
                              <p id="child">Нягтрал:</p>
                              <Checkbox.Group value={formData?.q29}>
                                 <Checkbox value={'q29-1'}>Байгаа</Checkbox>
                                 <Checkbox value={'q29-2'}>Байхгүй</Checkbox>
                              </Checkbox.Group>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[33%]" id="child">
                           Тархац: Тэлэлт:
                        </th>
                        <th className="w-[33%]" id="child">
                           Байрлалт
                        </th>
                        <th className="w-[33%]" id="child">
                           <Checkbox value={formData?.['q31-5']}>Хурууны завсар</Checkbox>
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
                        <th className="w-[35%]">
                           <Checkbox.Group value={formData?.q30}>
                              <Checkbox value={'q30-1'} className="ml-2">
                                 Дангараа
                              </Checkbox>
                              <Checkbox value={'q30-2'} className="w-full">
                                 Нэг хэсэг (хэсэгчилсэн)
                              </Checkbox>
                              <Checkbox value={'q30-3'} className="w-full">
                                 Хэсэг газрыг хамарсан
                              </Checkbox>
                              <Checkbox value={'q30-4'}>Бүх биеэр тархсан </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[25%]">
                           <Checkbox.Group value={formData?.q31}>
                              <Checkbox value={'q31-1'} className="ml-2">
                                 2 талд тэгш
                              </Checkbox>
                              <Checkbox value={'q31-2'} className="ml-2 w-full">
                                 Тэгш бус
                              </Checkbox>
                              <Checkbox value={'q31-3'}>Өртсөн хэсэгт </Checkbox>
                              <Checkbox value={'q31-4'}> Даралттай хэсэгт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData?.q31}>
                              <Checkbox className="ml-2 w-full" value={'q31-6'}>
                                 Энд тэнд
                              </Checkbox>
                              <Checkbox className="ml-2 w-full" value={'q31-7'}>
                                 Blaschko-н шугам дагуу
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           Өвчлөлтэй холбогдолтой түүх (Удамшлын болоод бодисын солилцооны өвчний түүх)
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3} id="child">
                           1. Чихэрийн шижинтэй эсэх:
                           <Input className=" w-[550px] mb-1 ml-2" value={formData?.q32} />
                           2. Даралт ихтэй эсэх:
                           <Input className=" w-[590px] mb-1 ml-2" value={formData?.q33} />
                           3. Харшил (ялангуяа эмийн):
                           <Input className=" w-[550px] mb-1 ml-2" value={formData?.q34} />
                           4. Эм хэрэглэлт, байнга уудаг болон одоо ууж байгаа:
                           <Input className=" w-[420px] mb-1 ml-2" value={formData?.q35} />
                           5. Хорт зуршил (архи, тамхи):
                           <Input className=" w-[545px] mb-1 ml-2" value={formData?.q36} />
                           6. Атофийн түүх (астма, чонон хөрвөс, экзем):
                           <Input className=" w-[460px] mb-1 ml-2" value={formData?.q37} />
                           7. Гэр бүлийн өвчлөлийн түүх:
                           <Input className=" w-[540px] mb-1 ml-2" value={formData?.q38} />
                           8. Нийгмийн идэвх сонирхол:
                           <Input className=" w-[545px] mb-1 ml-2" value={formData?.q39} />
                           9. Бэлгийн хавьтлын түүх:
                           <Input className=" w-[560px] mb-1 ml-2" value={formData?.q40} />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           <p className="text-center"> КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ</p>
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
                        <th colSpan={3} className="h-24">
                           КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ
                           <p> Хүндрэл</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="h-80 w-[200px]">Ялган оношлох эмгэгүүд ба хам шинжүүд</th>
                        <th> Хийгдэх шинжилгээ</th>
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
export default CT_1_Aris;
