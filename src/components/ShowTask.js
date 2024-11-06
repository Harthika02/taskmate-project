
import React from 'react';

export const ShowTask = ({ tasklist, setTasklist ,task ,setTask}) => {
   const handleEdit=(id)=>{
  const selectedtask=tasklist.find(todo=>todo.id===id)
    setTask( selectedtask)
   }
   const handleDelete=(id)=>{
     const  updatedtasklist=tasklist.filter (todo=>todo.id!==id)
     setTasklist(updatedtasklist)
   }
  return (
    <section className="showtask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearall" onClick={()=>setTasklist([])}>Clear All</button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i onClick={()=>handleEdit(todo.id)}className="bi bi-pencil-square"></i>
            <i onClick={()=>handleDelete(todo.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
