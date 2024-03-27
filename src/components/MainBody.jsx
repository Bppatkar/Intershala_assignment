// Create a Main component to manage all other child components, such as TaskList, TaskForm, and TaskFilter.
import { useState } from "react";
import Calender from "./Calender";
import TaskForm from "./TaskForm";

const MainBody = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleAddTaskClick = () => {
    setShowTaskForm(true);
  };
  return (
    <div className="mainBody_container">
      <div className="fitering_part">
        <div className="filtering">
          <div className="filter_input">
            <label htmlFor="Filter">Filter By: </label>
            <input type="text" id="Filter" placeholder="Assignee Name" />
          </div>
          <label htmlFor="Priority"></label>
          <select name="Priority" id="Priority" defaultValue="P1">
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <div className="date_selector">
            <Calender />
          </div>
        </div>
        <div className="add_task">
          <button onClick={handleAddTaskClick}>Add New Task</button>
        </div>
      </div>
      <div className="sorting_part">
        <div className="sorting_input">
          <label htmlFor="sorting">Sort By: </label>
          <select name="sorting" id="sorting" defaultValue="P1">
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
      </div>
      {showTaskForm && (
        <div className="taskFormPopup">
          <TaskForm onClose={() => setShowTaskForm(false)} />
        </div>
      )}
    </div>
  );
};

export default MainBody;
