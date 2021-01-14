import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Table from './component/Table'

class index extends Component {
  render() {
    return (
      <Card>
        <div className="group-title">菜单管理</div>
        <Button type="primary">新增</Button>
        <Table/>
      </Card>
    );
  }
}

export default index;
