import React, { Component } from 'react'
import './Popover.css'

// 定义原组件
/**
 * @typedef {Object} PopoverProps
 * @property {'boolean' | 'yes'} hello 例子
 * @property {boolean} world 例子
 * @extends {React.Component<PopoverProps>}
 */
class Popover extends Component {
  render() {
    return <div className="outer">hello</div>
  }
}

function Example() {
  return (
    <div className="Example">
      <Popover />
    </div>
  )
}

export default Example
