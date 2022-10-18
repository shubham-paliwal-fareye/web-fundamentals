import { Button, Drawer } from "antd";
import React, { useState } from "react";
import Form from './todoUpdateForm'

const App = (props) => {
  function todoData(todo) {
    console.log('todo updated');
    props.updateTodo(todo);

  }
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
    console.log(props.todo);
  };
  return (
    <>
      <Button type="primary" size="middle" onClick={showDrawer}>
        Edit
      </Button>
      <Drawer title="Add Todo" placement="right" todo={props.todo} onClose={onClose} open={open}>
        <Form formData={todoData} todo={props.data} />
      </Drawer>
    </>
  );
};
export default App;
