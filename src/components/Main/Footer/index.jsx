import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import './index.styl'



class Footer extends Component {
  state = {
    navs: [
      {className: 'icon-shouye1',name:'首页',path: '/home'},
      {className: 'icon-leimupinleifenleileibie',name:'分类',path: '/classify'},
      {className: 'icon-shiwu',name:'识物',path: '/find'},
      {className: 'icon-gouwuche',name:'购物车',path: '/shopCart'},
      {className: 'icon-geren',name:'个人',path: '/personal'},
    ]
  }
  render () {
    return (
      <div id="footer" ref="footerNavs">
        {this.state.navs.map((item,index) => {
          return (
            <NavLink to={item.path} key={index}>
              <i className={`iconfont ${item.className}`}></i>
              <span>{item.name}</span>
            </NavLink>
          )
        })}

      </div>
    )
  }
}

export default Footer;