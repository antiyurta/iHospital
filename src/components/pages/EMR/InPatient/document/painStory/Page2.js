import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
const { TextArea } = Input;
function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th colSpan={4} className="text-center">
                        ЭМЧЛҮҮЛЭГЧИЙН АНАМНЕЗ
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        <p>Хэвтэх үеийн зовиур:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'inPatientPain']}
                        >
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        <p>Өвчний түүх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'painStory']}
                        >
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        <p>Амьдралын түүх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'lifeStory']}
                        >
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <p>Ахуйн нөхцөл:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'locate']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'APARTMENT'}>
                                 Орон сууцанд
                              </Checkbox>
                              <Checkbox value={'GER'}>Гэрт</Checkbox>
                              <Checkbox value={'OTHER'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th colSpan={2}>
                        <p>Ажил хөдөлмөрийн нөхцөл:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'HARD'}>Хүнд</Checkbox>
                              <Checkbox value={'VIPER'}>Хортой</Checkbox>
                              <Checkbox value={'OTHER'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>Урьд өвчилсөн өвчин, эмгэгийн байдал:</th>
                  </tr>
                  <tr>
                     <th colSpan={2} className="w-1/2">
                        <p>Халдварт:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'contagious']}
                        >
                           <Checkbox.Group className="ddd">
                              <Checkbox className="ml-2" value={'measles'}>
                                 Улаан бурхан
                              </Checkbox>
                              <Checkbox value={'varicella'}>
                                 Салхин цэцэг
                              </Checkbox>
                              <Checkbox value={'avirus'}>
                                 Вирус хепатит A
                              </Checkbox>
                              <Checkbox value={'bvirus'}>
                                 Вирус хепатит B
                              </Checkbox>
                              <Checkbox value={'cvirus'}>
                                 Вирус хепатит C
                              </Checkbox>
                              <Checkbox value={'tuberculosis'}>Сүрьеэ</Checkbox>
                              <Checkbox value={'other'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Мэс ажилбар хийсэн эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'isSurgery']}
                        >
                           <TextArea disabled={true} />
                        </Form.Item>
                     </th>
                     <th>
                        <p>Осол гэмтэл, хордлого, шалтгаан</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'accidents']}
                        >
                           <TextArea disabled={true} />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <p>Харшлын анамнез:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'allergy']}
                        >
                           <Checkbox.Group className="ddd">
                              <Checkbox className="ml-2" value={'Хоол хүнс'}>
                                 Хоол хүнс
                              </Checkbox>
                              <Checkbox value={'varicella'}>
                                 Эмийн бодис
                              </Checkbox>
                              <Checkbox value={'Бусад'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th colSpan={2}>
                        <p>Удамшлын анамнез:</p>
                        <span style={{ fontWeight: 100 }}>
                           Удамшлын өвчнүүд:
                        </span>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'geneticPainDesc']}
                        >
                           <Input disabled={true} />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th>
                        <p>Хооллолтын байдал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'whatFoodie']}
                        >
                           <Checkbox.Group className="ddd">
                              <Checkbox className="ml-2" value={'0'}>
                                 Ердийн
                              </Checkbox>
                              <Checkbox value={'1'}>Цагаан</Checkbox>
                              <Checkbox value={'2'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Архи хэрэглэдэг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'isAlcoholUse']}
                        >
                           <Checkbox.Group className="ddd">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Тамхи татдаг эсэх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'isCigarUse']}
                        >
                           <Checkbox.Group className="ddd">
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Хэдэн наснаас эхэлж</p>
                        <span>
                           татсан &nbsp;
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['anemis', 'fromAge']}
                           >
                              <Input disabled={true} className="w-10" />
                           </Form.Item>
                        </span>
                        <p>Хэдэн жил татаж байгаа</p>
                        <p>
                           <Form.Item
                              shouldUpdate
                              className="mb-0"
                              noStyle
                              name={['anemis', 'usedYear']}
                           >
                              <Input disabled={true} className="w-10" />
                           </Form.Item>
                        </p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4} className="text-center">
                        ЕРӨНХИЙ ҮЗЛЭГ
                     </th>
                  </tr>
                  <tr>
                     <th>
                        <p>Биеийн ерөнхий байдал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Хөнгөн
                              </Checkbox>
                              <Checkbox value={'HARD'}>Дунд</Checkbox>
                              <Checkbox value={'VIPER'}>Хүндэвтэр</Checkbox>
                              <Checkbox value={'OTHER'}>Хүнд</Checkbox>
                              <Checkbox value={'OTHER'}>Маш хүнд</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Ухаан санаа:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Саруул
                              </Checkbox>
                              <Checkbox value={'HARD'}>Бүдгэрсэн</Checkbox>
                              <Checkbox value={'VIPER'}>Ступор</Checkbox>
                              <Checkbox value={'OTHER'}>Солор</Checkbox>
                              <Checkbox value={'OTHER'}>Кома</Checkbox>
                              <Checkbox value={'OTHER'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Орчиндоо:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Харьцаатай
                              </Checkbox>
                              <Checkbox value={'HARD'}>Харьцаагүй</Checkbox>
                              <Checkbox value={'VIPER'}>Сул</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Байрлал:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Идэвхтэй
                              </Checkbox>
                              <Checkbox value={'HARD'}>Идэвхгүй</Checkbox>
                              <Checkbox value={'VIPER'}>Албадмал</Checkbox>
                              <Checkbox value={'VIPER'}>Хагас суугаа</Checkbox>
                              <Checkbox value={'VIPER'}>Хэвтрийн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        <p>Арьс салстын байдал:</p>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th>
                        <p>а. Арьс салсын өнгө</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'HARD'}>Хэвийн бус</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>б. Арьсны уян чанар:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'HARD'}>Ихэссэн</Checkbox>
                              <Checkbox value={'HARD'}>Алдагдсан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>в.Арьсны чийглэг байдал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Хэвийн ихэссэн
                              </Checkbox>
                              <Checkbox value={'HARD'}>Багассан</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th>
                        <p>г.Арьсан дээрх тууралт</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Тууралтгүй
                              </Checkbox>
                              <Checkbox value={'HARD'}>Тууралттай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Хаван:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Хавангүй
                              </Checkbox>
                              <Checkbox value={'HARD'}>Хавантай</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>а. Ерөнхий</p>
                        <p>б. Хэсгийн:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Нүүрэнд
                              </Checkbox>
                              <Checkbox value={'HARD'}>Зовхинд</Checkbox>
                              <Checkbox value={'HARD'}>Хэвлийд</Checkbox>
                              <Checkbox value={'HARD'}>Шилбээр</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th>
                        <p>Захын тунгалагийн булчирхай:</p>
                        <p>а. Хэмжээ</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'HARD'}>
                                 Харахад томорсон
                              </Checkbox>
                              <Checkbox value={'HARD'}>
                                 Тэмтрэлтээр томорсон
                              </Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>б. Байрлал</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Хүзүүний
                              </Checkbox>
                              <Checkbox value={'HARD'}>Суганы</Checkbox>
                              <Checkbox value={'HARD'}>Цавины</Checkbox>
                              <Checkbox value={'HARD'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>в. Эмзэглэл</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Эмзэглэлтэй
                              </Checkbox>
                              <Checkbox value={'HARD'}>Эмзэглэлгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th className="w-1/2">
                        <p>Үе мөчний хэлбэр:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Хэвийн
                              </Checkbox>
                              <Checkbox value={'HARD'}>Өөрчлөгдсөн</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Үений хөдөлгөөн:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'workCondition']}
                        >
                           <Checkbox.Group className="ddd ml-0">
                              <Checkbox className="ml-2" value={'NORMAL'}>
                                 Идэвхтэй
                              </Checkbox>
                              <Checkbox value={'HARD'}>Идэвхгүй</Checkbox>
                              <Checkbox value={'HARD'}>Хязгаарлагдмал</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page2;
