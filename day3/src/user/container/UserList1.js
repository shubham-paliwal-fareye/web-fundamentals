import axios from "axios";
import React, { useState , useEffect } from "react";
import Drawer from "../component/drawerForm";
import PrintUser from "../component/PrintUser";

function UserList1() {

  const [data, setData] = useState();
  const [renderFlag,setRenderFlag]=useState(1);
  const [user] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    githubUsername: "",
  });

  const addUser = (userData) => {
    console.log("User List", userData);
    axios.post(`/user/add`,(userData)).then(function (response) {
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    });
    setRenderFlag(renderFlag+1);
  
  };
  const editUser = (userData) => {
    console.log("User List", userData);
    axios.put(`/user/update`, userData).then(function (response) {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
    setRenderFlag(renderFlag+1);
  }

  const deleteUser = (userData) => {
    console.log('userdata',userData);
    axios.delete(`/user/delete?email=${userData.email}`).then(function (response) {
      console.log(response.data);
    });
    setRenderFlag(renderFlag+1);
  }

  useEffect(() => {
    axios.get(`/user/user-list`).then(function (response) {
      console.log(response.data);
      setData(response.data);
    });
  }, [renderFlag]);


  return (
    <div>
      <Drawer
        printUser={addUser}
        name={"Add User"}
        callFrom={"AddUser"}
        user={user}
      />
      <PrintUser editUser={editUser} data={data} deleteUser={deleteUser}/>
    </div>
  );
}

export default UserList1;
