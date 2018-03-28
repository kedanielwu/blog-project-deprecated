import React, { Component } from 'react';
import {Icon} from 'antd'

// JSON mockup
var data = {
  data: [
    {
      id: 1,
      user: 'cym',
      content: '留言留言留言留言留言留言留言留言留言留言留言'
    },
    {
      id: 2,
      user: 'cym',
      content: '留言留言留言留言留言留言留言留言留言留言留言'
    },
    {
      id: 3,
      user: 'cym',
      content: '留言留言留言留言留言留言留言留言留言留言留言'
    }
  ]
}

class Reply extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='Reply'>
        <div className="reply-title">留言&nbsp;<Icon type="message" /></div>
        <div className="padding-s"></div>
        <div className="line-24"></div>
        <div className="padding-s"></div>
        {
          data.data.map((reply) => (
            <div key={reply.id} className="reply-body">
              <div className='reply-username'>{reply.user}</div>
              <div className='reply-content'>{reply.content}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Reply;
