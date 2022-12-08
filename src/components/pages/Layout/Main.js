import React, { useState } from "react";
import '../../../style/Layout.css'
import '../../../style/Hospital.css'
import { Button, Layout, Dropdown, Row, Col, Menu } from "antd";
import Sidenav from "./Sidenav";
import male from '../../../assets/images/maleAvatar.svg';
import { useNavigate, Outlet, NavLink, Link } from "react-router-dom";
import { selectCurrentToken, logout, DelDepId, DelAppId } from '../../../features/authReducer';
import { useDispatch, useSelector } from "react-redux";
import {
    PoweroffOutlined,
    UserOutlined,
    RightOutlined,
    LeftOutlined
} from "@ant-design/icons";
import axios from "axios";
// import logo from '../../../assets/logo/logo.png'
import logo from '../../../assets/logo/iHospital.png'
import { useEffect } from "react";
import { Get } from "../../comman";

const { Header, Content, Sider } = Layout;
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {},
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMenuClick = (e) => {
        if (e.key == 2) {
            logoutt();
            dispatch(logout());
            dispatch(DelDepId());
            dispatch(DelAppId());
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
    const [menus, setMenus] = useState([]);
    const getMenus = async () => {
        const response = await Get('reference/menu/user', token, config);
        if (response.data.length > 0) {
            var menus = [];
            response.data.map((menu, indx) => {
                if (menu.isSubMenu) {
                    var children = [];
                    menu.menus.map((subMenu, idx) => {
                        children.push({
                            key: `${indx}-${idx}`,
                            icon: <p style={{ width: 20 }} dangerouslySetInnerHTML={{ __html: subMenu.icon }}></p>,
                            label:
                                <Link
                                    to={subMenu.url}
                                    state={{
                                        isCreate: subMenu.permission?.isCreate,
                                        isRead: subMenu.permission?.isRead,
                                        isUpdate: subMenu.permission?.isUpdate,
                                        isDelete: subMenu.permission?.isDelete,
                                    }}
                                >
                                    {subMenu.title}
                                </Link>,
                        })
                    })
                    menus.push({
                        key: indx,
                        icon: <p style={{ width: 20 }} dangerouslySetInnerHTML={{ __html: menu.icon }}></p>,
                        label: <p>{menu.title}</p>,
                        children: children
                    })
                } else {
                    var menu = {
                        key: menu.id,
                        icon: <p style={{ width: 20 }} dangerouslySetInnerHTML={{ __html: menu.icon }}></p>,
                        label: <Link
                            to={menu.url}
                            state={{
                                isCreate: menu.permission?.isCreate,
                                isRead: menu.permission?.isRead,
                                isUpdate: menu.permission?.isUpdate,
                                isDelete: menu.permission?.isDelete,
                            }}
                        >
                            {menu.title}
                        </Link>,
                    }
                    menus.push(menu);
                }
            });
            setMenus(menus);
        }
    };
    useEffect(() => {
        getMenus();
    }, []);
    return (
        <Layout>
            <Header className="bg-transparent mx-5 p-0 h-20">
                <div className="float-left">
                    <img className="w-48 bg-transparent float-left" src={logo} alt="logo" />
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
                    style={{
                        maxWidth: 250,
                        width: 250,
                        minWidth: 250,
                    }}
                    className="bg-white scroll"
                >
                    <Sidenav menus={menus} />
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
