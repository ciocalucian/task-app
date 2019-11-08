import React from "react";
//import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component"
import "./backLogs.css"

const BackLogsComponent = () => {
   
    const backLogsTasks = {
        task11: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        },
        task12: {
            name: 'task2',
            description: 'zxczxczx' 
        },
        task13: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        },
        task14: {
            name: 'task2',
            description: 'zxczxczx' 
        },
        task15: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        },
        task16: {
            name: 'task2',
            description: 'zxczxczx' 
        },
    };

     

    return (
       <div className="column color">
         <div className="text-center font-weight-bold t-color">Backlogs</div>
         
          {Object.keys(backLogsTasks).map( key => (
            <BackLogsTask 
            name={backLogsTasks[key].name} 
            description={backLogsTasks[key].description}
            />
              
          ))}
          <button className="btn btn-primary mt-2" onClick={() =>addTask()}> Add a task </button>
       </div>
    );
};

const addTask = () =>{
    console.log('add task');
}
 


// const mapStateToProps = state => {
//     return {
//       availableTasks: state.dashboard.availableCards
//     };
//   };

export default BackLogsComponent;