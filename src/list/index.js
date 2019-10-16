import React, { ReactNode } from 'react'
import classnames from 'classnames'
import './index.css'
/**
 *
 * @param {ReactNode} reactNode
 * @return {ReactNode[]}
 */
const arrayReactChildren = reactNode => [reactNode].flat()
/**
 * @typedef { Object } List_Props
 * @property { string } [className] 给予组件额外的名称
 * @property {{slot: string, popBox: string, mask: string}} [childClassNames] 指定子组件的 className
 */
/**
 * @typedef { Object } List_State
 * @property { boolean } [open] 是否弹出弹框
 */
/**
 * TODO：<List> 中的组件是可开启拖动排序的
 * TODO：<List> 组件无需手写 <li> 中的组件是可开启拖动排序的
 * @extends { React.Component<List_Props, List_State> }
 */
export default class List extends React.Component {
  // 既然vscode没有<ul><li>都是使用<div>模拟的，不妨我也这么干
  render() {
    const { className, classNames = {}, children } = this.props
    return (
      <div className={classnames('UI_List', className)}>
        {/* 知道有些冗余，但react.createElement()似乎无法被 react DevTool 检测具体位置 */}
        {arrayReactChildren(children).map(child => (
          <div key={child} className={classnames('__listItem', classNames.listItem)}>
            {child}
          </div>
        ))}
      </div>
    )
  }
}
//
