import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

const addUserHandler = (uName,uAge) =>{
   setUsersList((prevUsersList) => {
    return [...prevUsersList, { name:uName , age:uAge, id: Math.random().toString()}];
   });
}
  return (
    <div>
      <h2 style={{textAlign:'center',color:"white"}}>Simple Add / Display Form With Validation</h2>
       <AddUser onAddUser={addUserHandler}/>
       <UserList users={usersList}/>
    </div>
   
  );
}

export default App;
