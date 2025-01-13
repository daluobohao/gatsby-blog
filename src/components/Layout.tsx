import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <nav style={{ width: '200px', background: '#f0f0f0', padding: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/projects">项目</Link></li>
          <li><Link to="/articles">文章</Link></li>
        </ul>
      </nav>
      <main style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<div>首页内容</div>} />
          <Route path="/projects" element={<div>项目内容</div>} />
          <Route path="/articles" element={<div>文章内容</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;