import React, { useState ,useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Card from "../Card/Card";
import classes from './UserForm.module.css';
import ErrorModal from "../Card/ErrorModal";
import Button from "../Card/Button";


const UserForm= (props)=>{
        const nameInputRef= useRef()
        const ageInputRef= useRef()
        const collegeInputRef=useRef()
 
    
    const [error,setError]=useState();

    const submitHandler=(event)=>{
        event.preventDefault();

        const enteredName= nameInputRef.current.value;
        const enteredUserAge= ageInputRef.current.value;
        const enteredCollege= collegeInputRef.current.value;

        if(enteredName.trim().length ===0|| enteredUserAge ===0 || enteredCollege.trim().length===0){
            setError({
                title: 'Invalid Input',
                message:'Please Enter a valid Name and Age (non-empty values) '
            })
            return;}
        if(+enteredUserAge < 1){
            setError({
                title: 'Invalid Age',
                message:'Please Enter a valid Age (> 0) '
            })

                return;
            }
      props.onAddUser(enteredName, enteredUserAge ,enteredCollege)
      nameInputRef.current.value='';
      ageInputRef.current.value='';
      collegeInputRef.current.value='';

    }

       const errorHandler=()=>{
        setError(null)
        }

    return(
       <Wrapper>
           {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
       
            <form onSubmit={submitHandler}> 
             <label htmlFor="username">User Name</label>

                <input type="text"  
                id="username" 
                placeholder="Enter User Name..." 
               
                ref={nameInputRef}
                 />

                 <label>Age (Years)</label>
                <input type="number" 
                placeholder="Enter Age..."
                 ref={ageInputRef}
                 />

                 <label htmlFor="college" > College Name</label>
                 <input   type="text"  id="college" 
                 placeholder="Enter CollegeName..."
                  ref={collegeInputRef}
                 />

               <Button type="submit">Add User</Button>   
            </form>
           </Card>
           </Wrapper>

    )

}
export default UserForm;