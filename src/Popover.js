import React from 'react'
// 定义原组件
/**
 * @typedef { Object } PopoverProps
 * @property {'boolean' | 'yes'} yelll 例子
 * @property { boolean } world 例子
 * @extends { Component<PopoverProps> }
 */
export class Popover extends React.Component {
  render() {
    const { hello = 'world' } = this.props;
    return <div className="outer">{hello}</div>;
  }
}
