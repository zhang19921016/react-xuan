/**
 * Created by 94326 on 2019/01/07.
 */
import {connect} from 'react-redux';
import Find from '../components/Main/Find';
import {getTabs} from '../redux/actions'

export default connect(
  state => ({tabs:state.tabs}),
  {getTabs}
)(Find);
