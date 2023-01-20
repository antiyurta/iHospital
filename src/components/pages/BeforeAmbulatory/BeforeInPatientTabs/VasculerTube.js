import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
   Button,
   Cascader,
   Form,
   Input,
   Modal,
   Radio,
   Select,
   Row,
   Col
} from 'antd';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';

function VasculerTube({ PatientData, ListId }) {
   const token = useSelector(selectCurrentToken);
   const printRef = useRef();
   const [form] = Form.useForm();
   const [datas, setDatas] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [vascularList, setVascularList] = useState([]);

   const conf = {
      headers: {},
      params: {
         patientId: PatientData.id
      }
   };

   const getVascularTube = async () => {
      setVascularList([]);
      setIsLoading(true);
      const response = await Get('inpatient/vascular-tube', token, conf);
      // console.log("Res", response);
      if (response.data.length != 0) {
         setVascularList(response.data);
      }
      setIsLoading(false);
   };

   useEffect(() => {
      getVascularTube();
   }, []);

   const tubeChild = [
      {
         value: 0,
         label: 'Сарвууны ард вен'
      },
      {
         value: 1,
         label: 'Эрхий хурууны ард вен'
      },
      {
         value: 2,
         label: 'Шууны судсанд'
      },
      {
         value: 3,
         label: 'Тохойн өмнөх вен'
      },
      {
         value: 4,
         label: 'Эрхий хуруунд'
      },
      {
         value: 5,
         label: 'Чигчий хуруунд'
      }
   ];
   const tubeChildFoot = [
      {
         value: 0,
         label: 'Шагайн вен'
      },
      {
         value: 1,
         label: 'Тавхайн урд вен'
      },
      {
         value: 2,
         label: 'Шагайн дор вен'
      }
   ];
   const tubeAreaOptions = [
      {
         label: 'Баруун гар',
         value: 0,
         children: tubeChild
      },
      {
         label: 'Зүүн гар',
         value: 1,
         children: tubeChild
      },
      {
         label: 'Баруун хөл',
         value: 2,
         children: tubeChildFoot
      },
      {
         label: 'Зүүн хөл',
         value: 3,
         children: tubeChildFoot
      }
   ];
   const tubeChangeReasonOptions = [
      {
         label: 'Судасны бөглөрсөн тул',
         value: 0,
         content: 'Б'
      },
      {
         label: 'Судаснаас гарсан тул',
         value: 1,
         content: 'Г'
      },
      {
         label: '72ц хугацаа болсон тул',
         value: 2,
         content: 'ХГ'
      },
      {
         label: 'Эмнэлэгээс гарсан тул',
         value: 3,
         content: 'ЭГ'
      },
      {
         label: 'Эмзэглэл өвдөлттэй тул',
         value: 4,
         content: 'Ө'
      },
      {
         label: 'Улайж үрэвссэн тул',
         value: 5,
         content: 'Ү'
      },
      {
         label: 'Гуурс тавьсан',
         value: 6,
         content: 'Т'
      },
      {
         label: 'Сольсон',
         value: 7,
         content: 'С'
      },
      {
         label: 'Авсан',
         value: 8,
         content: 'А'
      }
   ];
   const onFinish = async (values) => {
      setIsOpen(false);
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         inpatientRequestId: ListId,
         patientId: PatientData.id,
         replacingTube: values.replacingTube,
         arm: values.arm[0],
         statusArm:
            values.arm[0] === '0' || values.arm[0] === '1'
               ? values.arm[1]
               : null,
         statusFoot:
            values.arm[0] === '2' || values.arm[0] === '3'
               ? values.arm[1]
               : null,
         isFever: values.isFever,
         isSystole: values.isSystole,
         isPulse: values.isPulse,
         isUrine: values.isUrine,
         isSkin: values.isSkin,
         isFood: values.isFood,
         isRed: values.isRed,
         isSick: values.isSick,
         isInflamed: values.isInflamed,
         isBumpy: values.isBumpy,
         isPuss: values.isPuss,
         tsach: values.tsach,
         detected1: values.detected1,
         fromTheTip: values.fromTheTip,
         detected2: values.detected2,
         inflammation: values.inflammation,
         detected3: values.detected3,
         measuresTaken: values.measuresTaken
      };
      const response = await Post('inpatient/vascular-tube', token, conf, data);
      if (response === 201) {
         getVascularTube();
      }
   };
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   return (
      <>
         <Modal
            title="Тандалт бөглөх"
            width={'800px'}
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            onOk={() =>
               form.validateFields().then((values) => onFinish(values))
            }
         >
            <Form form={form} layout="vertical">
               <Row justify="space-between">
                  <Col span={11}>
                     <b className="block mb-2">Гуурс тавьсан талбай</b>
                     <Form.Item label="" name="arm" className="mb-2">
                        <Cascader options={tubeAreaOptions} />
                     </Form.Item>
                  </Col>
                  <Col span={11}>
                     <b className="block mb-2">Гуурс cольсон шалтгаан</b>
                     <Form.Item label="" name="replacingTube" className="mb-2">
                        <Select options={tubeChangeReasonOptions} />
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between">
                  <Col span={11}>
                     <b>Халуурна /38С дээш/</b>
                     <Form.Item label="" name="isFever" className="mb-2">
                        <Radio.Group className="items-center">
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={11}>
                     <b>АД ситол буурсан</b>
                     <Form.Item label="" name="isSystole" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between">
                  <Col span={11}>
                     <b>Пульс түргэснэ</b>
                     <Form.Item label="" name="isPulse" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={11}>
                     <b>{`Шээсний гарц багасна <20мл/цаг`}</b>
                     <Form.Item label="" name="isUrine" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between">
                  <Col span={11}>
                     <b>Арьс зэвхий саарал</b>
                     <Form.Item label="" name="isSkin" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={11}>
                     <b>Хоолонд дүргүй</b>
                     <Form.Item label="" name="isFood" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between">
                  <Col span={11}>
                     <b>Хатгасан хэсэгт улаан</b>
                     <Form.Item label="" name="isRed" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={11}>
                     <b>Хатгасан хэсэгт эмзэг өвчтэй</b>
                     <Form.Item label="" name="isSick" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between">
                  <Col span={11}>
                     <b>Хатгасан хэсэгт халуун үрэвссэн</b>
                     <Form.Item label="" name="isInflamed" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={11}>
                     <b>Тэмтэрхэд судас гүвдрүүдсэн</b>
                     <Form.Item label="" name="isBumpy" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between">
                  <Col span={11}>
                     <b>Хатгасан хэсэгт буглаатай идээтэй</b>
                     <Form.Item label="" name="isPuss" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={11}></Col>
               </Row>
               <Row justify="space-between" align="middle">
                  <Col span={24}>
                     <b>ЦАЧ шинжилгээ авсан эсэх, илэрсэн үүсгэгч</b>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>
                     <Form.Item label="" name="tsach" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={18}>
                     <Form.Item label="" name="detected1" className="mb-2">
                        <Input className="" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between" align="middle">
                  <Col span={24}>
                     <b>
                        Гуурсны үзүүрээс нян судлалын шинжилгээ авсан эсэх,
                        илэрсэн үүсгэгч
                     </b>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>
                     <Form.Item label="" name="fromTheTip" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={18}>
                     <Form.Item label="" name="detected2" className="mb-2">
                        <Input className="" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between" align="middle">
                  <Col span={24}>
                     <b>
                        Үрэвслийн шингэн идээнээс нян судлалын шинжилгээ авсан
                        эсэх, илэрсэн үүсгэгч
                     </b>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={6}>
                     <Form.Item label="" name="inflammation" className="mb-2">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={18}>
                     <Form.Item label="" name="detected3" className="mb-2">
                        <Input className="" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row justify="space-between" align="middle">
                  <Col span={24}>
                     <b>Авсан арга хэмжээ</b>
                  </Col>
               </Row>
               <Row className="mt-2">
                  <Col span={24}>
                     <Form.Item label="" name="measuresTaken" className="mb-2">
                        <Input className="" />
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Modal>
         {isLoading ? (
            <Spinner animation="grow" style={{ color: '#1890ff' }} />
         ) : (
            <>
               <Button onClick={handlePrint}>Хэвлэх</Button>
               <Button
                  onClick={() => {
                     setIsOpen(true);
                  }}
                  className="ml-2"
               >
                  Нэмэх
               </Button>

               <div ref={printRef}>
                  <page size="A4" layout="landscape">
                     <div className="flow-root">
                        <div className="float-right">
                           <p style={{ fontSize: 10 }}>
                              Эрүүл мэндийн сайдын 2019 оны 11 сарын 29-ны
                           </p>
                           <p style={{ fontSize: 10 }}>
                              өдрийн А539 дугаар тушаалын 3-р хавсралт
                           </p>
                        </div>
                     </div>
                     <p
                        className="font-bold text-center"
                        style={{ fontSize: 12 }}
                     >
                        Судасны гуурстай холбоотой тандалт
                     </p>
                     <div className="flex flex-wrap py-1 text-center">
                        <div className="basis-1/5">
                           <p style={{ fontSize: 10 }}>
                              Эмнэлэг: UNIVERSAL MED
                           </p>
                        </div>
                        <div className="basis-1/5">
                           <p style={{ fontSize: 10 }}>Тасаг: ДОТОР</p>
                        </div>
                        <div className="basis-2/5">
                           <p style={{ fontSize: 10 }}>
                              Үйлчлүүлэгчийн овог нэр:{' '}
                              {PatientData?.lastName.substring(0, 1) +
                                 '.' +
                                 PatientData?.firstName}
                           </p>
                        </div>
                        <div className="basis-1/5">
                           <p style={{ fontSize: 10 }}>Нас: 33 Хүйс: Эр</p>
                        </div>
                        <div className="basis-1/5">
                           <p style={{ fontSize: 10 }}>
                              Регистрийн дугаар: {PatientData?.registerNumber}
                           </p>
                        </div>
                        <div className="basis-1/5">
                           <p style={{ fontSize: 10 }}>Үндсэн онош: I38</p>
                        </div>
                        <div className="basis-2/5">
                           <p style={{ fontSize: 10 }}>
                              Эмнэлэг хэвтсэн огноо: 2022-01-01
                           </p>
                        </div>
                        <div className="basis-1/5">
                           <p style={{ fontSize: 10 }}>
                              Судасны гуурс төрөл: Уян зүү
                           </p>
                        </div>
                     </div>
                     <Table bordered className="bcp2">
                        <thead>
                           <tr>
                              <th
                                 rowSpan={3}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Сар өдөр
                              </th>
                              <th
                                 rowSpan={3}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Цаг
                              </th>
                              <th
                                 rowSpan={3}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Хэд дахь уян зүү
                              </th>
                              <th rowSpan={3}>Гуурс тависан талбай</th>
                              <th
                                 rowSpan={3}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Гуурс сольсон шалтгаан
                              </th>
                              <th colSpan={11}>
                                 Судасны гуурсны халдварын шинж тэмдэгээр тандах
                                 хуудас
                              </th>
                              <th colSpan={4}>Авсан арга хэмжээ</th>
                              <td
                                 rowSpan={3}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlignLast: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 <p>гарын үсэг</p>
                                 <p>Уян зүү тавьсан сувилагчийн</p>
                              </td>
                              <td
                                 rowSpan={3}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlignLast: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 <p>гарын үсэг</p>
                                 <p>Тандалт хийсэн ажилтны</p>
                              </td>
                           </tr>
                           <tr>
                              <th colSpan={6}>Ерөнхий шинж</th>
                              <th colSpan={5}>Хэсэг гэзрын шинж</th>
                              <td
                                 rowSpan={2}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlignLast: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 <p>эсэх, илэрсэн үүсгэгч</p>
                                 <p>ЦАЧ шинжилгээ авсан</p>
                              </td>
                              <td
                                 rowSpan={2}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlignLast: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 <p>үүсгэгч</p>
                                 <p>авсан эсэх, илэрсэн</p>
                                 <p>судлалын шинжилгээ</p>
                                 <p>Гуурсны үзүүрээс нян</p>
                              </td>
                              <td
                                 rowSpan={2}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlignLast: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 <p>эсэх, илэрсэн үүсгэгч</p>
                                 <p>шинжилгээ авсан</p>
                                 <p>идээнээс нян судлалын</p>
                                 <p>Үрэвслийн шингэн</p>
                              </td>
                              <th
                                 rowSpan={2}
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlignLast: 'center',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Авсан арга хэмжээ
                              </th>
                           </tr>
                           <tr>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Халуурна /38С дээш/
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 АД ситол буурсан
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Пульс түргэснэ
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 {'Шээсний гарц багасана <20мл/цаг'}
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Арьс зэвхий саарал
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Хоолонд дургүй
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Хатгасан хэсэгт улаан
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Хатгасан хэсэгт эмзэг өвчтэй
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Хатгасан хэсэгт халуун үрэвссэн
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Тэмтэрэхэд судас гүвдрүүтсэн
                              </th>
                              <th
                                 className="rotate-180"
                                 style={{
                                    writingMode: 'vertical-lr',
                                    textAlign: 'right',
                                    verticalAlign: 'middle'
                                 }}
                              >
                                 Хатгасан хэсэгт буглаатай идээтэй
                              </th>
                           </tr>
                        </thead>
                        <thead>
                           {vascularList?.map((data, index) => {
                              return (
                                 <tr key={index}>
                                    <th>
                                       {moment(data.createdAt).format('MM/DD')}
                                    </th>
                                    <th>
                                       {moment(data.createdAt).format('HH:mm')}
                                    </th>
                                    <th>{index + 1}</th>
                                    <th>
                                       {tubeChangeReasonOptions?.map((obj) => {
                                          if (
                                             obj.value === data.replacingTube
                                          ) {
                                             return obj.content;
                                          }
                                       })}
                                    </th>
                                    <th>
                                       {tubeAreaOptions?.map((obj) => {
                                          if (obj.value === data.arm) {
                                             return (
                                                <>
                                                   {obj.label}
                                                   <br />
                                                </>
                                             );
                                          }
                                       })}
                                       {data.arm === 0 || data.arm === 1
                                          ? tubeChild?.map((obj) => {
                                               if (obj.value === data.arm) {
                                                  return obj.label;
                                               }
                                            })
                                          : null}
                                       {data.arm === 2 || data.arm === 3
                                          ? tubeChildFoot?.map((obj) => {
                                               if (obj.value === data.arm) {
                                                  return obj.label;
                                               }
                                            })
                                          : null}
                                    </th>
                                    <th>
                                       {data.isFever ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isSystole ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isPulse ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isUrine ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isSkin ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isFood ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isRed ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isSick ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isInflamed ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isBumpy ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.isPuss ? (
                                          <PlusOutlined />
                                       ) : (
                                          <MinusOutlined />
                                       )}
                                    </th>
                                    <th>
                                       {data.tsach ? (
                                          <>
                                             <PlusOutlined />
                                             <br />
                                          </>
                                       ) : (
                                          <>
                                             <MinusOutlined />
                                             <br />
                                          </>
                                       )}
                                       <span
                                          style={{
                                             width: 100,
                                             textAlign: 'center',
                                             display: 'inline-block'
                                          }}
                                       >
                                          {data.detected1
                                             ? data.detected1
                                             : 'Илрээгүй'}
                                       </span>
                                    </th>
                                    <th>
                                       {data.fromTheTip ? (
                                          <>
                                             <PlusOutlined />
                                             <br />
                                          </>
                                       ) : (
                                          <>
                                             <MinusOutlined />
                                             <br />
                                          </>
                                       )}
                                       <span
                                          style={{
                                             width: 100,
                                             textAlign: 'center',
                                             display: 'inline-block'
                                          }}
                                       >
                                          {data.detected2
                                             ? data.detected2
                                             : 'Илрээгүй'}
                                       </span>
                                    </th>
                                    <th>
                                       {data.inflammation ? (
                                          <>
                                             <PlusOutlined />
                                             <br />
                                          </>
                                       ) : (
                                          <>
                                             <MinusOutlined />
                                             <br />
                                          </>
                                       )}
                                       <span
                                          style={{
                                             width: 100,
                                             textAlign: 'center',
                                             display: 'inline-block'
                                          }}
                                       >
                                          {data.detected3
                                             ? data.detected3
                                             : 'Илрээгүй'}
                                       </span>
                                    </th>
                                    <th>{data.measuresTaken}</th>
                                    <th></th>
                                    <th></th>
                                 </tr>
                              );
                           })}
                        </thead>
                     </Table>
                     <div style={{ display: 'grid' }}>
                        <span>Тандалтын хуудасыг хөтлөх заавар:</span>
                        <span>
                           1. Хэвтсэн өдрөөс гарах өдөр хүртэл өдөрт 2 ээлж
                           хөтлөнө.
                        </span>
                        <span>
                           2. Шинж тэмдэг илэрсэн /+/, илрээгүй /-/, гуурс
                           тавьсан бол /Т/, сольсон /С/, авсан /А/, өвдөлттэй
                           /Ө/, гарсан /Г/, бөгөлсөн /Б/ гэж үсгээр товчилж
                           бичнэ.
                        </span>
                        <span>
                           3. Шинжилгээ авсан бол /+/, аваагүй /-/, эмгэг төрөгч
                           илэрсэн бол нэрийг нь, илрээгүй бол илрээгүй гэж
                           бичнэ.
                        </span>
                     </div>
                  </page>
               </div>
            </>
         )}
      </>
   );
}
export default VasculerTube;
