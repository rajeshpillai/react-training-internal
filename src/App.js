import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TrackerApp from './klass/tracker-app';
import AboutUs from './pages/aboutus';
import ThemeProvider from './context/context-provider';
import Expandable from './components/expandable';
import ExpandableListPage from './pages/expandable-list-page';
import AutoCompletePage from './pages/autocomplete-page';
import Menu from './components/menu';

import './App.css';

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
    this.onExpand = this.onExpand.bind(this);
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


  onExpand(value) {
    alert(value);
  }

  render() {
    return (
      <Router>
        <ThemeProvider>
          <Menu />
          <Route exact path="/" render={routeProps => (
            <div className="app">

              <Expandable onExpand={this.onExpand}>
                <Expandable.Header>Expand / Collapse</Expandable.Header>
                <Expandable.Body>Content goes here</Expandable.Body>
              </Expandable>

              <TrackerApp {...routeProps}
                onTaskDelete={this.onTaskDelete}
                onToggleEdit={this.onToggleEdit}
                onTaskUpdate={this.onTaskUpdate}
                onTaskAdd={this.onTaskAdd} tasks={this.state.tasks} />
            </div>
          )} />

          <Route path="/about/" exact component={AboutUs} />
          <Route path="/expandlist/" exact component={ExpandableListPage} />
          <Route path="/autocomplete/" exact component={AutoCompletePage} />

        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
