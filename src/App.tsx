import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BarChart from "./components/bar-chart";
import HomeComponent from "./components/home";
import LineChart from "./components/line-chart";
import NavBar from "./components/nav";
import PieChart from "./components/pie-chart";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <>
          <NavBar />
          <div className="container">
            <Route path="/" exact={true} component={HomeComponent} />
            <Route path="/bar-chart" exact={true} component={BarChart} />
            <Route path="/pie-chart" exact={true} component={PieChart} />
            <Route path="/line-chart" exact={true} component={LineChart} />
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
