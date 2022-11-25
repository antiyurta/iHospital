import { DeleteOutlined, EditOutlined, MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Form, Input, InputNumber, Modal, Pagination, Select, Switch } from "antd";
import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Delete, Get, Patch, Post } from "../../comman";

const { Option } = Select;
const { TextArea } = Input;

function Medicine() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const [medicines, setMedicines] = useState([]);
    const [meta, setMeta] = useState([]);
    const [id, setId] = useState(Number);
    const [atcCategories, setAtcCategories] = useState([]);
    const [medTreatmentTypes, setMedTreatmentTypes] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [pregnancyWarning, setPregnancyWarnings] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isOpenMedicineModal, setIsOpenMedicineModal] = useState(false);
    const [medicineForm] = Form.useForm();

    const editModal = async (id) => {
        setEditMode(true);
        setId(id);
        const response = await Get('service/medicine/' + id, token, config);
        if (response.length != 0) {
            medicineForm.setFieldsValue(response);
            setIsOpenMedicineModal(true);
        }
    };
    const deleteModal = (id) => {
        Modal.error({
            title: "Устгах",
            okText: "Устгах",
            closable: true,
            content: <div>Устгасан дохиолдолд дахин сэргэхгүй болно</div>,
            async onOk() {
                await Delete("service/medicine/" + id, token, config);
                getMedicines(1);
            },
        });
    };
    const onFinish = async (values) => {
        if (editMode) {
            const response = await Patch('service/medicine/' + id, token, config, values);
            if (response === 200) {
                setIsOpenMedicineModal(false);
            }
        } else {
            const response = await Post('service/medicine', token, config, values);
            if (response === 201) {
                setIsOpenMedicineModal(false);
            }
        }
    };
    const getAtcCategory = async () => {
        config.params.type = 1;
        const response = await Get('medicine/reference', token, config);
        setAtcCategories(response.data);
    };
    const getMedTreatmentTypes = async () => {
        config.params.type = 2;
        const response = await Get('medicine/reference', token, config);
        setMedTreatmentTypes(response.data);
    };
    const getMeasurements = async () => {
        config.params.type = 3;
        const response = await Get('medicine/reference', token, config);
        setMeasurements(response.data);
    };
    const getPregnancyWarnings = async () => {
        config.params.type = 4;
        const response = await Get('medicine/reference', token, config);
        setPregnancyWarnings(response.data);
    };
    const getMedicines = async (page) => {
        setSpinner(false);
        config.params.page = page;
        config.params.limit = 10;
        const response = await Get('service/medicine', token, config);
        if (response.data.length > 0) {
            setMedicines(response.data);
            setMeta(response.meta);
            setSpinner(true);
        }
    };
    const getTreatment = (value) => {
        var data = medTreatmentTypes.filter((e) => e.id === value);
        return data[0]?.name;
    };
    const getATC = (value) => {
        var data = atcCategories.filter(e => e.id === value);
        return data[0]?.name;
    };
    useEffect(() => {
        getMedicines(1);
        getAtcCategory();
        getMedTreatmentTypes();
        getMeasurements();
        getPregnancyWarnings();
    }, []);
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <Card
                    bordered={false}
                    className="header-solid max-h-max rounded-md"
                    title={'Medicine'}
                    extra={
                        <>
                            <Button onClick={() => {
                                setIsOpenMedicineModal(true); setEditMode(false);
                                // medicineForm.resetFields();
                            }}>Нэмэх</Button>
                        </>
                    }
                >
                    <div className='table-responsive p-4' id='style-8'>
                        <Table className='ant-border-space' style={{ width: '100%' }}>
                            <thead className='ant-table-thead bg-slate-200'>
                                <tr>
                                    <th className="font-bold text-sm align-middle">№</th>
                                    <th className="font-bold text-sm align-middle">Эмийн код</th>
                                    <th className="font-bold text-sm align-middle">Олон улсын нэршил</th>
                                    <th className="font-bold text-sm align-middle">Эмийн нэр</th>
                                    <th className="font-bold text-sm align-middle">Эмийн хэлбэр</th>
                                    <th className="font-bold text-sm align-middle">Тун</th>
                                    <th className="font-bold text-sm align-middle">ATC ангилал</th>
                                    <th className="font-bold text-sm align-middle">Эмчилгээний төрөл</th>
                                    <th className="font-bold text-sm align-middle">Үнэ</th>
                                    <th className="font-bold text-sm align-middle">Идэвхтэй эсэх</th>
                                </tr>
                            </thead>
                            <tbody className='ant-table-tbody p-0'>
                                {spinner ?
                                    medicines?.map((medicine, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{medicine.code}</td>
                                                <td>{medicine.iName}</td>
                                                <td>{medicine.name}</td>
                                                <td>{getTreatment(medicine.medTreatmentId)}</td>
                                                <td>{ }</td>
                                                <td>{getATC(medicine.atcCategoryId)}</td>
                                                <td>
                                                    <Button type="link" onClick={() => editModal(medicine.id)} title='Засах' style={{ paddingRight: 5, paddingLeft: 5 }}><EditOutlined /></Button>
                                                    <Button type="link" onClick={() => deleteModal(medicine.id)} title="Устгах" style={{ paddingLeft: 5 }}><DeleteOutlined style={{ color: "red" }} /></Button>
                                                </td>
                                            </tr>
                                        )
                                    }) :
                                    <tr>
                                        <td colSpan={11} size='lg' style={{ backgroundColor: 'white', textAlign: 'center' }}>
                                            <Spinner animation='grow' style={{ color: '#1890ff' }} />
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </div>
                    <div>
                        <Pagination
                            className='pagination'
                            pageSize={10}
                            total={meta.itemCount}
                            onChange={getMedicines}
                        />
                    </div>
                </Card>
            </div >
            <Modal
                title={editMode ? "Эм засах" : "Эм нэмэх"}
                open={isOpenMedicineModal}
                onOk={() => medicineForm.validateFields().then((values) => {
                    onFinish(values);
                })}
                onCancel={() => { setIsOpenMedicineModal(false) }}
                width={'80%'}
                cancelText="Болих"
                okText="Хадгалах"
            >
                <Form form={medicineForm} labelAlign={"right"}>
                    <fieldset className='scheduler-border'>
                        <legend className='scheduler-border'>Эмийн ерөнхий мэдээлэл</legend>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Эмийн код"
                                    name="code"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал",
                                        }
                                    ]}
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Олон улсын нэршил"
                                    name="iName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал",
                                        }
                                    ]}
                                    labelCol={{ span: 9 }}
                                    wrapperCol={{ span: 15 }}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Эмийн нэр"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал",
                                        }
                                    ]}
                                    labelCol={{ span: 9 }}
                                    wrapperCol={{ span: 15 }}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="ATC код"
                                    name="atcCategoryId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Select>
                                        {
                                            atcCategories?.map((atc, index) => {
                                                return (
                                                    <Option key={index} value={atc.id}>{atc.name}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Эмийн хэлбэр"
                                    name="medTreatmentId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                    labelCol={{ span: 9 }}
                                    wrapperCol={{ span: 15 }}
                                >
                                    <Select>
                                        {
                                            medTreatmentTypes?.map((type, index) => {
                                                return (
                                                    <Option key={index} value={type.id}>{type.name}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Хэмжих нэгж"
                                    name="measurementId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                    labelCol={{ span: 9 }}
                                    wrapperCol={{ span: 15 }}
                                >
                                    <Select>
                                        {
                                            measurements?.map((measurement, index) => {
                                                return (
                                                    <Option key={index} value={measurement.id}>{measurement.name}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="1 удаагийн тун"
                                    name="dose"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="1 Өдрийн тун"
                                    name="dayDose"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                    labelCol={{ span: 9 }}
                                    wrapperCol={{ span: 15 }}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Эмчилгээний төрөл"
                                    name="medicineType"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал",
                                        }
                                    ]}
                                    labelCol={{ span: 9 }}
                                    wrapperCol={{ span: 15 }}
                                >
                                    <Select>
                                        <Option value={1}>Энгийн</Option>
                                        <Option value={2}>Сэтгэц нөлөөт</Option>
                                        <Option value={3}>Антибиотик</Option>
                                        <Option value={4}>Мансууруулах</Option>
                                        <Option value={5}>Өндөр эрсдэлтэй эм</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Хадгалах нөхцөл"
                                    name="storageType"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал",
                                        }
                                    ]}
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Select>
                                        <Option value={1}>Тасалгаанд</Option>
                                        <Option value={2}>Тасалгаанд гэрлээс хамгаалж</Option>
                                        <Option value={3}>Хөргөгчинд</Option>
                                        <Option value={4}>Тугалган цаасанд ороож</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-full lg:w-2/3 px-1">
                                <Form.Item
                                    label="Задгайгаар зарлагдах эсэх"
                                    name="isExpenditure"
                                    valuePropName="checked"
                                >
                                    <Switch
                                        className="bg-sky-700"
                                        checkedChildren="Тийм"
                                        unCheckedChildren="Үгүй"
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className='scheduler-border'>
                        <legend className='scheduler-border'>Худалдан авалтын мэдээлэл</legend>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Хаана ашиглах"
                                    name="usageType"
                                >
                                    <Select>
                                        <Option value="OUT">Амбултори</Option>
                                        <Option value="IN">Хэвтэн</Option>
                                        <Option value="DAY_TREATMENT">Өдрийн эмчилгээ</Option>
                                        <Option value="TRADITIONAL">Уламжлалт</Option>
                                        <Option value="ALL">Бүгд</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Даатгалд хамаарах эсэх"
                                    name="isInsurance"
                                    valuePropName="checked"
                                    labelCol={{ span: 16 }}
                                    wrapperCol={{ span: 8 }}
                                >
                                    <Switch
                                        className="bg-sky-700"
                                        checkedChildren="Тийм"
                                        unCheckedChildren="Үгүй"
                                    />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Амбулторийн үнэ"
                                    name="price"
                                    labelCol={{ span: 10 }}
                                    wrapperCol={{ span: 14 }}
                                >
                                    <InputNumber />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Стационар хөнгөлөлттэй эсэх"
                                    name="isInDiscount"
                                    valuePropName="checked"
                                >
                                    <Switch
                                        className="bg-sky-700"
                                        checkedChildren="Тийм"
                                        unCheckedChildren="Үгүй"
                                    />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Идэвхтэй эсэх"
                                    name="isActiveMedicine"
                                    valuePropName="checked"
                                    labelCol={{ span: 16 }}
                                    wrapperCol={{ span: 8 }}
                                >
                                    <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Хэвтэн эмчлүүлэх үнэ"
                                    name="inpatientPrice"
                                >
                                    <InputNumber />
                                </Form.Item>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className='scheduler-border'>
                        <legend className='scheduler-border'>DUR шалгуур</legend>
                        <div className="flex flex-wrap">
                            <div className="w-full px-1">
                                <Form.Item
                                    label="Жирэмсэний сэрэжлүүлэг"
                                    name="pregnancyWarningId"
                                >
                                    <Select>
                                        {
                                            pregnancyWarning?.map((pregnancy, index) => {
                                                return (
                                                    <Option key={index} value={pregnancy.id}>{pregnancy.name}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Насны Дээд"
                                    name="maxAge"
                                >
                                    <InputNumber />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Насны Дooд"
                                    name="minAge"
                                >
                                    <InputNumber />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Өдөр хэрэглэх дээд хэмжээ"
                                    name="dayMaxDose"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                                <Form.Item
                                    label="Хэрэглэх хугацаа"
                                    name="usageTime"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="w-full px-1">
                                <label className="font-bold" style={{ fontSize: '12px' }}>Хамт хэрэглэж болохгүй эм</label>
                                <Form.List name="durs">
                                    {
                                        (fields, { add, remove }) => (
                                            <>
                                                {fields.map(({ key, name, ...restField }) => (
                                                    <div key={key} className="rounded-md m-2" style={{ backgroundColor: '#fafafa' }}>
                                                        <div className="p-2">
                                                            <Form.Item
                                                                {...restField}
                                                                label="Эмийн нэр"
                                                                name={[name, "medicineDurId"]}
                                                            >
                                                                <Select>
                                                                    {
                                                                        medicines.map((item, index) => {
                                                                            return (
                                                                                <Option key={index} value={item.id}>{item.name}</Option>
                                                                            )
                                                                        })
                                                                    }
                                                                </Select>
                                                            </Form.Item>
                                                            <Form.Item
                                                                {...restField}
                                                                label="Анхааруулах мессиж"
                                                                name={[name, "message"]}
                                                            >
                                                                <TextArea />
                                                            </Form.Item>
                                                            <DeleteOutlined style={{ color: 'red', fontSize: '18px' }} onClick={() => remove(name)} />
                                                        </div>
                                                    </div>
                                                ))}
                                                <Form.Item>
                                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                        Add field
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )
                                    }
                                </Form.List>
                            </div>
                        </div>
                    </fieldset>
                </Form>
            </Modal>
        </div >
    )
}
export default Medicine;