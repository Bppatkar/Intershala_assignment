//Implement the TaskForm component for adding and editing tasks.

import "./TaskForm.css";

const TaskForm = ({ onClose }) => {
  return (
    <div className={"taskFormPopup "}>
      <div className="taskFormContainer">
        <div className="taskFormHeader">
          <h2>CREATE A TASK</h2>
          <div className="taskFormCloseButton" onClick={onClose}>
            ❌
          </div>
        </div>
        <div className="taskFormContent">
          <div className="taskFormItem">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" />
          </div>
          <div className="taskFormItem">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              rows="4"
              cols="21"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="taskFormItem">
            <label htmlFor="team">Team:</label>
            <input type="text" id="team" />
          </div>
          <div className="taskFormItem">
            <label htmlFor="assignees">Assignees:</label>
            <input type="text" id="assignees" />
          </div>
          <div className="taskFormItem">
            <label htmlFor="priority">Priority:</label>
            <select id="priority">
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <button>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
