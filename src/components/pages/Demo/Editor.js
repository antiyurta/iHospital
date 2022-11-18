import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, Patch, Post } from "../../comman";
import { Editor } from '@tinymce/tinymce-react';
import { Button, Card, Descriptions, Form, Input, Modal, PageHeader, Select } from "antd";

//
import data from './demo.json';
//

const { Option } = Select;
function Editors() {
    const IncomeReportId = useLocation().state?.reportId;
    const navigate = useNavigate();
    const token = useSelector(selectCurrentToken);
    const editorRef = useRef(null);
    const config = {
        headers: {},
        params: {}
    }

    const [content, setContent] = useState([]);
    const [appId, setAppId] = useState(0);
    const [depId, setDepId] = useState(0);
    const [name, setName] = useState('');

    // checkbox start
    const [isOpenCheckbox, setIsOpenCheckbox] = useState(false);
    const [chechboxForm] = Form.useForm();
    // checkbox end
    // radio start
    const [isOpenRadio, setIsOpenRadio] = useState(false);
    const [radioForm] = Form.useForm();
    // radio end
    // input start
    const [isOpenInput, setIsOpenInput] = useState(false);
    const [inputForm] = Form.useForm();
    // input end

    const getReport = async () => {
        const response = await Get('report/' + IncomeReportId, token, config);
        setAppId(response.appId);
        setDepId(response.depId);
        setName(response.name);
        setContent(response.description);
    }
    const save = async () => {
        const data = editorRef.current.getContent();
        const response = await Patch('report/' + IncomeReportId, token, config, {
            name: name,
            appId: appId,
            depId: depId,
            description: data,
        });
    }

    const changeName = (value) => {
        setName(value);
    }
    const dada = (e) => {
        const code = e.current.innerHTML;
        console.log(code);
    }
    const ddi = (e) => {
        const dad = document.getElementById('dada');
        const dd = document.editor.
            console.log(dad);
    }
    const click = () => {
        editorRef.current.insertContent(`<input type="radio" id="html" name="fav_language" value="HTML">
        <label for="html">HTML</label><br>`);
    }

    useEffect(() => {
        getReport();
    }, [IncomeReportId])
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => navigate('/reports')}
                title="Маягтууд"
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Нэр"><Input value={name} onChange={(e) => changeName(e.target.value)} /></Descriptions.Item>
                </Descriptions>
            </PageHeader>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/5 p-1">
                    <Card
                        bordered={false}
                        className="header-solid max-h-max rounded-md"
                        title={'Toolbars'}
                    >
                        <Button className="w-full m-1" onClick={() => { setIsOpenCheckbox(true); chechboxForm.resetFields(); }}>CHECKBOX</Button>
                        <Button className="w-full m-1" onClick={() => { setIsOpenRadio(true); radioForm.resetFields(); }}>RADIO</Button>
                        <Button className="w-full m-1" onClick={() => { setIsOpenInput(true); inputForm.resetFields(); }}>INPUT</Button>
                        <Button className='bg-sky-700' onClick={save}>Хадгалах</Button>
                    </Card>
                </div>
                <div className="w-full md:w-4/5 p-1">
                    <div className='page'>
                        {
                            <p>Нэр: <Input value={name} onChange={(e) => changeName(e.target.value)} /></p>
                        }
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue={content}
                            init={{
                                height: 500,
                                menubar: true,
                                table_tab_navigation: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | fontsizeselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:10px }'
                            }}
                        />
                    </div>
                </div>
            </div>
            <Modal
                open={isOpenCheckbox}
                title="ChechBox nemeh"
                onOk={() => chechboxForm.validateFields()
                    .then((values) => {
                        editorRef.current.insertContent(
                            `<input type="checkbox">${values.word}</input>`
                        );
                        setIsOpenCheckbox(false);
                    })
                    .catch((error) => { console.log(error); })
                }
                onCancel={() => setIsOpenCheckbox(false)}
            >
                <Form form={chechboxForm}>
                    <Form.Item
                        label="Нэр"
                        name="word"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Түлхүүр"
                        name="keyWord"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                open={isOpenRadio}
                title="Radio nemeh"
                onOk={() => radioForm.validateFields()
                    .then((values) => {
                        editorRef.current.insertContent(
                            `<input type="radio" name="${values.keyWord}">${values.word}</input>`
                        );
                        setIsOpenRadio(false);
                    })
                    .catch((error) => { console.log(error); })
                }
                onCancel={() => setIsOpenRadio(false)}
            >
                <Form form={radioForm}>
                    <Form.Item
                        label="Нэр"
                        name="word"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Түлхүүр"
                        name="keyWord"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                open={isOpenRadio}
                title="Radio nemeh"
                onOk={() => radioForm.validateFields()
                    .then((values) => {
                        editorRef.current.insertContent(
                            `<input type="radio" name="${values.keyWord}">${values.word}</input>`
                        );
                        setIsOpenRadio(false);
                    })
                    .catch((error) => { console.log(error); })
                }
                onCancel={() => setIsOpenRadio(false)}
            >
                <Form form={radioForm}>
                    <Form.Item
                        label="Нэр"
                        name="word"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Түлхүүр"
                        name="keyWord"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                open={isOpenInput}
                title="Radio nemeh"
                onOk={() => inputForm.validateFields()
                    .then((values) => {
                        editorRef.current.insertContent(
                            `
                            <label for="${values.label}">${values.label}</label>
                            <input id="${values.label}" type="text" maxlength="${values.length}" size="${values.length}"/>
                            `
                        );
                        setIsOpenInput(false);
                    })
                    .catch((error) => { console.log(error); })
                }
                onCancel={() => setIsOpenInput(false)}
            >
                <Form form={inputForm}>
                    <Form.Item
                        label="Нэр"
                        name="label"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Нийт тэмдэгтийн тоо"
                        name="length"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
export default Editors;