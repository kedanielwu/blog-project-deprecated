import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router'
import Posts from './Posts'
import Page_404 from './404'

class Root extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Posts}></Route>
        <Route path="*" component={Page_404}></Route>
      </Router>
    )
  }
}

export default Root;
