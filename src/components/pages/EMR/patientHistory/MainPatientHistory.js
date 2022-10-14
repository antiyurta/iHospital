import React, { useCallback, useState, useEffect } from "react";
import { Tabs, Tag, Col, Radio, Row, Input, Button, Form } from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import GeneralInspection from "../GeneralInspection";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import axios from "axios";
import { blue } from "@ant-design/colors";

export default function MainPatientHistory() {
  const { CheckableTag } = Tag;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [selectedTags, setSelectedTags] = useState({
    value: 0,
    label: "Төрөлт, өсөлт бойжилт",
  });
  const [tabs, setTabs] = useState([]);
  const [validStep, setValidStep] = useState(false);

  const token = useSelector(selectCurrentToken);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  const handleChange = (tag, checked) => {
    setSelectedTags(tag);
  };
  useEffect(() => {
    getInspectionTabs();
  }, []);

  const tagsData = [
    { value: 0, label: "Төрөлт, өсөлт бойжилт" },
    { value: 1, label: "Өвчний түүх" },
    { value: 2, label: "Амьдралын хэв маяг" },
    { value: 3, label: "Амьдралын нөхцөл" },
    { value: 4, label: "Харшил" },
    { value: 5, label: "Эмийн хэрэглээ" },
    { value: 6, label: "Тархвар зүйн асуумж" },
    { value: 7, label: "Удамшлын асуумж" },
  ];

  const Tab1Content = () => {
    return (
      <div className="items-center">
        {tagsData.map((tag, index) => {
          return (
            <CheckableTag
              key={tag.value}
              checked={selectedTags.value == tag.value}
              onChange={(checked) => handleChange(tag, checked)}
              color="red"
              style={{
                backgroundColor:
                  selectedTags.value == tag.value ? "#1890ff" : "#d9d9d9",
                marginBottom: 5,
              }}
            >
              {tag.label}
            </CheckableTag>
          );
        })}
        {selectedTags.value == tagsData[0].value ? (
          <Step1 nextBtn={() => handleChange(tagsData[1])} />
        ) : null}
        {selectedTags.value == tagsData[1].value ? (
          <Step2
            nextBtn={() => handleChange(tagsData[2])}
            backBtn={() => handleChange(tagsData[0])}
          />
        ) : null}
        {selectedTags.value == tagsData[2].value ? (
          <Step3
            nextBtn={() => handleChange(tagsData[3])}
            backBtn={() => handleChange(tagsData[1])}
          />
        ) : null}
        {selectedTags.value == tagsData[3].value ? (
          <Step4
            nextBtn={() => handleChange(tagsData[4])}
            backBtn={() => handleChange(tagsData[2])}
          />
        ) : null}
        {selectedTags.value == tagsData[4].value ? (
          <Step5
            nextBtn={() => handleChange(tagsData[5])}
            backBtn={() => handleChange(tagsData[3])}
          />
        ) : null}
        {selectedTags.value == tagsData[5].value ? (
          <Step6
            nextBtn={() => handleChange(tagsData[6])}
            backBtn={() => handleChange(tagsData[4])}
          />
        ) : null}
        {selectedTags.value == tagsData[6].value ? (
          <Step7
            nextBtn={() => handleChange(tagsData[7])}
            backBtn={() => handleChange(tagsData[5])}
          />
        ) : null}
        {selectedTags.value == tagsData[7].value ? (
          <Step8
            nextBtn={() => console.log("SAVED")}
            backBtn={() => handleChange(tagsData[6])}
          />
        ) : null}
      </div>
    );
  };
  const Tab2Content = useCallback(() => {
    return <GeneralInspection />;
  }, []);

  const DynamicTabContent = useCallback((props) => {
    console.log("props", props.data);
    return (
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={saveDynamicTab}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="left"
        scrollToFirstError
        form={form}
      >
        {props.data?.map((el, index) => {
          if (el.type === "textarea") {
            return (
              <Row align="middle" className="mb-1" key={index}>
                <Col span={24} className="text-left">
                  <Form.Item
                    label=""
                    name={el.inspectionType}
                    rules={[{ required: false, message: "" }]}
                    className="mb-0"
                    wrapperCol={{
                      span: 24,
                    }}
                    labelCol={{
                      span: 8,
                    }}
                  >
                    <TextArea
                      rows={2}
                      style={{ padding: 5, marginBottom: 5 }}
                      placeholder={el.label}
                    />
                  </Form.Item>
                </Col>
              </Row>
            );
          } else {
            return (
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
            );
          }
        })}

        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Row className="mt-2">
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => validStep && saveDynamicTab()}
              style={{ backgroundColor: blue.primary }}
            >
              Хадгалах
            </Button>
          </Row>
        </Form.Item>
      </Form>
    );
  }, []);

  const saveDynamicTab = (values) => {
    console.log("saveDynamicTab values: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setValidStep(false);
  };
  const [items, setItems] = useState([
    {
      label: "Өвчтөний түүх",
      key: "item-history",
      children: <Tab1Content />,
    },
    {
      label: "Ерөнхий үзлэг",
      key: "item-general-inspection",
      children: <Tab2Content />,
    },
  ]);
  const getInspectionTabs = () => {
    //Тухайн эмчид харагдах TAB ууд
    axios({
      method: "get",
      url: `${DEV_URL}emr/inspection-form`,
      params: {
        structureId: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("res getInspectionTabs", response.data.response.data);
        setTabs(response.data.response.data);
      })
      .catch(function (error) {
        console.log("response error", error.response);
      });
  };

  useEffect(() => {
    //Тухайн эмчид харагдах TAB уудыг харуулах
    tabs.map((el) => {
      console.log("el", el);
      setItems((items) => [
        ...items,
        {
          label: el.name,
          key: `item-${el.id}`,
          children: <DynamicTabContent data={el.formItems} />,
        },
      ]);
    });
  }, [tabs]);
  return <Tabs items={items} />;
}
