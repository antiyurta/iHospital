import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Image, Input } from 'antd';
import DotoodShuurelImg from '../../../../assets/images/dotoodshuurel.png';
import TalimoMetrImg from '../../../../assets/images/talimometr.png';
import ThyroidImg from '../../../../assets/images/thyroid.png';
import PhysicalImg from '../../../../assets/images/physical.png';
import FootImg from '../../../../assets/images/foot.png';
const CT_1_Dotood = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               \<th className="flex justify-center mb-2">ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ЭМЧИЙН ҮЗЛЭГ</th>
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
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Дунд</Checkbox>
                              <Checkbox>Хүндэвтэр</Checkbox>
                              <Checkbox>Хүнд</Checkbox>
                              <Checkbox>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Саруул</Checkbox>
                              <Checkbox>Бүдгэрсэн</Checkbox>
                              <Checkbox>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>
                                 Хэвийн бус
                                 <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
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
                        <th className="w-[220px]"> Амьсгал 1 минутанд _____ удаа</th>
                        <th colSpan={3}>
                           Чагналтаар:
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэржигнүүртэй</Checkbox>
                              <Checkbox>Уушги цулцангийн</Checkbox>
                              <Checkbox>Амьсгал сулавтар (баруун, зүүн, 2 талдаа)</Checkbox>
                              <Checkbox>Гуурсан хоолойн</Checkbox>
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
                        <th>
                           Судасны цохилт 1 минутанд
                           <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           удаа
                           <th>
                              Хүчдэл дүүрэлт
                              <Input className="amaraInput w-10" style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                        <th>
                           <th>Тогшилтоор:</th>
                           Зүрхний хил
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Томорсон (зүүн, баруун)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Чагналтаар::</th>
                           Зүрхний авиа
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Тод</Checkbox>
                              <Checkbox>Бүдэг</Checkbox>
                              <Checkbox>Бүдгэвтэр</Checkbox>
                              <Checkbox>Хэм жигд</Checkbox>
                              <Checkbox>Жигд бус </Checkbox>
                              <Checkbox>Хэм алдалттай</Checkbox>
                           </Checkbox.Group>
                           <th>
                              АД баруун талд
                              <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />/
                              <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />
                           </th>
                           <th>
                              Зүүн талд
                              <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />/
                              <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />
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
                        <th className="w-[200px]">
                           Хэл
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Ердийн</Checkbox>
                              <Checkbox>Хуурай</Checkbox>
                              <Checkbox>Өнгөргүй</Checkbox>
                              <Checkbox>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={3}>
                           <p> Хэвлийн үзлэг:</p>
                           <Checkbox.Group>
                              <Checkbox>Өнгөц тэмтрэлтээр</Checkbox>
                              <Checkbox>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox className="">
                                 Эмзэглэлтэй (байрлал
                                 <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />)
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group>
                              <Checkbox>Ердийн</Checkbox>
                              <Checkbox>Зөөлөн гялтан цочрол үгүй</Checkbox>
                              <Checkbox> Гялтан цочролын шинж илэрсэн</Checkbox>
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
                           <p> Сонсох чадвахи:</p>
                           <Checkbox.Group>
                              <Checkbox>Хэвийн</Checkbox>
                              <Checkbox>Буурсан (баруун, зүүн)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Рефлексүүд</p>
                           <Checkbox.Group>
                              <Checkbox>Хадгалагдана</Checkbox>
                              <Checkbox>Хадгалагдахгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th className="w-full">
                              Бусад
                              <Input className="amaraInput w-[670px]" style={{ textAlign: 'center' }} />
                           </th>
                           Сэтгэцийн байдал:
                           <Input className="amaraInput w-[600px] mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="text-center">
                           ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ҮЗЛЭГ
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Image src={DotoodShuurelImg} alt="" width={149} height={100} />
                        </th>
                        <th className="w-[300px]"> Зовиур:</th>
                        <th>
                           Бамбайн томролын зэрэг:
                           <Checkbox.Group>
                              <Checkbox className="ml-2">0 зэрэг (Харагдахгүй, тэмтрэгдэхгүй) </Checkbox>
                              <Checkbox>1-р зэрэг (Харагдахгүй, тэмтрэгдэнэ) </Checkbox>
                              <Checkbox>2-р зэрэг (Харагдана, тэмтрэгдэнэ)</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Нүдний шинж:</th>
                           Нүдний бүлтийлт:
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Крауссийн шинж </Checkbox>
                              <Checkbox>Грефийн шинж </Checkbox>
                              <Checkbox>Кохерийн шинж </Checkbox>
                              <Checkbox>Грефийн шинж </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Штельвагийн шинж </Checkbox>
                              <Checkbox className="ml-2">Дельримплийн шинж</Checkbox>
                              <Checkbox className="ml-2">Еленикийн шинж </Checkbox>
                              <Checkbox className="ml-2">Розенбахийн шинж </Checkbox>
                              <Checkbox className="ml-2">Боткиний шинж</Checkbox>
                              <Checkbox className="ml-2">Жоффруагийн шинж</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[350px]">
                           Марийн шинж
                           <Input className=" w-full " style={{ textAlign: 'center' }} />
                           Цахилгаан бүхээгний шинж
                           <Input className=" w-full" style={{ textAlign: 'center' }} />
                           Дермографизм (улаан, түргэн тогтвортой)
                           <Input className=" w-full" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th rowSpan={5} className="w-[300px]">
                           <th>(Экзофтальмометрээр)</th>
                           <Image src={TalimoMetrImg} alt="" width={280} />
                        </th>
                        <th colSpan={3} className="h-6"></th>
                     </tr>
                     <tr>
                        <th className="w-[100px] text-center">Үзүүлэлт</th>
                        <th className="w-[250px] text-center">Хариу</th>
                        <th className="w-[80px] text-center">Хэвийн хэмжээ</th>
                     </tr>
                     <tr>
                        <th>Чөлөөт Т3</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Чөлөөт Т4</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Нийт Т3</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th rowSpan={6}>
                           Бамбайн хэт авиан шинжилгээ: <Image src={ThyroidImg} alt="" width={250} />
                        </th>

                        <th>Нийт Т4</th>
                        <th> </th>
                        <th> </th>
                     </tr>
                     <tr>
                        <th>TSH </th>
                        <th> </th>
                        <th> </th>
                     </tr>
                     <tr>
                        <th>TR-Ab</th>
                        <th> </th>
                        <th> </th>
                     </tr>
                     <tr>
                        <th>TG-Ab</th>
                        <th> </th>
                        <th> </th>
                     </tr>
                     <tr>
                        <th>TPO-Ab </th>
                        <th> </th>
                        <th> </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>
                           Бамбайн цөмийн изотоп шинжилгээ
                           <Input className="w-full" style={{ textAlign: 'center' }} />
                           Бамбайн эсийн шинжилгээ: <Input className="w-full " style={{ textAlign: 'center' }} />
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
                        <th className="text-center" colSpan={2}>
                           Чихрийн шижингийн үзлэг
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[40%]">
                           <th>
                              Чихрийн шижингийн эрсдэлт хүчин зүйлс:
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">Тарган удам</Checkbox>
                                 <Checkbox className="w-full"> ЧШ-гийн удам</Checkbox>
                                 <Checkbox className="w-full"> Жин (хамгийн их)</Checkbox>
                                 <Checkbox className="w-full">Гепатит</Checkbox>
                                 <Checkbox className="w-full">Панкреатит</Checkbox>
                                 <Checkbox className="w-full"> Жирэмсний ЧШ</Checkbox>
                                 <Checkbox className="w-full"> 4 кг дээш хүүхэд</Checkbox>
                                 <Checkbox className="w-full">Архи</Checkbox>
                                 <Checkbox className="w-full">Тамхи</Checkbox>
                                 <Checkbox className="w-full">Хоолны дэглэм: сайн / дунд / муу</Checkbox>
                                 <Checkbox>Хөдөлгөөн: сайн / дунд / муу</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th>
                           <th>Оношлогдсон он:</th>
                           Хэрэглэдэг эмийн бэлдмэл:
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[40%]">
                           <th>
                              Бие бялдарын үзүүлэлт:
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">
                                    Жин
                                    <Input className="w-10" style={{ textAlign: 'center' }} />
                                    кг
                                 </Checkbox>
                                 <Checkbox className="w-full">
                                    Өндөр
                                    <Input className="w-10" style={{ textAlign: 'center' }} />
                                    см
                                 </Checkbox>
                                 <Checkbox className="w-full">
                                    Биеийн өөхний хэмжээ
                                    <Input className="w-10" style={{ textAlign: 'center' }} />%
                                 </Checkbox>
                                 <Checkbox className="w-full ml-10">{text}</Checkbox>
                                 <Checkbox className="w-full">
                                    Бүсэлхийн тойрог
                                    <Input className="w-10" style={{ textAlign: 'center' }} />
                                    см
                                 </Checkbox>
                                 <Checkbox className="w-full ml-10">{text2}</Checkbox>
                                 <Checkbox className="w-full ml-10">{text3}</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                        <th>
                           <th>
                              <Image src={PhysicalImg} alt="" width={200} />
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2} className="text-center">
                           Биеийн жингийн индекс (БЖИ)
                           <Input className="w-10" />
                           кг/м2
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Жингийн дутагдал</th>
                        <th>Хэвийн жинтэй </th>
                        <th>Жингийн илүүдэл</th>
                        <th>Таргалалтын I зэрэг</th>
                        <th>Таргалалтын II зэрэг</th>
                        <th>Таргалалт ын III зэрэг</th>
                     </tr>
                     <tr className="text-center">
                        <th>{text4}</th>
                        <th>18-24.9кг/м2</th>
                        <th>25-29.9 кг/м2</th>
                        <th>30-34.9 кг/м2</th>
                        <th>35-39.9 кг/м2</th>
                        <th>{text5}</th>
                     </tr>
                     <tr>
                        <th colSpan={6} className="text-center">
                           Чихрийн шижингийн хяналт
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={6}>Өөрийн хяналт:</th>
                     </tr>
                     <tr>
                        <th colSpan={1}>{text6}</th>
                        <th colSpan={5}></th>
                     </tr>
                     <tr>
                        <th colSpan={1}>{text7}</th>
                        <th colSpan={5}></th>
                     </tr>
                     <tr>
                        <th colSpan={1} className="h-8"></th>
                        <th colSpan={5}></th>
                     </tr>
                     <tr>
                        <th colSpan={1}>Эмчийн хяналт:</th>
                        <th colSpan={5}></th>
                     </tr>
                     <tr>
                        <th colSpan={6} className="text-center">
                           HbA1C................%
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 text-center">
                        <th>Эрүүл</th>
                        <th>Сайн</th>
                        <th>Дунд</th>
                        <th>Муу</th>
                     </tr>
                     <tr className="text-center">
                        <th>4-6%</th>
                        <th>{text8}</th>
                        <th>6.5-7.5%</th>
                        <th>{text9}</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           Anti- GAD/IA2
                           <Input className="w-40" style={{ textAlign: 'center' }} />
                        </th>
                        <th>
                           Глюкозын ачаалалтай сорил:
                           <Checkbox.Group>
                              <Checkbox>
                                 Өлөн үеийн глюкоз
                                 <Input className="w-20 ml-2" style={{ textAlign: 'center' }} />
                                 ммоль/л
                              </Checkbox>
                              <Checkbox>
                                 2 цагийн дараах глюкоз
                                 <Input className="w-20 mb-1" style={{ textAlign: 'center' }} />
                                 ммол
                              </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={2}>
                           Чихрийн шижингийн хүндрэл Нүд:
                           <Input className="w-[500px] mb-1" style={{ textAlign: 'center' }} />
                           Зүрх <Input className="w-[660px] mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[200px]">Өөх тосны үзүүлэлтүүд </th>
                        <th className="w-[]">Хариу</th>
                        <th className="w-[200px]">Хэвийн хэмжээ</th>
                     </tr>
                     <tr className="border-t-0">
                        <th> Холестерол</th>
                        <th></th>
                        <th>{text10}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th>БНЛП</th>
                        <th></th>
                        <th>{text11}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th>ИНЛП</th>
                        <th></th>
                        <th>{text12}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th></th>
                        <th></th>
                        <th>{text13}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th>Триглицерид</th>
                        <th></th>
                        <th>{text14}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th>ИНЛП-с бусад</th>
                        <th></th>
                        <th>{text15}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th>Холест/ИНЛП</th>
                        <th></th>
                        <th>{text16}</th>
                     </tr>
                     <tr className="border-t-0">
                        <th colSpan={3} className="">
                           {text17}
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
                        <th>Зүрх судасны вегетатив невропати:</th>
                     </tr>
                     <tr>
                        <th>Бөөр:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Үзүүлэлтүүд </th>
                        <th>Хариу </th>
                        <th>Хэвийн хэмжээ</th>
                        <th colSpan={3}>Микроальбуминурийн шинжилгээ</th>
                     </tr>
                     <tr>
                        <th>Сахар</th>
                        <th></th>
                        <th></th>
                        <th rowSpan={3} className="w-[200px]"></th>
                        <th className="w-[80px]">{number}</th>
                        <th className="w-[50px]"></th>
                     </tr>
                     <tr>
                        <th>Кетон</th>
                        <th></th>
                        <th></th>
                        <th>20-200</th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Уураг</th>
                        <th></th>
                        <th></th>
                        <th>200</th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Цагаан эс</th>
                        <th></th>
                        <th></th>
                        <th> Креатинин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Улаан эс </th>
                        <th></th>
                        <th></th>
                        <th rowSpan={2}>
                           АКХ <th>(Альбумин / Креатинины харьцаа)</th>
                        </th>
                        <th> {number1}</th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Цилиндр</th>
                        <th></th>
                        <th></th>
                        <th> {number2}</th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хөл:</th>
                           <Image src={FootImg} alt="" />{' '}
                        </th>
                        <th>
                           <th className="w-full"> Арьсны өнгө:</th>
                           <Checkbox.Group>
                              <Checkbox>Хэвийн</Checkbox>
                              <Checkbox>Өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th className="w-full">Арьс хуурайшилт</th>
                           <Checkbox.Group>
                              <Checkbox>Хэвийн</Checkbox>
                              <Checkbox>Өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th className="w-full">Хумсны байдал:</th>
                           <Checkbox.Group>
                              <Checkbox>Хэвийн</Checkbox>
                              <Checkbox>Өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th className="w-full">Хөлийн хэлбэр</th>
                           <Checkbox.Group>
                              <Checkbox>Хэвийн</Checkbox>
                              <Checkbox>Өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[200px]">
                           Дараах өөрчлөлт илэрсэн эсэх
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Эвэр</Checkbox>
                              <Checkbox className="w-full">Үрэвсэл</Checkbox>
                              <Checkbox className="w-full">Зузаарал</Checkbox>
                              <Checkbox className="w-full">Шарх</Checkbox>
                              <Checkbox className="w-full">Хагарал</Checkbox>
                              <Checkbox className="w-full">Ампутаци</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[200px]">
                           Хөлийн судасны лугшилт:
                           <th>a.pedis dorsalis:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Сул</Checkbox>
                              <Checkbox>Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                           <th>a.tibialis posterior:</th>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Сул</Checkbox>
                              <Checkbox>Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={4}>Хөлийн мэдрэхүй: /тэмдэглэ/</th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           Доргионы
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full">Сул</Checkbox>
                              <Checkbox className="w-full">Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           Хүрэлцэхүйн
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full">Сул</Checkbox>
                              <Checkbox className="w-full">Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           Температурын
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full">Сул</Checkbox>
                              <Checkbox className="w-full">Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           Өвдөлтийн
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full">Сул</Checkbox>
                              <Checkbox className="w-full">Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           Монофиламент
                           <Checkbox.Group>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full">Сул</Checkbox>
                              <Checkbox className="w-full">Тэмтрэгдэхгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th colSpan={5}>
                           Шагай, Бугалганы индекс:
                           <Checkbox.Group>
                              <Checkbox>Баруун</Checkbox>
                              <Checkbox>Зүүн</Checkbox>
                           </Checkbox.Group>
                           <th>
                              {' '}
                              Борвины рефлекс:{' '}
                              <Checkbox.Group>
                                 <Checkbox>Баруун</Checkbox>
                                 <Checkbox>Зүүн</Checkbox>
                              </Checkbox.Group>
                           </th>
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
                           <p> Хүндрэл</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="h-60 w-[200px]">Ялган оношлох эмгэгүүд ба хам шинжүүд</th>
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
export default CT_1_Dotood;
export const text = ['(эр<25%; эм<30%)'];
export const text2 = ['(Aзи - эр<94см; эм<80см)'];
export const text3 = ['(Европ - эр<102см; эм<88см)'];
export const text4 = ['<18кг/м2 '];
export const text5 = ['40кг/м2<'];
export const text6 = ['Өлөн үеийн глюкоз(<6.0 ммоль/л)'];
export const text7 = ['Хоолны дараах глюкоз(<8.0 ммоль/л)s'];
export const text8 = ['<6.5%'];
export const text9 = ['7.5%<'];
export const text10 = ['< 4ммоль/л'];
export const text11 = ['< 2ммоль/л'];
export const text12 = ['эр<1.0ммоль/л'];
export const text13 = ['эм<1.2ммоль/л'];
export const text14 = ['< 1.7ммоль/л'];
export const text15 = ['< 3.3ммоль/л'];
export const text16 = ['< 5 ммоль/л'];
export const text17 = ['CRP.......................<5.0мг/л'];
export const number = ['< 20'];
export const number1 = ['< 2.5/эр/'];
export const number2 = ['< 3.5/эм/'];
