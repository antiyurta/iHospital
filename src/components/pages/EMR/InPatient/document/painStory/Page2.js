import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';
const { TextArea } = Input;
function Page2({ templateId }) {
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
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'inPatientPain']}>
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        <p>Өвчний түүх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'painStory']}>
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={4}>
                        <p>Амьдралын түүх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'lifeStory']}>
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <p>Ахуйн нөхцөл:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'locate']}>
                           <Checkbox.Group className="ml-0">
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
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'workCondition']}>
                           <Checkbox.Group className="ml-0">
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
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'contagious']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'measles'}>
                                 Улаан бурхан
                              </Checkbox>
                              <Checkbox value={'varicella'}>Салхин цэцэг</Checkbox>
                              <Checkbox value={'avirus'}>Вирус хепатит A</Checkbox>
                              <Checkbox value={'bvirus'}>Вирус хепатит B</Checkbox>
                              <Checkbox value={'cvirus'}>Вирус хепатит C</Checkbox>
                              <Checkbox value={'tuberculosis'}>Сүрьеэ</Checkbox>
                              <Checkbox value={'other'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Мэс ажилбар хийсэн эсэх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'isSurgery']}>
                           <TextArea disabled={true} />
                        </Form.Item>
                     </th>
                     <th>
                        <p>Осол гэмтэл, хордлого, шалтгаан</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'accidents']}>
                           <TextArea disabled={true} />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <p>Харшлын анамнез:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'allergy']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={'Хоол хүнс'}>
                                 Хоол хүнс
                              </Checkbox>
                              <Checkbox value={'varicella'}>Эмийн бодис</Checkbox>
                              <Checkbox value={'Бусад'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th colSpan={2}>
                        <p>Удамшлын анамнез:</p>
                        <span style={{ fontWeight: 100 }}>Удамшлын өвчнүүд:</span>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'geneticPainDesc']}>
                           <Input disabled={true} />
                        </Form.Item>
                     </th>
                  </tr>
                  <tr>
                     <th>
                        <p>Хооллолтын байдал:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'whatFoodie']}>
                           <Checkbox.Group>
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
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'isAlcoholUse']}>
                           <Checkbox.Group>
                              <Checkbox className="ml-2" value={true}>
                                 Тийм
                              </Checkbox>
                              <Checkbox value={false}>Үгүй</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>Тамхи татдаг эсэх:</p>
                        <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'isCigarUse']}>
                           <Checkbox.Group>
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
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'fromAge']}>
                              <Input disabled={true} className="w-10" />
                           </Form.Item>
                        </span>
                        <p>Хэдэн жил татаж байгаа</p>
                        <p>
                           <Form.Item shouldUpdate className="mb-0" noStyle name={['anemis', 'usedYear']}>
                              <Input disabled={true} className="w-10" />
                           </Form.Item>
                        </p>
                     </th>
                  </tr>
               </thead>
            </Table>
            {templateId === 1 && (
               <>
                  <Table bordered className="story mb-0">
                     <thead>
                        <tr className="border-t-0">
                           <th colSpan={4} className="text-center">
                              ЕРӨНХИЙ ҮЗЛЭГ
                           </th>
                        </tr>
                        <tr>
                           <th>
                              <p>Биеийн ерөнхий байдал:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'bodyCondition']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'easy'}>
                                       Хөнгөн
                                    </Checkbox>
                                    <Checkbox value={'middle'}>Дунд</Checkbox>
                                    <Checkbox value={'hard'}>Хүндэвтэр</Checkbox>
                                    <Checkbox value={'harder'}>Хүнд</Checkbox>
                                    <Checkbox value={'soHard'}>Маш хүнд</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>Ухаан санаа:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'mindStatus']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'normal'}>
                                       Саруул
                                    </Checkbox>
                                    <Checkbox value={'faded'}>Бүдгэрсэн</Checkbox>
                                    <Checkbox value={'stupor'}>Ступор</Checkbox>
                                    <Checkbox value={'solor'}>Солор</Checkbox>
                                    <Checkbox value={'coma'}>Кома</Checkbox>
                                    <Checkbox value={'other'}>Бусад</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>Орчиндоо:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'area']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'normal'}>
                                       Харьцаатай
                                    </Checkbox>
                                    <Checkbox value={'unNormal'}>Харьцаагүй</Checkbox>
                                    <Checkbox value={'unknown'}>Сул</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>Байрлал:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'position']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'active'}>
                                       Идэвхтэй
                                    </Checkbox>
                                    <Checkbox value={'inactive'}>Идэвхгүй</Checkbox>
                                    <Checkbox value={'pusher'}>Албадмал</Checkbox>
                                    <Checkbox value={'haf'}>Хагас суугаа</Checkbox>
                                    <Checkbox value={'inbed'}>Хэвтрийн</Checkbox>
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
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'skincolor']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'normal'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'unNormal'}>Хэвийн бус</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>б. Арьсны уян чанар:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'skinElasticity']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'normal'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'increased'}>Ихэссэн</Checkbox>
                                    <Checkbox value={'decreased'}>Алдагдсан</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>в.Арьсны чийглэг байдал</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'skinMoisture']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'increased'}>
                                       Хэвийн ихэссэн
                                    </Checkbox>
                                    <Checkbox value={'decreased'}>Багассан</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                        </tr>
                        <tr>
                           <th>
                              <p>г.Арьсан дээрх тууралт</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'skinRash']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'noRash'}>
                                       Тууралтгүй
                                    </Checkbox>
                                    <Checkbox value={'rash'}>Тууралттай</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>Хаван:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'edema']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'noEdema'}>
                                       Хавангүй
                                    </Checkbox>
                                    <Checkbox value={'edema'}>Хавантай</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>а. Ерөнхий</p>
                              <p>б. Хэсгийн:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'skinArea']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'face'}>
                                       Нүүрэнд
                                    </Checkbox>
                                    <Checkbox value={'eye'}>Зовхинд</Checkbox>
                                    <Checkbox value={'stomach'}>Хэвлийд</Checkbox>
                                    <Checkbox value={'foot'}>Шилбээр</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                        </tr>
                        <tr>
                           <th>
                              <p>Захын тунгалагийн булчирхай:</p>
                              <p>а. Хэмжээ</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'ztb']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'normal'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'hard'}>Харахад томорсон</Checkbox>
                                    <Checkbox value={'harder'}>Тэмтрэлтээр томорсон</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>б. Байрлал</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'b.position']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'neck'}>
                                       Хүзүүний
                                    </Checkbox>
                                    <Checkbox value={'armpit'}>Суганы</Checkbox>
                                    <Checkbox value={'groin'}>Цавины</Checkbox>
                                    <Checkbox value={'others'}>Бусад</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>в. Эмзэглэл</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'injury']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'injury'}>
                                       Эмзэглэлтэй
                                    </Checkbox>
                                    <Checkbox value={'uninjury'}>Эмзэглэлгүй</Checkbox>
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
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'bodyShape']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'normal'}>
                                       Хэвийн
                                    </Checkbox>
                                    <Checkbox value={'unNormal'}>Өөрчлөгдсөн</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                           <th>
                              <p>Үений хөдөлгөөн:</p>
                              <Form.Item shouldUpdate className="mb-0" noStyle name={['general', 'bodyMove']}>
                                 <Checkbox.Group className="ml-0">
                                    <Checkbox className="ml-2" value={'active'}>
                                       Идэвхтэй
                                    </Checkbox>
                                    <Checkbox value={'inactive'}>Идэвхгүй</Checkbox>
                                    <Checkbox value={'limited'}>Хязгаарлагдмал</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </th>
                        </tr>
                     </thead>
                  </Table>
               </>
            )}
         </div>
      </div>
   );
}
export default Page2;
