//EMR -> Явцын үзлэг -> Ерөнхий үзлэг
import React, { useState, useEffect } from "react";
import { Col, Radio, Row, Divider, Input, Button, Form } from "antd";
import { INPUT_HEIGHT } from "../../../constant";
import { blue } from "@ant-design/colors";
import axios from "axios";
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
      if (inspection) {
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
            <Radio.Group>
              <Radio value={0}>Дунд</Radio>
              <Radio value={1}>Хүндэвтэр</Radio>
              <Radio value={2}>Хүнд</Radio>
              <Radio value={3}>Маш хүнд</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="REASONABLE">Саруул</Radio>
              <Radio value="FADED">Бүдгэрсэн</Radio>
              <Radio value="UNREASONABLE">Ухаангүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="NORMAL">Хэвийн</Radio>
              <Radio value="UNNORMAL">Хэвийн бус</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Амьсгалын эрхтэн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="LUNG">Уушги цулцангийн</Radio>
              <Radio value="TUBE">Гуурсан хоолойн</Radio>
              <Radio value="IMPORTANT">Хэржигнүүртэй</Radio>
              <Radio value="SHORT_BREATH">Амьсгал сулавтар</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Цусны эргэлтийн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-left">
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
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
        <Col span={12} className="text-left">
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
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="NORMAL">Хэвийн</Radio>
              <Radio value="LARGER">Томорсон</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="BRIGHT">Тод</Radio>
              <Radio value="DIM">Бүдэг</Radio>
              <Radio value="DIMMY">Бүдгэвтэр</Radio>
              <Radio value="SMOOTH">Хэм жигд</Radio>
              <Radio value="UNEVEN">Жигд бус</Radio>
              <Radio value="HEMOLYSIS">Хэм алдалттай</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-left">
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
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
        <Col span={12} className="text-left">
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
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Хоол шингээх эрхтэн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="NORMAL">Ердийн</Radio>
              <Radio value="DRY">Хуурай</Radio>
              <Radio value="NO_COLORFUL">Өнгөргүй</Radio>
              <Radio value="COLORFUL">Өнгөртэй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="PALPATION">Өнгөц тэмтрэлтээр</Radio>
              <Radio value="DEEP_PALPATION">Гүн тэмтрэлтээр</Radio>
              <Radio value="HURFUL">Эмзэглэлтэй</Radio>
              <Radio value="NORMAL">Ердийн</Radio>
              <Radio value="MILD_PLEURAL">
                Зөөлөн гялтан цочрол үгүй
              </Radio>
              <Radio value="SYMTOMS_SHOCK">
                Гялтан цочролтын шинж илэрсэн
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Мэдрэлийн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="NORMAL">Хэвийн</Radio>
              <Radio value="DECREASED">Буурсан</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
            <Radio.Group>
              <Radio value="SAVED">Хадгалагдана</Radio>
              <Radio value="NOT_SAVED">Хадгалагдахгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
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
