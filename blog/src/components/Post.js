import React, { Component } from 'react'
import {Select, Icon} from 'antd'
import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react'
import Reply from './Reply'

const Option = Select.Option

const Post = observer(function Post({store}) {
  if (store.isFetching) {
    return (
      <div className="body-loading"><Icon type="loading" /></div>
    )
  } else {
    let content
    store.data.map((post) => {
      if (post.id === store.selected) {
        content = post.content
      }
    })
    return (
      <div className="Post">
        <div className="padding-m"></div>
        <div className="Selector">
          <Select
            style={{ width: 200 }}
            onSelect={action('postOnSelect', (value) => {store.selected = value})}
            defaultValue={store.data[0].title}
            optionFilterProp="children"
            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {store.data.map((post) => (
              <Option key={post.id} value={post.id}>{post.title}</Option>
            ))}
          </Select>
        </div>
        <div className="padding-m"></div>
        <div className="line-24"></div>
        <div className="padding-m"></div>
        <div className="bottom-container">
          <div className="post-content">{content}</div>
          <Reply></Reply>
        </div>
      </div>
    )
  }
})

export default Post;
