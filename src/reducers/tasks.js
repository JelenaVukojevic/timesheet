import {
    GET_TASKS,
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK
} from '../constants/ActionTypes'

import moment from 'moment';

const initialTasks = [];
initialTasks['21/07/2020'] = [
  {id: 1, title: 'item 1', hours: 3.5},
  {id: 2, title: 'item 2', hours: 1.5},
  {id: 3, title: 'item 3', hours: 3},
];
initialTasks['20/07/2020'] = [
  {id: 4, title: 'item 4 - add css to collumns', hours: 5},
  {id: 5, title: 'item 5', hours: 2},
  {id: 6, title: 'item 6', hours: 1},
];
const initialState = initialTasks;
const urlDate = window.location.pathname.substr(1)
const date = (urlDate) ? 
      moment(urlDate, 'DD-MM-YYYY').format("DD/MM/YYYY") : 
      moment().format('DD/MM/YYYY');

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return [
                ...state
            ]

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
            return state[date] ? state[date] : [];
    }
}