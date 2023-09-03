import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  // inittodo variable for checking localstorge
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const Addnewtodo = (todo) => {
    let a = new Date();
    let date = `${a.getDate()}/${a.getMonth()}/${a.getFullYear()}${"   "}${a.getHours()}:${a.getMinutes()}`;
    console.log(date);
    let srno;
    if (todos.length === 0) {
      srno = 0;
    } else {
      srno = todos[todos.length - 1].srno + 1;
    }
    const newtodo = {
      srno: srno,
      title: todo.title,
      desc: todo.desc,
      date: date,
    };
    settodos([...todos, newtodo]);
  };
  const [todos, settodos] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo Addnewtodo={Addnewtodo} />,
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
