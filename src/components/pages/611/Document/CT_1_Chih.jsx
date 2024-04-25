import React from 'react';
import { Checkbox, Image, Input } from 'antd';
import { Table } from 'react-bootstrap';
import NoseImg from '../../../../assets/images/nose.png';
import NoseInsideImg from '../../../../assets/images/noseInside.png';
import EarImg from '../../../../assets/images/ear.png';
import EarInsideImg from '../../../../assets/images/earInside.png';
import TambourineImg from '../../../../assets/images/tambourine.png';
import MouthImg from '../../../../assets/images/mouth.png';
import TuvunhImg from '../../../../assets/images/aaa.png';

const CT_1_Chih = (props) => {
   const {
      data: { formData }
   } = props;
   console.log('Form', formData);
   return (
      <div className="print-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</th>
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
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="ml-2">Дунд</Checkbox>
                              <Checkbox>Хүндэвтэр</Checkbox>
                              <Checkbox>Хүнд</Checkbox>
                              <Checkbox>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="ml-2">Саруул</Checkbox>
                              <Checkbox>Бүдгэрсэн</Checkbox>
                              <Checkbox>Ухаангүй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={4}>
                           <Checkbox.Group value={formData.q1}>
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
                           <Checkbox.Group value={formData.q1}>
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
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Томорсон (зүүн, баруун)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Чагналтаар::</th>
                           Зүрхний авиа
                           <Checkbox.Group value={formData.q1}>
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
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="ml-2">Ердийн</Checkbox>
                              <Checkbox>Хуурай</Checkbox>
                              <Checkbox>Өнгөргүй</Checkbox>
                              <Checkbox>Өнгөртэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th colSpan={3}>
                           <p> Хэвлийн үзлэг:</p>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox>Өнгөц тэмтрэлтээр</Checkbox>
                              <Checkbox>Гүн тэмтрэлтээр</Checkbox>
                              <Checkbox className="">
                                 Эмзэглэлтэй (байрлал
                                 <Input className="amaraInput w-8" style={{ textAlign: 'center' }} />)
                              </Checkbox>
                           </Checkbox.Group>
                           <Checkbox.Group value={formData.q1}>
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
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox>Хэвийн</Checkbox>
                              <Checkbox>Буурсан (баруун, зүүн)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <p>Рефлексүүд</p>
                           <Checkbox.Group value={formData.q1}>
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
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th className="flex justify-center">ЧИХ ХАМАР ХООЛОЙН ҮЗЛЭГ</th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хамрын амьсгал:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Чөлөөтэй</Checkbox>
                              <Checkbox>Саадтай /баруун, зүүн, 2 талд адил/</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Гадна хамрын хэлбэр:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Зөв</Checkbox>
                              <Checkbox>Зөв бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Эмзэглэлгүй</Checkbox>
                              <Checkbox>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хамрын үүдэвч</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Ерөнхий хөндий:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Чөлөөтэй</Checkbox>
                              <Checkbox>Саадтай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Хамрын таславч:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Муруйлтгүй</Checkbox>
                              <Checkbox>Муруйсан</Checkbox>
                              <Checkbox>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={NoseImg} alt="" width={200} height={80} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хамрын салст бүрхүүл:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Ягаан</Checkbox>
                              <Checkbox className="w-full">Улаан ягаан</Checkbox>
                              <Checkbox className="w-full">Хөхөлбий </Checkbox>
                              <Checkbox className="w-full">Цайвар </Checkbox>
                              <Checkbox>Бусад </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Самалдгууд:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хөөнгө</Checkbox>
                              <Checkbox>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                           <th>Самалдгууд:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Ялгадасгүй</Checkbox>
                              <Checkbox>Ялгадастай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Ялгадас:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                           </Checkbox.Group>
                           <th>Эмгэг шинжтэй:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Идээрхэг</Checkbox>
                              <Checkbox>Ногоон</Checkbox>
                              <Checkbox>Үнэртэй</Checkbox>
                              <Checkbox>Өтгөн</Checkbox>
                              <Checkbox>Бусад өөрчлөлттэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Image src={NoseInsideImg} alt="" width="60%" height={70} className="ml-28" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Бүсийн лимфийн булчирхайн байдал:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>Баруун, зүүн чих:</th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Гадна чихний хэлбэр:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Эмзэглэлгүй</Checkbox>
                              <Checkbox>Эмзэглэлтэй</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Хөхлөг сэртэн:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хавантай</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Тэмтрэхэд:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Эмзэглэлгүй</Checkbox>
                              <Checkbox>Эмзэглэлтэй</Checkbox>
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
                        <th>
                           <Image src={EarImg} alt="" width="50%" height={70} className="ml-36" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Чихний гадна суваг:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Нарийссан (төрөлхийн, олдмол)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Чөлөөтэй</Checkbox>
                              <Checkbox>Саадтай</Checkbox>
                              <Checkbox>Ялгадасгүй</Checkbox>
                              <Checkbox>Ялгадастай: (идээрхэг, үнэртэй, ногоон)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Сувгийн хана: </th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox>Цүлхийсэн (аль хана)</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={EarInsideImg} alt="" width="130px" height={70} />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хэнгэргэн хальс:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус</Checkbox>
                              <Checkbox className="w-full ">Бусад </Checkbox>
                              <Checkbox className="w-full ">Сувдан саарал</Checkbox>
                              <Checkbox>Улаан</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Цооролтын байрлал</Checkbox>
                              <Checkbox>Цооролтын хэмжээ</Checkbox>
                              <p>Хэнгэргэн хөндийн салст:</p>
                              <Checkbox className="ml-2">Цайвар ягаан</Checkbox>
                              <Checkbox>Улаан </Checkbox>
                              <Checkbox>Эмгэг өөрчлөлт</Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <Image src={TambourineImg} alt="" width={330} height={100} className="mt-4" />
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>
                              Бүсийн лимфийн булчирхайн байдал:
                              <Input className="amaraInput w-[450px] mb-1" style={{ textAlign: 'center' }} />
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Хөглүүрийн сорил:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Ринне</Checkbox>
                              <Checkbox className="w-full ">Вебер </Checkbox>
                              <Checkbox className="w-full ">Желле </Checkbox>
                              <Checkbox className="w-full ">Вальсалва </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           Сонсголын бичлэг:
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                           Зэрэг:
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                           <Input className="amaraInput w-full mb-1" style={{ textAlign: 'center' }} />
                        </th>
                        <th>
                           <th>Ам ангайлт:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Чөлөөтэй</Checkbox>
                              <Checkbox className="w-full ">Хязгаарлагдсан </Checkbox>
                              <p>Хүүхэн хэл:</p>
                              <Checkbox className="ml-2 ">Хэвийн </Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Зөөлөн тагнай:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>

                              <p>Тагнайн гүйлс:</p>
                              <Checkbox className="ml-2">Хэвийн </Checkbox>
                              <Checkbox>Томорсон </Checkbox>
                              <Checkbox>1-р зэрэг </Checkbox>
                              <Checkbox>2-р зэрэг </Checkbox>
                              <Checkbox>3-р зэрэг </Checkbox>
                              <Checkbox>Бусад өөрчлөлт </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <Image src={MouthImg} alt="" width={160} height={100} className="mt-2" />
                        </th>
                        <th className="w-[200px]">
                           <th>Архаг үрэвслийн шинж:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Зак</Checkbox>
                              <Checkbox className="w-full ">Гисс </Checkbox>
                              <Checkbox className="ml-2 ">Преображенский </Checkbox>
                              <Checkbox className="w-full ">Бусад </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Лакуны байдал:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full ">Өргөссөн </Checkbox>
                              <p>Залгиурын ар хана:</p>
                              <Checkbox className="ml-2 ">Хэвийн </Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Залгиурын хажуу хана:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="ml-2 ">Хэвийн </Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                              <p className="w-full">Шувтан хонхрын байдал:</p>
                              <Checkbox className="ml-2 ">Хэвийн </Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th>
                           <th>Төвөнхийн гадна үзлэг:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                              <p>Залгиурын ар хана:</p>
                              <Checkbox className="ml-2 ">Хэвийн </Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[200px]">
                           <th>Нуржигнах:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Чимээтэй</Checkbox>
                              <Checkbox className="w-full ">Чимээгүй </Checkbox>
                              <p>Төвөнхийн шууд бус тольдолтоор: Амьсгалын үйл ажиллагаа:</p>
                              <Checkbox className="ml-2 ">Чөлөөтэй </Checkbox>
                              <Checkbox className="w-full ">Саалтай </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th>
                           <th>Халхавч мөгөөрс:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="w-full ml-2">Хэвийн</Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                              <p>Төвөнхийн салст:</p>
                              <Checkbox className="ml-2 ">Цайвар ягаан </Checkbox>
                              <Checkbox className="w-full ">Улаан </Checkbox>
                              <Checkbox className="w-full ">Цайвар </Checkbox>
                           </Checkbox.Group>
                        </th>
                        <th className="w-[200px]">
                           <th>Утгуур мөгөөрс:</th>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="ml-2 ">Хэвийн </Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                              <p className="w-full">Дууны туслах хөвчүүд:</p>
                              <Checkbox className="ml-2 ">Хэвийн </Checkbox>
                              <Checkbox className="w-full ">Хэвийн бус </Checkbox>
                              <p className="w-full">Жинхэнэ хөвч: </p>
                              <Checkbox className="ml-2 ">Хэвийн </Checkbox>
                              <Checkbox>Хэвийн бус </Checkbox>
                           </Checkbox.Group>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="border-t-0">
                        <th className="w-[170px]">
                           <Image src={TuvunhImg} alt="" width={160} height={100} />
                        </th>
                        <th className="w-[270px]">
                           <th>
                              Дууны өнгө:
                              <Checkbox.Group value={formData.q1}>
                                 <Checkbox className="ml-2">Хэвийн</Checkbox>
                                 <Checkbox>Хэвийн бус </Checkbox>
                              </Checkbox.Group>
                           </th>
                           <p>Фонаци хийх үед: (Дууны хөвчүүд бүрэн гадаргуугаар шүргэлцэнэ)</p>
                           <p>Дууны хөвчүүдийн үйл ажиллаггааны хямрал:</p>
                        </th>
                        <th>
                           <th>
                              Дууны хөвчийн доод зайн байдал:
                              <Input className="amaraInput w-10 " style={{ textAlign: 'center' }} />
                           </th>

                           <p>ЦМХоолой цагираг:</p>
                           <Checkbox.Group value={formData.q1}>
                              <Checkbox className="ml-2">Хэвийн</Checkbox>
                              <Checkbox>Хэвийн бус </Checkbox>
                              <Checkbox>Өнгө </Checkbox>
                           </Checkbox.Group>
                           <p>Бүсийн лимфийн булчирхайн байдал:</p>
                           <p>
                              Бусад
                              <Input className="amaraInput w-40 mb-1" style={{ textAlign: 'center' }} />
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
export default CT_1_Chih;
