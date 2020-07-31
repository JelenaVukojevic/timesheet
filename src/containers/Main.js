import { connect } from 'react-redux'
import Main from '../components/Main'
import { editTask, deleteTask } from '../actions'

const mapStateToProps = state => ({
    tasksCount: state.tasks.length,
    tasks: state.tasks
})

const actionCreators = {
    editTask,
    deleteTask
}

export default connect(mapStateToProps, actionCreators)(Main)