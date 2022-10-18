import React from "react";
import axios from "axios";
import { Button } from "antd";
function DeleteTodo(props) {
  function deleteTodo() {
    console.log(props.todo.title);
    axios
      .delete(`/delete`, {
        headers: {
          Authorization: "***",
        },
        data: {
          userMail: props.todo.userMail,
          title: props.todo.title,
        },
      })
      .catch((error) => {
        console.log("Problem deleting New Todo", error);
        alert(error);
      });
  }

  return (
    <Button type="primary" onClick={deleteTodo}>
      {" "}
      Delete{" "}
    </Button>
  );
}

export default DeleteTodo;
