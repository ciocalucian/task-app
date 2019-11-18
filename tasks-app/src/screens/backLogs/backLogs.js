import React, { Component } from "react";
import { connect } from "react-redux";
import BackLogsTask from "../../components/backLogs-task.component";
import "./backLogs.css";
import NewTaskModal from "../../components/new-task.modal"
import { selectedTask } from "../../redux/modules/backLogs"
import { inProgressTasks } from "../../redux/modules/inProgress"



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
  };

  closeModal = () =>{
    this.setState({
      ShowNewTaskModal:false
    })
  };

  newTaskAdd = () => {
   // debugger;
    // const initialTasks = [...this.props.initialTasks]
    // const { task } =this.state;

    // let data = {
    //   name: task.name,
    //   description: task.description
    // };
    // console.log(data)
    
  }


  handleClick = (key) => {
    const {selectedTask } = this.props

    let tasksS = [...this.props.initialTasks];
    tasksS = tasksS.map( item => {
      item.selected = false ;
      return item;
    });
    
    tasksS[key].selected = true;
    
    console.log(tasksS[key]);
    selectedTask(tasksS);

  }

  nextTo = () => {
    const {selectedTask } = this.props
    const { inProgressTasks } = this.props

    let tasksS = [...this.props.initialTasks];
    let progressTasks = [...this.props.inProgressT]
    
    let filteredTasks = tasksS.filter( (item) => {
      return item.selected === false;
    });
    selectedTask(filteredTasks);

    let task = tasksS.filter( (item) => {
      return item.selected === true;
    });

    progressTasks.push(task[0]);
    let x = progressTasks.length - 1;
    progressTasks[x].selected = false;

    inProgressTasks(progressTasks);
  }

  render() {
    const tasks = {...this.props.initialTasks};

    

    return (
      <div className="column color">
        <div className="text-center font-weight-bold t-color">Backlogs</div>
        
        {Object.keys(tasks).map(key => (
          <span onClick={() => this.handleClick(key)}>
            <BackLogsTask
          class={
            "back-log-task" + 
          (tasks[key].selected === true ? " selected": "")
        }
          name={tasks[key].name}
          description={tasks[key].description}
        />
        </span>
        ))}
        
        <div>
        <button className="btn btn-primary mt-2" onClick={this.addTask}>
          Add a task
        </button>
        <button className="btn btn-danger mt-2 float-right" onClick={this.nextTo}>
          Next
        </button>
        </div>
        
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
    initialTasks: state.backLogs.backLogsTasks,
    inProgressT: state.inProgress.inProgressTasks
  };
};

export default connect(
  mapStateToProps,
  { selectedTask, inProgressTasks },
  )(BackLogsComponent);
