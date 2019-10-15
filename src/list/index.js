import React from 'react'
/**
 * @typedef { Object } List_Props
 * @property { string } [className] 给予组件额外的名称
 * @property {{slot: string, popBox: string, mask: string}} [childClassNames] 指定子组件的 className
 * @property { boolean } [layoutByDrag=false]
 * @property { boolean } [hasMask=false]
 * @property { ReactChildren | ReactChild } [popBox] 弹出的内容
 */
/**
 * @typedef { Object } List_State
 * @property { boolean } [open] 是否弹出弹框
 */
/**
 * TODO：<List> 中的组件是可开启拖动排序的
 * TODO：<List> 组件无需手写 <li> 中的组件是可开启拖动排序的
 * @extends { Component<List_Props, List_State> }
 */
export class List extends React.Component {
  // 既然vscode没有<ul><li>都是使用<div>模拟的，不妨我也这么干
  render() {
    const { children } = this.props
    return <div className="List">{children}</div>
  }
}
