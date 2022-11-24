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
  Divider,
} from "antd";
import { INPUT_HEIGHT } from "../../constant";

export default function DynamicFormInspection(props) {
  const { TextArea } = Input;
  const { Option } = Select;

  //antd FORM нь ингэж хадгалж чаддаг юм байна өөө : {[el.inspectionType, el.label]} => [object -н KEY, Param -ууд]
  //Жнь: question: {Асуумж: '22', checkchoose: Array(2), bodyStatus: 'heavy'} => Асуумжын Парамууд

  return (
    <>
      {props.data?.map((el, index) => {
        if (el.type === "textarea") {
          return (
            <div key={index} className="rounded-md bg-gray-100 w-max inline-block m-1">
              <div className="inline-flex p-1">
                <Form.Item
                  label=" "
                  name={[el.inspectionType, el.label]}
                  className="mb-0"
                >
                  <TextArea
                    rows={2}
                    cols={50}
                    placeholder={el.label}
                  />
                </Form.Item>
              </div>
            </div>
          );
        } else if (el.type === "title") {
          return (
            <div key={index}>
              <p className="mt-2 font-semibold">{el.label}</p>
              <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
            </div>
          );
        } else if (el.type === "input") {
          return (
            <div key={index} className="rounded-md bg-gray-100 w-max inline-block m-1">
              <div className="inline-flex p-1">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label]}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
          );
        } else if (el.type === "radio") {
          return (
            <div key={index} className="rounded-md bg-gray-100 w-max inline-block m-1">
              <div className="inline-flex p-1">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label]}
                  className="mb-0"
                >
                  <Radio.Group className="align-middle grid">
                    {el.options?.map((el, index) => {
                      return (
                        <Radio className="pl-1" value={el.label} key={index}>
                          {el.label}
                        </Radio>
                      );
                    })}
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
          );
        } else if (el.type === "checkbox") {
          return (
            <div key={index} className="rounded-md bg-gray-100 w-max inline-block m-1">
              <div className="inline-flex p-1">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label]}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                >
                  <Checkbox.Group className="align-middle grid">
                    {el.options?.map((el, index) => {
                      return (
                        <Checkbox className="pl-1 ml-0" value={el.label} key={index}>
                          {el.label}
                        </Checkbox>
                      );
                    })}
                  </Checkbox.Group>
                </Form.Item>
              </div>
            </div>
          );
        } else if (el.type === "dropdown") {
          return (
            <div key={index} className="rounded-md bg-gray-100 w-max inline-block m-1">
              <div className="inline-flex p-1">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.label]}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                >
                  <Select
                    style={{
                      width: '100%',
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
              </div>
            </div>
          );
        } else if (el.type === "date") {
          // console.log("dropdown", el);
          return (
            <Row align="middle" className="mb-1" key={index}>
              <Col span={24} className="text-left">
                <Form.Item
                  label={el.label}
                  name={[el.inspectionType, el.key, el.label]}
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
