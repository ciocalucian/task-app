export const GET_AVAILABLE_TASKS = 'backLogs/GET_AVAILABLE_TASKS';

const initialState = {
    backLogsTasks:[  
          {
            name: "task1",
            description: "asdkhgjkahsfd",
            selected: false
          },
          {
            name: "task2",
            description: "zxczxczx",
            selected: false
          },
          {
            name: "task1",
            description: "asdkhgjkahsfd",
            selected: false
          },
          {
            name: "task2",
            description: "zxczxczx",
            selected: false
          },
          {
            name: "task1",
            description: "asdkhgjkahsfd",
            selected: false
          },
          {
            name: "task2",
            description: "zxczxczx",
            selected: false
          }
        ]
    
}



export default function(state = initialState, action) {
    switch(action.type){
        case GET_AVAILABLE_TASKS:
            return {...state}
    };
      return state;
}


// const getAvailableTasks = () => {
//     const tasksS = {...initialState.backLogsTasks}
    
//     return {
//         type: GET_AVAILABLE_TASKS,
//         payload: tasksS
//     }
// }