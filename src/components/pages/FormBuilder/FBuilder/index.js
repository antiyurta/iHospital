import { DeleteOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
const { TextArea } = Input;
function index({ options, namePanel, handleChange }) {
    return (
        <div>
            <Form.List name={namePanel}>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div key={key} className="rounded-md bg-gray-100 m-2">
                                <div className="p-2">
                                    <div className="flex flex-wrap">
                                        {
                                            options.map((option, index) => {
                                                return (
                                                    <div key={index} className="w-full md:w-5/12 p-1">
                                                        {
                                                            option.type === 'select' &&
                                                            <Form.Item
                                                                {...restField}
                                                                label={option.label}
                                                                name={[name, option.name]}
                                                                rules={option.rules}
                                                            >
                                                                <Select onChange={() => handleChange(namePanel, name)} options={option.selectData}></Select>
                                                            </Form.Item>
                                                        }
                                                        {
                                                            option.type === 'textarea' &&
                                                            <Form.Item
                                                                {...restField}
                                                                label={option.label}
                                                                name={[name, option.name]}
                                                                rules={option.rules}
                                                            >
                                                                <TextArea />
                                                            </Form.Item>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="basis-1/12 p-1 text-center">
                                            <DeleteOutlined style={{ color: 'red', fontSize: '18px' }} onClick={() => remove(name)} />
                                        </div>
                                    </div>
                                    <Form.List name={[name, 'options']}>
                                        {(optionFields, { add, remove }) => (
                                            <>
                                                <div className="flex flex-wrap">
                                                    {optionFields.map((optionField) => (
                                                        <div className="rounded-md bg-white m-2" key={optionField.key}>
                                                            <div className="p-2">
                                                                <Form.Item
                                                                    noStyle
                                                                    shouldUpdate
                                                                >
                                                                    {() => {
                                                                        return (
                                                                            <div className="basis-4/12 inline-flex p-1">
                                                                                <div className="p-1">
                                                                                    <Form.Item
                                                                                        {...optionField}
                                                                                        label="Хариулт"
                                                                                        name={[optionField.name, 'label']}
                                                                                        style={{ marginBottom: 0 }}
                                                                                    >
                                                                                        <Input />
                                                                                    </Form.Item>
                                                                                </div>
                                                                                <div className="p-1 text-center">
                                                                                    <PlusCircleOutlined style={{ color: 'green', fontSize: '18px', paddingRight: '6px' }} onClick={() => add()} />
                                                                                    <DeleteOutlined style={{ color: 'red', fontSize: '18px' }} onClick={() => remove(optionField.name)} />
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }}
                                                                </Form.Item>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </Form.List>
                                </div>
                            </div>
                        ))}
                        <Form.Item>
                            <Button className="bg-green-400" type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Талбар нэмэх
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}
export default index;