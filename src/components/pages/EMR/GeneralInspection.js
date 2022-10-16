//EMR -> Явцын үзлэг -> Ерөнхий үзлэг
import React, { useState, useEffect } from "react";
import { Col, Radio, Row, Divider, Input, Button, Form } from "antd";
import { INPUT_HEIGHT } from "../../../constant";
import { blue } from "@ant-design/colors";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";

export default function GeneralInspection(props) {
  const token = useSelector(selectCurrentToken);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  const { TextArea } = Input;
  const [validStep2, setValidStep2] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    getGeneralInspection();
  }, []);

  const saveGeneralInspection = (values) => {
    // console.log("saveGeneral Inspection values: ", values);
    values["patientId"] = 43;
    axios({
      method: "post",
      url: `${DEV_URL}emr/general-inspection`,
      data: values,
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("response error", error.response);
      });
  };

  const getGeneralInspection = () => {
    axios({
      method: "get",
      url: `${DEV_URL}emr/general-inspection`,
      params: {
        patientId: 43,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        // console.log(
        //   "response getGeneralInspection",
        //   response.data.response.data
        // );
        form.setFieldsValue(response.data.response.data[0]);
      })
      .catch(function (error) {
        // console.log("response error", error.response);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setValidStep2(false);
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={saveGeneralInspection}
      onFinishFailed={onFinishFailed}
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
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Дунд">Дунд</Radio>
              <Radio value="Хүндэвтэр">Хүндэвтэр</Radio>
              <Radio value="Хүнд">Хүнд</Radio>
              <Radio value="Маш хүнд">Маш хүнд</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Ухаан санаа"
            name="mind"
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Саруул">Саруул</Radio>
              <Radio value="Бүдгэрсэн">Бүдгэрсэн</Radio>
              <Radio value="Ухаангүй">Ухаангүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Арьс салст"
            name="skin"
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Хэвийн">Хэвийн</Radio>
              <Radio value="Хэвийн бус">Хэвийн бус</Radio>
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
            rules={[{ required: false, message: "" }]}
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
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 18,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Уушги цулцангийн">Уушги цулцангийн</Radio>
              <Radio value="Гуурсан хоолойн">Гуурсан хоолойн</Radio>
              <Radio value="Хэржигнүүртэй">Хэржигнүүртэй</Radio>
              <Radio value="Амьсгал сулавтар">Амьсгал сулавтар</Radio>
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
            rules={[{ required: false, message: "" }]}
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
            rules={[{ required: false, message: "" }]}
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
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 18,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Хэвийн">Хэвийн</Radio>
              <Radio value="Томорсон">Томорсон</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Чагналтаар /Зүрхний авиа/"
            name="heartSound"
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 18,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Тод">Тод</Radio>
              <Radio value="Бүдэг">Бүдэг</Radio>
              <Radio value="Бүдгэвтэр">Бүдгэвтэр</Radio>
              <Radio value="Хэм жигд">Хэм жигд</Radio>
              <Radio value="Жигд бус">Жигд бус</Radio>
              <Radio value="Хэм алдалттай">Хэм алдалттай</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-left">
          <Form.Item
            label="АД баруун талд"
            name="heartBPRight"
            rules={[{ required: false, message: "" }]}
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
            rules={[{ required: false, message: "" }]}
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
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 18,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Ердийн">Ердийн</Radio>
              <Radio value="Хуурай">Хуурай</Radio>
              <Radio value="Өнгөргүй">Өнгөргүй</Radio>
              <Radio value="Өнгөртэй">Өнгөртэй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Хэвлийн үзлэг"
            name="abdomen"
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 18,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Өнгөц тэмтрэлтээр">Өнгөц тэмтрэлтээр</Radio>
              <Radio value="Гүн тэмтрэлтээр">Гүн тэмтрэлтээр</Radio>
              <Radio value="Эмзэглэлтэй">Эмзэглэлтэй</Radio>
              <Radio value="Ердийн">Ердийн</Radio>
              <Radio value="Зөөлөн гялтан цочрол үгүй">
                Зөөлөн гялтан цочрол үгүй
              </Radio>
              <Radio value="Гялтан цочролтын шинж илэрсэн">
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
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 18,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Хэвийн">Хэвийн</Radio>
              <Radio value="Буурсан">Буурсан</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Рефлексүүд"
            name="reflex"
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 18,
            }}
            labelCol={{
              span: 8,
            }}
          >
            <Radio.Group>
              <Radio value="Хадгалагдана">Хадгалагдана</Radio>
              <Radio value="Хадгалагдахгүй">Хадгалагдахгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label=""
            name="other"
            rules={[{ required: false, message: "" }]}
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
            rules={[{ required: false, message: "" }]}
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
            onClick={() => validStep2 && saveGeneralInspection()}
            style={{ backgroundColor: blue.primary }}
          >
            Хадгалах
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
}
