import React from "react";
import { Menu } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  InfoCircleOutlined,
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserAddOutlined,
  ShopOutlined,
} from "@ant-design/icons";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const SideNavItems = [
    {
      key: 1,
      icon: <SettingOutlined />,
      label: <p>Админ</p>,
      children: [
        {
          key: "1-1",
          icon: <ShopOutlined />,
          label: <NavLink to="/hospital">Байгууллага</NavLink>,
        },
        {
          key: "1-2",
          icon: <UsergroupAddOutlined />,
          label: <NavLink to="/structure">Тасаг нэгж</NavLink>,
        },
        {
          key: "1-3",
          icon: <UsergroupAddOutlined />,
          label: <NavLink to="/position">Албан тушаал</NavLink>,
        },
        {
          key: "1-4",
          icon: <UsergroupAddOutlined />,
          label: <NavLink to="/employee">Ажилтан</NavLink>,
        },
        {
          key: "1-5",
          icon: <UsergroupAddOutlined />,
          label: <NavLink to="/floor">Давхар</NavLink>,
        },
        {
          key: "1-6",
          icon: <UsergroupAddOutlined />,
          label: <NavLink to="/block">Блок</NavLink>,
        },
        {
          key: "1-7",
          icon: <UsergroupAddOutlined />,
          label: <NavLink to="/room">Өрөө</NavLink>,
        },
        {
          key: "1-8",
          icon: <UsergroupAddOutlined />,
          label: <NavLink to="/bed">Ор</NavLink>,
        },
      ],
    },
    {
      key: 2,
      icon: <HomeOutlined />,
      label: <p>Нүүр</p>,
      children: [
        {
          key: "2-1",
          icon: <HomeOutlined />,
          label: <NavLink to="/country">country</NavLink>,
        },
        {
          key: "2-2",
          icon: <HomeOutlined />,
          label: <NavLink to="/degree">degree</NavLink>,
        },
      ],
    },
    {
      key: 3,
      icon: <UserAddOutlined />,
      label: <NavLink to="/patient">Өвчтөн</NavLink>,
    },
    {
      key: 4,
      icon: <UserAddOutlined />,
      label: <NavLink to="/dpdemo">Эмчийн цаг захиалга</NavLink>,
    },
    {
      key: 5,
      icon: <InfoCircleOutlined />,
      label: <Link to="/doctorAppointment">Эмчийн цаг</Link>,
    },
    {
      key: 6,
      icon: <InfoCircleOutlined />,
      label: <Link to="/payment">Төлбөр тооцоо</Link>,
    },
    {
      key: 7,
      icon: <InfoCircleOutlined />,
      label: <p>OCS</p>,
      children: [
        {
          key: "7-1",
          icon: <ShopOutlined />,
          label: <NavLink to="/examination">examination</NavLink>,
        },
        {
          key: "7-2",
          icon: <HomeOutlined />,
          label: <NavLink to="/xray">xray</NavLink>,
        },
        {
          key: "7-3",
          icon: <HomeOutlined />,
          label: <NavLink to="/treatment">treatment</NavLink>,
        },
        {
          key: "7-4",
          icon: <HomeOutlined />,
          label: <NavLink to="/surgury">surgury</NavLink>,
        },
        {
          key: "7-5",
          icon: <HomeOutlined />,
          label: <NavLink to="/medicine">medicine</NavLink>,
        },
        {
          key: "7-6",
          icon: <HomeOutlined />,
          label: <NavLink to="/packages">packages</NavLink>,
        },
        {
          key: "7-7",
          icon: <HomeOutlined />,
          label: <NavLink to="/SetOrders">SetOrders</NavLink>,
        },
      ],
    },
    {
      key: 8,
      icon: <InfoCircleOutlined />,
      label: (
        <Link to="/ambulatoryList">Амбулаторийн үзлэгийн өмнөх жагсаалт</Link>
      ),
    },
    {
      key: 9,
      icon: <InfoCircleOutlined />,
      label: <Link to="/formBuilder">Асуумж оруулах</Link>,
    },
    {
      key: 10,
      icon: <InfoCircleOutlined />,
      label: <Link to="/reports">Маягтууд</Link>,
    },
    {
      key: 11,
      icon: <InfoCircleOutlined />,
      label: <Link to="/bed_management">Орны менежмент</Link>,
    },
    {
      key: 12,
      icon: <HomeOutlined/>,
      label: <Link to="/equipments">ЛАБ</Link>
    }
  ];

  return (
    <Menu theme="light" mode="inline" items={SideNavItems} inlineIndent={10} />
  );
}

export default Sidenav;
