import { createStore } from "redux";
import combineReducers from "./modules/index"

// const initialState = {
//     // backLogsTasks:[  
//     //     {
//     //       name: "task1",
//     //       description: "asdkhgjkahsfd",
//     //       selected: false
//     //     },
//     //     {
//     //       name: "task2",
//     //       description: "zxczxczx",
//     //       selected: false
//     //     },
//     //     {
//     //       name: "task1",
//     //       description: "asdkhgjkahsfd",
//     //       selected: false
//     //     },
//     //     {
//     //       name: "task2",
//     //       description: "zxczxczx"
//     //     },
//     //     {
//     //       name: "task1",
//     //       description: "asdkhgjkahsfd",
//     //       selected: false
//     //     },
//     //     {
//     //       name: "task2",
//     //       description: "zxczxczx",
//     //       selected: false
//     //     }
//     //   ],
//     //   inProgressTasks:[
//     //       {
//     //       name: "task2",
//     //       description: "zxczxczx",
//     //       selected: false
//     //     },
//     //     {
//     //       name: "task2",
//     //       description: "zxczxczx",
//     //       selected: false
//     //     },
//     //   ],
//     //   readyToTestTasks: [],
//     //   doneTasks: [],

// };

// function reducer(state = initialState, action) {
//     return state;
// }

const store = createStore(
    combineReducers
);
store.dispatch( { type: "GET_AVAILABLE_TASKS"})
export default store;