import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { Header } = Layout;

const NavBar = () => (
  <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1" icon={<HomeOutlined/>}>
        <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to='/submit-form'>Submit</Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to='/overview'>Overview</Link>
        </Menu.Item>
      </Menu>
    </Header>
  </Layout>
);

export default NavBar;
