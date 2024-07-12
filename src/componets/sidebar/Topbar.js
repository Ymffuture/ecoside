// TopBar.js
import React from 'react';
import { Input, Avatar, Breadcrumb } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const TopBar = () => {
  const location = useLocation();

  return (
    <div className="top-bar">
        
      <div className="search-bar">
        <Input placeholder="Search..." prefix={<SearchOutlined />} />
      </div>
      <div className="user-profile">
        <Avatar icon={<UserOutlined />} />
        <span className="username">Username</span> {/* Replace with actual username */}
      </div>
      <div className="page-tracker">
        <Breadcrumb>
          <Breadcrumb.Item>/Dashboard</Breadcrumb.Item>
          {location.pathname.split('/').filter(Boolean).map((path, index) => (
            <Breadcrumb.Item key={index}>{path}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default TopBar;
