import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';


const UsersList = (props) => {
  //console.log(props.users);
  return(
    <Card cssClass={classes.users}>
     <ul>
        {props.users.map((user, idx) => (
          
            <li key={idx}>
                {user.name} ({user.age} years old)
            </li>
        ))}
     </ul>
     </Card>
  );
};

export default UsersList;