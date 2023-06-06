import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: 'black', textAlign: 'center', color: 'white', fontSize: '16px', padding: '20px' }}>
      <Link to='/resources'>Resources</Link>
    </Footer>
  );
};

export default AppFooter;
