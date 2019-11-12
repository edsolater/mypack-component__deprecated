import React from 'react'
import './Example.css'

import old_Popover from './Popover'
import List from './List'
import Form from './Form'
import  Popover  from './utilComponent/Popover'

function Example() {
  const myref = React.useRef()
  console.log('myref: ', myref)
  return (
    <div className="Example">
      <old_Popover
        ref={myref}
        childClassNames={{
          popBox: '2',
          mask: '3'
        }}
        popBoxPlacement=""
        hasMask={true}
        popBox={<div className="card">ha</div>}
      >
        <button className="inner-button">hello</button>
      </old_Popover>
      <List>
        <List.Item>hello</List.Item>
        <List>
          <List.Item>hello</List.Item>
          <List.Item>lalala</List.Item>
        </List>
        <List.Item className="hello hhe">world</List.Item>
        <List.Item className="hello">world</List.Item>
        <List.Item className="hello">world</List.Item>
      </List>
      <Form>
        <Form.Item>
          <Form.Switch value="sdf" />
        </Form.Item>
      </Form>
      <Popover>hello</Popover>
    </div>
  )
}

export default Example
