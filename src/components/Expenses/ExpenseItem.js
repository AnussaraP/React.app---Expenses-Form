import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"; 
import "./ExpenseItem.css";
 
function ExpenseItem({title,amount,date}) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      
      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">£{amount}</div>
      </div>

      </Card>
  );
  //for <button >can have even onClick={} arrow function or function

  /*for Date = cant be output as {} because it is a date object, this needs 
    {expenseDate.toISOString()}===>>needs to be Year/Month/Date or .toDateString()
   
    ____ >>>passing props or Data from App.js 
    e.g. <div className="expense-item__price">£{expenseAmount}</div>
    to <div className="expense-item__price">£{propsOrData.amount}</div>
    
    --->> props is very important, because it allows you to make your components resuable,
     allows to pass data from another component to the other like, from App.js to ExpensesItem using Props
    */
    
}

export default ExpenseItem;
