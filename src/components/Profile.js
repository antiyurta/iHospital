import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentDepId, selectCurrentToken, selectCurrentUserId, setAppId, setDepId, setUserId, setUserInfo, selectCurrentUserInfo } from '../features/authReducer';
import bg from '../assets/images/background/bg-profile.jpg';
import profile from '../assets/images/maleAvatar.svg';
import { Avatar, Button, Card, Col, Descriptions, Form, Input, Modal, Row } from "antd";
import { DefaultPost, Get, openNofi, Patch, Post } from "./comman";
import { KeyOutlined } from "@ant-design/icons";
import axios from "axios";
function Profile() {
    const token = useSelector(selectCurrentToken);
    const depId = useSelector(selectCurrentDepId);
    const appId = useSelector(selectCurrentAppId);
    const userId = useSelector(selectCurrentUserId);
    const infoUser = useSelector(selectCurrentUserInfo);
    const dispatch = useDispatch();
    const [profileForm] = Form.useForm();
    const [passwordForm] = Form.useForm();
    const [user, setUser] = useState([]);
    const [profileModal, setProfileModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const config = {
        headers: {},
        params: {}
    }
    const getProfile = async () => {
        const response = await Get("authentication", token, config);
        profileForm.setFieldsValue(response);
        if (depId === null) {
            dispatch(setDepId(response.employee?.depIds));
        }
        if (appId === null) {
            dispatch(setAppId(response.employee?.appId));
        }
        if (userId === null) {
            dispatch(setUserId(response.employee?.id));
        }
        if (infoUser.firstName === null && infoUser.lastName === null) {
            dispatch(setUserInfo({ firstName: response.employee?.firstName, lastName: response.employee?.lastName }));
        }
        setUser(response);
    };
    const onFinish = async (values) => {
        setIsLoading(true)
        const response = await Patch('organization/employee/' + user.employee.id, token, config, values.employee);
        if (response === 200) {
            profileForm.resetFields();
            getProfile();
            setProfileModal(false);
        }
        setIsLoading(false);
    };
    const onFinishPassword = async (values) => {
        setIsLoading(true)
        values.token = token;
        await axios.post(process.env.REACT_APP_DEV_URL + "authentication/changePassword", values,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "X-API-KEY": process.env.REACT_APP_API_KEY
                }
            }).then((response) => {
                if (response.status === 200) {
                    passwordForm.resetFields();
                    setPasswordModal(false);
                    openNofi('success', 'Нууц үг', 'Нууц үг амжилттай солигдлоо')
                }
            }).catch((error) => {
                if (error.response.status === 400) {
                    openNofi('warning', 'Нууц үг', 'Нууц үг шаардлага хангахгүй')
                }
            })
        setIsLoading(false);
    };
    useEffect(() => {
        getProfile();
    }, [])
    return (
        <div>
            <div
                className="profile-nav-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
            ></div>
            <Card
                className="card-profile-head rounded-md h-28"
                bodyStyle={{ display: "none" }}
                title={
                    <Row justify="space-between" align="middle" gutter={[24, 0]}>
                        <Col span={24} md={12} className="col-info">
                            <Avatar.Group>
                                <Avatar size={74} shape="square" src={profile} />
                                <div className="avatar-info">
                                    <h4 className="font-semibold m-0">{user.employee?.lastName + " " + user.employee?.firstName}</h4>
                                    <p>{user.role?.name} / {user.role?.description}</p>
                                </div>
                            </Avatar.Group>
                        </Col>
                        <Col
                            span={24}
                            md={12}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}
                        >
                        </Col>
                    </Row>
                }
            ></Card>
            <Card
                bordered={false}
                title={<h6 className="font-semibold m-0">Профайл мэдээлэл</h6>}
                className="header-solid h-full card-profile-information rounded-md"
                extra={
                    <>
                        <Button className="mx-1" type="primary" onClick={() => setProfileModal(true)}>Мэдээлэл солих</Button>
                        <Button className="mx-1" type="primary" onClick={() => setPasswordModal(true)}>Нууц үг солих</Button>
                    </>
                }
                bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
                <hr className="my-2" />
                <Descriptions>
                    <Descriptions.Item label="Утас" span={3}>
                        {user.employee?.phoneNo}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email" span={3}>
                        {user?.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="Гэрийн хаяг" span={3}>
                        {user?.employee?.homeAddress}
                    </Descriptions.Item>
                    <Descriptions.Item label="Эмнэлэг" span={3}>
                        {user?.hospital?.name}
                    </Descriptions.Item>
                </Descriptions>
            </Card>
            <Modal
                title="Хувийн мэдээлэл засах"
                open={profileModal}
                onCancel={() => setProfileModal(false)}
                onOk={() => {
                    profileForm.validateFields().then((values) => {
                        onFinish(values);
                    }).catch(() => {
                        openNofi('warning', 'Мэдээлэл дутуу', 'Мэдээлэл дутуу');
                    })
                }}
                isLoading={isLoading}
                okText="Хадгалах"
                cancelText="Болих"
            >
                <Form
                    form={profileForm}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                >
                    <Form.Item
                        label="Овог"
                        name={['employee', 'lastName']}
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
                        label="Нэр"
                        name={['employee', 'firstName']}
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
                        label="И-мэйл"
                        name={['employee', 'email']}
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input type="email" />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title={"Нууц үг солих"}
                open={passwordModal}
                isLoading={isLoading}
                onCancel={() => setPasswordModal(false)}
                onOk={() => {
                    passwordForm.validateFields().then((values) => {
                        onFinishPassword(values);
                    }).catch(() => {
                        openNofi('warning', 'Мэдээлэл дутуу', 'Мэдээлэл дутуу');
                    })
                }}
                okText="Хадгалах"
                cancelText="Болих"
            >
                <Form
                    form={passwordForm}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                >
                    <Form.Item
                        label="Шинэ нууц үг"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Заавал"
                            }
                        ]}
                    >
                        <Input.Password prefix={<KeyOutlined />} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Profile;
