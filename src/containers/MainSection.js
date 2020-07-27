import { connect } from 'react-redux'
import Main from '../components/Main'
import { editTask, deleteTask } from '../actions'

const mapStateToProps = state => ({
    tasksCount: state.tasks.length,
    tasks: state.tasks
})

export default connect(mapStateToProps, { editTask, deleteTask })(Main)