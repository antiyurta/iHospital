import { Checkbox, Input } from 'antd';
import { Table } from 'react-bootstrap';
import React from 'react';
const CT_1_Sergeeh = () => {
   return (
      <div className="printe-remove-p">
         <div className="page">
            <div className="subpage">
               <th className="flex justify-center">СЭРГЭЭН ЗАСАХЫН ЭМЧИЙН ҮЗЛЭГ</th>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr>
                        <th>
                           <th className="flex items-center gap-4">
                              <p> Харилцах бэрхшээлтэй эсэх:</p>{' '}
                              <Checkbox.Group>
                                 <Checkbox>Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center gap-4">
                              <p>Залгих чадвар бэрхшээлтэй эсэх:</p>
                              <Checkbox.Group>
                                 <Checkbox>Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="w-full ml-2">(Хэрвээ тийм бол хэл засалч бөглөнө )</th>
                           <th className="flex items-center gap-4">
                              Танин мэдэхүйн үйл ажиллагаа өөрчлөлттэй эсэх:
                              <Checkbox.Group>
                                 <Checkbox>Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="w-full ml-2">(Хэрвээ тийм бол хөдөлмөр засалч бөглөнө)</th>
                        </th>
                     </tr>
                  </thead>
               </Table>
               <Table bordered className="story mb-0">
                  <thead>
                     <tr className="text-center border-t-0">
                        <th className="w-[30%]">Биеийн ерөнхий байдал</th>
                        <th className="w-[30%]">Ухаан санаа</th>
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
                           <th className="flex items-center">
                              <th>Холголт цооролт: </th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center">
                              <th>Тууралт: </th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">Тийм</Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                           <th className="flex items-center">
                              <th>Хаван:</th>
                              <Checkbox.Group>
                                 <Checkbox className="ml-2">
                                    Тийм
                                    <Input className="amaraInput w-20 mb-2" style={{ textAlign: 'center' }} />
                                 </Checkbox>
                                 <Checkbox>Үгүй</Checkbox>
                              </Checkbox.Group>
                           </th>
                        </th>
                     </tr>
                     <tr>
                        <th colSpan={3}>Амьсгалын эрхтэн тогтолцоо</th>
                     </tr>
                     <tr>
                        <th>
                           <th>
                              Амьсгал 1 минутанд
                              <Input className="amaraInput w-10 mb-2" style={{ textAlign: 'center' }} />
                              удаа
                              <th>
                                 Амьсгалд туслах булчин оролцож байгаа эсэх:
                                 <Checkbox.Group className="w-full">
                                    <Checkbox>Тийм</Checkbox>
                                    <Checkbox> Үгүй</Checkbox>
                                 </Checkbox.Group>
                                 Цээжний хэлбэр:
                                 <Checkbox.Group className="w-full">
                                    <Checkbox>зөв</Checkbox>
                                    <Checkbox> эмгэг</Checkbox>
                                 </Checkbox.Group>
                                 Амьсгалын хэлбэр:
                                 <Checkbox.Group className="w-full">
                                    <Checkbox>Цээжний</Checkbox>
                                    <Checkbox> хэвлийн</Checkbox>
                                 </Checkbox.Group>
                                 холимог
                              </th>
                           </th>
                        </th>
                        <th colSpan={2}>
                           <th>
                              <th>Цээжний 2 тал амьсгалд жигд оролцох байдал:</th>
                              <Checkbox.Group>
                                 <Checkbox>жигд</Checkbox>
                                 <Checkbox>хоцорно / баруун, зүүн /</Checkbox>
                              </Checkbox.Group>
                              <th>
                                 <th>Чагналтаар:</th>
                                 <Checkbox.Group>
                                    <Checkbox>Цулцангийн</Checkbox>
                                    <Checkbox>
                                       Хэржигнүүртэй
                                       <Input className="amaraInput w-20 mb-2" style={{ textAlign: 'center' }} />
                                    </Checkbox>
                                 </Checkbox.Group>{' '}
                                 <Checkbox.Group>
                                    <Checkbox>Гуурсан хоолойн</Checkbox>
                                    <Checkbox>Амьсгал сулавтар / баруун, зүүн /</Checkbox>
                                    <Checkbox>Ширүүн</Checkbox>
                                    <Checkbox>Хэржигнүүргүй</Checkbox>
                                 </Checkbox.Group>
                              </th>
                           </th>
                        </th>
                     </tr>
                  </thead>
               </Table>
            </div>
         </div>
      </div>
   );
};

export default CT_1_Sergeeh;
