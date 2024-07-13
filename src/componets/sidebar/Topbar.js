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
        <Input placeholder="Apple Watch,Samsun S21,Macbook Pro" prefix={<SearchOutlined />} />
      </div>
    </div>
  );
};

export default TopBar;
