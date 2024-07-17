import React from "react";
import {
  UserOutlined,
  LineChartOutlined,
  AlignCenterOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthServices } from "../../../utils/authService";
import {
  AUTHENTICATED_ROUTE,
  UNAUTHENTICATED_ROUTES,
} from "../../../utils/constant";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: 1,
    icon: <LineChartOutlined />,
    label: <Link to={AUTHENTICATED_ROUTE.DASHBOARD}>Dashboard</Link>,
  },
  {
    key: 2,
    icon: <AlignCenterOutlined />,
    label: <Link to={AUTHENTICATED_ROUTE.CATEGORIES}>Categories</Link>,
  },
  {
    key: 3,
    icon: <UserOutlined />,
    label: <Link to={AUTHENTICATED_ROUTE.USERS}>Users</Link>,
  },
  {
    key: 4,
    icon: <BookOutlined />,
    label: "Posts",
  },
  {
    key: 5,
    icon: <BookOutlined />,
    label: <Link to={AUTHENTICATED_ROUTE.COMMENTS}>Comments</Link>,
  },
  {
    key: 6,
    icon: <LogoutOutlined />,
    label: (
      <div
        onClick={() => {
          AuthServices.removeToken();
          window.location.href = UNAUTHENTICATED_ROUTES.LOGIN;
        }}
      >
        Logout
      </div>
    ),
  },
];

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          className="demo-logo-vertical"
          style={{
            marginTop: 40,
          }}
        />
        <div
          style={{
            marginLeft: 30,
          }}
        >
          <Button
            type="primary"
            style={{
              width: "80%",
            }}
            onClick={() => navigate(UNAUTHENTICATED_ROUTES.HOME)}
          >
            Home
          </Button>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowX: "auto",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
