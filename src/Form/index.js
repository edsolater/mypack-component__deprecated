import React, { FormHTMLAttributes } from 'react'
import classnames from 'classnames'
/********************************************
 * 此组件模拟了<form>，并自带了所有的form控件
 * 需要依赖的组件有： `<Switch>` 
 ********************************************/
import Switch from '../Switch'

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
export default class Form extends React.Component {
  static displayName = 'UI__Form'
  render() {
    const { children, className, ...restProps } = this.props
    return (
      <form className={classnames('UI__Form', className)} {...restProps}>
        {children}
      </form>
    )
  }
}
Form.Group = class FormGroup extends React.Component {
  static displayName = 'CHILD-Form__Group'
  render() {
    const { children, className, ...restProps } = this.props
    return (
      <fieldset className={classnames('CHILD-Form__Group', className)} {...restProps}>
        {children}
      </fieldset>
    )
  }
}
Form.Item = class FormItem extends React.Component {
  static displayName = 'CHILD-Form__Item'
  render() {
    const { children, className, ...restProps } = this.props
    return (
      <div className={classnames('CHILD-Form__Item', className)} {...restProps}>
        {children}
      </div>
    )
  }
}
Form.Switch = Switch
