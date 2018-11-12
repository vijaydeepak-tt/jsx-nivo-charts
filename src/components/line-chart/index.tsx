import * as React from "react";
import { Line } from "@nivo/line";
import { lineChartData } from "../../data/line-chart";

const LineChart = () => {
  return <div className="line-chart">
    <h2 className="heading">Line Chart</h2>
    <div className="row">
      <div className="col-xs-12">
        <Line
          width={window.screen.width/1.5}
          height={window.screen.height/1.8}
          data={lineChartData}
          margin={{
            top: 0,
            right: 20,
            bottom: 60,
            left: 80
          }}
          animate={true}
        />
      </div>
    </div>
  </div>;
};

export default LineChart;
