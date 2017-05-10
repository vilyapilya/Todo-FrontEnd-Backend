import * as APIUtil from '../utils/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

// export const todoError = error => ({
//   type: TODO_ERROR,
//   error
// });

export const fetchTodos = () => (dispatch) => {
  console.log("actions");
  return APIUtil.fetchTodos().then((todos) => dispatch(receiveTodos(todos)));
};

export const createTodo = (td) => (dispatch) => {
  return APIUtil.createTodo(td).then((todo) => dispatch(receiveTodo(todo)));
};
