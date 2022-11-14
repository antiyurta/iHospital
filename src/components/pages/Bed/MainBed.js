import React, { useState } from "react";
import {
  AppstoreOutlined,
  FundViewOutlined,
  CalendarOutlined,
  PicCenterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import DashboardBed from "./DashboardBed";
import CalendarBed from "./CalendarBed";
import PatientListBed from "./PatientListBed";
import InformationBed from "./InformationBed";
import DepartmentBed from "./DepartmentBed";
const { Footer, Header, Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Хянах самбар", "menu1", <FundViewOutlined />),
  getItem("Тасаг", "menu2", <AppstoreOutlined />, [
    getItem("Нүд", "menu2submenu1"),
    getItem("Чих", "menu2submenu2"),
    getItem("Хамар", "menu2submenu3"),
  ]),
  getItem("Хуанли", "menu3", <CalendarOutlined />),
  getItem("Орны мэдээлэл", "menu4", <PicCenterOutlined />),
  getItem("Өвчтөн", "menu5", <UserOutlined />),
];
// submenu keys of first level
const rootSubmenuKeys = ["menu2"];
const MainBed = () => {
  const [openKeys, setOpenKeys] = useState(["menu1"]);
  const [selectedMenuKey, setSelectedMenuKey] = useState("menu1");
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onSelect = (data) => {
    setSelectedMenuKey(data.key);
  };
  return (
    <Layout>
      <Sider className="bg-white">
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
          onSelect={onSelect}
          defaultSelectedKeys={"menu1"}
        />
      </Sider>
      <Layout>
        <Content>
          {selectedMenuKey == "menu1" ? <DashboardBed /> : null}
          {selectedMenuKey == "menu2submenu1" ? (
            <DepartmentBed title="menu2submenu1" />
          ) : null}
          {selectedMenuKey == "menu2submenu2" ? (
            <DepartmentBed title="menu2submenu2" />
          ) : null}
          {selectedMenuKey == "menu2submenu3" ? (
            <DepartmentBed title="menu2submenu3" />
          ) : null}
          {selectedMenuKey == "menu3" ? <CalendarBed /> : null}
          {selectedMenuKey == "menu4" ? <InformationBed /> : null}
          {selectedMenuKey == "menu5" ? <PatientListBed /> : null}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainBed;
