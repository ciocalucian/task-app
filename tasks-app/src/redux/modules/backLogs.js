export const GET_AVAILABLE_TASKS = 'GET_AVAILABLE_TASKS';

const initialState = {
    availableTasks: {
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
}



export default function(state = initialState, action) {
    switch(action.type){
        case GET_AVAILABLE_TASKS:
            return {...state}
    }
    return state;
}


const getAvailableCards = () => {
    const tasks = {...initialState.availableTasks}
    
    return {
        type: GET_AVAILABLE_TASKS,
        payload: tasks
    }
}