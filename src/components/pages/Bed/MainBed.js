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
import { Routes, Route, useNavigate } from "react-router-dom";
const { Sider, Content } = Layout;

const items = [
  { label: "Хянах самбар", key: "", icon: <FundViewOutlined /> },
  {
    label: "Тасаг",
    key: "department",
    icon: <AppstoreOutlined />,
    children: [
      { label: "Нүд", key: "menu2submenu1" },
      { label: "Чих", key: "menu2submenu2" },
    ],
  },
  { label: "Хуанли", key: "calendar", icon: <CalendarOutlined /> },
  { label: "Орны мэдээлэл", key: "rooms", icon: <PicCenterOutlined /> },
  { label: "Өвчтөн", key: "patient_list", icon: <UserOutlined /> },
];

const MainBed = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState("");
  let navigate = useNavigate();

  const onSelect = (data) => {
    setSelectedMenuKey(data.key);
    navigate(`/bed_management/${data.key}`);
  };
  return (
    <Layout>
      <Sider className="bg-white">
        <Menu
          mode="inline"
          items={items}
          onSelect={onSelect}
          defaultSelectedKeys={""}
          selectedKeys={[selectedMenuKey]}
        />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route
              exact
              path="/"
              element={<DashboardBed setSelectedFn={setSelectedMenuKey} />}
            />
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
