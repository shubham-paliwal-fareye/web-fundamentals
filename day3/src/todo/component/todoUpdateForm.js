import { Button, Form, Input } from "antd";
import React from "react";
import axios from "axios";

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 20,
  },
};

/* eslint-disable no-template-curly-in-string */

/* eslint-enable no-template-curly-in-string */

const App = (props) => {
  const onFinish = (values) => {
      console.log(values);
      props.formData(values.todo);
      // axios.put(`/update`, values.todo).catch((error) => {
      //   console.log(error);
      //   alert(error);
      // })
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
    >
      <Form.Item
        name={["todo", "userMail"]}
        lable="user id"
        initialValue={props.todo.userMail}
      >
        <h4>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>{props.todo.userMail}</b>
        </h4>
      </Form.Item>
      <Form.Item
        name={["todo", "title"]}
        label="Title"
        initialValue={props.todo.title}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["todo", "body"]}
        label="Body"
        initialValue={props.todo.body}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["todo", "status"]}
        label="Description"
        initialValue={props.todo.status}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["todo", "createdAt"]}
        label="Due date"
        initialValue={props.todo.createdAt}
        rules={[
          {
            required: "true",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
