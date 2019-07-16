import React from 'react';

export default class TrackerApp extends React.Component {
  constructor() {
    super();
    this.inputTitle = React.createRef();
    this.toggleTaskForm = this.toggleTaskForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    showTaskForm: false,
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

  render() {
    let { tasks, onTaskDelete,onToggleEdit } = this.props;

    return (
      <div>
        <h2>Tracker App
          <button className="btn primary" onClick={this.toggleTaskForm}>+</button>
        </h2>

        {this.state.showTaskForm &&
          <form className="task-form" onSubmit={this.onSubmit}>
            <h3>NEW TASK</h3>
            <label for="title">Title</label>
            <input id="title" type="text" ref={this.inputTitle} />
            <button className="btn primary" type="submit">SUBMIT</button>
          </form>
        }
        <ol>
          {
            tasks.map((t, index) => {
              return (
                <li>
                  
                  {!t.edit && t.title}
                  {t.edit &&
                    <input value={t.title}></input>
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