import React, { useState } from "react";

export default function AddTodo(props) {
  const [newtodo, setnewtodo] = useState({
    title: "",
    desc: "",
  });

  const addnewtodo = (e) => {
    // console.log(newtodos

    if (!newtodo.title || !newtodo.desc) {
      alert("enter titke and description");
    } else {
      props.Addnewtodo(newtodo);
      // setnewtodo.title = "";
      // setnewtodo.desc = "";
    }
  };

  return (
    <div className="container  border-bottom border-1 border-dark pb-4">
      <h3 className="text-center"> Add To Do</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="title"
            value={setnewtodo.title}
            onChange={(e) => {
              setnewtodo({ ...newtodo, title: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="desc"
            className="form-control"
            id="exampleInputPassword1"
            value={setnewtodo.desc}
            onChange={(e) => {
              setnewtodo({ ...newtodo, desc: e.target.value });
            }}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="btn btn-success center w-50"
            onClick={addnewtodo}
          >
            Add to do
          </button>
        </div>
      </form>
    </div>
  );
}
