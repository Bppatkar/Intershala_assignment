// Create a Main component to manage all other child components, such as TaskList, TaskForm, and TaskFilter.
import Calender from "./Calender";

const MainBody = () => {
  return (
    <div className="mainBody_container">
      <div className="fitering_part">
        <div className="filtering">
          <div className="filter_input">
            <label htmlFor="Filter">Filter By: </label>
            <input type="text" id="Filter" placeholder="Assignee Name" />
          </div>
          <label htmlFor="Priority"></label>
          <select name="Priority" id="Priority">
            <option value="Priority">Priority</option>
            <option value="Priority">P0</option>
            <option value="Priority">P1</option>
            <option value="Priority">P2</option>
          </select>
          <div className="date_selector">
            <Calender />
          </div>
        </div>
        <div className="add_task">
          <button>Add New Task</button>
        </div>
      </div>
      <div className="sorting_part">
        <div className="sorting_input">
          <label htmlFor="sorting">Sort By: </label>
          <select name="sorting" id="sorting">
            <option value="sorting">Priority</option>
            <option value="sorting">P0</option>
            <option value="sorting">P1</option>
            <option value="sorting">P2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
