// Sidebar.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  // faTachometerAlt,
  faShoppingBag,
  faSignOutAlt,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Layout, Menu, ConfigProvider } from 'antd';
import './sidebar.scss'; 
import ThemeToggle from './Themes'; 
import LoginPage from './LoginPage';
import ListItem from '../ListItem';

const { Header, Sider, Content } = Layout;

const Bag = () => <div>BAG====// Content</div>; // remove the once you have created the store page.....by future

const menuItemsTop = [
  {
    key: '1',
    icon: <FontAwesomeIcon icon={faStore} />,
    label: <Link to="/">Store</Link>,
  },
  {
    key: '4',
    icon: <FontAwesomeIcon icon={faShoppingBag} />,
    label: <Link to="/Bag">Bag</Link>,
  },
];

const menuItemsBottom = [
  {
    key: '7',
    icon: <FontAwesomeIcon icon={faSignOutAlt} />,
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
        colorBgBase: theme === 'light' ? '#ffffff' : 'gray',
        colorText: theme === 'light' ? '#000122' : '#ffffff',
        colorBgContainer: theme === 'light' ? '#ffffff' : '#001529',
      }
    }}>
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: theme === 'light' ? '#ffffff' : 'gray' }}>
            <div className="demo-logo-vertical" />
            <Menu
              theme={theme === 'light' ? '#ffffff' : 'gray'}
              mode="inline"
              className='topp'
              defaultSelectedKeys={['1']}
            >
              {menuItemsTop.map(item => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
            <Menu
              theme={theme === 'light' ? 'light' : 'dark'}
              mode="inline"
              className="menu-bottom"
              items={menuItemsBottom}
            />
          </Sider>
          <Layout>
            <Header className="layout-header">
              <div className="header-content">
                <Button
                  type="text"
                  icon={collapsed ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faBars} />}
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
                <Route path="/" element={<ListItem />} /> 
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
