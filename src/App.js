import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
//it was function App(){} TO const App = ()=>{},

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense)=> {
    /* 9th add fuction into App which we communicate up from NewExpense to App
    */
    setExpenses((previousExpenses)=> {
     return [expense, ...previousExpenses];
   });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* 10th add a new props onAddExpense (this is a fuction pointer), 
      the passed a pointer at addExpenseHalder to the expense prop on NewExpense*/}
      
      <div>
          <Expenses items={expenses}/>

      </div>
    </div>
  );
}
//reuse'ExpensesItem'(component)  by using parameters (or props in React)

export default App;
/*note* lifting state up: child component cant passed stage to one or another I.E.NewExpense 
cant pass to Expense, instead need to pass from child component to parent first from 
NewEpense >(via Lifting the state) to>>> App > >>>to (pass state data via props) > Expense 
App component has access to both involved component*/
