

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
            selected: true
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
      return {
        ...state,
        backLogsTasks: action.payload
      };
      default:
        return state;
    }
  }


export const selectedTask = tasksS => {
    
    return {
        type: GET_AVAILABLE_TASKS,
        payload: tasksS
    }
}