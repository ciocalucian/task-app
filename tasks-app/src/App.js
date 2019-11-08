import React from "react";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

import BackLogsComponent from "./screens/backLogs/backLogs"
import DoneComponent from "./screens/done/done";
import InProgressComponent from "./screens/inProgress/inProgress";
import ReadyToTestComponent from "./screens/readyToTest/readyToTest";

function App() {
  return (
    <div className="container-fluid border main-container">
      <div className="row m-3">
        <div className="col-md-3">
          <BackLogsComponent/>
        </div>
        <div className="col-md-3">
          <InProgressComponent/>
        </div>
        <div className="col-md-3">
          <ReadyToTestComponent/>
        </div>
        <div className="col-md-3">
          <DoneComponent/>
        </div>
      </div>
    </div>
  );
}


export default App;
