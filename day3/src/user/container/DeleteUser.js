import React, { useEffect } from "react";
import { Button } from "antd";
import axios from "axios";

function DeleteUser(props) {
  useEffect(() => {
    console.log("deleted");
  }, []);

 function deleteUser() {
    props.deleteUser()
    // axios.delete(`/user/delete?email=${props.email}`).then(function (response) {
    //   console.log(response.data);
    // });
  }

  return (
    <Button type="primary" onClick={deleteUser}>
      Delete
    </Button>
  );
}

export default DeleteUser;
