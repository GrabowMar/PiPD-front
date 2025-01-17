import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ComponentA, { Station } from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Content, Footer } from "antd/es/layout/layout";
import StationsMap from "./StationsMap";
import { Input } from "antd";
const { Header } = Layout;
const { Search } = Input;

const AppLayout = ({ stations }: { stations: Station[] }) => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/tabela-stacji">Lista stacji</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/zbadaj-stacje">Wyszukaj stację</Link>
            </Menu.Item>
            {/* <Menu.Item key="3" icon={<FileOutlined />}>
              <Link to="/component-c">Raporty</Link>
            </Menu.Item> */}
            <Menu.Item key="4" icon={<GlobalOutlined />}>
              <Link to="/mapa">Mapa</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 50px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/logo512.png"
                alt="Logo"
                style={{ marginRight: "16px" }}
              />
              <h1 style={{ margin: 0, color: "lightblue" }}>Pol-luttion</h1>
            </div>
            <Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              style={{ width: 200 }}
            />
          </Header> */}
          <Content style={{ margin: "16px", color: "white" }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route
                  path="/tabela-stacji"
                  element={<ComponentA stations={stations} />}
                />
                <Route
                  path="/zbadaj-stacje"
                  element={<ComponentB stations={stations} />}
                />
                <Route path="/component-c" element={<ComponentC />} />
                <Route
                  path="/mapa"
                  element={<StationsMap stations={stations} />}
                />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            @2024 Jan Mańczak | Marcin Grabowski
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default AppLayout;
