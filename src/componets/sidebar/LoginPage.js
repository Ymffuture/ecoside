// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login validation (you would typically verify credentials here)
    if (username === 'admin' && password === 'password') {
      handleLogin();
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', paddingTop: 100 }}>
      <h2>Login</h2>
      <Form
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
        <Space>
          Or <Link to="/signup">register now!</Link>
        </Space>
      </Form>
    </div>
  );
};

export default LoginPage;
