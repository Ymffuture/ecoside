import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  BarChartOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, ConfigProvider } from 'antd';
import './sidebar.scss'; // Import the CSS/SCSS file
import ThemeToggle from './Themes'; // Import the theme toggle component
import TopBar from './Topbar'; // Import the TopBar component
import LoginPage from './LoginPage';
import Hero from './Hero';

const { Header, Sider, Content } = Layout;

const Dashboard = () => <div>Dashboard Content</div>;
const Analyst = () => <div>Analyst Content</div>;
const Orders = () => <div>Orders Content</div>;
const Products = () => <div>Products Content</div>;
const Customers = () => <div>Customers Content</div>;
const Settings = () => <div>Settings Content</div>;

const menuItemsTop = [
  {
    key: '1',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
    subMenuItems: [
      {
        key: '5-1',
        label: 'myDashboard',
        link: '/Hero',
      },
      {
        key: '5-2',
        label: 'Dashboard',
        link: '/',
      },
    ],
  },
  {
    key: '2',
    icon: <BarChartOutlined />,
    label: <Link to="/analyst">Analyst</Link>,
  },
  {
    key: '3',
    icon: <ShoppingCartOutlined />,
    label: <Link to="/orders">Orders</Link>,
  },
  {
    key: '4',
    icon: <AppstoreOutlined />,
    label: <Link to="/products">Products</Link>,
  },
  {
    key: '5',
    icon: <UsergroupAddOutlined />,
    label: 'Customers',
    subMenuItems: [
      {
        key: '5-1',
        label: 'All Customers',
        link: '/customers',
      },
      {
        key: '5-2',
        label: 'Add Customer',
        link: '/customers/add',
      },
    ],
  },
];

const menuItemsBottom = [
  {
    key: '6',
    icon: <SettingOutlined />,
    label: <Link to="/settings">Settings</Link>,
  },
  {
    key: '7',
    icon: <LogoutOutlined />,
    label: <Link to="/LoginPage">Log Out</Link>,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('light'); // Initial theme state as 'light'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ConfigProvider theme={{
      // Apply theme based on current state
      token: {
        colorBgBase: theme === 'light' ? '#ffffff' : '#001529',
        colorText: theme === 'light' ? '#000000' : '#ffffff',
        colorBgContainer: theme === 'light' ? '#ffffff' : '#001529',
      }
    }}>
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: theme === 'light' ? '#ffffff' : '#001529' }}>
            <div className="demo-logo-vertical" />
            <Menu
              theme={theme === 'light' ? 'light' : 'dark'}
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              {menuItemsTop.map(item => {
                if (item.subMenuItems) {
                  return (
                    <Menu.SubMenu
                      key={item.key}
                      title={
                        <span>
                          {item.icon}
                          <span>{item.label}</span>
                        </span>
                      }
                    >
                      {item.subMenuItems.map(subItem => (
                        <Menu.Item key={subItem.key}>
                          <Link to={subItem.link}>{subItem.label}</Link>
                        </Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item key={item.key} icon={item.icon}>
                      {item.label}
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
            <Menu
              theme={theme === 'light' ? 'light' : 'dark'}
              mode="inline"
              className="menu-bottom"
              items={menuItemsBottom}
            />
          </Sider>
          <Layout>
            <TopBar />
            <Header className="layout-header">
              <div className="header-content">
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </div>
            </Header>
            <Content className="content-style">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Hero" element={<Hero />} />
                <Route path="/analyst" element={<Analyst />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/LoginPage" element={<LoginPage />} />
              </Routes>
            </Content>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default Sidebar;
