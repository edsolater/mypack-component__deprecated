import React, { ReactNode } from 'react'
import classnames from 'classnames'
import './index.css'
/**
 * @typedef { Object } Popover_Props
 * @property { string } [className] 给予组件额外的名称
 * @property {{button: string, popContent: string, mask: string}} [childClassNames] 指定子组件的 className
 * @property { string } [boxPlacement]
 * @property { boolean } [hasMask=false]
 * @property { ReactNode } [boxContent] 弹出的内容
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
  state = {
    open: false
  }
  render() {
    const { open } = this.state
    const {
      children,
      className,
      childClassNames = {},
      boxPlacement = '',
      boxContent,
      hasMask = false
    } = this.props
    return (
      <div className={classnames('UI_Popover', className, { open })}>
        <div
          className={classnames('__button', childClassNames['button'])}
          onClick={() => {
            this.setState({ open: !open })
          }}
        >
          {children}
        </div>
        <div
          className={classnames(
            '__boxContent',
            childClassNames['popup-content'],
            boxPlacement.toLowerCase()
          )}
        >
          {boxContent}
        </div>
        {hasMask ? (
          <div
            className={classnames('__mask', childClassNames['mask'])}
            onClick={() => {
              this.setState({ open: !open })
            }}
          />
        ) : null}
      </div>
    )
  }
}
