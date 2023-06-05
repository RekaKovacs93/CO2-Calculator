import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Header } = Layout;

const NavBar = () => (
  <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1" icon={<HomeOutlined/>}>Home</Menu.Item>
        <Menu.Item key="2">Submit</Menu.Item>
        <Menu.Item key="3">Overview</Menu.Item>
      </Menu>
    </Header>
  </Layout>
);

export default NavBar;
