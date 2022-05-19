//adding new expenses //when click - pop-up will appear 

import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const [isEditing,setIsEditing]=useState(false); 

    const saveExpenseDataHandler = (enterExpenseData)=>{
        
        const expenseData={

            ...enterExpenseData,
            id: Math.random().toString() 
        };
        
        props.onAddExpense(expenseData);

        setIsEditing(false);
    
    };
    const startEditingHandler=()=>{
        setIsEditing(true)  //set to true when click edit to pop up 
    }

    const stopEditingHandler=()=>{
        setIsEditing(false)  //set to false to stop editing pop up

    }

return <div className="new-expense">
    {/* {!isEditing && = to check if edditng is false */}
   {!isEditing &&  <button onClick={startEditingHandler} > Add a new expense </button>}
   {/* isEditing &&  =check if edditing is true*/}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    
</div> 

};

export default NewExpense; 