import React, { Fragment } from "react";
import "./App.css";
import SortingVisualizer from "./components/SortingVisualizer";
import { Jumbotron } from "reactstrap";

function App() {
  return (
    <Fragment>
      <div className="container mt-2">
        <h1>Sorting Visualizer</h1>
      </div>
      <SortingVisualizer />
    </Fragment>
  );
}

export default App;
