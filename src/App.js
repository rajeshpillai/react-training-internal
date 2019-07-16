import React from 'react';
import './App.css';
import TrackerApp from './klass/tracker-app';
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
      <div className="App">
        <header className="App-header">
          <TrackerApp
            onTaskDelete={this.onTaskDelete}
            onToggleEdit = {this.onToggleEdit}
            onTaskAdd={this.onTaskAdd} tasks={this.state.tasks} />
        </header>
      </div>
    );
  }
}

export default App;
