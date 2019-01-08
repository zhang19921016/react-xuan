import React, {Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import Footer from './Footer'
import Home from './Home'
import Classify from './Classify'
import Find from '../../containers/find'
import ShopCart from './ShopCart'
import Personal from './Personal'

class Main extends Component {
  render () {
    return(
      <div>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/classify" component={Classify}></Route>
          <Route path="/find" component={Find}></Route>
          <Route path="/shopCart" component={ShopCart}></Route>
          <Route path="/personal" component={Personal}></Route>
          <Redirect to='/home'></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
      )

  }
}

export default Main;