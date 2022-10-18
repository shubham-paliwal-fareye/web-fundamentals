import { Button, Drawer } from "antd";
import React, { useState } from "react";
import Form from "./Form";
import axios from 'axios'

const App = (props) => {
  // const {userDataSet} = props;
  function userData(user) {
    if (props.callFrom === "editUser") {
       console.log("drawer edit call");
      // axios.put(`/user/update`, user).catch((error) => {
      //   console.log(error);
      //   alert(error);
      // });
      props.editUser(user);
    } else {
      console.log('post data',user);
      props.printUser(user);
    }
  }
  
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
    console.log(JSON.stringify(props));
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" size="middle" onClick={showDrawer}>
        {props.name}
      </Button>
      <Drawer title="Add User" placement="right" onClose={onClose} open={open}>
        <Form formData={userData} callFrom={props.callFrom} user={props.user} />
      </Drawer>
    </>
  );
};
export default App;
