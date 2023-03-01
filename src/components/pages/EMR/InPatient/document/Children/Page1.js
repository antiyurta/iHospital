import { Checkbox, Form, Input } from 'antd';
import { Table } from 'react-bootstrap';
const { TextArea } = Input;
function Page1() {
   return (
      <div className="page">
         <div className="subpage">
            <p className="text-center font-bold">ЭМЧИЙН ҮЗЛЭГ</p>
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th>
                        <div className="flex flex-wrap">
                           <div className="w-1/2">
                              <p>Өндөр (см)</p>
                              <p>Жин (см)</p>
                              <p>Биеийн жингийн индекс(кг/м2)</p>
                           </div>
                           <div className="w-1/2">
                              <p>
                                 [
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['patient', 'height']}
                                 >
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                              <p>
                                 [
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['patient', 'weight']}
                                 >
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                              <p>
                                 [
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['patient', 'index']}
                                 >
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                           </div>
                        </div>
                     </th>
                     <th>
                        <p>Цусны даралт (ммуб)</p>
                        <div className="flex flex-wrap">
                           <div className="w-1/2">
                              <p className="text-center">Систолын даралт</p>
                              <p className="text-center">Диастолын даралт</p>
                           </div>
                           <div className="w-1/2">
                              <p>
                                 [
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['patient', 'highPressureRight']}
                                 >
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                              <p>
                                 [
                                 <Form.Item
                                    shouldUpdate
                                    className="mb-0"
                                    noStyle
                                    name={['patient', 'lowPressureRight']}
                                 >
                                    <Input className="amaraInput w-10" />
                                 </Form.Item>
                                 ]
                              </p>
                           </div>
                        </div>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
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
                     <th colSpan={2}>
                        <p>Өвчний түүх:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'painStory']}
                        >
                           <TextArea className="amaraInputTextArea w-full" />
                        </Form.Item>
                        <p>
                           Хэвтэхээс өмнө хийгдсэн эмчилгээ /гэрээр хийсэн
                           эмчилгээ/:
                        </p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
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
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr className="border-t-0">
                     <th className="w-64">
                        <p>Ахуйн нөхцөл:</p>
                        <Form.Item
                           shouldUpdate
                           className="mb-0"
                           noStyle
                           name={['anemis', 'locate']}
                        >
                           <Checkbox.Group className="ml-0">
                              <Checkbox className="ml-2" value={'APARTMENT'}>
                                 Орон сууцанд
                              </Checkbox>
                              <Checkbox value={'GER'}>Гэрт</Checkbox>
                              <Checkbox value={'OTHER'}>Бусад</Checkbox>
                           </Checkbox.Group>
                        </Form.Item>
                     </th>
                     <th>
                        <p>
                           <span className="font-bold">Ам бүл</span>
                           <span>____</span>
                           <span>хэнтэйгээ амьдардаг</span>
                        </p>
                        <p>____________</p>
                     </th>
                  </tr>
                  <tr>
                     <th colSpan={2}>
                        <p>Урьд өвчилсөн өвчин, эмгэгийн байдал:</p>
                        <p>__________</p>
                     </th>
                  </tr>
               </thead>
            </Table>
            <Table bordered className="story mb-0">
               <thead>
                  <tr>
                     <th>
                        <p>Халдварт:</p>
                     </th>
                     <th>
                        <p>Мэс засал, мэс ажилбар хийлгэсэн эсэх:</p>
                     </th>
                     <th>
                        <p>Осол гэмтэл, хордлого:</p>
                     </th>
                  </tr>
               </thead>
            </Table>
         </div>
      </div>
   );
}
export default Page1;
