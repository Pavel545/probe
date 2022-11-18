import axios from "axios";

import {
  addTodoStarted,
  addTodoSuccess,
  addTodoFailure,
  fetchTodosStarted,
  fetchTodosSuccess,
  fetchTodosFailure,
} from "../creators/todo";

const BASE_URL = "https://6376707e81a568fc25fed4bf.mockapi.io/Cart";
export const createCart = (title) => async (dispatch) => {
  dispatch(addTodoStarted());

  try {
    const { data } = await axios.post(BASE_URL, {
      title,
    });

    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoFailure(error));
  }
};
export const fetchCart = () => async (dispatch) => {
    dispatch(fetchTodosStarted());
  
    try {
      const { data } = await axios.get(BASE_URL);
  
      dispatch(fetchTodosSuccess(data));
    } catch (error) {
      dispatch(fetchTodosFailure(error));
    }
};