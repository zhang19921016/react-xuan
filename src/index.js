/**
 * 入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter,Route,Switch} from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Main from './components/Main'

import store from './redux/store'


ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route component={Main}></Route>
        </Switch>
      </HashRouter>
    </Provider>

  ),
  document.getElementById('app')
)