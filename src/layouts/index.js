import React, { useEffect, useState } from 'react'
import { head } from 'lodash';
import Menu from "./menu";
import Header from './header'
import './index.less'
import { apiLogin } from './services'

const data = [
  {
    name: "数据",
    key: "shuju",
    url: "/shuju",
    children: [
      {
        name: "概览",
        key: "gailan",
        url: "/gailan",
        children: [
          {
            name: "整体看板",
            key: "zhengtikanban",
            url: "/shuju/gailan/zhengtikanban"
          }
        ]
      },
      {
        name: "营销",
        key: "yingxiao",
        url: "/yingxiao",
        children: [
          {
            name: "优惠券统计",
            key: "youhuiquan",
            url: "/shuju/yingxiao/youhuitongji"
          },{
            name: "活动统计",
            key: "huodongtongji",
            url: "/shuju/yingxiao/huodongtongji"
          },{
            name: "活动分析",
            key: "/shuju/yingxiao/huodongfenxi"
          }
        ]
      }
    ]
  },{
    name: "客户",
    key: "kehu",
    url: "/kehu",
    children: [
      {
        name: "客户管理",
        key: "kehuguanli",
        children: [
          {
            name: "客户列表",
            key: "kehuliebiao",
            url: "/kehu/kehuguanli/kehuliebiao"
          },
          {
            name: "客户标签",
            key: "kehubiaoqian",
            url: "/kehu/kehuguanli/kehubiaoqian"
          },
          {
            name: "客户分群",
            key: "kehufenqun",
            url: "/kehu/kehuguanli/kehufenqun"
          },
          {
            name: "客户导入",
            key: "kehudaoru",
            url: "/kehu/kehuguanli/kehudaoru"
          },
        ]
      },{
        name: "会员管理",
        key: "huiyuanguanli",
        children: [
          {
            name: "基础设置",
            key: "jichushezhi",
            url: "/kehu/huiyuanguanli/jichushezhi"
          },
          {
            name: "固定等级",
            key: "gudingdengji",
            url: "/kehu/huiyuanguanli/gudingdengji"
          },
          {
            name: "动态等级",
            key: "dongtaidengji",
            url: "/kehu/huiyuanguanli/dongtaidengji"
          }
        ]
      }
    ]
  },{
    name: "系统",
    key: "system",
    url: "/system",
    children: [
      {
        name: "菜单管理",
        key: "menu",
        url: "/system/menu",
      },
      {
        name: "角色管理",
        key: "role",
        url: "/system/role",
      }
    ]
  }
]

const BaseLayout = (props) => {

  const [menu, setMenu] = useState(head(data)['children']);
  const [key, setKey] = useState(head(data)['key'])

  useEffect(() => {
    // setMenu(head(data))
    // setKey(head(data)["key"])
  }, [data])

  const selectMenu = (item) => {
    console.log('item', item)
    setMenu(item.children)
    setKey(item["children"]["key"])
  }

  useEffect(() => {
    console.log('请求接口')
    apiLogin().then((res) => {
      console.log('登录接口数据', res)
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  return (
    <div className="layout">
      <div className="menu">
        <div className="menu-sider">
          <span className="logo">
            <img src="https://yy-1258898587.cos.ap-guangzhou.myqcloud.com/public/mp/logo/mp-logo.png" alt=""/>
          </span>
          {data.map((item) => <div
            key={item.key}
            className={item.key == key ? "active" : "" }
            onClick={() => selectMenu(item)}
            onMouseMove={() => setMenu(item.children)}
          >{item.name}</div>)}
        </div>
        <div className="menu-sider-children">
          <Menu menu={menu}/>
        </div>
      </div>
      <Header></Header>
      <div className="main">
        <div className="mainContainer"> {props.children} </div>
      </div>
    </div>
  )
}

export default BaseLayout;
