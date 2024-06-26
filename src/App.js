import React,{useState} from 'react';

import UserForm from './components/User/Userform'
import UserList from './components/User/UserList';


function App() {
  const [userslist,setUsersList]=useState([]);

  const submitHandler=(uName ,uAge, collegeName)=>{
    setUsersList((prevUsersList) =>{
      return[...prevUsersList , {name:uName ,age:uAge , collegeName:collegeName , id:Math.random().toString()}]
      
    })
  }
  return (
  
   <React.Fragment>
      <UserForm onAddUser={submitHandler}/>
      <UserList users={userslist}/>
  </React.Fragment>
    
  );
}

export default App;
