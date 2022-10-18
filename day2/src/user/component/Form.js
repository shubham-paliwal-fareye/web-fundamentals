import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import axios from 'axios'

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
    console.log("hello");
   // axios.post(`user/add`, values.user)
    // console.log(values);
    props.formData(values.user);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "firstName"]}
        label="First Name"
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
      rules={[
        {
          required: true,
        },
      ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name={["user", "password"]}
        label="Password"
        rules={[
          {
            type: "password",
            required: "true"
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
      name={["user", "GithubUserName"]} 
      label="Github UserName"
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
