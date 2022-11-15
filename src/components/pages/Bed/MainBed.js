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
import RoomDtl from "./RoomDtl";
import { Routes, Route, useNavigate } from "react-router-dom";
const { Sider, Content } = Layout;
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
  getItem("Хянах самбар", "", <FundViewOutlined />),
  getItem("Тасаг", "department", <AppstoreOutlined />, [
    getItem("Нүд", "menu2submenu1"),
    getItem("Чих", "menu2submenu2"),
    getItem("Хамар", "menu2submenu3"),
  ]),
  getItem("Хуанли", "calendar", <CalendarOutlined />),
  getItem("Орны мэдээлэл", "rooms", <PicCenterOutlined />),
  getItem("Өвчтөн", "patient_list", <UserOutlined />),
];
// submenu keys of first level
const rootSubmenuKeys = ["menu2"];
const MainBed = () => {
  const [openKeys, setOpenKeys] = useState(["dashboard"]);
  const [selectedMenuKey, setSelectedMenuKey] = useState("");
  let navigate = useNavigate();

  const onOpenChange = (keys) => {
    console.log("KEYS", keys);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onSelect = (data) => {
    setSelectedMenuKey(data.key);
    navigate(`/bed_management/${data.key}`);
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
          defaultSelectedKeys={"dashboard"}
        />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route exact path="/" element={<DashboardBed />} />
            <Route path="/calendar" element={<CalendarBed />} />
            <Route path="/rooms" element={<InformationBed />} />
            <Route path="/patient_list" element={<PatientListBed />} />
            <Route
              path="/:id/*"
              element={<DepartmentBed data={selectedMenuKey} />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainBed;
