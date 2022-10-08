import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { RoutesMap } from '../../map/routeMap';
import React,{useEffect, useState} from 'react';
import { useLocation, useNavigation } from 'react-router-dom';

const VabBreadCrumb: React.FC = () => {
  // router Hooks
  const location = useLocation()

  // react Hooks
  const [currentRoute, setCurrentRoute] = useState("")

  
  useEffect(() => {
    setCurrentRoute(RoutesMap[location.pathname])
  },[location.pathname])
  return (

    <Breadcrumb>
      <Breadcrumb.Item href="/home">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <UserOutlined />
        <span>{currentRoute}</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default VabBreadCrumb;