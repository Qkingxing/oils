import React from "react";
import { Popover } from 'antd';
import Title from '@/components/Card/Title';
import Tween from "@/components/Tween";
import { ExclamationCircleOutlined } from '@ant-design/icons'

const content = (
  <div className="">
    <p>销售总收入：今天截止此时的销售总收入周同比：与上周同一天截止此时的销售总收入对比</p>
    <span>注：此数据实时更新</span>
  </div>
)

const Item = () => {
  return (
    <div>
      <div className="item">
        <span>销售总收入</span>
        <div><Tween num={1000}/>元</div>
        <div className="info"><span>周同比 </span><span>降56.65%</span></div>
        <Popover content={content} title="销售总收入" overlayClassName="note"><ExclamationCircleOutlined /></Popover>
      </div>
    </div>
  )
}

const SaleAll = () => {
  return (
    <div className="saleall">
      <Title>销售总数据</Title>
      <div className="saleall-container">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  )
}
export default SaleAll;
