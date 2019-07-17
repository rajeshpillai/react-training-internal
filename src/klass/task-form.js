import React from 'react';
import './style.css';

const TaskForm = React.forwardRef((props, ref) => {
  return (
    <form className="task-form" onSubmit={props.onSubmit}>
      <h3>NEW TASK</h3>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" ref={ref} />
      <button className="btn primary" type="submit">SUBMIT</button>
    </form>
  );
})
export default TaskForm;

// const TaskForm = (props) => {
//   return (
//     <form className="task-form" onSubmit={props.onSubmit}>
//       <h3>NEW TASK</h3>
//       <label htmlFor="title">Title</label>
//       <input id="title" type="text" ref={props.ref1} />
//       <button className="btn primary" type="submit">SUBMIT</button>
//     </form>
//   );
// }
// export default TaskForm;