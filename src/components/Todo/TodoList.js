import React from "react";
import Todo from "./TodoListItem";
import TodoForm from "./TodoForm";
import { addTodo, removeTodo, getTodos } from "../../actions";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getTodos();
  }

  handleRemove = (task) => {
    this.props.removeTodo(task);
  };

  handleSubmit = (task) => {
    this.props.addTodo(task);
  };

  render() {
    let todos = this.props.todos.map((task, index) => (
      <Todo task={task} removeTodo={this.handleRemove} key={index} />
    ));
    return (
      <div className="todo">
        <Route
          path="/todos/new"
          component={() => (
            <TodoForm {...this.props} handleSubmit={this.handleSubmit} />
          )}
        />
        <Route path="/todos" component={() => <div>{todos}</div>} />
      </div>
    );
  }
}

export default connect((state) => state, {
  addTodo,
  removeTodo,
  getTodos,
})(TodoList);
