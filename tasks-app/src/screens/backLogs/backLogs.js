import React, { Component } from "react";
import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component";
import "./backLogs.css";
import NewTaskModal from "../../components/new-task.modal"



const taskInitialState = {
  name: "",
  description: ""
}

class BackLogsComponent extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      task : taskInitialState,
      ShowNewTaskModal: false
    };
  };

  addTask = () => {
    this.setState({
      ShowNewTaskModal: true
    })
   // console.log(this.props.initialTasks)
  };

  closeModal = () =>{
    this.setState({
      ShowNewTaskModal:false
    })
  };

  newTaskAdd = () => {
    debugger;
    // const initialTasks = [...this.props.initialTasks]
    // const { task } =this.state;

    // let data = {
    //   name: task.name,
    //   description: task.description
    // };
    // console.log(data)
    
  }




  deleteTask = (key) => {
    let tasks = [...this.props.initialTasks];
    console.log(tasks);
    tasks = tasks.map( item => {
      item.selected = false ;
      console.log(item[key]);
      return item;
    });
    
    tasks[key].selected = true;
  
   console.log("clicked optio",key, tasks[key].selected);
    }

  render() {
    const tasks = {...this.props.initialTasks};

    

    return (
      <div className="column color">
        <div className="text-center font-weight-bold t-color">Backlogs</div>
        
        {Object.keys(tasks).map(key => (
          <BackLogsTask
            name={tasks[key].name}
            description={tasks[key].description}
            onClick={this.deleteTask(key)}
          />
        ))}
        <button className="btn btn-primary mt-2" onClick={this.addTask}>
          Add a task
        </button>
        <NewTaskModal
        show={this.state.ShowNewTaskModal}
        handleClose={this.closeModal}
        addTask={this.newTaskAdd}
        ></NewTaskModal>
      </div>
    );
  }
}





const mapStateToProps = state => {
  return{
    initialTasks: state.backLogs.backLogsTasks
  };
};

export default connect(mapStateToProps)(BackLogsComponent);
