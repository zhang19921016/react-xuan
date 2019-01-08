/**
 * 标识要执行行为的对象
 */
import {reqTabs,reqRecommends,reqExperts} from '../api'

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

// 同步成功响应
const authSuccess = (data) => ({type: AUTH_SUCCESS, data})
const authErr = () => ({type: AUTH_ERR})

const authSuccessTwo = (data) => ({type: AUTH_SUCCESSTWO, data})
const authErrTwo  = () => ({type: AUTH_ERRTWO})

const authSuccessThree = (data) => ({type: AUTH_SUCCESSTHREE, data})
const authErrThree  = () => ({type: AUTH_ERRTWOTHREE})

const authSuccessFour= (data) => ({type: AUTH_SUCCESSFOUR, data})
const authErrFour  = () => ({type: AUTH_ERRTWOTFOUR})

export const getTabs = () => {
  return async dispatch => {
    const result = await reqTabs();
    if (result.code === '200') {
      dispatch(authSuccess(result.data))
    }else{
      dispatch(authErr())
    }
  }
}
export const getRecommends = () => {
  return async dispatch => {
    const result = await reqRecommends();
    if (result.code === '200') {
      dispatch(authSuccessTwo(result.data))
    } else {
      dispatch(authErrTwo())
    }
  }
}
let num = 0
export const getExperts = () => {
  num++;
  return async dispatch => {
    const result = await reqExperts(num,5,4);
    if (result.code === '200') {
      dispatch(authSuccessThree(result.data.result))
    } else {
      dispatch(authErrThree())
    }
  }
}
export const getNews = () => {
  num++;
  return async dispatch => {
    const result = await reqExperts(1,5,5)
    if (result.code === '200') {
      dispatch(authSuccessFour(result.data.result))
    } else {
      dispatch(authErrFour())
    }
  }
}