import React from "react";
//import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component";
import "./inProgress.css"

const InProgressComponent = () => {
    const inProgressTasks = {
        task21: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        },
        task22: {
            name: 'task2',
            description: 'zxczxczx' 
        },
        task23: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        }
    }
    return (
       <div className="column color">
         <div className="text-center font-weight-bold t-color">In Progress</div>
         
          {Object.keys(inProgressTasks).map( key => (
            <BackLogsTask 
            name={inProgressTasks[key].name} 
            description={inProgressTasks[key].description}
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

export default InProgressComponent;