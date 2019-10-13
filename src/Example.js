import React, { ReactChildren, ReactChild } from 'react'
import './Example.css'
import { Popover } from './Popover'

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
    </div>
  )
}

export default UsageExample
