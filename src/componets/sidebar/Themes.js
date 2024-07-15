import React from 'react';
import { Switch } from 'antd';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <div className="theme-toggle">
    <span>Dark Theme</span>
    < Switch checked={theme === 'dark'} onChange={toggleTheme} />
  </div>
);

export default ThemeToggle;
