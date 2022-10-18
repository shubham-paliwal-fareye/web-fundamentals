import React, { useState, useEffect } from "react";
import PrintTodo from "../component/PrintTodo";
import axios from "axios";

function TodoController() {
  const [data, setData] = useState();
  const [updateFlag, setUpdateFlag] = useState(1);
  const [todoData] = useState({
    userMail: "",
    title: "",
    body: "",
    status: "",
    dueDate: "",
    createdAt: "",
  });

  const addTodo = (todoData) => {
    console.log("User List", todoData);
    alert(todoData);
    axios
      .post(`/todo`, todoData)
      .then(function (response) {
        alert(response.data);
        setUpdateFlag(updateFlag + 1);
        console.log('post todo response : ',response.data,updateFlag);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editTodo = (todoData) => {
    console.log("User List+++++++++++++++++++++", todoData);
    axios
      .put(`/update`, todoData)
      .then(function (response) {
        console.log(response.data);
        setUpdateFlag(updateFlag + 1);
        alert(todoData);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const deleteTodo = (todoData) => {
    console.log("userdata", todoData);
    axios
      .delete(`/delete`, {
        headers: {
          Authorization: "***",
        },
        data: {
          userMail: todoData.userMail,
          title: todoData.title,
        },
      })
      .then(function (response) {
        console.log(response.data,"&&&&&&&&&&&&&&&");
        setUpdateFlag(updateFlag + 1);
      })
      .catch((error) => {
        console.log("Problem deleting New Todo", error);
        alert(error);
      });
  };

  const onSearch = (gmail) => {
    axios
      .get(`/todo1?gmail=${gmail}`)
      .then(function (response) {
        setData(response.data);
        alert(response.data);
      })
      .catch((error) => {
        console.log("Problem submitting New Post", error);
        alert("User Not register for this email");
        setData();
      });
  };

  useEffect(() => {
    console.log(updateFlag,"After*************")
    axios.get(`/todo`).then(function (response) {
      setData(response.data);
    }).catch((error)=>{
        console.log(error)
    });
  }, [updateFlag]);

  return (
    <>
      <PrintTodo
        addTodo={addTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        updateTodo={editTodo}
        userTodo={onSearch}
        data={data}
        todoData={todoData}
      />
    </>
  );
}

export default TodoController;
