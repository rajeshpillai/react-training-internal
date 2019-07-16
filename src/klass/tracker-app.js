import React from 'react';
import TaskForm from './task-form';

export default class TrackerApp extends React.Component {
  constructor() {
    super();
    this.inputTitle = React.createRef();
    this.toggleTaskForm = this.toggleTaskForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }
  state = {
    showTaskForm: false,
    currentTask: {},
  }

  onTitleChange(id, e) {
    console.log(id, e);
    if (e.which == 13) {
      this.props.onTaskUpdate({ id: id, title: e.target.value });
    } else if (e.which == 27) {  // ESC
      alert('cancel');
      this.props.onToggleEdit(id);
    }
  }

  toggleTaskForm() {
    this.setState({
      showTaskForm: !this.state.showTaskForm
    })
  }


  onSubmit(e) {
    e.preventDefault();
    let title = this.inputTitle.current.value.trim();
    if (title !== "") {
      this.props.onTaskAdd(title);
    }
  }

  throwError() {
    alert("An error will occur now!");
    throw new Error("Error: Simulated");
  }

  render() {
    let { tasks, onTaskDelete, onToggleEdit } = this.props;

    return (
      <div>
        <h2>Tracker App
          <button className="btn primary" onClick={this.toggleTaskForm}>+</button>
        </h2>

        {this.state.showTaskForm &&
          <div>
            <TaskForm ref={this.inputTitle} onSubmit={this.onSubmit} />
          </div>
        }
        <ol>
          {
            tasks.map((t, index) => {
              return (
                <li key={t.id}>

                  {!t.edit && t.title}
                  {t.edit &&
                    <input defaultValue={t.title}
                      onKeyDown={this.onTitleChange.bind(null, t.id)}
                      onChange={this.onTitleChange.bind(null, t.id)}></input>
                  }

                  <button onClick={onToggleEdit.bind(null, t.id)}>edit</button>
                  <button onClick={onTaskDelete.bind(null, t.id)}>X</button>

                </li>
              )
            })
          }
        </ol>

      </div>
    );
  }
}