import { connect } from 'react-redux'
import App from '../App'
import { getTasks } from '../actions'

const mapStateToProps = state => ({
    tasksCount: state.tasks.length,
    tasks: state.tasks
})

const actionCreators = {
    getTasks
}

export default connect(mapStateToProps, actionCreators)(App)