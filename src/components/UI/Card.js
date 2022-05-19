import "../UI/Card.css";

function Card(props){
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children} </div>

}
//Composition props.children https://reactjs.org/docs/composition-vs-inheritance.html 
// 
export default Card; 