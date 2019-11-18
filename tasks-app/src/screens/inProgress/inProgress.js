import React, { Component } from "react";
import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component";
import "./inProgress.css"
import { inProgressTasks } from "../../redux/modules/inProgress"

class InProgressComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {      
  };
};

handleClick = (key) => {
  const { inProgressTasks } = this.props

  let tasksS = [...this.props.initialProgressTasks];
  tasksS = tasksS.map( item => {
    item.selected = false ;
    return item;
  });
  
  tasksS[key].selected = true;
  
  console.log(tasksS[key]);
  inProgressTasks(tasksS);

}

render() {
  const tasks = [...this.props.initialProgressTasks];
    return (
       <div className="column color">
         <div className="text-center font-weight-bold t-color">In Progress</div>
         
          {Object.keys(tasks).map(key => (
            <span onClick={() => this.handleClick(key)}>
              <BackLogsTask
            class={
              "back-log-task" + 
            (tasks[key].selected === true ? " selected": "")
          }
            name={tasks[key].name}
            description={tasks[key].description}
          />
          </span>
          ))}

          <div>
              <button className="btn btn-danger mt-2" onClick={this.nextTo}>
              Next
              </button>
          </div>
        </div>
    );
}
}


const mapStateToProps = state => {
  return{
    initialProgressTasks: state.inProgress.inProgressTasks,
    
  };
};

export default connect(
  mapStateToProps,
  { inProgressTasks }
  )(InProgressComponent);
