import React, { FormHTMLAttributes } from 'react'
import classnames from 'classnames'
import './Example.css'

import Popover from './Popover'
import List from './List'

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
    const { className, icon_opened, icon_closed, icons = {} } = this.props
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
        <div className="__background" />
        {icon_closed && (
          <div className="__icon-closed">
            {icon_closed || icons['icon_closed']}
          </div>
        )}
        {icon_opened && (
          <div className="__icon-opened">
            {icon_opened || icons['icon_opened']}
          </div>
        )}
        <div className="__toggle-handle" />
      </div>
    )
  }
}

function Example() {
  return (
    <div className="Example">
      <Popover
        childClassNames={{
          self: 'hello1',
          popBox: '2',
          mask: '3'
        }}
        boxPlacement=""
        hasMask={true}
        boxContent={<div className="card">ha</div>}
      >
        <button className="inner-button">hello</button>
      </Popover>
      <List displayName="hh">
        <div>hello</div>
        <List>
          <div>hello</div>
          <div>lalala</div>
        </List>
        <div className="hello hhe">world</div>
        <div className="hello">world</div>
        <div className="hello">world</div>
      </List>
      <Form>
        <Form.Item>
          <Form.Switch value="sdf" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Example
