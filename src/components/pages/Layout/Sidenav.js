import React from "react";
import { Menu } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../../assets/logo/logo.png'
import {
  InfoCircleOutlined,
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserAddOutlined,
  ShopOutlined
} from "@ant-design/icons";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const SideNavItems = [
    {
      key: 1,
      icon: <SettingOutlined />,
      label: (
        <p className="font-bold">Админ</p>
      ),
      children: [
        {
          key: '1-1',
          icon: <ShopOutlined />,
          label: (
            <NavLink to='/hospital' className={"font-bold"}>
              Байгууллага
            </NavLink>
          ),
        },
        {
          key: '1-2',
          icon: <UsergroupAddOutlined />,
          label: (
            <NavLink to='/structure'>
              Тасаг нэгж Албан нэгж
            </NavLink>
          ),
        },
        {
          key: '1-3',
          label: (
            <NavLink to='/employee'>
              <span
                className="icon"
                style={{
                  background: page === "/employee" ? color : "",
                }}
              >
                <UsergroupAddOutlined />
              </span>
              Ажилтан
            </NavLink>
          ),
        },
        {
          key: '1-4',
          label: (
            <NavLink to='/floor'>
              <span
                className="icon"
                style={{
                  background: page === "/floor" ? color : "",
                }}
              >
                <UsergroupAddOutlined />
              </span>
              Давхар
            </NavLink>
          ),
        },
        {
          key: '1-5',
          label: (
            <NavLink to='/block'>
              <span
                className="icon"
                style={{
                  background: page === "/block" ? color : "",
                }}
              >
                <UsergroupAddOutlined />
              </span>
              Блок
            </NavLink>
          ),
        },
        {
          key: '1-6',
          label: (
            <NavLink to='/room'>
              <span
                className="icon"
                style={{
                  background: page === "/room" ? color : "",
                }}
              >
                <UsergroupAddOutlined />
              </span>
              Өрөө
            </NavLink>
          ),
        },
        {
          key: '1-7',
          label: (
            <NavLink to='/bed'>
              <span
                className="icon"
                style={{
                  background: page === "/bed" ? color : "",
                }}
              >
                <UsergroupAddOutlined />
              </span>
              Ор
            </NavLink>
          ),
        }
      ]
    },
    {
      key: 2,
      label: (
        <>
          <span
            className="icon"
          >
            <HomeOutlined />
          </span>
          Нүүр
        </>
      ),
      children: [
        {
          key: '2-1',
          label: (
            <NavLink to='/country'>
              <span
                className="icon"
                style={{
                  background: page === "/country" ? color : "",
                }}
              >
                <HomeOutlined />
              </span>
              country
            </NavLink>
          ),
        },
        {
          key: '2-2',
          label: (
            <NavLink to='/degree'>
              <span
                className="icon"
                style={{
                  background: page === "/degree" ? color : "",
                }}
              >
                <HomeOutlined />
              </span>
              degree
            </NavLink>
          ),
        },
        {
          key: '2-3',
          label: (
            <NavLink to='/directory'>
              <span
                className="icon"
                style={{
                  background: page === "/directory" ? color : "",
                }}
              >
                <HomeOutlined />
              </span>
              directory
            </NavLink>
          ),
        },
      ]
    },
    {
      key: 3,
      label: (
        <NavLink to='/patient'>
          <span
            className="icon"
            style={{
              background: page === "patient" ? color : "",
            }}
          >
            <UserAddOutlined />
          </span>
          Өвчтөн
        </NavLink>
      )
    },
    {
      key: 4,
      label: (
        <NavLink to='/doctorAppointmentSchedule'>
          <span
            className="icon"
            style={{
              background: page === "doctorAppointmentSchedule" ? color : "",
            }}
          >
            <InfoCircleOutlined />
          </span>
          Эмчийн цаг захиалга
        </NavLink>
      )
    },
    {
      key: 5,
      label: (
        <Link to='/doctorAppointment'>
          <span
            className="icon"
            style={{
              background: page === "doctorAppointment" ? color : "",
            }}
          >
            <InfoCircleOutlined />
          </span>
          Эмчийн цаг
        </Link>
      )
    },
    {
      key: 6,
      label: (
        <Link to='/payment'>
          <span
            className="icon"
            style={{
              background: page === "payment" ? color : "",
            }}
          >
            <InfoCircleOutlined />
          </span>
          Төлбөр тооцоо
        </Link>
      )
    },
    {
      key: 7,
      label: (
        <Link to='/examination'>
          <span
            className="icon"
            style={{
              background: page === "examination" ? color : "",
            }}
          >
            <InfoCircleOutlined />
          </span>
          examination
        </Link>
      )
    },
  ];

  return (
    <>
      <img className="h-8 w-40 m-4 bg-transparent" src={logo} alt="logo" />
      <Menu theme="light" mode="inline" items={SideNavItems} />
    </>
  );
}

export default Sidenav;
