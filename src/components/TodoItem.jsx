import React from "react";

export default function TodoItem(props) {
  const ondelete = () => {
    props.onDelete(props.todoItem);
  };

  return (
    <div className="">
      <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-body text-primary">
          <div className="card header d-flex flex-row border-0">
            <h5 className="card-title me-auto">{props.todoItem.title}</h5>
            <button className="btn text-danger" onClick={ondelete}>
              X
            </button>
          </div>
          <p className="card-text">{props.todoItem.desc}</p>
        </div>
        <div className="fw-bold text-center">{props.todoItem.date}</div>
      </div>
    </div>
  );
}
