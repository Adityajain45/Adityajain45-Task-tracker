/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTaskModal = ({ onSave, onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    onSave(task);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={(e) =>
            setTask({ ...task, description: e.target.value })
          }
          className="w-full p-2 mb-4 border rounded"
          rows="3"
        />
        <select
          value={task.status}
          onChange={(e) =>
            setTask({ ...task, status: e.target.value })
          }
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <select
          value={task.priority}
          onChange={(e) =>
            setTask({ ...task, priority: e.target.value })
          }
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) =>
            setTask({ ...task, dueDate: e.target.value })
          }
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;
