import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import Form from './Form'


const App = (props) => {
// const {userDataSet} = props;
function userData(user){
  console.log("hiiiiiii");
  console.log('props = ', props)
  props.printUser(user);
}
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <Form formData={userData}/>
      </Drawer>
    </>
  );
};
export default App;