import logo from './logo.svg';
import './App.css';
import Test from './test'
import DrawerForm from './user/component/drawerForm'
import List from './user/container/UserList'
import Form from './user/component/Form'
import TestData from './user/test/parent'
import User from './user/container/UserList'
function App() {
  return (
    <div className="App">
      {/* <Test/> */}
      {/* <DrawerForm/> */}
      {/* <TestData/> */}
      {/* <Form/> */}
      <User/>
    </div>
  );
}

export default App;
