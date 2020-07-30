import {
    GET_TASKS,
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK
} from '../constants/ActionTypes'

// import moment from 'moment'

// const urlDate = window.location.pathname.substr(1)
// const date = (urlDate) ? 
//       moment(urlDate, 'DD-MM-YYYY').format("DD/MM/YYYY") : 
//       moment().format('DD/MM/YYYY');

export default function tasks(state = [], action) {
    switch (action.type) {
        case GET_TASKS:
            return state.concat(action.payload)
            // return action.payload.map(task => 
            //     state.push(task)
                
            // )
            
        case ADD_TASK:
            return [
                ...state
            ]

        case EDIT_TASK:
            return state.map(task =>
                task.id === action.is ?
                { ...task, data: action.data } :
                task
            )

        case DELETE_TASK:
            return state.filter(task => 
                task.id === action.id )
        
        default:
            return state;
    }
}