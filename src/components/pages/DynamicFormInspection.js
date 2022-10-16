import React, { useEffect, useRef } from "react";
import {
  Col,
  Row,
  Input,
  Form,
  Radio,
  Checkbox,
  Select,
  DatePicker,
} from "antd";
import { INPUT_HEIGHT } from "../../constant";
import { Editor } from "@tinymce/tinymce-react";

export default function DynamicFormInspection(props) {
  const { TextArea } = Input;
  const { Option } = Select;
  const editorRef = useRef(null);
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  //antd FORM нь ингэж хадгалж чаддаг юм байна өөө : {[el.inspectionType, el.label]} => [object -н KEY, Param -ууд]
  //Жнь: question: {Асуумж: '22', checkchoose: Array(2), bodyStatus: 'heavy'} => Асуумжын Парамууд

  return (
    <>
      {props.data?.map((el, index) => {
        if (el.type === "textarea") {
          return (
            <Row align="middle" className="mb-1" key={index}>
              <Col span={24} className="text-left">
                <Form.Item
                  label=""
                  name={[el.inspectionType, el.label, el.key]}
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
        } else if (el.type === "input") {
          return (
            <Row align="middle" className="mb-1" key={index}>
              <Col span={24} className="text-left">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label, el.key]}
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
          );
        } else if (el.type === "radio") {
          // console.log("RADIO", el);
          return (
            <Row align="middle" className="mb-1" key={index}>
              <Col span={24} className="text-left">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label, el.key]}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                  wrapperCol={{
                    span: 10,
                  }}
                  labelCol={{
                    span: 8,
                  }}
                >
                  <Radio.Group>
                    {el.options?.map((el, index) => {
                      return (
                        <Radio value={el.value} key={index}>
                          {el.label}
                        </Radio>
                      );
                    })}
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
          );
        } else if (el.type === "checkbox") {
          // console.log("checkbox", el);
          return (
            <Row align="middle" className="mb-1" key={index}>
              <Col span={24} className="text-left">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label, el.key]}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                  wrapperCol={{
                    span: 16,
                  }}
                  labelCol={{
                    span: 8,
                  }}
                >
                  <Checkbox.Group>
                    {el.options?.map((el, index) => {
                      return (
                        <Checkbox value={el.value} key={index}>
                          {el.label}
                        </Checkbox>
                      );
                    })}
                  </Checkbox.Group>
                </Form.Item>
              </Col>
            </Row>
          );
        } else if (el.type === "dropdown") {
          // console.log("dropdown", el);
          return (
            <Row align="middle" className="mb-1" key={index}>
              <Col span={24} className="text-left">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label, el.key]}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                  wrapperCol={{
                    span: 16,
                  }}
                  labelCol={{
                    span: 8,
                  }}
                >
                  <Select
                    style={{
                      width: 120,
                    }}
                  >
                    {el.options?.map((el, index) => {
                      return (
                        <Option value={el.value} key={index}>
                          {el.label}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          );
        } else if (el.type === "date") {
          // console.log("dropdown", el);
          return (
            <Row align="middle" className="mb-1" key={index}>
              <Col span={24} className="text-left">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label, el.key]}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                  wrapperCol={{
                    span: 16,
                  }}
                  labelCol={{
                    span: 8,
                  }}
                >
                  <DatePicker placeholder="Сонгох" />
                </Form.Item>
              </Col>
            </Row>
          );
        } else if (el.type === "editor") {
          // console.log("dropdown", el);
          return (
            <Row align="middle" className="mb-1" key={index}>
              <Col span={24} className="text-left">
                <Form.Item
                  label={el.label}
                  name={el.key}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                  wrapperCol={{
                    span: 16,
                  }}
                  labelCol={{
                    span: 8,
                  }}
                >
                  {/* <Editor
                    apiKey="1496a5008b4dxdff26l7a8l3lx338v4e022taav81h0q0wnz"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                      height: 200,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                    onChange={(e) => handleEditorChange(e)}
                    disabled
                  /> */}
                </Form.Item>
              </Col>
            </Row>
          );
        }
      })}
    </>
  );
}
