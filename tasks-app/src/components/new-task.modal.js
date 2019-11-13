import React from "react";
import Modal from "react-bootstrap/Modal";
import form from "react-hook-form";

function NewTaskModal(props) {
// sendTask () {
//   props.addTask()
// }
//usestate

  return (
    <Modal {...props} size="lg" onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
        <form
            name="newTask"
            onSubmit={props.handleClose}
          >
            <div className="row mb-3">
            <div >
                  <span >
                      <span >Task Name</span>
                    <input
                      name="no"
                      type="text"
                      //value={props.data.name}
                    ></input>
                    
                  </span>
                </div>
                <div >
                  <span>
                      <span >Task Description</span>
                    <input
                      name="no"
                      type="text"
                      //value={props.data.description}
                    ></input>
                    
                  </span>
                </div>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.addTask}>Add</button>
        <button onClick={props.handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewTaskModal;
