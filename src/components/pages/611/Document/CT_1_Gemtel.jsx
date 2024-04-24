import React from 'react';
import { Table } from 'react-bootstrap';
import { Checkbox, Input } from 'antd';

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
            <div className="subpage flex gap-5">
               <Table bordered className="story mb-0 ">
                  <thead>
                     <tr>
                        <th rowSpan={9}>a</th>
                        <th colSpan={4} className="text-center">
                           Цусны эргэлт болон гэмтлийн шаталбар /оноо
                        </th>
                     </tr>
                     <tr>
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
               <Table bordered className="story mb-0 ">
                  <thead>
                     <tr>
                        <th colSpan={2} className="text-center">
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
                        <th colSpan={2}>Хүүхэн хараа</th>
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
               <Table bordered className="story mb-0 ">
                  <thead>
                     <tr>
                        <th colSpan={3}>Глазго-ийн ком/шаталбар /оноо/</th>
                     </tr>
                     <tr>
                        <th rowSpan={4}> </th>
                        <th>Судасны лугшилт </th>
                        <th>Судасны лугшилт </th>
                     </tr>
                     <tr>
                        <th>Цусны </th>
                        <th>Цусны </th>
                     </tr>
                     <tr>
                        <th>Амьсгалын </th>
                        <th>Амьсгалын </th>
                     </tr>
                     <tr>
                        <th>Амьсгалын </th>
                        <th>Тасалданг</th>
                     </tr>
                     <tr>
                        <th>Калиллярын дүүрэх хугацаа </th>
                        <th>{data}</th>
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
            </div>
         </div>
      </div>
   );
};
export default CT_1_Gemtel;
export const data = ['<2 cек'];
export const data2 = ['>2 cек'];
