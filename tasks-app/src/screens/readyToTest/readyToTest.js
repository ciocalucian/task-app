import React, { Component } from "react";
import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component";

class ReadyToTestComponent extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render() {
    const tasks = {...this.props.initialTasks};
    return (
      <div className="column color">
        <div className="text-center font-weight-bold t-color">
          Ready to test
        </div>

        {Object.keys(tasks).map(key => (
          <BackLogsTask
            name={tasks[key].name}
            description={tasks[key].description}
          />
        ))}
      </div>
    )
  }
};
const mapStateToProps = state => {
  return{
    initialTasks: state.readtyToTestTasks
  };
};

export default connect(
  mapStateToProps,
  {}
  )
(ReadyToTestComponent);
