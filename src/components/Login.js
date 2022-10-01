import React, { useContext } from "react";
import {
    Layout,
    Menu,
    Button,
    Row,
    Col,
    Typography,
    Form,
    Input,
} from "antd";
import {
    StepBackwardOutlined
} from "@ant-design/icons";
import Logo from '../assets/logo/logo.png';
import signinbg from '../assets/logo/demo4.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const MenuNav = [
    {
        key: '1',
        icon: <StepBackwardOutlined />,
        label: 'Холбоо барих'
    },
    {
        key: '2',
        icon: <StepBackwardOutlined />,
        label: 'Дэлгэрэнгүй'
    },
    {
        key: '3',
        icon: <StepBackwardOutlined />,
        label: 'Мэдээлэл'
    }
];

function Login() {
    const navigate = useNavigate();
    const MainContextState = useContext(MainContext);
    const onFinish = (values) => {
        axios.post(process.env.REACT_APP_DEV_URL + "authentication/login", values, { headers: { "X-API-KEY": process.env.REACT_APP_API_KEY } })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('accessToken', response.data.response.accessToken);
                    navigate('/profile');
                }
            }).catch((err) => {
                console.log(err);
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Layout className="layout-default layout-signin">
                <Header>
                    <div className="header-col header-brand">
                        <img src={Logo} alt="logo" />
                    </div>
                </Header>
                <Content className="signin">
                    <Row gutter={[24, 0]} justify="space-around">
                        <Col
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 6, offset: 2 }}
                            md={{ span: 12 }}
                        >
                            <Title className="mb-15">Нэвтрэх</Title>
                            <Title className="font-regular text-muted" level={5}>
                                Нэвтрэх нэр болон Нууц үгээ оруулна уу
                            </Title>
                            <Form
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                layout="vertical"
                                className="row-col"
                            >
                                <Form.Item
                                    className="username"
                                    label="Нэвтрэх нэр"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Нэвтрэх нэр оруулна уу",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Нэвтрэх нэр" />
                                </Form.Item>

                                <Form.Item
                                    className="username"
                                    label="Нууц үг"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Нууц үг оруулна уу",
                                        },
                                    ]}
                                >
                                    <Input type='password' placeholder="Нууц үг" />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{ width: "100%" }}
                                    >
                                        Нэвтрэх
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col
                            className="sign-img"
                            style={{ padding: 12 }}
                            xs={{ span: 24 }}
                            lg={{ span: 12 }}
                            md={{ span: 12 }}
                        >
                            <img src={signinbg} alt="" />
                        </Col>
                    </Row>
                </Content>
                <Footer>
                    <Menu mode="horizontal" className="menu-nav-social" items={MenuNav} />
                    <p className="copyright">
                        {" "}
                        Copyright © 2022  by <a href="gurensoft.com">GurenSoft LLC</a>.{" "}
                    </p>
                </Footer>
            </Layout>
        </>
    );
}

export default Login;
