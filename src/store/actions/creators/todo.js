import { ADD_TODO_FAILURE, ADD_TODO_STARTED, ADD_TODO_SUCCESS} from "../types/todo";
import { FETCH_TODOS_STARTED, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE} from "../types/todo";
import { TOGGLE_TODO_STARTED, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE} from "../types/todo";




export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo,
  },
});

export const addTodoStarted = () => ({
  type: ADD_TODO_STARTED,
});

export const addTodoFailure = (error) => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error,
  },
});
export const fetchTodosStarted = () => ({
  type: FETCH_TODOS_STARTED,
});

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: {
    todos,
  },
});

export const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  payload: {
    error,
  },
});
export const toggleTodoStarted = () => ({
  type: TOGGLE_TODO_STARTED,
});

export const toggleTodoSuccess = () => ({
  type: TOGGLE_TODO_SUCCESS,
});

export const toggleTodoFailure = (error) => ({
  type: TOGGLE_TODO_FAILURE,
  payload: {
    error,
  },
});