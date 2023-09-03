import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="mt-3" style={{ minHeight: "50vh" }}>
      <h3 className="text-center"> To Do's</h3>
      {props.todos.length === 0 ? (
        <div className="text-center fs-4 fw-bold">No Todos Enjoy !!!</div>
      ) : (
        <div className="container center d-flex gap-3 flex-wrap">
          {props.todos?.map((todoitem) => {
            return (
              <TodoItem
                key={todoitem.srno}
                todoItem={todoitem}
                onDelete={props.onDelete}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
