import * as React from "react";
import { barChartData } from "../../data/bar-chart";
import { Bar } from "@nivo/bar";

const BarChart = () => {
  return <div className="bar-chart">
    <h2 className="heading">Bar Chart</h2>
    <div className="row">
    <div className="chart-holder">
      <Bar
        width={window.screen.width/1.5}
        height={window.screen.height/1.8}
        margin={{
          top: 20,
          right: 80,
          bottom: 60,
          left: 80
        }}
        data={barChartData}
        indexBy="country"
        keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut'
        ]}
        padding={0.2}
        labelTextColor="inherit:darker(1.4)"
        labelSkipWidth={16}
        labelSkipHeight={16}
        animate={true}
      />
    </div>
    </div>
  </div>;
};

export default BarChart;
