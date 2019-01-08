/**
 * Created by 94326 on 2019/01/07.
 */
import {connect} from 'react-redux';
import TuiAndDa from '../components/Main/Find/TuiAndDa';
import {getRecommends,getExperts,getNews} from '../redux/actions'

export default connect(
  state => ({recommends:state.recommends,experts:state.experts,news:state.news}),
  {getRecommends,getExperts,getNews}
)(TuiAndDa);
