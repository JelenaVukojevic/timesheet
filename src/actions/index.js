import * as types from '../constants/ActionTypes'

export const addTask = (date, title, hours) => ({ type: types.ADD_TASK, date, title, hours })
export const editTask = (id, title, hours) => ({ type: types.EDIT_TASK, id, title, hours })
export const deleteTask = id => ({ type: types.DELETE_TASK, id })