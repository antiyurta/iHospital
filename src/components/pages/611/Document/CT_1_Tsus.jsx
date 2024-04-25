import React from 'react';
import { Checkbox, Image, Input } from 'antd';
import { Table } from 'react-bootstrap';
import HematopImg from '../../../../assets/images/hematop.png';
import BodyImg from '../../../../assets/images/body.png';
import Body2Img from '../../../../assets/images/body2.png';
import ChestImg from '../../../../assets/images/chest.png';
const CT_1_Tsus = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">ЦУСНЫ ЭМЧИЙН ҮЗЛЭГ</th>
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
                        <th className="w-[150px]">
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
                        <th colSpan={4}>Мэдрэлийн тогтолцоо</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th rowSpan={2}>
                           <Image src={HematopImg} alt="" width={250} height={160} className="p-8" />
                        </th>
                        <th>
                           Зовиур:
                           <Input className="amaraInput w-[400px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>
                           <p>Биеийн жин /Кг/:</p>
                           <p>Биеийн өндөр /См/:</p>
                           <p>Биеийн гадаргуу / м2</p>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <p>Арьсан дээрх тууралтын хэлбэр:</p>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Цэгчилсэн гүвдрүүт тууралт</Checkbox>
                              <Checkbox className="w-full">Цэврүүт тууралт</Checkbox>
                              <Checkbox className="w-full">Толбон тууралт</Checkbox>
                              <Checkbox className="w-full">Шалбархайт болон тав тогтсон</Checkbox>
                              <Checkbox className="w-full">Сорви</Checkbox>
                              <Checkbox className="w-full">Цус хуралт</Checkbox>
                              <Checkbox className="w-full">Цус харвалт</Checkbox>
                              <Checkbox className="w-full">Холимог туурал</Checkbox>
                              <Checkbox className="w-full">Тууралтгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Үсний байдал:</p>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хугарамтгай</Checkbox>
                           </Checkbox.Group>
                           <p>Хумсны байдал:</p>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хугарамтгай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>(Тууралтын байрлалыг зурагт тэмдэглэх)</p>
                           <Image src={BodyImg} alt="" width={280} height={220} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0 ">
                        <th>
                           <p>Хумсны байдал:</p>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Хэвийн</Checkbox>
                              <Checkbox className="w-full">Хугарамтгай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Амны хөндий: Хэл/ </p>
                           <p>Өнгө:</p>
                           <Checkbox.Group>
                              <Checkbox className="ml-2">Ердийн</Checkbox>
                              <Checkbox>Цайвар</Checkbox>
                              <Checkbox>Улаан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Хөхлөг</p>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Ердийн</Checkbox>
                              <Checkbox className="w-full">Хатингаршсан</Checkbox>
                              <Checkbox className="w-full">Томорсон</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Тууралт</p>
                           <Checkbox.Group>
                              <Checkbox className="ml-2 w-full">Тууралттай</Checkbox>
                              <Checkbox className="ml-2 w-full">Шарх</Checkbox>
                              <Checkbox className="ml-2 w-full">Улайлт</Checkbox>
                              <Checkbox className="w-full">Яр</Checkbox>
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
                        <th className="w-[25%]"></th>
                        <th className="w-[25%]">
                           <Checkbox>Ягаан</Checkbox>
                        </th>
                        <th className="w-[25%]"></th>
                        <th className="w-[25%]">
                           <Checkbox>Газрын зураг</Checkbox>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[27%]">
                           <p>Бөөрөлзгөнө хэл Өнгө:</p>
                           <Checkbox className="ml-2 ">Ердийн</Checkbox>
                           <Checkbox>Улайсан</Checkbox>
                           <Checkbox>Цайсан</Checkbox>
                           <Checkbox>Хөхөлбий</Checkbox>
                        </th>
                        <th className="w-[23%]">
                           <p>Шарх:</p>
                           <Checkbox className="ml-2">Шархтай</Checkbox>
                           <Checkbox>Шархгүй</Checkbox>
                        </th>
                        <th className="w-[25%]">
                           <p>Буйл: Эмзэглэл</p>
                           <Checkbox className="ml-2">Эмзэглэлгүй</Checkbox>
                           <Checkbox>Эмзэглэлтэй</Checkbox>
                        </th>
                        <th className="w-[25%]">
                           <p>Тууралт:</p>
                           <Checkbox className="ml-2">Тууралттай</Checkbox>
                           <Checkbox>Тууралтгүй</Checkbox>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Тунгалагийн булчирхайн байдал:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className=" border-r-0">
                           <p>Нягт :</p>
                           <Checkbox className="ml-2 ">Хатуу</Checkbox>
                           <Checkbox className="w-full">Зөөлөн</Checkbox>
                           <p>Гадаргуу :</p>
                           <Checkbox className="ml-2 ">Барзгар</Checkbox>
                           <Checkbox className="w-full">Гөлгөр</Checkbox>
                        </th>
                        <th className="border-l-0 ">
                           <Image src={Body2Img} alt="" width={100} height={100} className="mr-4" />
                        </th>
                        <th className="w-[23%]">
                           <p>Хөдөлгөөн:</p>
                           <Checkbox className="ml-2">Хөдөлгөөнтэй</Checkbox>
                           <Checkbox>Хөдөлгөөнгүй</Checkbox>
                           <p>Эмзэглэл:</p>
                           <Checkbox className="ml-2">Эмзэглэлгүй</Checkbox>
                           <Checkbox>Эмзэглэлтэй</Checkbox>
                        </th>
                        <th className="w-[50%] border-r-0">
                           <p>Дэлүүний хэмжээ</p>
                           <Checkbox className="ml-2">Хэвийн</Checkbox>
                           <Checkbox>1зэргээр томорсон.</Checkbox>
                           <Checkbox className="ml-2">2 зэргээр томорсон</Checkbox>
                           <Checkbox className="ml-2">3 зэргээр томорсон.</Checkbox>
                           <Checkbox className="ml-2">4 зэргээр томорсон.</Checkbox>
                           <Checkbox className="ml-2">Дэлүү мэс заслаар авагдсан.</Checkbox>
                        </th>
                        <th className="border-l-0">
                           <Image src={ChestImg} alt="" width={120} height={100} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Шинжилгээ:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">Цусны дэлгэрэнгүй шинжилгээ:</th>
                        <th className="w-[50%]">Лейкограмм</th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">WBC</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Blasts</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">PLT</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Basophil</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">RBC</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Eosinophil</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">HGB</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Promyelocyte</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">HCT</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Myelocyte</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">MCV</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Bands</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">RET</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Neutrophil</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">RET-He</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Lymphocyte</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]"></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="w-[25%]">Monocyte</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">
                           Дүгнэлт:
                           <Input className="amaraInput w-[660px]" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">Миелограмм:</th>
                     </tr>
                  </thead>
               </Table>

               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={7}>
                           Дүгнэлт:
                           <Input className="amaraInput w-[370px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Бласт</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Бүх нейтрофиль</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Бүх эритриод эс</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Лимфоцит</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Плазмоцит</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th className="w-[25%]">Мегакариоцит</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">Цито химийн урвал :</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[20%]"></th>
                        <th>Эерэг</th>
                        <th>Сөрөг</th>
                        <th className="w-[20%]">Огноо</th>
                        <th className="w-[20%]"></th>
                        <th className="w-[20%]"></th>
                     </tr>
                     <tr>
                        <th>MPO</th>
                        <th></th>
                        <th></th>
                        <th>APTT</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>PAS</th>
                        <th></th>
                        <th></th>
                        <th>PT</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>DAB</th>
                        <th></th>
                        <th></th>
                        <th>INR</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>NS</th>
                        <th></th>
                        <th></th>
                        <th>TT</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Fibrinogen</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]">Биохими</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className="amaraInput w-[370px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>Нийт билирубин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Шууд бус билирубин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Алат</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Асат</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Шүлт Фосфатаза</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>ЛДГ</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Кальци</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Кали</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Креатинин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Төмөр</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Ферритин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Төмөр хол/ чадвар</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Витамин В12</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Фолийн хүчил</th>
                        <th></th>
                        <th></th>
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
                        <th className="w-[50%]">
                           Бактер, вирус, маркерийн шинжилгээ:
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                        <th className="w-[50%]">
                           Дүгнэлт:
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Шээсэнд:
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className="amaraInput w-[370px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>Сахар</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>pH</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Уураг</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Цагаан эс</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Улаан эс</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Хувийн жин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>гемосидерин</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Бенс-жонс уураг</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Гемоглобин</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Цусанд: :
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className="amaraInput w-[370px] mb-1" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>Кумбсын шууд урвал</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>Кумбсын шууд бус урвал</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Бусад(PCR, молекул генетик цитогенетик, урсгал цитометр):
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[50%]" colSpan={4} rowSpan={15}>
                           Иммунологи
                        </th>
                        <th className="w-[50%]" colSpan={4} rowSpan={15}></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[25%]">Огноо</th>
                        <th></th>
                        <th></th>
                        <th className="w-[60%]" colSpan={4} rowSpan={15}>
                           Дүгнэлт:
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full " style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                     <tr>
                        <th>IgG</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>IgM</th>
                        <th></th>
                        <th></th>
                     </tr>
                     <tr>
                        <th>IgA</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-6">Үйл онош:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-[100px]">Цусны бусад эмгэг өөрчлөлтүүд:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-[120px]">Эмнэл зүйн онош:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-[150px]">Зөвлөгөө, эмчилгээ:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="h-8 border-r-0 w-[25%]">
                           <p className="mt-3">Эмчийн нэр:</p>
                        </th>
                        <th className="h-8 border-l-0 mr-4 w-[35%]">
                           <p className="mt-3">Гарын үсэг:</p>
                        </th>
                        <th className="h-8">
                           <p className="mt-2 flex gap-2 justify-center">
                              <p>он</p>
                              <p>сар</p>
                              <p>өдөр</p>
                           </p>
                           <p className="flex gap-4 justify-center">
                              <p>/</p>
                              <p>/</p>
                           </p>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};
export default CT_1_Tsus;
