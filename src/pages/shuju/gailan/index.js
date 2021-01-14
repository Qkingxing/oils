import React, { Component } from 'react';
import { Card, DatePicker } from 'antd';
import Saleall from './saleall';
import Trend from './trend'
import './index.less'
const { RangePicker } = DatePicker;

const tabList = [
  { key: 'quanbu', tab: '全部' },
  { key: 'youpin', tab: '油品' },
  { key: 'shanfu', tab: '闪付' },
  { key: 'tuanyou', tab: '团油' },
  { key: 'bianlidian', tab: '便利店' },
];

const search = [
  {key: "jintian", name: "今天"},
  {key: "zuotian", name: "昨天"},
  {key: "benzhou", name: "本周"},
  {key: "benyue", name: "本月"},
  {key: "zidingyi", name: "自定义"},
]

export default class index extends Component {

  state = {
    key: "quanbu",
    searchKey: ""
  }

  // 切换tab
  onTabChange = (key) => {
    this.setState({key})
  }

  // 点击查询
  onSearch = (key) => {
    this.setState({searchKey: key})
  }

  render() {

    const { searchKey } = this.state;

    return (
      <div className="oi-overview">
          <Card className="oi-card">
              <Card
                tabList={tabList}
                size={"default"}
                tabBarExtraContent={<a href="#">More</a>}
                activeTabKey={this.state.key}
                bordered={false}
                onTabChange={key => this.onTabChange(key)}
              >
                <div className="search">
                  {search.map(item =>
                    <div
                      key={item.key}onClick={() => this.onSearch(item.key)}
                      className={`search-li ${item.key == searchKey ? "active" : ""}`}
                    >
                      {item.name}
                    </div>
                  )}
                  {searchKey == "zidingyi" && <RangePicker size="large"/>}
                </div>
                <Saleall/>
                <Trend />
              </Card>
          </Card>
      </div>
    )
  }
}
