import React,{useState} from 'react';

import UserForm from './components/User/Userform'
import UserList from './components/User/UserList';


function App() {
  const [userslist,setUsersList]=useState([]);

  const submitHandler=(uName ,uAge)=>{
    setUsersList((prevUsersList) =>{
      return[...prevUsersList , {name:uName ,age:uAge , id:Math.random().toString()}]
      
    })
  }
  return (
  
    <div>
      <UserForm onAddUser={submitHandler}/>
      <UserList users={userslist}/>
    </div>
    
  );
}

export default App;
