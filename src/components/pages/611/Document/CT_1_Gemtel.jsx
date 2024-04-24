import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input, Image } from 'antd';
import BodyPart from '../../../../assets/images/bodypart.png';
import BodyPart2 from '../../../../assets/images/bodypart2.png';
import ChestImg from '../../../../assets/images/chest2.png';
import AbdomenImg from '../../../../assets/images/abdomen.png';

const CT_1_Gemtel = () => {
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center mb-2">ГЭМТЛИЙН ЭМЧИЙН ҮЗЛЭГ</th>
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
                                 <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
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
                           <p className="mb-2">Амьсгалын эрхтэн тогтолцоо</p>
                        </th>
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
                        <th colSpan={4}>
                           <p className="mb-2">Цусны эргэлтийн тогтолцоо</p>
                        </th>
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
                     <tr className="border-t-0  ">
                        <th colSpan={4}>
                           <p className="mb-2">Хоол шингээх эрхтэн тогтолцоо</p>
                        </th>
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
                           <th className="w-full">
                              Бусад
                              <Input className="amaraInput w-[670px] mb-3" style={{ textAlign: 'center' }} />
                           </th>
                           Сэтгэцийн байдал:
                           <Input className="amaraInput w-[600px] mb-1" style={{ textAlign: 'center' }} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <th className="flex justify-center">
                  <p>АНХАН ШАТНЫ ҮЗЛЭГ БОЛОН СЭХЭЭН АМЬДРУУЛАХ</p>
               </th>

               <Table bordered className="story">
                  <thead>
                     <tr className="border-t-0 ">
                        <th className="w-[25px] bg-neutral-300 text-center">А</th>
                        <th className="bg-neutral-300 text-center " colSpan={2}>
                           Амьсгалын зам болон хүзүү нуруу
                        </th>
                     </tr>
                     <tr>
                        <th></th>
                        <th className="h-[200px] border-r-0">
                           <div>
                              <div></div>
                              <div></div>
                           </div>
                           <div> Амьсгалын зам чөлөөтэй</div>
                           <div className="flex gap-10 ">
                              <div>Амьсгалж байгаа байдал</div>
                           </div>
                           <div> Эрүү нүүрний гэмтэл </div>
                           <div> Эмчилгээ:</div>
                           <div className="mt-6"> Хүзүү, нурууны үнэлгээ:</div>
                           <div className="mt-6"> Хүзүү нурууны хөдөлгөөн хорих</div>
                        </th>
                        <th className="w-[45%] border-l-0">
                           <div>
                              <div></div>
                              <div></div>
                           </div>
                           <div>
                              <div> Тийм/үгүй</div>
                              <div> Тийм/үгүй</div>
                              <div> Тийм/үгүй</div>
                              <div className="mt-20"> Тийм/үгүй</div>
                           </div>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th className="w-[25px] bg-neutral-300 text-center">В</th>
                        <th className="bg-neutral-300 text-center" colSpan={6}>
                           Амьсгалын зам болон хүзүү нуруу
                        </th>
                     </tr>
                     <tr>
                        <th rowSpan={4}></th>
                        <th>Амьсгал</th>
                        <th>Тусламжтай</th>
                        <th>Өөрөө</th>
                        <th></th>
                        <th>Амьсгалын аппарат </th>
                        <th>Тийм/үгүй</th>
                     </tr>
                     <tr>
                        <th>Цээж рүү нэвтэрсэн гэмтэл</th>
                        <th colSpan={2}>
                           <Checkbox.Group>
                              <Checkbox>Тийм</Checkbox>
                              <Checkbox>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th></th>
                        <th colSpan={2}>Хэмжээ:</th>
                     </tr>
                     <tr className="h-16">
                        <th colSpan={3}>Үзлэг:</th>
                        <th></th>
                        <th colSpan={4}></th>
                     </tr>
                     <tr className="h-16">
                        <th colSpan={3}>Эмчилгээ:</th>
                        <th></th>
                        <th colSpan={4}></th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
         <div className="page">
            <div className="subpage ">
               <div className="flex gap-5 mn-0">
                  <Table bordered className="story">
                     <thead>
                        <tr>
                           <th className="bg-neutral-300">C</th>
                           <th colSpan={4} className="text-center bg-neutral-300">
                              Цусны эргэлт болон гэмтлийн шаталбар /оноо
                           </th>
                        </tr>
                        <tr>
                           <th rowSpan={8}></th>
                           <th colSpan={4}>Судасны лугшилт </th>
                        </tr>
                        <tr>
                           <th colSpan={4}>Цусны даралт </th>
                        </tr>
                        <tr>
                           <th colSpan={4}>Амьсгалын хэмжээ </th>
                        </tr>
                        <tr>
                           <th>Амьсгалын байдал</th>
                           <th>Хэвийн</th>
                           <th>Өнгөц</th>
                           <th>Тасалданг</th>
                        </tr>
                        <tr>
                           <th>Калиллярын дүүрэх хугацаа </th>
                           <th>{data}</th>
                           <th>{data2}</th>
                           <th>байхгүй</th>
                        </tr>
                        <tr>
                           <th colSpan={4}>Температур</th>
                        </tr>
                        <tr>
                           <th colSpan={4}>Мөчний хэлбэр алдагдсан </th>
                        </tr>
                        <tr>
                           <th colSpan={4}>Гадагш цус алдалт</th>
                        </tr>
                     </thead>
                  </Table>
                  <Table bordered className="story ">
                     <thead>
                        <tr>
                           <th colSpan={2} className="text-center bg-neutral-300">
                              Хүндрэл болон чадвар алдалт
                           </th>
                        </tr>
                        <tr>
                           <th colSpan={2}>Глазго-ийн кома </th>
                        </tr>
                        <tr>
                           <th colSpan={2}> шаталбар</th>
                        </tr>
                        <tr>
                           <th colSpan={2} className="h-6">
                              {' '}
                           </th>
                        </tr>
                        <tr>
                           <th colSpan={2}> GCS _____ /15</th>
                        </tr>
                        <tr>
                           <th colSpan={2} className=" bg-neutral-300">
                              Хүүхэн хараа
                           </th>
                        </tr>
                        <tr>
                           <th>Баруун</th>
                           <th>Зүүн</th>
                        </tr>
                        <tr>
                           <th>Хэмжээ</th>
                           <th>Хэмжээ</th>
                        </tr>
                        <tr>
                           <th>Хариу урвал</th>
                           <th>Хариу урвал</th>
                        </tr>
                        <tr className="h-8" colSpan={2}>
                           <th colSpan={2}></th>
                        </tr>
                     </thead>
                  </Table>
                  <div className="text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif  ">
                     <div className="border-1 border-slate-950 text-center bg-neutral-300">
                        Глазго-ийн ком/шаталбар /оноо/
                     </div>
                     <div className="flex text-[11px] font-family:Arial, Helvetica, sans-serif font-[500] h-[72.32px] ">
                        <div className="border-1  border-t-0 border-slate-950 relative flex items-center justify-center w-[30px] text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif ">
                           <div className="-rotate-90 whitespace-nowrap h-fit ">Нүд нээх</div>
                        </div>
                        <div className="border-1 border-slate-950 border-t-0 border-l-0 text-[11px] font-semibold  font-family: Ari`al,Helvetica, san-serif w-[130px]">
                           <div>Аяндаа</div>
                           <div className="border-t-[1px] border-slate-950">Ярихад </div>
                           <div className="border-t-[1px] border-slate-950">Өвтгөхөд </div>
                           <div className="border-t-[1px] border-slate-950">Зүүгээр хатгахад </div>
                        </div>
                        <div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18px] border-t-0">4</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18px] border-t-0">3</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18px] border-t-0">2</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18px] border-t-0">1</div>
                        </div>
                     </div>
                     <div className="flex text-[11px] font-family:Arial, Helvetica, sans-serif font-[500] h-[145px] ">
                        <div className="border-1  border-t-0 border-slate-950 relative flex items-center justify-center w-[30px] text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif ">
                           <div className="-rotate-90 whitespace-nowrap h-fit ">Хэл яриа</div>
                        </div>
                        <div className="border-1 border-slate-950 border-t-0 border-l-0 text-[11px] font-semibold  font-family: Ari`al,Helvetica, san-serif w-[130px]">
                           <div>Орон зай хугацааны баримжаатай</div>
                           <div className="border-t-[1px] border-slate-950">Ойлгомжтой гэхдээ будилсан </div>
                           <div className="border-t-[1px] border-slate-950">Тохироогүй үг хэлэх</div>
                           <div className="border-t-[1px] border-slate-950">Ойлгомжгүй авиа гаргах </div>
                           <div className="border-t-[1px] border-slate-950">Ярихгүй, дуу гаргахгүй </div>
                        </div>
                        <div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[34.85px] border-t-0">5</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.55px] border-t-0">4</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[18.18px] border-t-0">3</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.45px] border-t-0">2</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[20.20px] border-t-0">1</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex gap-5">
                  <Table bordered className="story mb-0">
                     <thead>
                        <tr>
                           <th colSpan={4}>
                              <div className="flex items-center gap-4 ml-4">
                                 <p> ЯТТасагт хийсэн эмчилгээ:</p>
                                 <Checkbox.Group>
                                    <Checkbox>Тийм</Checkbox>
                                    <Checkbox> Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </div>
                           </th>
                        </tr>
                        <tr>
                           <th className="h-6 w-[50px]"></th>
                           <th className="h-6"></th>
                           <th className="h-6 w-[30px]"></th>
                           <th className="h-6"></th>
                        </tr>
                        <tr>
                           <th className="h-6"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-6"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-6"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-4"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-4"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                        <tr>
                           <th className="h-4"></th>
                           <th></th>
                           <th></th>
                           <th></th>
                        </tr>
                     </thead>
                  </Table>
                  <div className="text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif  ">
                     <div className="flex text-[11px] font-family:Arial, Helvetica, sans-serif font-[500] h-[230px] ">
                        <div className="border-1  border-t-0 border-slate-950 relative flex items-center justify-center w-[30px] text-[11px] font-semibold  font-family: Arial,Helvetica, san-serif ">
                           <div className="-rotate-90 whitespace-nowrap h-fit ">Хөдөлгөөний хариу үйлдэл</div>
                        </div>
                        <div className="border-1 border-slate-950 border-t-0 border-l-0 text-[11px] font-semibold  font-family: Ari`al,Helvetica, san-serif w-[130px]">
                           <div>Заавараар хөдөлгөөн хийх</div>
                           <div className="border-t-[1px] border-slate-950">
                              Өвтгөхөд цочруулд хэсэг газрын хөдөлгөөн хийх
                           </div>
                           <div className="border-t-[1px] border-slate-950">Өвтгөхөд татганах хариу өгөх</div>
                           <div className="border-t-[1px] border-slate-950">Өвтгөхөд атийх хариу өгөх</div>
                           <div className="border-t-[1px] border-slate-950">Өтгөхөд тэнийх хариу өгөх</div>
                           <div className="border-t-[1px] border-slate-950">Өвтгөхөд ямар ч хариу өгөхгүй</div>
                        </div>
                        <div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35px] border-t-0">6</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[52.63px] border-t-0">5</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.35px] border-t-0">4</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.75px] border-t-0">3</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.50px] border-t-0">2</div>
                           <div className="border-1 border-slate-950 border-l-0 w-[20px] h-[35.85px] border-t-0">1</div>
                        </div>
                     </div>
                     <div className="flex">
                        <div className="border-1 border-slate-950 relative flex items-center justify-center w-[30px] border-t-0">
                           <div className="-rotate-90 whitespace-nowrap h-fit">Оноо</div>
                        </div>
                        <div className="border-1 border-slate-950 border-l-0 w-full border-t-0">
                           <div>13-15 хөнгөн</div>
                           <div className="border-t-[1px] border-slate-950">9-12 дунд </div>
                           <div className="border-t-[1px] border-slate-950">3-8 хүнд</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex justify-center mt-4">
                  <div>
                     <Image src={BodyPart} alt="" width={120} height={500} />
                  </div>
                  <div className="flex flex-col gap-5">
                     <div>
                        <div className="w-[300px] bg-neutral-300">
                           <div className="text-center ">ХОЁР ДАХЬ ШАТНЫ ҮЗЛЭГ</div>
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center font-[500] ">Толгой, нүүр болон хүзүү</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[80px] justify-end">
                           <div className="text-center text-[13px] font-[500] ml-2">Нүд:</div>
                           <div className="text-center text-[13px] font-[500] ml-2">Чихний хэнгэрэг:</div>
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center font-[500] ">Цээж:</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[80px] justify-end">
                           <Image src={ChestImg} alt="" width={120} />
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center  font-[500]">Хэвлий:</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[110px] justify-end">
                           <Image src={AbdomenImg} alt="" width={120} />
                           <div className="text-center text-[13px] font-[500] ml-2 ">Шээсний зам:</div>
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center font-[500]">Аарцаг</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[25px] ">
                           <div className="text-center"></div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <Image src={BodyPart2} alt="" width={120} height={500} />
                  </div>
               </div>
            </div>
         </div>
         <div className="page">
            <div className="subpage">
               <div className="flex justify-center mt-4">
                  <div className="flex flex-col gap-5">
                     <div>
                        <div className="w-[300px] flex flex-col items-start border-1  border-slate-950 h-[120px] justify-end">
                           <div className=" text-[13px] font-[500] ml-2">Хярзан</div>
                           <div className=" text-[13px] font-[500] ml-2">Шээсний сүв</div>
                           <div className=" text-[13px] font-[500] ml-2">Шулуун гэдэсний үзлэг</div>
                           <div className=" text-[13px] font-[500] ml-2">Бүдүүн гэдэсний реплекс </div>
                           <div className=" text-[13px] font-[500] ml-2">Үтрээний үзлэг</div>
                        </div>
                     </div>
                     <div>
                        <div className="w-[300px] bg-neutral-300  border-1 border-slate-950">
                           <div className="text-center font-[500]">Нугас, нуруу</div>
                        </div>
                        <div className="w-[300px] flex flex-col items-start border-1 border-t-0 border-slate-950 h-[50px] ">
                           <div className="text-center"></div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex gap-[40px]">
                  <div className="mt-20">
                     <Table bordered className="story w-[170px]">
                        <thead>
                           <tr>
                              <th className="bg-neutral-300 h-[30px]">
                                 <p className="mt-2">Мэдрэлийн рефлекс</p>
                              </th>
                              <th className="bg-neutral-300 w-[30px] text-center">
                                 <p className="mt-2">R</p>
                              </th>
                           </tr>
                           <tr>
                              <th>Biceps </th>
                              <th></th>
                           </tr>
                           <tr>
                              <th>Triceps</th>
                              <th></th>
                           </tr>
                           <tr>
                              <th>Supinator</th>
                              <th></th>
                           </tr>
                           <tr>
                              <th>Knee</th>
                              <th></th>
                           </tr>
                           <tr>
                              <th>Ankle</th>
                              <th></th>
                           </tr>
                           <tr>
                              <th>Plantar</th>
                              <th></th>
                           </tr>
                        </thead>
                     </Table>
                  </div>
                  <div>
                     <Table bordered className="story mb-0 w-[300px] mt-4 ">
                        <thead>
                           <tr className="text-center">
                              <th>Баруун</th>
                              <th className="bg-neutral-300">Дээд мөч</th>
                              <th>Зүүн</th>
                           </tr>
                        </thead>
                     </Table>
                     <Table bordered className="story w-[300px]">
                        <thead>
                           <tr className="border-t-0">
                              <th>
                                 <p>Ясны гэмтэл</p>
                                 <p>Үений гэмтэл</p>
                                 <p>Судасны лугшилт</p>
                                 <p>Хүч</p>
                                 <p>Тонус</p>
                              </th>
                              <th>
                                 <p>Ясны гэмтэл</p>
                                 <p>Үений гэмтэл</p>
                                 <p>Судасны лугшилт</p>
                                 <p>Хүч</p>
                                 <p>Тонус</p>
                              </th>
                           </tr>
                        </thead>
                     </Table>
                     <Table bordered className="story mb-0 w-[300px]">
                        <thead>
                           <tr className="text-center">
                              <th>Баруун</th>
                              <th className="bg-neutral-300">Доод мөч</th>
                              <th>Зүүн</th>
                           </tr>
                        </thead>
                     </Table>
                     <Table bordered className="story w-[300px]">
                        <thead>
                           <tr className="border-t-0">
                              <th>
                                 <p>Ясны гэмтэл</p>
                              </th>
                              <th>
                                 <p>Ясны гэмтэл</p>
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <p>Үений гэмтэл</p>
                              </th>
                              <th>
                                 <p>Үений гэмтэл</p>
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <p>Судасны лугшилт</p>
                              </th>
                              <th>
                                 <p>Судасны лугшилт</p>
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <p>Хүч</p>
                              </th>
                              <th>
                                 <p>Хүч</p>
                              </th>
                           </tr>
                           <tr>
                              <th>
                                 <p>Тонус</p>
                              </th>
                              <th>
                                 <p>Тонус</p>
                              </th>
                           </tr>
                        </thead>
                     </Table>
                  </div>

                  <div className="mt-20">
                     <Table bordered className="story w-[170px]">
                        <thead>
                           <tr>
                              <th className="bg-neutral-300 w-[30px] text-center">
                                 <p className="mt-2">L</p>
                              </th>
                              <th className="bg-neutral-300 h-[30px]">
                                 <p className="mt-2">Мэдрэлийн рефлекс</p>
                              </th>
                           </tr>
                           <tr>
                              <th></th>
                              <th>Biceps </th>
                           </tr>
                           <tr>
                              <th></th>
                              <th>Triceps</th>
                           </tr>
                           <tr>
                              <th></th>
                              <th>Supinator</th>
                           </tr>
                           <tr>
                              <th></th>
                              <th>Knee</th>
                           </tr>
                           <tr>
                              <th></th>
                              <th>Ankle</th>
                           </tr>
                           <tr>
                              <th></th>
                              <th>Plantar</th>
                           </tr>
                        </thead>
                     </Table>
                  </div>
               </div>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr >
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
                        <th colSpan={3} className="h-24">
                           <p> Хүндрэл</p>
                        </th>
                     </tr>
                     <tr>
                        <th className="h-60 w-[200px] text-center">Ялган оношлох эмгэгүүд ба хам шинжүүд</th>
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
export default CT_1_Gemtel;
export const data = ['<2 cек'];
export const data2 = ['>2 cек'];
