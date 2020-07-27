import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTask } from '../actions'

export default connect(null, { addTask })(Header)