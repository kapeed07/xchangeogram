import React from "react";
import "../App.css";
import TodoList from "./Todo/TodoList";
import { Link, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>
          <Link to="/todos" className="heading">
            <span>All Todos</span>
          </Link>
          <Link to="/todos/new" className="heading">
            <span>New Todo</span>
          </Link>
        </p>

        <Route path="/todos" component={TodoList} />
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
