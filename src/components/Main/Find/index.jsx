import React, {Component} from 'react';
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import PropTypes from 'prop-types';

import TuiAndDa from '../../../containers/tuiAndDa'


import './index.styl'

class Find extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    getTabs:PropTypes.func.isRequired
  }
  componentDidMount () {
    this.props.getTabs()
  }
  render () {
    return (
      <div className="find">
        <div className="header">
          <div className="left">
            <i className="iconfont icon-shouye1"></i>
          </div>
          <div className="middle">
            <a href="javascript:;">发现</a>
            <a href="javascript:;">甄选家</a>
          </div>
          <div className="right">
            <i className="iconfont icon-sousuo1"></i>
            <i className="iconfont icon-gouwuche"></i>
          </div>
        </div>
        <div className="navs">
          {this.props.tabs.map((item,index) => {
            return (<NavLink to={`/find/${index}`} className="public" key={index}>{item.tabName}</NavLink>)
          })}
        </div>
        <Switch>
          <Route path="/find/:id" component={TuiAndDa}></Route>
          {/*<Route path="/find/1" component={TuiAndDa}></Route>*/}
          <Redirect to='/find/0'/>
        </Switch>
      </div>

    )
  }
}

export default Find;