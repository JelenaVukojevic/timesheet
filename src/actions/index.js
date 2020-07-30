import * as types from '../constants/ActionTypes'

export const getTasks = payload => ({ type: types.GET_TASKS, payload });
export const addTask = payload => ({ type: types.ADD_TASK, payload });
export const editTask = payload => ({ type: types.EDIT_TASK, payload });
export const deleteTask = id => ({ type: types.DELETE_TASK, id });