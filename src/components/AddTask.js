import React from 'react';

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const taskName = e.target.task.value;

    if (task.id) {
      
      const updatedTaskList = tasklist.map((todo) =>
        todo.id === task.id
          ? { id: task.id, name: taskName, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
          : todo
      );
      setTasklist(updatedTaskList);
      setTask({}); 
    } else {
      
      const newTask = {
        id: date.getTime(),
        name: taskName,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({}); 
    }

    e.target.reset(); // Clear the input field after submission
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          style={{ height: "40px", width: "580px" }}
          type="text"
          name="task"
          placeholder="Add Task"
          maxLength={25}
          required 
          value={task.name || ''} 
          onChange={(e) => setTask({ ...task, name: e.target.value })} 
        />
        <button className="button" type="submit">{task.id?"update":"Add"}</button>
      </form>
    </section>
  );
};


