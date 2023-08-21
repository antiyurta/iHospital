import { Checkbox, Form } from 'antd';
import { Table } from 'react-bootstrap';
import General from '../General';
import React from 'react';
function Index() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">СЭРГЭЭН ЗАСАХЫН ЭМЧИЙН ҮЗЛЭГ</p>
            <Table bordered className="document mb-0">
               <thead>
                  <tr className="border-b-0">
                     <td>
                        <p>
                           <div className="inline-flex">
                              <p>Харилцах бэрхшээлтэй эсэх:</p>
                              <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                                 <Checkbox.Group className="ddd ml-0">
                                    <Checkbox className="ml-2" value={'Хэвийн'}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox value={'Хэвийн'}>Үгүй</Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </p>
                        <p>
                           <div className="inline-flex">
                              <p>Залгих чадвар бэрхшээлтэй эсэх:</p>
                              <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                                 <Checkbox.Group className="ddd ml-0">
                                    <Checkbox className="ml-2" value={'Хэвийн'}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox className="ml-2" value={'Хэвийн'}>
                                       Үгүй
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </p>
                        <p>(Хэрвээ тийм бол хэл засалч бөглөнө)</p>
                        <p>
                           <div className="inline-flex">
                              <p>Танин мэдэхүйн үйл ажиллагаа өөрчлөлттэй эсэх:</p>
                              <Form.Item name={['Цусны эргэлтийн тогтолцоо', 'Тогшилтоор']} className="mb-0">
                                 <Checkbox.Group className="ddd ml-0">
                                    <Checkbox className="ml-2" value={'Хэвийн'}>
                                       Тийм
                                    </Checkbox>
                                    <Checkbox className="ml-2" value={'Хэвийн'}>
                                       Үгүй
                                    </Checkbox>
                                 </Checkbox.Group>
                              </Form.Item>
                           </div>
                        </p>
                        <p>(Хэрвээ тийм бол хөдөлмөр засалч бөглөнө)</p>
                     </td>
                  </tr>
               </thead>
            </Table>
            <General />
         </div>
      </div>
   );
}
export default Index;
