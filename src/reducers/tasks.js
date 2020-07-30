import {
    GET_TASKS,
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK
} from '../constants/ActionTypes'

export default function tasks(state = [], action) {
    switch (action.type) {
        case GET_TASKS:
            return state.concat(action.payload)

        case ADD_TASK:
            return state.concat(action.payload);

        case EDIT_TASK:
            return state.map(task =>
                task.id === action.is ?
                { ...task, data: action.data } :
                task
            )

        case DELETE_TASK:
            return state.filter(task => 
                task.id !== action.id )
        
        default:
            return state;
    }
}