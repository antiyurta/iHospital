//EMR -> Явцын үзлэг -> Ерөнхий үзлэг
import React, { useState, useEffect } from "react";
import { Col, Radio, Row, Divider, Input, Button, Form } from "antd";
import { blue } from "@ant-design/colors";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Patch, Post } from "../../comman";

export default function GeneralInspection({ patientId, inspection }) {
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [historyId, setHistoryId] = useState(Number);

  useEffect(() => {
    getGeneralInspection();
  }, [inspection]);

  const saveGeneralInspection = () => {
    form.validateFields().then(async (values) => {
      values["patientId"] = patientId;
      if (inspection === 2) {
        await Patch('emr/general-inspection/' + historyId, token, config, values);
      } else {
        await Post('emr/general-inspection', token, config, values);
      }
    }).catch((error) => {
      openNofi("error", "611 маягт", "Заавал бөглөгдөх ёстой");
    });
  };

  const getGeneralInspection = async () => {
    config.params.patientId = patientId;
    const response = await Get('emr/general-inspection', token, config);
    if (response.data.length > 0) {
      form.setFieldsValue(response.data[0]);
      setHistoryId(response.data[0].id);
    }
    config.params.patientId = null;
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
      labelAlign="left"
      scrollToFirstError
      form={form}
    >
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Биеийн ерөнхий байдал"
                name="bodyCondition"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 12,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value={0} className="pl-1 ml-0">Дунд</Radio>
                  <Radio value={1} className="pl-1 ml-0">Хүндэвтэр</Radio>
                  <Radio value={2} className="pl-1 ml-0">Хүнд</Radio>
                  <Radio value={3} className="pl-1 ml-0">Маш хүнд</Radio>
                </Radio.Group>
              </Form.Item>
            </div>

          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Ухаан санаа"
                name="mind"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 12,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="REASONABLE" className="pl-1 ml-0">Саруул</Radio>
                  <Radio value="FADED" className="pl-1 ml-0">Бүдгэрсэн</Radio>
                  <Radio value="UNREASONABLE" className="pl-1 ml-0">Ухаангүй</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Арьс салст"
                name="skin"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 12,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="NORMAL" className="pl-1 ml-0">Хэвийн</Radio>
                  <Radio value="UNNORMAL" className="pl-1 ml-0">Хэвийн бус</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Амьсгалын эрхтэн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Амьсгал 1 минутанд"
                name="respiratoryOneMinute"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 6,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Input
                  size="small"
                />
              </Form.Item>
            </div>
          </div>

        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Чагналтаар"
                name="respiratoryListen"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 18,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="LUNG" className="pl-1 ml-0">Уушги цулцангийн</Radio>
                  <Radio value="TUBE" className="pl-1 ml-0">Гуурсан хоолойн</Radio>
                  <Radio value="IMPORTANT" className="pl-1 ml-0">Хэржигнүүртэй</Radio>
                  <Radio value="SHORT_BREATH" className="pl-1 ml-0">Амьсгал сулавтар</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Цусны эргэлтийн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-left pr-1">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Судасны цохилт 1 минутанд"
                name="pulseOneMinute"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 6,
                }}
                labelCol={{
                  span: 16,
                }}
              >
                <Input
                  size="small"
                />
              </Form.Item>
            </div>
          </div>
        </Col>
        <Col span={12} className="text-left pl-1">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Хүчдэл дүүрэлт"
                name="volt"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 6,
                }}
                labelCol={{
                  span: 10,
                }}
                labelAlign="right"
              >
                <Input
                  size="small"
                />
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Тогшилтоор /Зүрхний хил/"
                name="heartTapping"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 18,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="NORMAL" className="pl-1 ml-0">Хэвийн</Radio>
                  <Radio value="LARGER" className="pl-1 ml-0">Томорсон</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Чагналтаар /Зүрхний авиа/"
                name="heartSound"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 18,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="BRIGHT" className="pl-1 ml-0">Тод</Radio>
                  <Radio value="DIM" className="pl-1 ml-0">Бүдэг</Radio>
                  <Radio value="DIMMY" className="pl-1 ml-0">Бүдгэвтэр</Radio>
                  <Radio value="SMOOTH" className="pl-1 ml-0">Хэм жигд</Radio>
                  <Radio value="UNEVEN" className="pl-1 ml-0">Жигд бус</Radio>
                  <Radio value="HEMOLYSIS" className="pl-1 ml-0">Хэм алдалттай</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-left pr-1">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="АД баруун талд"
                name="heartBPRight"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 6,
                }}
                labelCol={{
                  span: 16,
                }}
              >
                <Input
                  size="small"
                />
              </Form.Item>
            </div>
          </div>
        </Col>
        <Col span={12} className="text-left pl-1">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Зүүн талд"
                name="heartBPLeft"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 6,
                }}
                labelCol={{
                  span: 10,
                }}
                labelAlign="right"
              >
                <Input
                  size="small"
                />
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Хоол шингээх эрхтэн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Хэл"
                name="tongue"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 18,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="NORMAL" className="pl-1 ml-0">Ердийн</Radio>
                  <Radio value="DRY" className="pl-1 ml-0">Хуурай</Radio>
                  <Radio value="NO_COLORFUL" className="pl-1 ml-0">Өнгөргүй</Radio>
                  <Radio value="COLORFUL" className="pl-1 ml-0">Өнгөртэй</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Хэвлийн үзлэг"
                name="abdomen"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 18,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="PALPATION" className="pl-1 ml-0">Өнгөц тэмтрэлтээр</Radio>
                  <Radio value="DEEP_PALPATION" className="pl-1 ml-0">Гүн тэмтрэлтээр</Radio>
                  <Radio value="HURFUL" className="pl-1 ml-0">Эмзэглэлтэй</Radio>
                  <Radio value="NORMAL" className="pl-1 ml-0">Ердийн</Radio>
                  <Radio value="MILD_PLEURAL" className="pl-1 ml-0">
                    Зөөлөн гялтан цочрол үгүй
                  </Radio>
                  <Radio value="SYMTOMS_SHOCK">
                    Гялтан цочролтын шинж илэрсэн
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Мэдрэлийн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Сонсох чадвар"
                name="audition"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 18,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="NORMAL" className="pl-1 ml-0">Хэвийн</Radio>
                  <Radio value="DECREASED" className="pl-1 ml-0">Буурсан</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label="Рефлексүүд"
                name="reflex"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                wrapperCol={{
                  span: 18,
                }}
                labelCol={{
                  span: 8,
                }}
              >
                <Radio.Group className="align-middle">
                  <Radio value="SAVED" className="pl-1 ml-0">Хадгалагдана</Radio>
                  <Radio value="NOT_SAVED" className="pl-1 ml-0">Хадгалагдахгүй</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label=""
                name="other"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                labelCol={{
                  span: 8,
                }}
              >
                <TextArea
                  rows={2}
                  style={{ padding: 5, marginBottom: 5 }}
                  placeholder="Бусад"
                />
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <div className="rounded-md bg-gray-100 w-full inline-block m-1">
            <div className="p-1">
              <Form.Item
                label=""
                name="mentalState"
                rules={[{ required: true, message: "Заавал бөглөнө 611 маяг" }]}
                className="mb-0"
                labelCol={{
                  span: 8,
                }}
              >
                <TextArea
                  rows={2}
                  style={{ padding: 5 }}
                  placeholder="Сэтгэцийн байдал"
                />
              </Form.Item>
            </div>
          </div>
        </Col>
      </Row>
      <Form.Item
        wrapperCol={{
          span: 16,
        }}
      >
        <Row className="mt-2">
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => saveGeneralInspection()}
            style={{ backgroundColor: blue.primary }}
          >
            Хадгалах
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
}
