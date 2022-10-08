import React, { useState } from "react";
import '../../../style/Layout.css'
import { Button, Layout, Dropdown, Row, Col, Menu } from "antd";
import Sidenav from "./Sidenav";
import male from '../../../assets/images/maleAvatar.svg';
import { useNavigate, Outlet } from "react-router-dom";
import { Post } from "../../comman";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PoweroffOutlined,
    UserOutlined,
    RightOutlined,
    LeftOutlined
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const logout = () => {
    Post('authentication/logout');
}

const Main = () => {
    const [sidenavColor] = useState("#1890ff");
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const handleMenuClick = (e) => {
        if (e.key == 2) {
            logout();
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
    };

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Тохиргоо',
                    key: '1',
                    icon: <UserOutlined />,
                },
                {
                    key: '2',
                    label: 'Гарах',
                    icon: <PoweroffOutlined style={{ color: 'red' }} />,
                },
                // {
                //     key: '3',
                //     label: (
                //         <button>
                //             Гарах
                //         </button>
                //     )
                // }
            ]}
        />
    );
    return (
        <Layout className='layout-dashboard'>
            <Sider
                collapsedWidth="30"
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
                className='sider-primary sidebarA'
            >
                <Sidenav color={sidenavColor} />
            </Sider>
            <Layout className="site-layout">
                <Header className={collapsed ? "dad" : "ada"}>
                    <Row gutter={[24, 0]}>
                        <Col span={22}>
                            <Button type="primary" onClick={() => setCollapsed(!collapsed)} >
                                {collapsed ? <MenuUnfoldOutlined style={{ fontSize: '18px' }} /> : <MenuFoldOutlined style={{ fontSize: '18px' }} />}
                            </Button>
                        </Col>
                        {
                            <Col span={2}>
                                <div style={{ textAlign: 'center' }}>
                                    <Dropdown overlay={menu} trigger={['click']} arrow={{
                                        pointAtCenter: true,
                                    }}>
                                        <Button type="link" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                            <img style={{ height: 40, width: 40 }} src={male} alt="avatar" />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </Col>
                        }
                    </Row>
                </Header>
                <Content className={collapsed ? "dad" : "ada"}>{<Outlet />}</Content>
            </Layout>
        </Layout >
    );
}

export default Main;
