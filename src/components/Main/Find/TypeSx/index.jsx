import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TypeSx extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  render () {
    const {data} = this.props
    return (
      <div className="inner-one">
        <div className='top'>
          <img src={data.avatar}/>
          <span>{data.nickname}</span>
        </div>
        <div className="text">
        </div>
        <div className="middle">
          <img src={data.picUrl} alt=""/>
        </div>
        <div className="bottom">
          <i className="iconfont icon-yanjing"></i>
          <span>{data.readCount}人看过</span>
        </div>
      </div>
    )
  }
}

export default TypeSx;