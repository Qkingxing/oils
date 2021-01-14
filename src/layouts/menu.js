import React, { useEffect, useState } from 'react';
import { Menu } from 'antd'
import { Link } from 'umi'
const { SubMenu } = Menu;
import "./index.less"
const LayoutMenu = (props) => {

  const [menu, setmenu] = useState([])

  useEffect(() => {
    setmenu(props.menu)
  }, [props.menu])

  return (
    <div className={""}>
      <Menu
        defaultOpenKeys={[]}
        mode="inline"
      >
        {
          menu.map((item) => (
              item.children ?
              <SubMenu key={item.key} icon={<span></span>} title={item.name}>
                {item.children.map((ele) => (<Menu.Item key={ele.key}><Link to={ele.url ? ele.url : ""}>{ele.name}</Link></Menu.Item>))}
              </SubMenu> : <Menu.Item key={item.key}><Link to={item.url ? item.url : ""}>{item.name}</Link></Menu.Item>
          ))
        }
      </Menu>
    </div>
  )
}

export default LayoutMenu;
