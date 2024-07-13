import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
 AppstoreOutlined,
   LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, ConfigProvider } from 'antd';
import './sidebar.scss'; 
import ThemeToggle from './Themes'; 
import TopBar from './Topbar'; 
import LoginPage from './LoginPage';
import Store from './Store';

const { Header, Sider, Content } = Layout;

const Bag = () => <div>BAG====// Content</div>; // remove the once you have created the store page.....by future

const menuItemsTop = [
  {
    key: '1',
    icon: <DashboardOutlined />,
    label: <Link to="/Store">Store</Link>,
  },
  {
    key: '4',
    icon: <AppstoreOutlined />,
    label: <Link to="/Bag">Bag</Link>,
  },
];

const menuItemsBottom = [
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
              className='topp'
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
                <Route path="/Bag" element={<Bag />} />     
                <Route path="/Store" element={<Store />} />
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
