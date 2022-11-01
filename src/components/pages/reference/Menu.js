import { Get, Post } from '../../comman';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from '../../../features/authReducer';
import { Button, Card, Checkbox, Form, Input, InputNumber, Modal, Select, Switch } from 'antd';
import { Table } from 'react-bootstrap';

const { Option } = Select;

function Menu() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [form] = Form.useForm();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isSubMenu, setIsSubMenu] = useState(false);
    //
    const [menus, setMenus] = useState([]);
    const [isSubMenus, setIsSubMenus] = useState([]);
    const [meta, setMeta] = useState([]);
    //
    const showModal = () => {
        setIsOpenModal(true);
        setEditMode(false);
    }
    const getMenus = async () => {
        const response = await Get('reference/menu', token, config);
        if (response.data.length != 0) {
            setMenus(response.data);
            setMeta(response.meta);
        }
    }

    const getIsSubMenu = async () => {
        config.params.isSubMenu = true;
        const response = await Get('reference/menu', token, config);
        if (response.data.length != 0) {
            setIsSubMenus(response.data);
        }
        config.params.isSubMenu = null;
    }

    const onFinish = async (value) => {
        if (editMode) {

        } else {
            if (!value.isSubMenu) {
            }
            const response = await Post('reference/menu', token, config, value);
            console.log(response);
        }
    }

    useEffect(() => {
        getMenus();
        getIsSubMenu();
    }, [])

    return (
        <div>
            <Card
                bordered={false}
                className="header-solid max-h-max rounded-md"
                title="MENUS"
                extra={
                    <Button onClick={showModal} className='bg-sky-700 rounded-md text-white'>Нэмэх</Button>
                }
            >
                <div className='table-responsive p-4' id='style-8'>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th>title</th>
                                <th>name</th>
                                <th>isSubMenu</th>
                                <th>icon</th>
                                <th>title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus.map((menu, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{menu.title}</td>
                                            <td>{menu.name}</td>
                                            <td>{menu.isSubMenu ? "TIIM" : "UGU"}</td>
                                            <td>{menu.icon}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Card>
            <Modal
                title="MENU NEMEH"
                open={isOpenModal}
                onOk={() => form.validateFields()
                    .then((values) => {
                        onFinish(values);
                    }).catch((error) => {
                        console.log(error);
                    })}
                onCancel={() => setIsOpenModal(false)}
            >
                <Form form={form}>
                    <Form.Item
                        label={'Туслах цэстэй эсэх'}
                        name="isSubMenu"
                        valuePropName="checked"
                        initialValue={isSubMenu}
                    >
                        <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" onChange={() => setIsSubMenu(!isSubMenu)} />
                    </Form.Item>
                    {
                        !isSubMenu &&
                        <Form.Item
                            label="Дэд цэс"
                            name='parentId'
                        >
                            <Select>
                                {
                                    isSubMenus.map((menu, index) => {
                                        return (
                                            <Option key={index} value={menu.id}>{menu.name}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                    }
                    <Form.Item
                        label="Нэр mongol"
                        name="title"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Нэр angli"
                        name="name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Хаяг"
                        name="url"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Байрлал"
                        name="position"
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="ICON"
                        name="icon"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    )
}
export default Menu;