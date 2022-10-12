import React, { useState } from "react";
import '../../../style/Layout.css'
import '../../../style/Hospital.css'
import { Button, Layout, Dropdown, Row, Col, Menu } from "antd";
import Sidenav from "./Sidenav";
import male from '../../../assets/images/maleAvatar.svg';
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { selectCurrentToken, logout } from '../../../features/authReducer';
import { useDispatch, useSelector } from "react-redux";
import {
    PoweroffOutlined,
    UserOutlined,
    RightOutlined,
    LeftOutlined
} from "@ant-design/icons";
import axios from "axios";
import logo from '../../../assets/logo/logo.png'

const { Header, Content, Sider } = Layout;
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [sidenavColor] = useState("#1890ff");
    const [collapsed, setCollapsed] = useState(false);
    const token = useSelector(selectCurrentToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMenuClick = (e) => {
        if (e.key == 2) {
            logoutt();
            dispatch(logout());
            navigate('/login');
        }
    };

    const logoutt = () => {
        axios.post(DEV_URL + 'authentication/logout',
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "x-api-key": API_KEY
                },
            }
        )
    }

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: (
                        <NavLink to='/profile'>
                            Тохиргоо
                        </NavLink>),
                    key: '1',
                    icon: <UserOutlined />,
                },
                {
                    key: '2',
                    label: 'Гарах',
                    icon: <PoweroffOutlined style={{ color: 'red' }} />,
                }
            ]}
        />
    );
    return (
        <Layout>
            <Header className="bg-transparent my-3 mx-5 p-0">
                <div className="float-left">
                    <img className="h-12 w-48 bg-transparent float-left" src={logo} alt="logo" />
                </div>
                <div className="float-right">
                    <Dropdown overlay={menu} trigger={['click']} arrow={{
                        pointAtCenter: true,
                    }}>
                        <Button type="link" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                            <img className="h-12 w-12" src={male} alt="avatar" />
                        </Button>
                    </Dropdown>
                </div>
            </Header>
            <Layout className="ant-layout">
                <Sider
                    trigger={
                        React.createElement(
                            collapsed ? RightOutlined : LeftOutlined,
                            {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            }
                        )}
                    collapsible
                    collapsed={collapsed}
                    theme="light"
                    className="bg-white"
                >
                    <Sidenav color={sidenavColor} />
                </Sider>
                <Content className="bg-slate-50">
                    <div className='body'>
                        <div className="tabled">
                            {<Outlet />}
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout >
    );
}

export default Main;
