import React, { Component, ReactChildren, ReactChild } from 'react'
import './Example.css'

// /**
//  * 给出列表归纳列表里的特定组件们
//  */
// function filteChildren(children, innerComponentNames = ['Content']) {
//   const newChildren = (Array.isArray(children) ? children : [children]).filter(component =>
//     innerComponentNames.includes(typeof component === 'function' ? component.type.name : component)
//   )
// }

// 定义原组件
/**
 * @typedef { Object } Popover_Props
 * @property { string } [className='']
 * @property { string } [placement='bottom']
 * @property { ReactChildren | ReactChild } [overlay] 弹出的内容
 * @property {'boolean' | 'yes'} yelll 例子
 *
 * @extends { Component<Popover_Props> }
 */
class Popover extends Component {
  state = {
    open: false // Popover组件是否已激活
  }
  render() {
    const { open } = this.state
    const { children, className = '', placement = 'bottom', overlay } = this.props
    return (
      <div className={`Popover${className && ` ${className}`}${open ? ` open` : ''}`}>
        <div
          className="_popover-slot"
          onClick={() => {
            console.log('haha')
          }}
        >
          {children}
        </div>
        <div className="_popover-overlay" data-placement={placement.toLowerCase()}>
          {overlay}
        </div>
      </div>
    )
  }
}

function UsageExample() {
  return (
    <div className="Example">
      <Popover placement="Right left" overlay={<div className="he">ha</div>}>
        <button
          className="inner-button"
          onClick={() => {
            let a = 3
            console.log(a)
            a++
          }}
        >
          hello
        </button>
      </Popover>
    </div>
  )
}

export default UsageExample
