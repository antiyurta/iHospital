import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Modal, Popconfirm } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Delete, Get } from "../../../comman";

function PatientForm() {
    const [searchField, setSearchField] = useState("");
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const [inpatientForm] = Form.useForm();
    const [inpatientForms, setInpatientForms] = useState([]);
    const [isInpatientModal, setIsInpatientModal] = useState(false);
    const filteredForm = inpatientForms.filter((form) => {
        return form.name.toLowerCase().includes(searchField.toLowerCase());
    });
    const showModal = () => {
        inpatientForm.resetFields();
        setIsInpatientModal(true);
    };
    const editModal = (form) => {
        console.log(form);
        // const newForm = [];
        // newForm['structureId'] = form.structureId;
        // newForm['cabinetId'] = form.cabinetId;
        // newForm['name'] = form.name;
        // newForm['title'] = form.title;
        // newForm['pain'] = form.formItem.pain;
        // newForm['inspection'] = form.formItem.inspection;
        // newForm['question'] = form.formItem.question;
        // newForm['plan'] = form.formItem.plan;
        // setEditMode(true);
        // setId(form.id);
        // setCabinetFilterValue(form.structureId);
        // SOAPForm.setFieldsValue(newForm);
        // setIsSOAPModal(true);
    };
    const deleteForm = async (id) => {
        const response = await Delete('emr/inspection-form/' + id, token, config);
        if (response === 200) {
            getInpatientForms();
        }
    }
    const getInpatientForms = async () => {
        // const response = await Get('')
    };
    useEffect(() => {
        getInpatientForms();
    }, []);
    return (
        <div>
            <div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <div className="mx-3">
                            <Input
                                placeholder="Хайх"
                                allowClear
                                onChange={(e) => setSearchField(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="mx-3">
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={() => showModal()}
                            >
                                Нэмэх
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 my-1">
                    {
                        filteredForm.map((form, index) => {
                            return (
                                <div key={index} className="w-full md:w-1/3 p-1">
                                    <Card
                                        className="custom-card"
                                        title={
                                            <>
                                                <p>{form.structure?.name}</p>
                                                <p>{form.cabinet?.name}</p>
                                            </>}
                                        size="small"
                                        extra={
                                            <div className='inline-flex'>
                                                <div className='px-2'>
                                                    <EditOutlined style={{ color: 'blue', fontSize: '18px' }} onClick={() => editModal(form)} />
                                                </div>
                                                <div className='px-2'>
                                                    <Popconfirm
                                                        title="Устгасан тохиолдолд сэргээх боломжгүй"
                                                        onConfirm={() => deleteForm(form.id)}
                                                        okText="Тийм"
                                                        cancelText="Үгүй"
                                                    >
                                                        <DeleteOutlined style={{ color: 'red', fontSize: '18px' }} />
                                                    </Popconfirm>
                                                </div>
                                            </div>
                                        }
                                    >
                                        {form.name}
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Modal
                open={isInpatientModal}
                onCancel={() => setIsInpatientModal(false)}
                onOk={() => inpatientForm.validateFields().then((values) => {
                    console.log(values);
                })}
            >
                <Form form={inpatientForm}>
                    
                </Form>
            </Modal>
        </div >
    )
}
export default PatientForm;