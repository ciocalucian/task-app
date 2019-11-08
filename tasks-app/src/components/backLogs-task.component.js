import React, {Component} from "react";
import "./components.css"

class BackLogsTask extends Component {
   
  
    render() {
      return (
        <div className="back-log-task">
            
            <div className="row back-log-padding-l">
                <p className="m-0">{this.props.name}</p>
            </div>
            <div  className="row back-log-padding-l">
                <p className="m-0">{this.props.description}</p>
            </div>
        </div>
        
        
      )
    }
  }
  
  export default BackLogsTask;