import { Button, Table } from "antd";
import React from "react";
import { Input } from "antd";
import AddTodo from "./AddTodo";
import Drawer from "./TodoDrawer";
const App = (props) => {
  const columns = [
    {
      title: "#",
      width: 100,
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      width: 300,
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "id",
      render: (_, todo) => (
        <div>
          <Button type="primary" onClick={() => deleteTodo(todo)}>
            Delete
          </Button>
          &nbsp;&nbsp;
          <Drawer todo={todo} updateTodo={updateTodo} data={todo} />
        </div>
      ),
    },
  ];

  function deleteTodo(todoData) {
    console.log("todo->", todoData);
    props.deleteTodo(todoData);
  }
  const updateTodo = (todoData) => {
    props.updateTodo(todoData);
  };
  const { Search } = Input;
  const addTodo = (todo) => {
    props.AddTodo(todo);
  };

  return (
    <>
      <Search
        placeholder="Enter User Email"
        allowClear
        enterButton="Search Todo"
        size="large"
        onSearch={props.userTodo}
        //   style={"padding=10px"}
      />

      <AddTodo callFrom={"addTodo"} addTodo={addTodo} todo={props.todoData} />

      <Table columns={columns} dataSource={props.data} />
    </>
  );
};
export default App;
