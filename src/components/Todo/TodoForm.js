import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    this.props.history.push("/todos");
    this.setState({ task: "" });
  };

  render() {
    return (
      <div className="new-todo-form">
        <form onSubmit={this.handleSubmit}>
          <input
            className="new-todo-search"
            value={this.state.task}
            onChange={this.handleChange}
            type="text"
            name="task"
          />
          <button className="new-todo-btn" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
