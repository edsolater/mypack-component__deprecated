import React from 'react'
import { useToggle } from '../../myHooks'
import './Popover.css'

/**
 * 弹出层内容
 */
const PopContent = ({ contentNode }) =>
  contentNode ? <div className="PopContent">{contentNode}</div> : null

/**
 * Musk层
 */
const Musk = ({ muskController: [isMuskOpen, toggleMusk], contentNode }) =>
  isMuskOpen ? (
    <div className="Musk" onClick={toggleMusk}>
      <PopContent contentNode={contentNode} />
    </div>
  ) : null

/**
 * 主组件
 */
const Popover = ({ interactorAPI, children, contentNode }) => {
  const [isMuskOpen, toggleMusk] = useToggle(false)
  //#region 上抛控制用函数
  if (interactorAPI) {
    const { forToggleMusk } = interactorAPI
    if (forToggleMusk) {
      interactorAPI.forToggleMusk = toggleMusk
    }
  }
  //#endregion
  return (
    <div className="UI-Popover" onClick={toggleMusk}>
      {children}
      {[1,2]}
      <Musk muskController={[isMuskOpen, toggleMusk]} contentNode={contentNode} />
    </div>
  )
}

export default Popover
