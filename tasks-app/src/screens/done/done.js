import React from "react";
import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component"
import "./done.css"

const DoneComponent = (props) => {
    const tasks = {...props.initialTasks}

    return (
       <div className="column color">
         <div className="text-center font-weight-bold t-color">Done</div>
         
          {Object.keys(tasks).map( key => (
            <BackLogsTask 
            name={tasks[key].name} 
            description={tasks[key].description}
            rowKey="Id"
            />
              
          ))}
       </div>
    );
};

 const mapStateToProps = state => {
    return{
      initialTasks: state.doneTasks
    };
  };
  
  export default connect(mapStateToProps)(DoneComponent);
  