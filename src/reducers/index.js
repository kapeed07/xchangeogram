import { ADD_TODO, REMOVE_TODO, GET_TODOS } from "../constants/actionsConstant";

const initialState = {
  todos: [],
  id: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: [...state.todos, ...action.todos] };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.task],
        id: state.id++,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((task) => task !== action.task),
        id: state.id--,
      };
    default:
      return state;
  }
};

export default reducer;
