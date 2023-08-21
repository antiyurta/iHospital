import React from 'react';
import { Card, Typography } from 'antd';
import { Container } from 'react-bootstrap';
const { Title } = Typography;
function Index() {
   return (
      <Container>
         <div className="flex flex-wrap">
            <div className="w-full py-[144px]">
               <Card
                  className="header-solid max-h-max rounded-md"
                  title={<Title level={2}>Үйлчилгээний нөхцөл</Title>}
                  bordered={false}
               >
                  <p
                     className="pb-6"
                     style={{
                        color: 'rgb(45, 140, 255)',
                        fontSize: 16,
                        fontWeight: 600,
                        whiteSpace: 'normal',
                        textAlign: 'justify'
                     }}
                  >
                     Энэхүү үйлчилгээний нөхцөл нь iHospital платформыг хэрэглэх, мэдээлэл авах, үйлчлүүлэх, худалдан
                     авалт болон захиалга хийхтэй холбоотой үүсэх харилцааг зохицуулахад оршино.
                  </p>
                  <ol>
                     <li>
                        <Title
                           level={5}
                           style={{
                              color: '#4a7fc1'
                           }}
                        >
                           ЕРӨНХИЙ ЗҮЙЛ
                        </Title>
                        <ol>
                           <li>
                              Үйлчлүүлэгч нь үйлчилгээний нөхцөлийг хүлээн зөвшөөрч баталгаажуулсны дараа үйлчилгээ авах
                              эрх нээгдэнэ.
                           </li>
                           <li>iHospial платформын эзэмшигч нь Гүрэнсофт ХХК болно</li>
                           <li>
                              Үйлчлүүлэгч гэдэг нь үйлчилгээний нөхцөлийг хүлээн зөвшөөрч iHospital платформд бүртгэлтэй
                              иргэнийг хэлнэ.
                           </li>
                           <li>
                              Үйлчлүүлэгч нь iHospital платформ дахь мэдээлэл, захиалга, үйлчилгээ худалдан авах эрхтэй.
                           </li>
                        </ol>
                     </li>
                     <li>
                        <Title
                           level={5}
                           style={{
                              color: '#4a7fc1'
                           }}
                        >
                           НУУЦЛАЛЫН БОДЛОГО
                        </Title>
                        <ol>
                           <li>
                              Энэхүү нууцлалын бодлого нь холбогдох хууль, тогтоомжийн хүрээнд таны мэдээллийг
                              цуглуулах, ашиглахтай холбоотой үйл ажиллагааг зохицуулна.
                           </li>
                           <li>
                              Таны хувийн мэдээллийн нууцлалыг хадгалахын тулд шаардлагатай бүх арга хэмжээг авна. Гэвч
                              цахим ертөнцөд хэрэглэгчийн хувийн аюулгүй байдлыг хангах хангалттай хяналт байхгүй учир
                              хэрэглэгч өөрийн хувийн мэдээллийг бусдад дамжуулахгүй байх нь чухал. Хэрэглэгч өөрийн
                              хувийн мэдээллийг хамгаалахын тулд нийтийн эсвэл бусдын компьютер, гар утас зэрэг
                              төхөөрөмжид өөрийн нэр, нууц үгээр холбогдохгүй байх, нууц үгээ хэн нэгэнд хэлж өгөхгүй
                              байх, нууц үгээ тогтмол өөрчилж байх зэргээр хамгаална.
                           </li>
                           <li>
                              Мэдээлэл цуглуулах
                              <br />
                              iHospial платформд холбогдон бүртгүүлсэн хэрэглэгчээс дараах хувийн мэдээллүүдийг авна.
                              (зөвхөн эдгээр мэдээллүүдээр хязгаарлагдахгүй байж болно).
                              <ul className="list-disc list-inside">
                                 <li>Дан системтэй холбогдох</li>
                                 <li>И-мэйл хаяг</li>
                                 <li>Утас</li>
                                 <li>Нэмэлт мэдээлэл</li>
                              </ul>
                              Бид хэрэглэгчийн мэдээллийг дараах зорилгоор ашиглана.
                              <ul className="list-disc list-inside">
                                 <li>Эмнэлэг, эмч нартай холбогдоход</li>
                                 <li>Бүртгэл баталгаажуулах</li>
                                 <li>Утас</li>
                                 <li>Нууц үг сэргээх</li>
                                 <li>Хэрэглэгчид урамшуулал үзүүлэх</li>
                                 <li>Хэрэглэгчийн санал хүсэлтэд хариу өгөх</li>
                                 <li>Үзүүлж буй бүтээгдэхүүн үйлчилгээгээ цаашид тасралтгүй сайжруулах</li>
                                 <li>Бүтээгдэхүүн үйлчилгээг хэвийн үзүүлэх</li>
                                 <li>Бүтээгдэхүүн үйлчилгээний өөрчлөлтийн талаарх мэдээллийг цаг тухайд нь хүргэх</li>
                                 <li>
                                    Хэрэглэгчийн үйлчилгээг сайжруулах, хэрэглэгчийг халамжлах болон сэтгэл ханамжийг
                                    нэмэгдүүлэх.
                                 </li>
                              </ul>
                           </li>
                        </ol>
                     </li>
                     <li>
                        <Title
                           level={5}
                           style={{
                              color: '#4a7fc1'
                           }}
                        >
                           ХЭРЭГЛЭГЧИЙН ЭРХ
                        </Title>
                        <ol>
                           <li>
                              Үйлчлүүлэгч өөрийн хувийн мэдээллийг e-mongolia.mn хэрхэн ашиглаж байгаа талаар мэдээлэл
                              гаргуулж авах эрхтэй.
                           </li>
                           <li>Үйлчлүүлэгч iHospital платформыг ашиглахаас татгалзах, нэвтрэх эрхээ хаалгах эрхтэй</li>
                           <li>
                              Үйлчлүүлэгч iHospital платформ гаргасан үйлчилгээний хүсэлтийн хэрэгжилт, үр дүнгийн
                              талаар мэдээлэл авах эрхтэй.
                           </li>
                           <li>
                              Үйлчилгээний нууцлал, аюулгүй байдал, найдвартай ажиллагааны талаар санал, гомдлыг гишүүн
                              байгууллагад хандан гаргах эрхтэй.
                           </li>
                        </ol>
                     </li>
                     <li>
                        <Title
                           level={5}
                           style={{
                              color: '#4a7fc1'
                           }}
                        >
                           iHospital ПЛАТФОРМЫН ЭРХ, ҮҮРЭГ
                        </Title>
                        <ol>
                           <li>
                              Үйлчлүүлэгч энэхүү нөхцөлөөр тогтоосон үүргийг биелүүлээгүй тохиолдолд IHospital платформд
                              нэвтрэх эрхийг цуцлах, түр хугацаагаар хаах эрхтэй. Шаардлагатай тохиолдолд хуулийн
                              байгууллагад мэдээлнэ.
                           </li>
                           <li>
                              iHospital платформын хөгжүүлэлт, найдвартай ажиллагаа, үйлчилгээнд ашиглагдсан
                              үйлчлүүлэгчийн хувийн мэдээллийн найдвартай байдлыг хангах үүрэгтэй.
                           </li>
                           <li>
                              Гишүүн байгууллагатай хамтран төрийн үйлчилгээний талаар үнэн зөв, цэгцтэй мэдээллийг
                              үйлчлүүлэгчид өгөх үүрэгтэй.
                           </li>
                           <li>
                              iHospital платформтой хамтран ажиллаж байгаа эмнэлгийн байгууллага, эмч хэрэглэгчид
                              үзүүлсэн эрүүл мэндийн тусламж үйлчилгээнээс шалтгаалан хэрэглэгчийн эрүүл мэнд, амь, нас,
                              сэтгэл санаанд учирсан хохирлыг хариуцахгүй.
                           </li>
                        </ol>
                     </li>
                     <li>
                        <Title
                           level={5}
                           style={{
                              color: '#4a7fc1'
                           }}
                        >
                           Бусад
                        </Title>
                        <ol>
                           <li>
                              Үйлчлүүлэгч нь iHospital платформыг ашиглахтай холбоотой гарын авлагыг IHospital
                              платформоос авах боломжтой байна.
                           </li>
                           <li>
                              Үйлчилгээний тасалдал нь байгалийн давагдашгүй хүчин зүйл (гал, үер, газар хөдлөлт, аянга
                              болон тэсрэлт) эсвэл төрийн эрх бүхий байгууллагаас гаргасан хуулийн зохицуулалт, журам,
                              хэрэгжүүлсэн үйл ажиллагаа, ажил хаялт, дайн, террорист халдлага, гоц халдварт өвчин
                              зэрэгтэй холбоотой бол Үйлчилгээг тасалдсанд тооцохгүй бөгөөд iHospital платформ нь
                              хариуцлага хүлээх үндэслэл болохгүй.
                           </li>
                           <li>
                              Үйлчлүүлэгч нь Үйлчилгээний нөхцөлөөр хүлээсэн үүргээ зөрчсөн, Үйлчилгээг хууль бусаар
                              ашигласан, Үйлчилгээ үзүүлэгчийн үйл ажиллагаанд болон бусад үйлчлүүлэгчид хохирол
                              учруулсан нь батлагдвал Монгол Улсын хууль тогтоомжид заасны дагуу хариуцлага хүлээнэ.
                           </li>
                           <li>
                              Эрх бүхий төрийн байгууллага үйлчлүүлэгчийн мэдээлэлтэй хуулийн дагуу танилцах эрхтэй
                              байна.
                           </li>
                           <li>
                              Үйлчилгээтэй холбоотой санал, гомдол, асуудал, маргааныг Талууд эв зүйгээр харилцан
                              зөвшилцөх замаар шийдвэрлэнэ. Хэрэв шийдвэрлэх боломжгүй бол Монгол Улсын хууль тогтоомжид
                              заасны дагуу шийдвэрлүүлнэ.
                           </li>
                        </ol>
                     </li>
                  </ol>
               </Card>
            </div>
         </div>
      </Container>
   );
}
export default Index;
