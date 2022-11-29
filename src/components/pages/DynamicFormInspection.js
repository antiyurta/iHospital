import React from "react";
import {
  Col,
  Row,
  Input,
  Form,
  Radio,
  Checkbox,
  Select,
  DatePicker,
  Button,
  AutoComplete,
} from "antd";
import { Table } from "react-bootstrap";
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/authReducer";
import { Get } from "../comman";

export default function DynamicFormInspection(props) {
  const { TextArea } = Input;
  const { Option } = Select;
  //antd FORM нь ингэж хадгалж чаддаг юм байна өөө : {[el.inspectionType, el.label]} => [object -н KEY, Param -ууд]
  //Жнь: question: {Асуумж: '22', checkchoose: Array(2), bodyStatus: 'heavy'} => Асуумжын Парамууд

  const DiagnoseType = [
    {
      label: "Үндсэн",
      value: 0,
    },
    {
      label: "Урьдчилсан",
      value: 1,
    },
    {
      label: "Хүндрэл",
      value: 2,
    },
    {
      label: "Үйлдийн онош",
      value: 3,
    },
    {
      label: "Хавсрах онош",
      value: 4,
    },
  ];
  const DiagnoseData = [
    {
      code: "Aa0.1",
      nameMn: "asdas",
      nameEn: "sadsa",
      nameRu: 'SAdsa'
    },
    {
      code: "Aa0.2",
      nameMn: "asdas",
      nameEn: "sadsa",
      nameRu: 'SAdsa'
    }
  ];
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const [options, setOptions] = useState([]);
  const [diagnoseData, setDiagnoseData] = useState([]);
  const handleSearch = (value) => {
    const data = diagnoseData.filter((data) => {
      return data.code.toLowerCase().includes(value.toLowerCase());
    });
    setOptions(data);
  };
  const handleSelect = (value) => {
    const selectedData = diagnoseData.find(e => e.code === value);

  };
  const getDiagnoses = async () => {
    const response = await Get('reference/diagnose', token, config);
    setDiagnoseData(response.data);
  };
  useEffect(() => {
    getDiagnoses();
  }, []);

  return (
    <>
      {props.data?.map((el, index) => {
        console.log("======>", props.data);
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
        } else if (el.type === 'diagnose') {
          return (
            <div key={index} className="rounded-md bg-gray-100 inline-block m-1">
              <div className="inline-flex p-1">
                <Form.List name={[el.inspectionType, el.label]}>
                  {
                    (fields, { add, remove }) => (
                      <>
                        <div className='table-responsive p-4' id='style-8'>
                          <Table className='ant-border-space '>
                            <thead className='ant-table-thead bg-slate-200'>
                              <tr>
                                <th>Код</th>
                                <th>Монгол нэр</th>
                                <th>Англи нэр</th>
                                <th>Орос нэр</th>
                                <th>Төрөл</th>
                                <th>Үйлдэл</th>
                              </tr>
                            </thead>
                            <tbody>
                              {fields.map(({ key, name, }) => (
                                <tr key={key}>
                                  <td>
                                    <Form.Item
                                      name={[name, 'code']}
                                    >
                                      <AutoComplete style={{ width: 200 }} onSearch={handleSearch} onSelect={handleSelect}>
                                        {
                                          options.map((option, key) => {
                                            return (
                                              <Option key={key} value={option.code}>{option.code}</Option>
                                            )
                                          })
                                        }
                                      </AutoComplete>
                                    </Form.Item>
                                  </td>
                                  <td>
                                    <Form.Item
                                      name={[name, 'nameMn']}
                                    >
                                      <Input disabled={true} />
                                    </Form.Item>
                                  </td>
                                  <td>
                                    <Form.Item
                                      name={[name, 'nameEn']}
                                    >
                                      <Input disabled={true} />
                                    </Form.Item>
                                  </td>
                                  <td>
                                    <Form.Item
                                      name={[name, 'nameRu']}
                                    >
                                      <Input disabled={true} />
                                    </Form.Item>
                                  </td>
                                  <td>
                                    <Form.Item
                                      name={[name, 'type']}
                                      style={{ width: 150 }}
                                    >
                                      <Select options={DiagnoseType} />
                                    </Form.Item>
                                  </td>
                                  <td>
                                    <DeleteOutlined style={{ color: 'red', fontSize: '18px' }} onClick={() => remove(name)} />
                                  </td>
                                </tr>
                              ))}
                              <Form.Item>
                                <PlusCircleOutlined style={{ color: 'green', fontSize: '18px', paddingRight: '6px' }} onClick={() => add()} />
                              </Form.Item>
                            </tbody>
                          </Table>
                        </div>
                      </>
                    )
                  }
                </Form.List>
              </div>
            </div>
          )
        }
      })}
    </>
  );
}
