import "./App.css";
import User1 from "./user/container/UserList1";
import TodoController from "./todo/container/TodoController";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="login" element={<Login />}></Route>
          <Route exact path="user" element={<User1 />}></Route>
          <Route exact path="todo" element={<TodoController />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
