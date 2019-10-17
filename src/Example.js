import React, { FormHTMLAttributes } from 'react'
import classnames from 'classnames'
import './Example.css'

import Popover from './Popover'
import List from './List'
import Form from './Form'

function Example() {
  return (
    <div className="Example">
      <Popover
        childClassNames={{
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
    </div>
  )
}

export default Example
