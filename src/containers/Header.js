import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTask } from '../actions'

const actionCreators = {
    addTask
}

export default connect(null, actionCreators)(Header)