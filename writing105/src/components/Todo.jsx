import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    // <div>
    //     Todo
    //     <FontAwesomeIcon icon={faEnvelope} />
    //     <FontAwesomeIcon icon={faEdit} />
    //     <FontAwesomeIcon icon={faTrash} />
    // </div>
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faEdit}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
