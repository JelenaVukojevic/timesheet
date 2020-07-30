import * as types from '../constants/ActionTypes'

export const getTasks = (payload) => ({ type: types.GET_TASKS, payload });
export const addTask = (date, title, hours) => ({ type: types.ADD_TASK, date, title, hours });
export const editTask = data => ({ type: types.EDIT_TASK, data });
export const deleteTask = id => ({ type: types.DELETE_TASK, id });