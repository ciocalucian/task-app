import React, {Component} from "react";
import "./components.css"

class BackLogsTask extends Component {
  
    render() {
    
      return (
        <div className={this.props.class} onClick={this.props.onTaskClick}>
            
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