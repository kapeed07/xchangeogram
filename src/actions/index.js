import { ADD_TODO, REMOVE_TODO, GET_TODOS } from "../constants/actionsConstant";

// export const addTodo = (task) => {
//   return {
//     type: ADD_TODO,
//     task,
//   };
// };

// export const removeTodo = (task) => {
//   return {
//     type: REMOVE_TODO,
//     task,
//   };
// };

const handleTodos = (todos) => {
  return {
    type: GET_TODOS,
    todos,
  };
};

const handleAddTodo = (task) => {
  return {
    type: ADD_TODO,
    task,
  };
};

const handleRemoveTodo = (task) => {
  return {
    type: REMOVE_TODO,
    task,
  };
};

export const getTodos = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["Eat", "Sleep", "Repeat", "Code"]);
      }, 2000);
    })
      .then((data) => dispatch(handleTodos(data)))
      .catch((err) => err);
  };
};

export const addTodo = (task) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(task);
      }, 500);
    })
      .then((data) => dispatch(handleAddTodo(data)))
      .catch((err) => err);
  };
};

export const removeTodo = (task) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(task);
      }, 500);
    })
      .then((data) => dispatch(handleRemoveTodo(data)))
      .catch((err) => err);
  };
};
