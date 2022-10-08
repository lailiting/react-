import { Tabs } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
// 引入react-redux相关的hooks
import { useSelector, useDispatch } from 'react-redux';
import { removeRoute } from '../../features/routes/routesSlice';


const initialItems = [
  {
    label: '首页',
    key: '/home',
    closable: false,
  }
];

const VabTabs: React.FC = () => {
  // 获取路由Hoos
  const navigate = useNavigate()
  const location = useLocation()
    
  // react-redux Hooks
  const stateRoutes = useSelector((store:any) => store.routes)
  
  const dispatch = useDispatch()


  // ref Hooks
  const newTabIndex = useRef(0);
  
  //当routes里面的state发生变化时
  useEffect(() => {
    console.log(stateRoutes )
    setItems(stateRoutes )
  },[stateRoutes])

  //当路由发生变化时
  useEffect(() => {
    setActiveKey(location.pathname);
  },[location.pathname])

  // 设置state
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  
  //点击标签时
  const onChange = (currentActive: string) => {
    navigate(currentActive)
    setActiveKey(currentActive);
  
  };


  const remove = (targetKey: string) => {
    if(targetKey == location.pathname){
      setActiveKey("/home");
      navigate("/home")
    }
    dispatch(removeRoute({value:targetKey}))
   
  };

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'remove') {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      hideAdd={true}
      items={items}
      tabPosition="top"
      animated={true}
    />
  );
};

export default VabTabs;