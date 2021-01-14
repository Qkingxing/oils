import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
import { ExclamationCircleOutlined, FullscreenOutlined, FullscreenExitOutlined,  CaretUpOutlined, CaretDownOutlined,
CustomerServiceOutlined,  BellOutlined,  UserOutlined } from '@ant-design/icons';
import Tree from './components/Tree'

const content = (
  <div>
    woshi书
  </div>
)

const Header = () => {
  const [ visible, setVisible ] = useState(false)


  return (
    <div className="header">
      <div className="headerContainer">

        <div className="box-item popover">
          <Popover content={Tree} visible={visible} overlayClassName="header-container-note" onVisibleChange={(status) => setVisible(status)} trigger={["click"]}>
            <span>鹰眼科技</span><CaretUpOutlined/>
          </Popover>
        </div>

        <div className="box-item">
          <CustomerServiceOutlined className="icon"/>
        </div>

        <div className="box-item">
          <FullscreenOutlined className="icon"/>
        </div>

        <div className="box-item">
          <BellOutlined className="icon"/>
        </div>

        <div className="box-item user">
          <UserOutlined className="icon"/>
          对外演示账号
        </div>
      </div>
    </div>
  )
}

export default Header;
