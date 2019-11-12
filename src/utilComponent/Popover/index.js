import React from 'react'
import { useToggle } from '../../myHooks'
import './Popover.css'

/**
 * 弹出层内容
 */
const PopContent = ({ contentNode }) =>
  contentNode ? <div className="PopContent">{contentNode}</div> : null
PopContent.displayName = 'Child(PopContent)'

/**
 * Musk层
 */
const Musk = ({ muskController: [isMuskOpen, toggleMusk], contentNode }) =>
  isMuskOpen ? (
    <div
      className="Musk"
      onClick={e => {
        e.stopPropagation()
        toggleMusk()
      }}
    >
      <PopContent contentNode={contentNode} />
    </div>
  ) : null
Musk.displayName = 'Child(Musk)'

/**
 * 主组件
 */
const Popover = ({ handler, children, contentNode }) => {
  const [isMuskOpen, toggleMusk] = useToggle(false)
  //#region 上抛控制用函数
  if (handler) {
    const { forToggleMusk } = handler
    if (forToggleMusk) {
      handler.forToggleMusk = toggleMusk
    }
  }
  //#endregion
  return (
    <div className="Popover" onClick={toggleMusk}>
      {children}
      {[1, 2]}
      <Musk muskController={[isMuskOpen, toggleMusk]} contentNode={contentNode} />
    </div>
  )
}
Popover.displayName = 'UI(Popover)'

export default Popover
