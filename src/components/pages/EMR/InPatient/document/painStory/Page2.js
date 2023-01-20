import { Checkbox } from 'antd';

function Page2({ anemis, generalInspection }) {
   return (
      <div className="page">
         <div className="flex flex-wrap">
            <div className="w-full amaraDeer amaraZuun amaraBaruun">
               <p className="text-center font-bold">ЭМЧЛҮҮЛЭГЧИЙН АНАМНЕЗ</p>
            </div>
            <div className="w-full amaraDeer amaraZuun amaraBaruun">
               <p className="inline-flex">
                  <p className="ml-2 font-bold">Хэвтэх үеийн зовиур:</p>
                  <p>{anemis.inPatientPain}</p>
               </p>
            </div>
            <div className="w-full amaraDeer amaraZuun amaraBaruun">
               <p className="inline-flex">
                  <p className="ml-2 font-bold">Өвчний түүх:</p>
                  <p>{anemis.painStory}</p>
               </p>
            </div>
            <div className="w-full amaraDeer amaraZuun amaraBaruun">
               <p className="inline-flex">
                  <p className="ml-2 font-bold">Амьдралын түүх:</p>
                  <p>{anemis.painStory}</p>
               </p>
            </div>
            <div className="w-6/12 amaraDeer amaraZuun">
               <p className="ml-2 font-bold">Ахуйн нөхцөл:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[anemis.homeCondition]}
               >
                  <Checkbox className="ml-2" value={'APARTMENT'}>
                     Орон сууцанд
                  </Checkbox>
                  <Checkbox value={'GER'}>Гэрт</Checkbox>
                  <Checkbox value={'HOUSE'}>Бусад</Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-6/12 amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2 font-bold">Ажил хөдөлмөрийн нөхцөл:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[anemis.workCondition]}
               >
                  <Checkbox className="ml-2" value={'NORMAL'}>
                     Ердийн
                  </Checkbox>
                  <Checkbox value={'WOMEN'}>Хүнд</Checkbox>
                  <Checkbox value={'VIPER'}>Хортой</Checkbox>
                  <Checkbox value={'WOMEN'}>Бусад</Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-full amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2 font-bold">
                  Урьд өвчилсөн өвчин эмгэгийн байдал:
               </p>
            </div>
            <div className="w-5/12 amaraDeer amaraZuun">
               <p className="ml-2 font-bold">Халдварт:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[anemis.workCondition]}
               >
                  <Checkbox className="ml-2" value={'MEASLES'}>
                     Улаан бурхан
                  </Checkbox>
                  <Checkbox className="pl-5" value={'VARICELLA'}>
                     Салхмн цэцэг
                  </Checkbox>
                  <Checkbox value={'AVIRUS'}>Вируст хепатит А</Checkbox>
                  <Checkbox value={'BVIRUS'}>Вируст хепатит B</Checkbox>
                  <Checkbox value={'CVIRUS'}>Вируст хепатит C</Checkbox>
                  <Checkbox value={'TUBERCULOSIS'}>Сүрьеэ</Checkbox>
                  <Checkbox value={'WOMEN'}>Гахайн хавдар</Checkbox>
                  <Checkbox className="pl-4" value={'OTHER'}>
                     Бусад
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun">
               <p className="ml-2 font-bold">Мэс ажилбар хийсэн эсэх:</p>
               <p className="ml-2">{anemis.surgery}</p>
            </div>
            <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2 font-bold">
                  Осол гэмтэл, хордлого, шалтгаан:
               </p>
               <p className="ml-2">{anemis.surgery}</p>
            </div>
            <div className="w-6/12 amaraDeer amaraZuun">
               <p className="ml-2 font-bold">Харшлын анамнез:</p>
               <Checkbox
                  className="ml-2"
                  defaultChecked={anemis.allergy.isMedical ? true : false}
               >
                  Эмийн бодис
               </Checkbox>
               <Checkbox defaultChecked={anemis.allergy.isFood ? true : false}>
                  Хоол хүнс
               </Checkbox>
               <Checkbox
                  className="w-full"
                  defaultChecked={anemis.allergy.isOther ? true : false}
               >
                  Бусад
               </Checkbox>
            </div>
            <div className="w-6/12 amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2 font-bold">Удамшлын анамнез:</p>
               <p className="ml-2">Удамшлын өвчнүүд:</p>
               <Checkbox
                  className="ml-2"
                  defaultChecked={anemis.allergy.isMedical ? true : false}
               >
                  Эмийн бодис
               </Checkbox>
               <Checkbox defaultChecked={anemis.allergy.isFood ? true : false}>
                  Хоол хүнс
               </Checkbox>
            </div>
            <div className="w-3/12 amaraDeer amaraZuun">
               <p className="ml-2 font-bold">Хооллолтын байдал:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[anemis.whatFoodie]}
               >
                  <Checkbox className="ml-2" value={'0'}>
                     Ердийн
                  </Checkbox>
                  <Checkbox className="w-full" value={'1'}>
                     Цагаан
                  </Checkbox>
                  <Checkbox value={'2'}>Бусад</Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-3/12 amaraDeer amaraZuun">
               <p className="ml-2 font-bold">Архи хэрэглэдэг эсэх:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[anemis.isAlcohol]}
               >
                  <Checkbox className="ml-2" value={true}>
                     Тийм
                  </Checkbox>
                  <Checkbox className="w-full" value={false}>
                     Үгүй
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-3/12 amaraDeer amaraZuun">
               <p className="ml-2 font-bold">Тамхи татдаг эсэх:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[anemis.cigar.inUse]}
               >
                  <Checkbox className="ml-2" value={true}>
                     Тийм
                  </Checkbox>
                  <Checkbox className="w-full" value={false}>
                     Үгүй
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-3/12 amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2">Хэдэн наснаас эхэлж татсан</p>
               <p className="ml-2 underline">{anemis.cigar.fromWhen}</p>
               <p className="ml-2">Хэдэн жил татаж байгаа</p>
               <p className="ml-2 underline">{anemis.cigar.fromWhen}</p>
            </div>
            <div className="w-full amaraDeer amaraZuun amaraBaruun">
               <p className="text-center font-bold">ЕРӨНХИЙ ҮЗЛЭГ</p>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun">
               <p className="ml-2">Биеийн ерөнхий байдал:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Хөнгөн
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Дунд
                  </Checkbox>
                  <Checkbox className="w-full" value={'2'}>
                     Хүндэвтэр
                  </Checkbox>
                  <Checkbox className="w-full" value={'2'}>
                     Хүнд
                  </Checkbox>
                  <Checkbox value={'2'}>Маш хүнд</Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-3/12 amaraDeer amaraZuun">
               <p className="ml-2">Ухаан санаа:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Саруул
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Бүдгэрсэн
                  </Checkbox>
                  <Checkbox className="w-full" value={'2'}>
                     Ступор
                  </Checkbox>
                  <Checkbox className="w-full" value={'2'}>
                     Солор
                  </Checkbox>
                  <Checkbox className="w-full" value={'2'}>
                     Кома
                  </Checkbox>
                  <Checkbox className="w-full" value={'2'}>
                     Бусад
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-3/12 amaraDeer amaraZuun">
               <p className="ml-2">Орчиндоо:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Харьцаатай
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Харьцаагүй
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Сул
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-2/12 amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2">Байрлал:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Идэвхтэй
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Идэвхгүй
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Албадмал
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Хагас суугаа
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Хэвтрийн
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-full amaraZuun amaraBaruun amaraDeer">
               <p className="ml-2 font-bold">Арьс салстын байдал:</p>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun">
               <p className="ml-2">a. Арьс салстын өнгө</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Хэвийн
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Хэвийн бус
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun">
               <p className="ml-2">б. Арьсны уян чанар</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Хэвийн
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Ихэссэн
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Алдагдсан
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2">в. Арьсны чийлэг байдал</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Хэвийн ихэссэн
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Багассан
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun">
               <p className="ml-2">г. Арьс дээрх тууралт</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Тууралтгүй
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Тууралттай
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun">
               <p className="ml-2">Хаван</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Хавангүй
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Хавантай
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2">а. Ерөнхий</p>
               <p className="ml-2">б. Хэсгийн</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Нүүрэнд
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Зовхинд
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Хэвлийд
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Шилбээр
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun">
               <p className="ml-2">Захын тунгалагийн булчирхай:</p>
               <p className="ml-2">а. Хэмжээ</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Хэвийн
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Харахад томорсон
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Тэмтрэлтээр томорсон
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun">
               <p className="ml-2">б. Байрлал</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Хүзүүний
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Суганы
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Цавины
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Бусад
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-4/12 amaraDeer amaraZuun amaraBaruun">
               <p className="ml-2">в. Эмзэглэл</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Эмзэглэлтэй
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Эмзэглэлгүй
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-6/12 amaraDeer amaraZuun amaraDoor">
               <p className="ml-2">Үе мөчний хэлбэр:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Хэвийн
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Өөрчлөгдсөн
                  </Checkbox>
               </Checkbox.Group>
            </div>
            <div className="w-6/12 amaraDeer amaraBaruun amaraZuun amaraDoor">
               <p className="ml-2">Үений хөдөлгөөн:</p>
               <Checkbox.Group
                  className="ddd ml-0"
                  defaultValue={[generalInspection.audition]}
               >
                  <Checkbox className="ml-2" value={'0dd'}>
                     Идэвхтэй
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Идэвхгүй
                  </Checkbox>
                  <Checkbox className="w-full" value={'NORMAL'}>
                     Хязгаарлагдмал
                  </Checkbox>
               </Checkbox.Group>
            </div>
         </div>
      </div>
   );
}
export default Page2;
