import React from 'react';
import './App.css';
import TrackerApp from './klass/tracker-app';
import AboutUs from './components/aboutus';

import ThemeProvider from './context/context-provider';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    tasks: [
      { id: 1, title: "Task 1", completed: true, edit: false },
      { id: 2, title: "Task 2", completed: false, edit: false },
      { id: 3, title: "Task 3", completed: false, edit: false },
    ]
  }

  constructor() {
    super();
    this.onTaskAdd = this.onTaskAdd.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.onTaskUpdate = this.onTaskUpdate.bind(this);
  }


  onToggleEdit(id) {
    let tasks = this.state.tasks.map((t) => {
      if (t.id == id) {
        t.edit = !t.edit;
      }
      return t;
    });

    this.setState({
      tasks
    })
  }

  onTaskUpdate(task) {
    let tasks = this.state.tasks.map((t) => {
      if (t.id == task.id) {
        t.edit = false;
        t.title = task.title;
      }
      return t;
    });

    this.setState({
      tasks
    })
  }

  onTaskAdd(title) {
    let newTask = {
      id: +new Date(),
      title,
      completed: false
    }
    let tasks = this.state.tasks;
    this.setState({
      tasks: [
        newTask,
        ...tasks
      ]
    })
  }

  onTaskDelete(id, e) {
    let tasks = this.state.tasks.filter((t) => {
      return (t.id !== id);
    });

    this.setState({
      tasks
    })
  }


  render() {
    return (
      <Router>
        <ThemeProvider>
          <nav class="top-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Route exact path="/" render={routeProps => (
            <div className="app">
              <TrackerApp {...routeProps}
                onTaskDelete={this.onTaskDelete}
                onToggleEdit={this.onToggleEdit}
                onTaskUpdate={this.onTaskUpdate}
                onTaskAdd={this.onTaskAdd} tasks={this.state.tasks} />
            </div>
          )} />

          <Route path="/about/" exact component={AboutUs} />

        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
