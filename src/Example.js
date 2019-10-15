import React from 'react'
import classnames from 'classnames'
import './Example.css'
import { Popover } from './popover/Popover'
import { List } from './List'

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
    </div>
  )
}

export default UsageExample
