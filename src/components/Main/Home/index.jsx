import React, {Component} from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import './index.styl'

class Home extends Component {
  state = {
    swiperAddresses: [
      'https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/ddd71df43a50749d140786dce1381e15.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0'
    ],
    carouselAddresses: [
      {url:'http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png',name:'居家'},
      {url:'http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png',name:'鞋包服饰'},
      {url:'http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png',name:'服装'},
      {url:'http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png',name:'电器'},
      {url:'http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png',name:'婴童'},
      {url:'http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png',name:'饮食'},
      {url:'http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png',name:'洗护'},
      {url:'http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png',name:'餐厨'},
      {url:'http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png',name:'文体'},
      {url:'http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png',name:'特色区'}
    ],
    optAddresses: [
      {url:['http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png?imageView&thumbnail=150x150&quality=75','http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png?imageView&thumbnail=150x150&quality=75'],title:'实时好评榜',desc:'精选优质好物'},
      {url:['http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png?imageView&thumbnail=150x150&quality=75','http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png?imageView&thumbnail=150x150&quality=75'],title:'新品热销榜',desc:'好物抢先体验'},
      {url:['http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png?imageView&thumbnail=150x150&quality=75','http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png?imageView&thumbnail=150x150&quality=75'],title:'严选线下店首家',desc:'体验选式美学'},
      {url:['http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png?imageView&thumbnail=150x150&quality=75','http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png?imageView&thumbnail=150x150&quality=75'],title:'12月必买好物',desc:'冬日小确幸指南'},
    ]
  }
  componentDidMount () {
    new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
  render () {
    return (
      <div>
        <div id="header">
          <div className="header-top">
            <a className="logo"></a>
            <div className="search">
              <i className="icon"></i>
              <span>搜索商品, 共19964款好物</span>
            </div>
            <div className="btn">登录</div>
          </div>
          <div className="header-bottom">
            <ul className="inner-left">
              <li>
                <a href="javascript:;">推荐</a>
              </li>
              <li>
                <a href="javascript:;">居家</a>
              </li>
              <li>
                <a href="javascript:;">鞋包配饰</a>
              </li>
              <li>
                <a href="javascript:;">服装</a>
              </li>
              <li>
                <a href="javascript:;">电器</a>
              </li>
            </ul>
            <div className="inner-right">
              <span className="inner-icon"></span>
            </div>
          </div>
        </div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {this.state.swiperAddresses.map((item,index) => {
              return <div className="swiper-slide" key={index}> <img src={item} alt=""/></div>
            })}
          </div>
          <div className="swiper-pagination swiper-pagination-bullets"></div>
        </div>
        <div className="servicePolicy">
          <ul className="g-grow">
            <li className="item">
              <a href="javascript:;">
                <i className="service_icon"></i>
                <span>网易自营品牌</span>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <i className="service_icon"></i>
                <span>30天无忧退货</span>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <i className="service_icon"></i>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="section">
          <ul className="s-carousel">
            {
              this.state.carouselAddresses.map((item,index) => {
                return <li className="s-carousel-item" key={index} >
                  <img  src={item.url} alt=""/>
                  <div className="text">{item.name}</div>
                </li>
              })
            }

          </ul>
          <div className="s-bossRecommendModule">
            <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt=""/>
          </div>
          <div className="s-sceneLightShoppingGuideModule">
            {
              this.state.optAddresses.map((item,index) => {
                return <div className="s-sceneLightShoppingGuideModule-item" key={index}>
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                  <div className="images">
                    <img className="images-left"  src={item.url[0]} alt=""/>
                    <img className="images-right"  src={item.url[1]} alt=""/>
                  </div>
                </div>
              })
            }

          </div>
          <div className="s-bottom">
            <div className="s-b-inner">
              <div className="inner-header">
                <a href="javascript:;" className="inner-h-left">下载APP</a>
                <a href="javascript:;" className="inner-h-right">电脑版</a>
              </div>
              <div className="inner-footer"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;