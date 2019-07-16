import React from 'react';

export default class TrackerApp extends React.Component {
  constructor() {
    super();
    this.inputTitle = React.createRef();
    this.toggleTaskForm = this.toggleTaskForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    showTaskForm: false
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
    let { tasks, onTaskDelete } = this.props;
    return (
      <div>
        <h2>Tracker App
          <button onClick={this.toggleTaskForm}>+</button>
        </h2>

        {this.state.showTaskForm &&
          <form onSubmit={this.onSubmit}>
            <h3>NEW TASK</h3>
            <label>Title</label>
            <input type="text" ref={this.inputTitle} />
            <button type="submit">SUBMIT</button>
          </form>
        }
        <ol>
          {
            tasks.map((t) => {
              return (
                <li>{t.title} <button onClick={onTaskDelete.bind(null, t.id)}>X</button></li>
              )
            })
          }
        </ol>

      </div>
    );
  }
}