import { useState } from "react";
import Card from "./Card";
import "./TaskForm.css";

const TaskForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    assignees: "",
    priority: "P1", // Default priority
  });

  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      // Add your logic to handle form submission, e.g., send data to backend API
      console.log("Form submitted with data:", formData);
      // Reset form data
      setFormData({
        title: "",
        description: "",
        team: "",
        assignees: "",
        priority: "P1", // Reset priority to default
      });
      // Close the form
      onClose();
    } else {
      setFormError("Please fill out all fields before submitting.");
    }
  };

  const isFormValid = () => {
    const { title, description, team, assignees } = formData;
    return (
      title.trim() !== "" &&
      description.trim() !== "" &&
      team.trim() !== "" &&
      assignees.trim() !== ""
    );
  };

  return (
    <form className={"taskFormPopup "} onSubmit={handleSubmit}>
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
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="taskFormItem">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              cols="21"
              style={{ resize: "none" }}
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="taskFormItem">
            <label htmlFor="team">Team:</label>
            <input
              type="text"
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
            />
          </div>
          <div className="taskFormItem">
            <label htmlFor="assignees">Assignees:</label>
            <input
              type="text"
              id="assignees"
              name="assignees"
              value={formData.assignees}
              onChange={handleChange}
            />
          </div>
          <div className="taskFormItem">
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          {formError && <p className="formError">{formError}</p>}
          <button type="submit">Add Task</button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
