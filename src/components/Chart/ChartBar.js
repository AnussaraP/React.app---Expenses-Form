import React from "react";
import "./ChartBar.css";

const Chartbar = (props) => {
    let barFillHeight = '0%'

    if(props.maxValue > 0){
        //will give % between 0 and 100 %
        barFillHeight = Math.round(props.value / props.maxValue)* 100 + '%'

    }


    return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" 
        //style is javaScript and need {{}} double for property. key:value
        style={{height: barFillHeight}}></div>   
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default Chartbar;
