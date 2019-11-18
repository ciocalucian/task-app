
export const GET_INPROGRESS_TASKS = 'inProgress/GET_INPROGRESS_TASKS';

const initialState = {
    inProgressTasks:[  
        {
            name: "task1",
            description: "asdkhgjkahsfd",
            selected: false
          }
        ]
    
}



export default function(state = initialState, action) {
  switch(action.type){
        case GET_INPROGRESS_TASKS:
            return {
                ...state,
                inProgressTasks: action.payload
            }
        
            default:
            return state;
  }
}


export const inProgressTasks = (tasks) => {
    return {
        type: GET_INPROGRESS_TASKS,
        payload: tasks
    }
}