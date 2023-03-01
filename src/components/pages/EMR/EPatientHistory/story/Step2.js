import { Checkbox, Form, Input } from 'antd';

const { TextArea } = Input;
function Step2({ templateId }) {
   return (
      <div className="flex flex-wrap">
         <div className="w-full p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Хэвтэх үеийн зовиур:"
                     name={['anemis', 'inPatientPain']}
                  >
                     <TextArea rows={5} className="w-full" />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-full p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Өвчний түүх:"
                     name={['anemis', 'painStory']}
                  >
                     <TextArea rows={5} className="w-full" />
                  </Form.Item>
               </div>
            </div>
         </div>
         {templateId === 2 && (
            <div className="w-full p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        className="mb-0"
                        label="Хэвтэхээс өмнө хийгдсэн эмчилгээ /гэрээр хийсэн эмчилгээ/:"
                        name={['anemis', 'painStoryBefore']}
                     >
                        <TextArea rows={5} className="w-full" />
                     </Form.Item>
                  </div>
               </div>
            </div>
         )}
         <div className="w-full p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     className="mb-0"
                     label="Амьдралын түүх:"
                     name={['anemis', 'lifeStory']}
                  >
                     <TextArea rows={5} className="w-full" />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Ахуйн нөхцөл:"
                     name={['anemis', 'locate']}
                     className="mb-0"
                  >
                     <Checkbox.Group>
                        <Checkbox className="ml-2" value={'APARTMENT'}>
                           Орон сууцанд
                        </Checkbox>
                        <Checkbox value={'GER'}>Гэрт</Checkbox>
                        <Checkbox value={'OTHER'}>Бусад</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  {templateId === 2 ? (
                     <Form.Item
                        label="Ам бүл хэдүүл"
                        name={['anemis', 'familyCondition']}
                        className="mb-0"
                     >
                        <Input />
                     </Form.Item>
                  ) : (
                     <Form.Item
                        label="Ажил хөдөлмөрийн нөхцөл:"
                        name={['anemis', 'workCondition']}
                        className="mb-0"
                     >
                        <Checkbox.Group>
                           <Checkbox className="ml-2" value={'NORMAL'}>
                              Ердийн
                           </Checkbox>
                           <Checkbox value={'HARD'}>Хүнд</Checkbox>
                           <Checkbox value={'VIPER'}>Хортой</Checkbox>
                           <Checkbox value={'OTHER'}>Бусад</Checkbox>
                        </Checkbox.Group>
                     </Form.Item>
                  )}
               </div>
            </div>
         </div>
         {templateId === 2 && (
            <div className="w-1/4 p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Хэнтэйгээ амьдардаг:"
                        name={['anemis', 'familyConditionOthers']}
                        className="mb-0"
                     >
                        <TextArea rows={5} className="w-full" />
                     </Form.Item>
                  </div>
               </div>
            </div>
         )}
         {templateId === 2 && (
            <div className="w-1/4 p-1">
               <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                  <div className="p-1">
                     <Form.Item
                        label="Урьд өвчилсөн өвчин, эмгэгийн байдал:"
                        name={['anemis', 'beforoProblems']}
                        className="mb-0"
                     >
                        <TextArea rows={4} className="w-full" />
                     </Form.Item>
                  </div>
               </div>
            </div>
         )}
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Халдварт:"
                     name={['anemis', 'contagious']}
                     className="mb-0"
                  >
                     <Checkbox.Group>
                        <Checkbox className="ml-2" value={'measles'}>
                           Улаан бурхан
                        </Checkbox>
                        <Checkbox value={'varicella'}>Салхин цэцэг</Checkbox>
                        {templateId === 2 && (
                           <Checkbox value={'mumps'}>Гахайн хавдар</Checkbox>
                        )}
                        <Checkbox value={'avirus'}>
                           {templateId === 2 ? 'Гепатит A' : 'Вирус хепатит A'}
                        </Checkbox>
                        <Checkbox value={'bvirus'}>
                           {templateId === 2 ? 'Гепатит B' : 'Вирус хепатит B'}
                        </Checkbox>
                        <Checkbox value={'cvirus'}>
                           {templateId === 2 ? 'Гепатит C' : 'Вирус хепатит C'}
                        </Checkbox>
                        <Checkbox value={'stomatchInfection'}>
                           Гэдэсний халдвар
                        </Checkbox>
                        <Checkbox className="w-full" value={'tuberculosis'}>
                           Сүрьеэ
                        </Checkbox>
                        {templateId === 2 && (
                           <>
                              <Checkbox
                                 className="ml-6 w-full"
                                 value={'1tuberculosis'}
                              >
                                 Уушигны
                              </Checkbox>
                              <Checkbox
                                 className="ml-6 w-full"
                                 value={'2tuberculosis'}
                              >
                                 Булчирхайн
                              </Checkbox>
                              <Checkbox
                                 className="ml-6 w-full"
                                 value={'3tuberculosis'}
                              >
                                 Гэдэсний
                              </Checkbox>
                              <Checkbox
                                 className="ml-6 w-full"
                                 value={'4tuberculosis'}
                              >
                                 Бусад
                              </Checkbox>
                           </>
                        )}
                        <Checkbox value={'other'}>Бусад</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         {templateId === 2 && (
            <div className="w-1/4 p-1">
               <div className="flex flex-wrap">
                  <div className="w-full">
                     <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                        <div className="p-1">
                           <Form.Item
                              label="Улаан бурхан хэдэн онд:"
                              name={['anemis', 'isMeasles']}
                              className="mb-0"
                           >
                              <Input />
                           </Form.Item>
                        </div>
                     </div>
                  </div>
                  <div className="w-full">
                     <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                        <div className="p-1">
                           <Form.Item
                              label="Улаан бурхан хэдэн онд:"
                              name={['anemis', 'isMeasles']}
                              className="mb-0"
                           >
                              <Input />
                           </Form.Item>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Мэс ажилбар хийсэн эсэх:"
                     name={['anemis', 'isSurgery']}
                     className="mb-0"
                  >
                     <TextArea rows={5} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Осол гэмтэл, хордлого, шалтгаан:"
                     name={['anemis', 'accidents']}
                     className="mb-0"
                  >
                     <TextArea rows={5} />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Харшлын анамнез:"
                     name={['anemis', 'allergy']}
                     className="mb-0"
                  >
                     <Checkbox.Group>
                        <Checkbox className="ml-2" value={'Хоол хүнс'}>
                           Хоол хүнс
                        </Checkbox>
                        <Checkbox value={'varicella'}>Эмийн бодис</Checkbox>
                        <Checkbox value={'Бусад'}>Бусад</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Удамшлын анамнез:
                        Удамшлын өвчнүүд:"
                     name={['anemis', 'geneticPainDesc']}
                     className="mb-0"
                  >
                     <TextArea />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Хооллолтын байдал:"
                     name={['anemis', 'whatFoodie']}
                     className="mb-0"
                  >
                     <Checkbox.Group>
                        <Checkbox className="ml-2" value={'0'}>
                           Ердийн
                        </Checkbox>
                        <Checkbox value={'1'}>Цагаан</Checkbox>
                        <Checkbox value={'2'}>Бусад</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Архи хэрэглэдэг эсэх:"
                     name={['anemis', 'isAlcoholUse']}
                     className="mb-0"
                  >
                     <Checkbox.Group>
                        <Checkbox className="ml-2" value={true}>
                           Тийм
                        </Checkbox>
                        <Checkbox value={false}>Үгүй</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Тамхи татдаг эсэх:"
                     name={['anemis', 'isCigarUse']}
                     className="mb-0"
                  >
                     <Checkbox.Group>
                        <Checkbox className="ml-2" value={true}>
                           Тийм
                        </Checkbox>
                        <Checkbox value={false}>Үгүй</Checkbox>
                     </Checkbox.Group>
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Хэдэн наснаас эхэлж татсан:"
                     name={['anemis', 'fromAge']}
                     className="mb-0"
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <div className="w-1/4 p-1">
            <div className="rounded-md bg-gray-100 w-full inline-block m-1">
               <div className="p-1">
                  <Form.Item
                     label="Хэдэн жил татаж байгаа:"
                     name={['anemis', 'usedYear']}
                     className="mb-0"
                  >
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Step2;
