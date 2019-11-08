import React from "react";
//import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component";

const ReadyToTestComponent = (props) => {
    const readtToTestTasks = {
        task31: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        },
        task32: {
            name: 'task2',
            description: 'zxczxczx' 
        }
    }
    return (
       <div className="column color">
         <div className="text-center font-weight-bold t-color">Ready to test</div>
         
          {Object.keys(readtToTestTasks).map( key => (
            <BackLogsTask 
            name={readtToTestTasks[key].name} 
            description={readtToTestTasks[key].description}
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

export default ReadyToTestComponent;