import React, { ReactNode } from 'react'
import classnames from 'classnames'
import './index.css'
/**
 * @typedef { Object } Popover_Props
 * @property { string } [className] 给予组件额外的名称
 * @property {{button: string, popBox: string, mask: string}} [childClassNames] 指定子组件的 className
 * @property { string } [popBoxPlacement]
 * @property { boolean } [hasMask=false]
 * @property { ReactNode } [popBox] 弹出的内容
 */
/**
 * @typedef { Object } Popover_State
 * @property { boolean } [open] 是否弹出弹框
 */
/**
 * @extends { React.Component<Popover_Props, Popover_State> }
 * @example
 *   <Popover
 *     childClassNames={{
 *       self: 'hello1',
 *       popBox: '2',
 *       mask: '3'
 *     }}
 *     popBoxPlacement=""
 *     hasMask={true}
 *     popBox={<div className="card">ha</div>}
 *   >
 *     <button className="inner-button">hello</button>
 *   </Popover>
 */
export default class Popover extends React.Component {
  static displayName = 'UI__Popover'
  state = {
    open: false
  }
  render() {
    const { open } = this.state
    const {
      children,
      className,
      slotClassNames = {},
      popBoxPlacement = '',
      popBox,
      hasMask = false
    } = this.props
    return (
      <div className={classnames('UI__Popover', className, { open })}>
        <div
          className={classnames(
            'SLOT-Popover__button',
            slotClassNames['button']
          )}
          onClick={() => {
            this.setState({ open: !open })
          }}
        >
          {children}
        </div>
        <div
          className={classnames(
            'SLOT-Popover__popBox',
            slotClassNames['popBox'],
            popBoxPlacement.toLowerCase() // 额外
          )}
        >
          {popBox}
        </div>
        {hasMask ? (
          <div
            className={classnames(
              'SLOT-Popover__mask',
              slotClassNames['mask']
            )}
            onClick={() => {
              this.setState({ open: !open })
            }}
          />
        ) : null}
      </div>
    )
  }
}
