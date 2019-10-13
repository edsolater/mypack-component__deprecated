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
 * @property { string } [contentPlacement='bottom']
 * @property { boolean } [hasMask=false]
 * @property { ReactChildren | ReactChild } [content] 弹出的内容
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
    const { children, className = '', contentPlacement = 'bottom', content, hasMask = false } = this.props
    return (
      <div className={`Popover${className && ` ${className}`}${open ? ` open` : ''}`}>
        <div
          className="_popover-slot"
          onClick={() => {
            this.setState({ open: !open })
          }}
        >
          {children}
        </div>
        <div className="_popover-content" data-placement={contentPlacement.toLowerCase()}>
          {content}
        </div>
        {hasMask ? <div className="_propover-mask" onClick={()=>{
          this.setState({ open: !open })
        }}/> : null}
      </div>
    )
  }
}

function UsageExample() {
  return (
    <div className="Example">
      <Popover contentPlacement="Right left" hasMask={true} content={<div className="card">ha</div>}>
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
