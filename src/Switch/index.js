import React from 'react'
import classnames from 'classnames'

export default class Switch extends React.Component {
  static displayName = 'UI__Switch'
  state = {
    isOn: this.props.isOn || false
  }
  render() {
    const { className, icon_opened, icon_closed, icons = {} } = this.props
    return (
      <div
        className={classnames('UI__Switch', className, {
          isOn: this.state.isOn,
          isOff: !this.state.isOn
          
        })}
        onClick={() => {
          this.setState({ isOn: !this.state.isOn })
        }}
      >
        <div className="SOLT-Switch__background" />
        {icon_closed && (
          <div className="SOLT-Switch__icon-closed">
            {icon_closed || icons['icon-closed']}
          </div>
        )}
        {icon_opened && (
          <div className="SOLT-Switch__icon-opened">
            {icon_opened || icons['icon-opened']}
          </div>
        )}
        <div className="SOLT-Switch__toggle-handle" />
      </div>
    )
  }
}