import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from "../Quebab.svg" 

const { Header } = Layout;

const NavBar = () => {
  const location = useLocation();

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', justifyContent: 'space-between', background: "rgb(75, 130, 83)" }}>
      <img src={logo}/><h4 className='logo'>CARBONATOR</h4>
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]} style = {{background: "rgb(75, 130, 83)"}}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/submit-form">
            <Link to='/submit-form'>Submit</Link>
          </Menu.Item>
          <Menu.Item key="/overview">
            <Link to='/overview'>Overview</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default NavBar;
