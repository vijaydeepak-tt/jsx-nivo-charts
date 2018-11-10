import * as React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HomeComponent = () => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="card-deck">
          <div className="card">
            <img
              src="/img/bar/bar.png"
              className="card-img-top"
              alt="Bar Chart"
            />
            <div className="card-body">
              <h3>Bar Chart</h3>
              <Link to="/bar-chart">Show Me</Link>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/pie/pie.png"
              className="card-img-top"
              alt="Pie Chart"
            />
            <div className="card-body">
              <h3>Pie Chart</h3>
              <Link to="/pie-chart">Show Me</Link>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/line/line.png"
              className="card-img-top"
              alt="Line Chart"
            />
            <div className="card-body">
              <h3>Line Chart</h3>
              <Link to="/line-chart">Show Me</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
