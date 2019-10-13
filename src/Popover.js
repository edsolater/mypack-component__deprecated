import React, { Component } from 'react'
import classnames from 'classnames'
import './Popover.css'
/**
 * @typedef { Object } Popover_Props
 * @property { string } [className] 给予组件额外的名称
 * @property {{slot: string, popBox: string, mask: string}} [childClassNames] 指定子组件的 className
 * @property { string } [popBoxPlacement]
 * @property { boolean } [hasMask=false]
 * @property { ReactChildren | ReactChild } [popBox] 弹出的内容
 */
/**
 * @typedef { Object } Popover_State
 * @property { boolean } [open] 是否弹出弹框
 */
/**
 * @extends { Component<Popover_Props, Popover_State> }
 */
export class Popover extends Component {
  state = {
    open: false
  };
  render() {
    const { open } = this.state;
    const { children, className, childClassNames = {}, popBoxPlacement = '', popBox, hasMask = false } = this.props;
    return (<div className={classnames('Popover', className, { open })}>
      <div className={classnames('_slot', childClassNames['slot'])} onClick={() => {
        this.setState({ open: !open });
      }}>
        {children}
      </div>
      <div className={classnames('_popBox', childClassNames['popBox'], popBoxPlacement.toLowerCase())}>
        {popBox}
      </div>
      {hasMask ? (<div className={classnames('_mask', childClassNames['mask'])} onClick={() => {
        this.setState({ open: !open });
      }} />) : null}
    </div>);
  }
}
