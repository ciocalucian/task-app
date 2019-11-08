import React from "react";
//import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component"
import "./done.css"

const DoneComponent = (props) => {
    const tasks = {
        task41: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        }
    }
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

 const addTask = () => {
     console.log('add task');
 }


// const mapStateToProps = state => {
//     return {
//       availableTasks: state.dashboard.availableCards
//     };
//   };

export default DoneComponent;