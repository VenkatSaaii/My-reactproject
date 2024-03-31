import React, { useState } from "react";

import Card from "../Card/Card";
import classes from './UserForm.module.css';
import ErrorModal from "../Card/ErrorModal";
import Button from "../Card/Button";


const UserForm= (props)=>{
    const [enteredUsername,setEnteredUserName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');

    const [error,setError]=useState();

    const submitHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length ===0|| enteredAge ===0){
            setError({
                title: 'Invalid Input',
                message:'Please Enter a valid Name and Age (non-empty values) '
            })
            return;}
        if(+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message:'Please Enter a valid Age (> 0) '
            })

                return;
            }
      props.onAddUser(enteredUsername , enteredAge)
        setEnteredUserName('');
        setEnteredAge('');

    }

    const userNameHandler=(event)=>{
        setEnteredUserName(event.target.value)
        
    }
    const ageHandler=(event)=>{
        setEnteredAge(event.target.value)
    }

    const errorHandler=()=>{
        setError(null)
    }

    return(
        <div>
           {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
       
            <form onSubmit={submitHandler}> 
             <label htmlFor="username">User Name</label>

                <input type="text"  
                id="username" 
                placeholder="Enter User Name..." 
                value={enteredUsername} 
                onChange={userNameHandler} />

                 <label>Age (Years)</label>
                <input type="number" 
                placeholder="Enter Age..."
                 value={enteredAge} 
                 onChange={ageHandler}/>

               <Button type="submit">Add User</Button>   
            </form>
           </Card>
           </div>

    )

}
export default UserForm;