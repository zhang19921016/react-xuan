import ajax from './ajax'

const prefix = ''

/*const XHR = '/xhr'
const CODE = '/code'*/

//模拟分类的接口函数
export const reqListData = () => ajax('/list')

//获取识物路由中导航
export const reqTabs = () => ajax(`${prefix}/find/getTabs.json`)

//获取识物导航中推荐的数据
export const reqRecommends = () => ajax(`${prefix}/find/recManual.json`)

//获取识物导航中达人和上新以及home的数据
export const reqExperts = (a,b,c) => {
  return ajax(`${prefix}/find/getTabData.json`,{page:a,size:b,tabId:c})
}

/*//获取识物导航中晒物数据
export const reqHomeData = () => ajax(BASE + '/look/homeData.json',{csrf_token:'c39c67c51aeb82a04ad3e23d01e88d3e'})
export const reqGetList = () => ajax(BASE + '/look/getList.json',{page:1,size:20,type:1,csrf_token:'c39c67c51aeb82a04ad3e23d01e88d3e'})
export const reqGetCollection = () => ajax(BASE + '/look/getCollection.json',{id:26,csrf_token:'c39c67c51aeb82a04ad3e23d01e88d3e'})

//获取搜索界面数据
export const reqSearchs = () => ajax(XHR + '/search/init.json')

//搜索时发送的请求
export const reqSearchAutoComplete = (value) => ajax(XHR + '/search/searchAutoComplete.json',{"keywordPrefix":value})

//手机验证码请求
export const reqSendcode = (phone) => ajax(CODE + '/sendcode',{phone})
//手机号验证码登陆
export const reqLoginSms = (phone,code) => ajax(CODE + '/login_sms',{phone,code},'POST')*/
