import { Button, Table } from "antd";
import React from "react";
import Drawer from "./drawerForm";

const App = (props) => {
const columns = [
  {
    title: "User Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "FirstName",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "LatName",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "GithubUsername",
    dataIndex: "githubUsername",
    key: "githubUsername",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "id",
    render: (_, item) => (
      <div>
        {/* <DeleteUser email={item.email} /> */}
        <Button type="primary" onClick={() => deleteUser(item)}>Delete</Button>
        &nbsp;&nbsp;
        <Drawer name={"Edit"} callFrom={"editUser"} editUser={editUser} user={item} />
      </div>
    ),
  },
];

function deleteUser(userData){
    console.log('print user userData',userData);
    props.deleteUser(userData);
}

const editUser = (userData) =>{
    props.editUser(userData);
}

const onChange = (pagination, filters, sorter, extra) => {
  console.log("hello");
  console.log("params", pagination, filters, sorter, extra);
};

  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios.get(`/user/user-list`).then(function (response) {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // }, []);

  return <Table columns={columns} dataSource={props.data} onChange={onChange} />;
};
export default App;
