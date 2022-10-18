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
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const App = (props) => {
  const onFinish = (values) => {
    if (props.callFrom === "editUser") {
      console.log(values);
      props.formData(values.user)
    } else {
      console.log("called from add user");
      props.formData(values.user);
    }
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "id"]}
        lable="user id"
        initialValue={props.user.id}
      >
        <h3>
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<b>User Id : {props.user.id}</b>
        </h3>
      </Form.Item>
      <Form.Item
        name={["user", "firstName"]}
        label="First Name"
        initialValue={props.user.firstName}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "lastName"]}
        label="Last Name"
        initialValue={props.user.lastName}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        initialValue={props.user.email}
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "password"]}
        label="password"
        initialValue={props.user.password}
        rules={[
          {
            type: "password",
            required: "true",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "githubUsername"]}
        label="githubUserName"
        initialValue={props.user.githubUsername}
        rules={[
          {
            required: true,
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
