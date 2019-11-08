import React from "react";
import BackLogsTask from "../../components/backLogs-task.component"

const BackLogsComponent = () => {
    const tasks = {
        task1: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        },
        task2: {
            name: 'task2',
            description: 'zxczxczx' 
        },
        task3: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        },
        task4: {
            name: 'task2',
            description: 'zxczxczx' 
        },
        task5: {
            name: 'task1',
            description: 'asdkhgjkahsfd'
        },
        task6: {
            name: 'task2',
            description: 'zxczxczx' 
        },
    }
    return (
       <div className="column color">
         <div className="text-center">Backlogs</div>
         
          {Object.keys(tasks).map( key => (
            <BackLogsTask 
            name={tasks[key].name} 
            description={tasks[key].description}
            />
              
          ))}
       </div>
    );
};

export default BackLogsComponent;