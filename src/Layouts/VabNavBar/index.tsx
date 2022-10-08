import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  WindowsOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./index.scss"
import { increaseRoute } from '../../features/routes/routesSlice';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('首页', '/home', <MailOutlined />),
  getItem('综合表格', '/c/table', <AppstoreOutlined />),
  getItem('可编辑表格', '/e/table', <ContainerOutlined />),
  getItem('综合表单', '/c/form', <DesktopOutlined />),
  getItem('分步表单', '/s/form', <MenuFoldOutlined />),
  getItem('文本编辑器', '/wangedit', <MenuUnfoldOutlined />),
  getItem('自定义图标', '/c/icon', <PieChartOutlined />),
  getItem('商品管理', '10', <MailOutlined />),
  getItem('用户管理', '11', <MailOutlined />),
  getItem('订单派发', '12', <MailOutlined />),
];

const VabNavBar: React.FC = () => {

  // router Hooks
  const navigate = useNavigate()
  const location = useLocation()

  //react-redux Hooks
  const dispatch = useDispatch()


  const clickMenu: MenuProps['onClick'] = (e) => {
    const { key } = e
    dispatch(increaseRoute({ value: { key } }))
    navigate(key)
  };

  return (
    <div className="vab-nav-bar">
      <h1 className='app-title'><WindowsOutlined style={{margin: '10px'}} />后台管理</h1>
      <Menu
        onClick={clickMenu}
        className="menu-bar"
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default VabNavBar;