import { Table } from 'react-bootstrap';

function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document">
               <thead>
                  <tr>
                     <th>C</th>
                     <th colSpan={4} className="bg-gray-300 text-center">
                        Цусны эргэлт болон гэмтлийн шаталбар / оноо
                     </th>
                     <th rowSpan={11}></th>
                     <th colSpan={2} className="bg-gray-300 text-center">
                        Хүндрэл болон чадвар алдалт
                     </th>
                     <th rowSpan={19}></th>
                     <th colSpan={3} className="bg-gray-300 text-center">
                        Глазго-ийн ком/шаталбар /оноо/
                     </th>
                  </tr>
                  <tr>
                     <td rowSpan={10}></td>
                     <td colSpan={4}>Анхан шатны үзлэг</td>
                     <td colSpan={2}>Глазго-ийн кома</td>
                     <td rowSpan={4} style={{ writingMode: 'vertical-lr' }}>
                        Нүд нээх
                     </td>
                     <td>Аяндаа</td>
                     <td className="w-5 text-center">4</td>
                  </tr>
                  <tr>
                     <td colSpan={4}>Судасны лугшилт</td>
                     <td colSpan={2}>шаталбар</td>
                     <td>Ярихад</td>
                     <td className="text-center">3</td>
                  </tr>
                  <tr>
                     <td colSpan={4}>Цусны даралт</td>
                     <td colSpan={2}></td>
                     <td>Өвтгөхөд</td>
                     <td className="text-center">2</td>
                  </tr>
                  <tr>
                     <td colSpan={4}>Амьсгалын хэмжээ</td>
                     <td colSpan={2}>GCS_____/15</td>
                     <td>Зүүгээр хатгахад</td>
                     <td className="text-center">1</td>
                  </tr>
                  <tr>
                     <td>Амьсгалын байдал</td>
                     <td>Хэвийн</td>
                     <td>Өнгөц</td>
                     <td>Тасалданг</td>
                     <td colSpan={2} className="bg-gray-300">
                        Хүүхэн хараа
                     </td>
                     <td rowSpan={5} style={{ writingMode: 'vertical-lr' }}>
                        Хэл яриа
                     </td>
                     <td>Орон зай хугацааны баримжаатай</td>
                     <td className="text-center">5</td>
                  </tr>
                  <tr>
                     <td>Калиллярын дүүрэх хугацаа</td>
                     <td>{'<2ceк'}</td>
                     <td>{'>2ceк'}</td>
                     <td>Байхгүй</td>
                     <td>Баруун</td>
                     <td>Зүүн</td>
                     <td>Ойлгомжтой гэхдээ будилсан</td>
                     <td className="text-center">4</td>
                  </tr>
                  <tr>
                     <td colSpan={4}>Температур</td>
                     <td>Хэмжээ</td>
                     <td>Хэмжээ</td>
                     <td>Тохироогүй үг хэлэх</td>
                     <td className="text-center">3</td>
                  </tr>
                  <tr>
                     <td colSpan={4}>Мөчний хэлбэр алдагдсан</td>
                     <td>Хариу урвал</td>
                     <td>Хариу урвал</td>
                     <td>Ойлгомжгүй авиа гаргах</td>
                     <td className="text-center">2</td>
                  </tr>
                  <tr>
                     <td colSpan={4}>Гадагш цус алдалт</td>
                     <td colSpan={2}></td>
                     <td>Ярихгүй, дуу гаргахгүй</td>
                     <td className="text-center">1</td>
                  </tr>
                  <tr>
                     <td colSpan={8}></td>
                     <td rowSpan={6} style={{ writingMode: 'vertical-lr' }}>
                        Хөдөлгөөн хариу үйлдэл
                     </td>
                     <td>Заавараар хөдөлгөөн хийх</td>
                     <td className="text-center">6</td>
                  </tr>
                  <tr>
                     <td colSpan={8}>
                        <p>ЯТТасагт хийсэн эмчилгээ: Тийм Үгүй</p>
                     </td>
                     <td>Өвтгөхөд цочруулд хэсэг газрын хөдөлгөөн хийх</td>
                     <td className="text-center">5</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td colSpan={4}>2</td>
                     <td>3</td>
                     <td colSpan={2}>4</td>
                     <td>Өвтгөхөд татганах хариу өгөх</td>
                     <td className="text-center">4</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td colSpan={4}>2</td>
                     <td>3</td>
                     <td colSpan={2}>4</td>
                     <td>Өвтгөхөд атийх хариу өгөх</td>
                     <td className="text-center">3</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td colSpan={4}>2</td>
                     <td>3</td>
                     <td colSpan={2}>4</td>
                     <td>Өвтгөхөд тэнийх хариу өгөх</td>
                     <td className="text-center">2</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td colSpan={4}>2</td>
                     <td>3</td>
                     <td colSpan={2}>4</td>
                     <td>Өвтгөхөд ямар ч хариу өгөхгүй</td>
                     <td className="text-center">1</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td colSpan={4}>2</td>
                     <td>3</td>
                     <td colSpan={2}>4</td>
                     <td rowSpan={3} style={{ writingMode: 'vertical-lr' }}>
                        Оноо
                     </td>
                     <td colSpan={2}>13-15 хөнгөн</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td colSpan={4}>2</td>
                     <td>3</td>
                     <td colSpan={2}>4</td>
                     <td colSpan={2}>9-12 дунд</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td colSpan={4}>2</td>
                     <td>3</td>
                     <td colSpan={2}>4</td>
                     <td colSpan={2}>3-8 хүнд</td>
                  </tr>
               </thead>
            </Table>
            <div className="flex flex-wrap">
               <div className="basis-1/3"></div>
               <div className="basis-1/3">
                  <p className="font-bold bg-gray-300 text-center mb-3">
                     ХОЁР ДАХЬ ШАТНЫ ҮЗЛЭГ
                  </p>
                  <Table bordered className="document">
                     <thead>
                        <tr>
                           <th className="bg-gray-300 text-center">
                              Толгой, нүүр болон хүзүү
                           </th>
                        </tr>
                        <tr>
                           <td>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                              <p>Нүд:</p>
                              <p>Чихний хэнгэрэг:</p>
                           </td>
                        </tr>
                     </thead>
                  </Table>
                  <Table bordered className="document">
                     <thead>
                        <tr>
                           <th className="bg-gray-300 text-center">Цээж</th>
                        </tr>
                        <tr>
                           <td>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                           </td>
                        </tr>
                     </thead>
                  </Table>
                  <Table bordered className="document">
                     <thead>
                        <tr>
                           <th className="bg-gray-300 text-center">Хэвлий</th>
                        </tr>
                        <tr>
                           <td>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                              <p>Шээсний зам:</p>
                           </td>
                        </tr>
                     </thead>
                  </Table>
                  <Table bordered className="document">
                     <thead>
                        <tr>
                           <th className="bg-gray-300 text-center">Аарцаг</th>
                        </tr>
                        <tr>
                           <td>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                              <p>:</p>
                              <p>Шээсний зам:</p>
                           </td>
                        </tr>
                     </thead>
                  </Table>
               </div>
               <div className="basis-1/3"></div>
            </div>
         </div>
      </div>
   );
}
export default Page2;
