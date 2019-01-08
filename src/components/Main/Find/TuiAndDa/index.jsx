import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './index.styl'


// import Gap from '../../../Gap'

class TuiAndDa extends Component {
  static propTypes = {
    recommends: PropTypes.array.isRequired,
    getRecommends:PropTypes.func.isRequired,
    experts: PropTypes.array.isRequired,
    getExperts:PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    getNews:PropTypes.func.isRequired
  }
  componentDidMount () {
    this.props.getRecommends()
    this.props.getExperts()
    this.props.getNews()
  }
  render () {
    let currentLists ;
    if (+this.props.match.params.id === 0) {
      currentLists = this.props.recommends
    }else if (+this.props.match.params.id === 1) {
      currentLists = this.props.experts
    }else if (+this.props.match.params.id === 2) {
      currentLists = this.props.news
    }else if (+this.props.match.params.id === 3) {
      currentLists = this.props.recommends
    }else if(+this.props.match.params.id === 4) {
      currentLists = this.props.experts
    }
    return (
      <div className="recommend">
        <div className="inner">
          {currentLists.map((item,index) => {
            if (item.type === 0) {
              return (
                <div className="inner-one" key={index}>
                  <div className='top'>
                    <img src={item.avatar}/>
                    <span>{item.nickname}</span>
                  </div>
                  <div className="text">
                    {item.title}
                  </div>
                  <div className="middle">
                    <img src={item.picUrl} alt=""/>
                  </div>
                  <div className="bottom">
                    <i className="iconfont icon-yanjing"></i>
                    <span>{item.readCount}人看过</span>
                  </div>
                </div>
              )
            }else if (item.type === 1) {
              return <div className="inner-two" key={index}>
                <div className="left">
                  <div className="top">
                    <img src={item.avatar} alt=""/>
                    <span>{item.nickname}</span>
                  </div>
                  <div className="text">{item.title}</div>
                  <div className="desc">{item.subTitle}</div>
                  <div className="bottom">
                    <i className="iconfont icon-yanjing"></i>
                    <span>{item.readCount}人看过</span>
                  </div>
                </div>
                <div className="right">
                  <img src={item.picUrl} alt=""/>
                </div>
              </div>
            }else if (item.type === 7) {
              return <div key={index}>
                <div className="title">{item.nickname}</div>
                <div className="text">{item.subTitle}</div>
                <ul className="picLists">
                  {
                    item.itemList.length>0?item.itemList.map((i,index) => {
                      return i?(<li key={index}>
                                <img src={i.itemUrl} alt="" />
                              </li>):''
                    }):''
                  }

                </ul>
                <div className="bottom">
                  <i className="iconfont icon-yanjing"></i>
                  <span>{item.readCount}人看过</span>
                </div>
              </div>
            }
          })}
        </div>
      </div>
    )
  }
}

export default TuiAndDa;