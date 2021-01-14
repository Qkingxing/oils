import React from 'react';
import { Table, Switch, Space } from 'antd';

const columns = [
  {
    title: '菜单名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '图标',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: "url",
    dataIndex: "url",
    key: "url",
    width: 500,
  },
  {
    title: "操作"
  }
];

const data = [
  {
    key: 1,
    name: '数据',
    url: '/shuju',
    children: [
      {
        key: 11,
        name: '概览',
        url: '/shuju/gailan',
        children: [
          {
            key: 112,
            name: '整体看板',
            url: "/shuju/gailan/zhengtikanban"
          }
        ]
      },
      {
        key: 12,
        name: '营销',
        url: '/shuju/yingxiao',
        children: [
          {
            key: 121,
            name: '优惠券统计',
            url: "/shuju/yingxiao/youhuiquanyongji"
          },
          {
            key: 123,
            name: '活动统计',
            url: "/shuju/yingxiao/huodongtongji"
          },
          {
            key: 123,
            name: '活动分析',
            url: "/shuju/yingxiao/huodongfenxi"
          },
        ]
      },
    ],
  },
  {
    key: 2,
    name: '客户',
    url: '/kehu',
    children: [
      {
        key: 21,
        name: '客户管理',
        url: '/kehu/kehuguanli',
        children: [
          {
            key: 211,
            name: '客户列表',
            url: "/kehu/kehuguanli/kehuliebiao"
          },{
            key: 212,
            name: '客户标签',
            url: "/kehu/kehuguanli/kehubiaoqian"
          },{
            key: 213,
            name: '客户分群',
            url: "/kehu/kehuguanli/kehufenqun"
          },{
            key: 214,
            name: '客户列导入',
            url: "/kehu/kehuguanli/kehudaoru"
          }
        ]
      },
      {
        key: 22,
        name: '会员管理',
        url: '/kehu/huiyuanguanli',
        children: [
          {
            key: 221,
            name: '优惠券统计',
            url: "/kehu/huiyuanguanli/jichushezhi"
          },
          {
            key: 222,
            name: '固定等级',
            url: "/kehu/huiyuanguanli/gudingdengji"
          },
          {
            key: 223,
            name: '动态等级',
            url: "/kehu/huiyuanguanli/dongtaidengji"
          },
        ]
      },
    ],
  },{
    key: 3,
    name: '系统',
    url: '/system',
    children: [
      {
        key: 31,
        name: '菜单管理',
        url: '/system/menu',
      },
      {
        key: 32,
        name: '角色管理',
        url: '/system/role',
      },
    ],
  },
];

// rowSelection objects indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   },
// };

const TreeData = () => {
  return (
    <React.Fragment>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </React.Fragment>
  );
}


export default TreeData;
