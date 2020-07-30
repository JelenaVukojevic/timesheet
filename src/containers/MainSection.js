import { connect } from 'react-redux'
import Main from '../components/Main'
import { getTasks, editTask, deleteTask } from '../actions'

let total = 0;
const mapStateToProps = state => ({
    tasksCount: state.tasks.length,
    tasks: state.tasks,
    total: state.tasks.forEach(task => { total += parseFloat(task.hours) })
})

export default connect(mapStateToProps, { getTasks, editTask, deleteTask })(Main)