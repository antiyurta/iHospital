import { Button, Col, Form, Input, InputNumber, Radio, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../../features/patientReducer';
import healthInsurance from '../../../../../services/healt-insurance/healtInsurance';
import patientDiagnose from '../../../../../services/emr/patientDiagnose';
import Finger from '@Comman/Finger/Finger';
import { ListPatientInfo } from '@Comman/ListInjection';
import { openNofi } from '@Comman/common';

const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};

export const types = [
   { value: 1, label: 'Хөнгөлөлттэй эмийн жор', name: 'aTables' },
   { value: 2, label: 'Энгийн эмийн жор', name: 'bTables' },
   { value: 3, label: 'Сэтгэцэд нөлөөлөх эмийн жор', name: 'cTables' }
];

const { TextArea } = Input;

const customeBorderStyle = {
   border: '1px solid #ccc',
   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
   padding: '16px'
};

const BgRenderer = ({ children }) => {
   return <div className="bg-[#f3f4f6] rounded-lg px-3 py-2">{children}</div>;
};

const TitleRenderer = ({ title }) => {
   return <p className="text-lg font-semibold mb-2">{title}</p>;
};

export const SendPrescription = (props) => {
   const { form } = props;
   const patient = useSelector(selectPatient);
   const [selectedDiagnose, setSelectedDiagnose] = useState({});
   const [diagnosis, setDiagnosis] = useState([]);
   const [tablets, setTablets] = useState({
      1: [],
      2: [],
      3: []
   });

   const [selectedValue, setSelectedValue] = useState(null);

   const handleRadioChange = (e) => {
      setSelectedValue(e.target.value);
   };

   const getPatientDiagnosis = async () => {
      await patientDiagnose.getByPageFilter({ patientId: patient.id }).then(({ data }) => {
         if (data.success) {
            const diagnosis = data.response.data.map((patientDiagnose) => patientDiagnose.diagnose);
            const uniqueDiagnosis = diagnosis.filter((item, index, self) => {
               const currentIndex = self.findIndex((el) => el.code === item.code);
               return currentIndex === index;
            });
            setDiagnosis(uniqueDiagnosis);
         }
      });
   };
   const getTabletByGroups = async () => {
      await healthInsurance.getTabletByGroups().then((response) => {
         if (response.status == 200) {
            setTablets(response.data);
         }
      });
   };
   const setPatient = () => {
      form.setFieldsValue({
         patient: {
            regNo: patient.registerNumber
         }
      });
   };
   const setTablet = (index, value, type, formNAme) => {
      const tablet = tablets[type]?.find((tablet) => tablet.tbltId == value);
      form.setFieldsValue({
         [`${formNAme}`]: {
            [`${index}`]: {
               icdCode: tablet.icdCode,
               name: tablet.tbltNameInter,
               desc: tablet.desc,
               packGroup: tablet.packGroup,
               isDiscount: tablet.isDiscount,
               tbltTypeName: tablet.tbltTypeName
            }
         }
      });
   };
   const setTbltSize = (index, formName) => {
      const dailyCount = form.getFieldValue([`${formName}`, index, 'dailyCount']);
      const totalDays = form.getFieldValue([`${formName}`, index, 'totalDays']);
      const tbltSize = dailyCount * totalDays || 0;
      form.setFieldsValue({
         [`${formName}`]: {
            [`${index}`]: {
               tbltSize: tbltSize
            }
         }
      });
   };

   const getTablesByIcd = async (value, name) => {
      if (tablets[value]?.length === 0) {
         await healthInsurance
            .getTabletByDiagnosis({
               diagCode: selectedDiagnose,
               regNo: patient.registerNumber,
               receiptType: value
            })
            .then(({ data }) => {
               setTablets((prevTablets) => ({
                  ...prevTablets,
                  [value]: data.listTabletModel
               }));
               openNofi('success', 'Амжилттай', 'Татав');
            })
            .catch((error) => {
               setTablets((prevTablets) => ({
                  ...prevTablets,
                  [value]: []
               }));
               if (error.response.status === 400) {
                  openNofi('error', 'Амжилтгүй', 'Тухайн утгуудаар мэдээлэл олдохгүй байна');
               }
            });
      }

      // form.resetFields([
      //    ['tablets', name, 'tbltId'],
      //    ['tablets', name, 'name'],
      //    ['tablets', name, 'packGroup'],
      //    ['tablets', name, 'isDiscount'],
      //    ['tablets', name, 'tbltTypeName'],
      //    ['tablets', name, 'icdCode'],
      //    ['tablets', name, 'dailyCount'],
      //    ['tablets', name, 'totalDays'],
      //    ['tablets', name, 'tbltSize'],
      //    ['tablets', name, 'desc']
      // ]);
   };

   useEffect(() => {
      setPatient();
      getPatientDiagnosis();
      // getTabletByGroups();
   }, []);

   return (
      <div className="space-y-3">
         <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
               <BgRenderer>
                  <div>
                     <p style={labelstyle}>Өвчтөний мэдээлэл:</p>
                     <ListPatientInfo patientData={patient} />
                  </div>
                  <Finger
                     form={form}
                     insurance={true}
                     noStyle
                     name={['patient', 'fingerImage']}
                     rules={[
                        {
                           required: true,
                           message: 'Иргэний хурууны хээ заавал'
                        }
                     ]}
                  >
                     <Input />
                  </Finger>
               </BgRenderer>
               <div className="flex flex-col gap-2">
                  <BgRenderer>
                     <Form.Item
                        label="Онош"
                        name={'receiptDiag'}
                        rules={[
                           {
                              required: true,
                              message: 'Онош оруулна уу.'
                           }
                        ]}
                     >
                        <Select
                           allowClear
                           showSearch
                           filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                           options={diagnosis.map((diagnose) => ({
                              value: diagnose.code,
                              label: `${diagnose.code}-${diagnose.nameMn}`
                           }))}
                           onChange={(value) => {
                              setSelectedDiagnose(value);
                           }}
                        />
                     </Form.Item>
                  </BgRenderer>
                  <BgRenderer>
                     <p style={labelstyle}>Эмчийн хуруу хээ:</p>
                     <Finger
                        form={form}
                        insurance={true}
                        noStyle
                        name={['doctor', 'fingerImage']}
                        rules={[
                           {
                              required: true,
                              message: 'Иргэний хурууны хээ заавал'
                           }
                        ]}
                     >
                        <Input />
                     </Finger>
                  </BgRenderer>
               </div>
            </div>
            <BgRenderer>
               <p style={labelstyle}>Үзлэгийн мэдээлэл:</p>
               <Form.Item
                  label="Эмийн тэмдэглэл"
                  name="desc"
                  rules={[
                     {
                        required: true,
                        message: 'Эмийн тэмдэглэл заавал'
                     },
                     {
                        min: 30,
                        message: 'Эмийн тэмдэглэл заавал 30-с багагүй'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
               <div className="grid grid-cols-4 gap-2">
                  <Form.Item label="Өндөр" name={['survey', 'heigth']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Жин" name={['survey', 'weigth']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Бүсэлхий" name={['survey', 'waist']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Зүрхний цохилт" name={['survey', 'pulse']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Амьсгалын тоо" name={['survey', 'breath']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Темп" name={['survey', 'temp']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Сатураци" name={['survey', 'saturatsi']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Сахар" name={['survey', 'sugar']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Холестерин" name={['survey', 'cholesterol']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item
                     label="Даралт дээд"
                     rules={[
                        {
                           required: true,
                           message: 'Даралт дээд заавал'
                        }
                     ]}
                     name={['survey', 'maxPressure']}
                  >
                     <InputNumber />
                  </Form.Item>
                  <Form.Item
                     label="Даралт доод"
                     rules={[
                        {
                           required: true,
                           message: 'Даралт доод заавал'
                        }
                     ]}
                     name={['survey', 'minPressure']}
                  >
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Тамхи татдаг эсэх" className="white-radio" name={['survey', 'isSmoke']}>
                     <Radio.Group options={smokeOptions} />
                  </Form.Item>
               </div>
            </BgRenderer>
         </div>
         <div className="flex flex-col gap-2">
            {types?.map((type, index) => (
               <BgRenderer key={index}>
                  <Form.List name={type.name}>
                     {(fields, { add, remove }) => (
                        <>
                           {fields.map(({ key, name }) => (
                              <Row key={key} style={customeBorderStyle} gutter={[12, 0]}>
                                 <Button
                                    type="dashed"
                                    danger
                                    onClick={() => {
                                       remove(name);
                                    }}
                                    className="w-full mb-3"
                                 >
                                    {`${type.label} устгах`}
                                 </Button>
                                 <Col span={12}>
                                    <Form.Item label="Бичлэг таних дугаар" name={[name, 'tbltId']}>
                                       <Select
                                          allowClear
                                          showSearch
                                          filterOption={(input, option) =>
                                             option.label.toLowerCase().includes(input.toLowerCase())
                                          }
                                          options={tablets[type.value]?.map((tablet) => ({
                                             value: tablet.tbltId,
                                             label: tablet.tbltNameInter
                                          }))}
                                          onSelect={(value) => {
                                             setTablet(name, value, type.value, type.name);
                                          }}
                                       />
                                    </Form.Item>
                                    <Form.Item label="Эмийн олон улсын нэршил" name={[name, 'name']} hidden>
                                       <Input />
                                    </Form.Item>
                                    <Form.Item label="Эмийн бүлгийн дугаар" name={[name, 'packGroup']} hidden>
                                       <InputNumber />
                                    </Form.Item>
                                 </Col>
                                 <Col span={12}>
                                    <Form.Item
                                       label="Хөнгөлөлттэй эсэх"
                                       className="white-radio"
                                       name={[name, 'isDiscount']}
                                    >
                                       <Radio.Group disabled className="px-2 py-1">
                                          <Radio value={1}>Тийм</Radio>
                                          <Radio value={0}>Үгүй</Radio>
                                       </Radio.Group>
                                    </Form.Item>
                                 </Col>
                                 <Col span={12}>
                                    <Form.Item label="Эмийн савлагааны төрөл" name={[name, 'tbltTypeName']}>
                                       <Input disabled />
                                    </Form.Item>
                                 </Col>
                                 <Col span={12}>
                                    <Form.Item label="Өвчний ОУ-ын ангиллын код" name={[name, 'icdCode']}>
                                       <Select
                                          disabled
                                          allowClear
                                          showSearch
                                          filterOption={(input, option) =>
                                             option.label.toLowerCase().includes(input.toLowerCase())
                                          }
                                          options={diagnosis.map((diagnose) => ({
                                             value: diagnose.code,
                                             label: `${diagnose.code}-${diagnose.nameMn}`
                                          }))}
                                       />
                                    </Form.Item>
                                 </Col>
                                 <Col span={12}>
                                    <Form.Item label="Өдөрт уух хэмжээ" name={[name, 'dailyCount']}>
                                       <InputNumber />
                                    </Form.Item>
                                 </Col>
                                 <Col span={12}>
                                    <Form.Item label="Нийт уух өдөр" name={[name, 'totalDays']}>
                                       <InputNumber onChange={() => setTbltSize(name, type.name)} />
                                    </Form.Item>
                                 </Col>
                                 <Col span={12}>
                                    <Form.Item
                                       tooltip={'Өдөрт уух хэмжээ * Нийт уух өдөр'}
                                       label="Нийт уух ширхгийн тоо"
                                       name={[name, 'tbltSize']}
                                    >
                                       <InputNumber disabled />
                                    </Form.Item>
                                 </Col>
                                 <Col span={24}>
                                    <Form.Item label="Эмийн тэмдэглэл" name={[name, 'desc']}>
                                       <TextArea />
                                    </Form.Item>
                                 </Col>
                              </Row>
                           ))}
                           <Form.Item>
                              <Button
                                 type="dashed"
                                 onClick={() => {
                                    add();
                                    getTablesByIcd(type.value, type.name);
                                 }}
                                 style={{ width: '100%' }}
                              >
                                 {`${type.label} бичих`}
                              </Button>
                           </Form.Item>
                        </>
                     )}
                  </Form.List>
               </BgRenderer>
            ))}
         </div>
      </div>
   );
};

const smokeOptions = [
   {
      label: 'Татдаг',
      value: true
   },
   {
      label: 'Татдаггүй',
      value: false
   }
];
