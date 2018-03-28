import React, { Component } from 'react'
import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Header from '../components/Header'
import Post from '../components/Post'

import '../assets/css/main.css'

const store = observable({
  selected: '1',
  isFetching: true,
  data: []
})

//json parser
const parseJson = (src) => (
  src.json()
)

//Post Data Fetching
fetch('http://localhost:8080/api/postList')
.then(
  (response) => {
    return parseJson(response)
  }
)
.then(
  action('postFetch', (data) => {
    store.data = data.data
    store.isFetching = false
  })
)

const Posts = observer(function Posts() {
  return (
    <div className='Posts'>
      <Header/>
      <Post store={store}></Post>
      <DevTools></DevTools>
    </div>
  )
}
)

export default Posts;
