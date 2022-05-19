//redering date of expense 
import './ExpenseDate.css'

function ExpenseDate(propsOrData){
    const month = propsOrData.date.toLocaleString('en-Us', {month: 'long'});
    const day = propsOrData.date.toLocaleString('en-Us', {day: '2-digit'});
    const year = propsOrData.date.getFullYear(); 
  return(
    <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
  </div>

  );

}

export default ExpenseDate;
