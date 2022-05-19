import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    //change datapoint array to numberArray e.g. months willnow has number of 12 value, because Math.map only accept number
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    //... will give all 12 value and 12 maximum 
    const totalMaximum = Math.max(...dataPointValues)

  return <div className="chart">
  {/* array od datapoint to .map()==(call func once with everything same time) with chartbar.
  past data pointArray into ChartBar.   every dataPoint has a value */}
  {props.dataPoints.map((dataPoint) => (
      <ChartBar
      //label has unique identify which can be use with key 
      key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    ))
  }
  </div>;
};

export default Chart;
