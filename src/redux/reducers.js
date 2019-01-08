/**
 * 根据老的state和新的action产生新的状态
 */
import {combineReducers} from 'redux'
import {
  AUTH_SUCCESS,
  AUTH_ERR,
  AUTH_SUCCESSTWO,
  AUTH_ERRTWO,
  AUTH_SUCCESSTHREE,
  AUTH_ERRTWOTHREE,
  AUTH_SUCCESSFOUR,
  AUTH_ERRTWOTFOUR,
} from './action-type'


const initTabs = []
function tabs (previousState = initTabs ,action) {
  switch (action.type) {
    case AUTH_SUCCESS: // 认证成功
      return action.data
    case AUTH_ERR: // 认证失败
      return []
    default :
      return previousState
  }
}
const initRecommends = []
function recommends (previousState = initRecommends ,action) {
  switch (action.type) {
    case AUTH_SUCCESSTWO: // 认证成功
      const newArr = []
      action.data.forEach((item,index) => {
       item.topics.forEach(item => newArr.push(item))
      })
      return newArr
    case AUTH_ERRTWO: // 认证失败
      return []
    default :
      return previousState
  }
}
const initExperts = []
function experts (previousState = initExperts ,action) {
  switch (action.type) {
    case AUTH_SUCCESSTHREE: // 认证成功
      return action.data
    case AUTH_ERRTWOTHREE: // 认证失败
      return []
    default :
      return previousState
  }
}
const initNews = []
function news (previousState = initNews ,action) {
  switch (action.type) {
    case AUTH_SUCCESSFOUR: // 认证成功
      return action.data
    case AUTH_ERRTWOTFOUR: // 认证失败
      return []
    default :
      return previousState
  }
}


export default combineReducers ({
  tabs,
  recommends,
  experts,
  news
})