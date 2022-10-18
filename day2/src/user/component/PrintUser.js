import { Table , Button } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'FirstName',
    dataIndex: 'firstName',
  },
  {
    title: 'LatName',
    dataIndex: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Password',
    dataIndex: 'password',
  },
  {
    title: 'GithubUserName',
    dataIndex: 'GithubUserName',
  },
  {
    title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <div><Button type='primary'>Edit</Button> <Button type='primary'>Delete</Button></div>,
      
  },
  


];

const onChange = (pagination, filters, sorter, extra) => {
    console.log("hello");
  console.log('params', pagination, filters, sorter, extra);
};
const App = (props) => <Table columns={columns} dataSource={props.data} onChange={onChange} />;
export default App;