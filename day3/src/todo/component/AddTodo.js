import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = (props) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", JSON.stringify(values));
    if (props.callFrom === "updateTodo") {
      axios
        .put(`/update`, {
          values,
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      axios
        .post(`/todo`, {
          userMail: values.userMail,
          title: values.title,
          body: values.body,
          status: values.status,
          dueDate: values.dueDate,
          createdAt: "",
        })
        .catch((error) => {
          console.log("Problem submitting New Todo", error);
          alert(error);
        });
    }
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="userMail"
        initialValue={props.todo.userMail}
        rules={[
          {
            required: true,
            message: "Enter User Email!",
          },
        ]}
      >
        <Input placeholder="User email" />
      </Form.Item>

      <Form.Item
        name="title"
        initialValue={props.todo.title}
        rules={[
          {
            required: true,
            message: "Enter Title!",
          },
        ]}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name="body"
        initialValue={props.todo.body}
        rules={[
          {
            required: true,
            message: "Enter Body!",
          },
        ]}
      >
        <Input placeholder="Body" />
      </Form.Item>

      <Form.Item
        name="status"
        initialValue={props.todo.status}
        rules={[
          {
            required: true,
            message: "Enter Status!",
          },
        ]}
      >
        <Input placeholder="Description" />
      </Form.Item>

      <Form.Item name="dueDate" initialValue={props.todo.dueDate}>
        <Input type="date" placeholder="Due Date" />
      </Form.Item>

      <Form.Item shouldUpdate>
        {() => (
          <Button type="primary" htmlType="submit">
            Add Todo
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default App;
