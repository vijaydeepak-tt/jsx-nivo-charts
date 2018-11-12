import * as React from "react";
import { pieChartData } from "../../data/pie-chart";
import { Pie } from "@nivo/pie";

const PieChart = () => {
  return <div className="pie-doghnut">
    <h2 className="heading">Pie/Doughnut Charts</h2>
    <div className="row">
      <div className="col">
        <Pie
          data={pieChartData}
          width={window.screen.width / 2.5}
          height={420}
          margin={{
            top: 60,
            right: 120,
            bottom: 80,
            left: 120
          }}
          animate={true}
        />
      </div>
      <div className="col">
        <Pie
          data={pieChartData}
          width={window.screen.width / 2.5}
          height={420}
          margin={{
            top: 60,
            right: 120,
            bottom: 80,
            left: 120
          }}
          innerRadius={0.6}
          animate={true}
        />
      </div>
    </div>
  </div>;
};

export default PieChart;
