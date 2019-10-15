import React, { FormHTMLAttributes } from 'react'
import classnames from 'classnames'
import './Example.css'
import { Popover } from './popover'
import { List } from './list'

/**
 * @typedef { Object } Form_Props
 * @property { string } [className] 给予组件额外的名称
 */
// /**
//  * @typedef { Object } Form_State
//  * @property { boolean } [open] 是否弹出弹框
//  */
/**
 * 将 <form> 与 <fieldset> 合并成 <Form>
 * @extends { Component<FormHTMLAttributes, Form_State> }
 */
class Form extends React.Component {
  render() {
    const { children, className, ...restProps } = this.props
    return (
      <form className={classnames('Form', className)} {...restProps}>
        {children}
      </form>
    )
  }
}
Form.Group = class FormGroup extends React.Component {
  render() {
    const { children, className, ...restProps } = this.props
    return (
      <fieldset className={classnames('FormGroup', className)} {...restProps}>
        {children}
      </fieldset>
    )
  }
}
Form.Item = class FormItem extends React.Component {
  render() {
    const { children, className, ...restProps } = this.props
    return (
      <div className={classnames('FormItem', className)} {...restProps}>
        {children}
      </div>
    )
  }
}
Form.Switch = class Switch extends React.Component {
  state = {
    isOn: this.props.isOn || false
  }
  render() {
    const { className, icon_opened, icon_closed } = this.props
    return (
      <div
        className={classnames('Switch', className, {
          isOn: this.state.isOn,
          isOff: !this.state.isOn
        })}
        onClick={() => {
          this.setState({ isOn: !this.state.isOn })
        }}
      >
        <div className="_background" />
        {icon_closed && <div className="_icon-closed">{icon_closed}</div>}
        {icon_opened && <div className="_icon-opened">{icon_opened}</div>}
        <div className="_toggle-handle" />
      </div>
    )
  }
}

function UsageExample() {
  return (
    <div className="Example">
      <Popover
        childClassNames={{
          self: 'hello1',
          popBox: '2',
          mask: '3'
        }}
        popBoxPlacement=""
        hasMask={true}
        popBox={<div className="card">ha</div>}
      >
        <button className="inner-button">hello</button>
      </Popover>
      <List>
        <div>hello</div>
        <div>hello</div>
        <div>world</div>
        <div>world</div>
        <div>world</div>
      </List>
      <Form>
        <Form.Item>
          <Form.Switch value="sdf" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default UsageExample
