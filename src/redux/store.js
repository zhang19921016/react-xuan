/**
 * 将state reduce和action联系在一起的对象,集中管理state
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'


export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))