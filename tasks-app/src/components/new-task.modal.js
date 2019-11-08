import React from "react";
import Modal from "react-bootstrap/Modal";
import NewCard from "./new-card";
import '../../dashboard/dashboard.css';

function NewCardModal(props) {
    
    
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="db-new-card-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Select Activity Cards
                    <div className="text-muted">
                        {" "}
                        Please select as many cards as you see fit for your
                        dashboard quick overview
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.keys(availableCards).map(key => (
                    <section key={key}>
                    <p className="section-name">{key}</p>
                    <div className="d-flex flex-wrap">
                        {availableCards[key].map(card => (
                            <NewCard
                                onClick={() => onCardClick(key, card.name)}
                                key={card.name}
                                title={card.name}
                                details={card.text}
                                selected={card.selected}
                            ></NewCard>
                        ))}
                    </div>
                    </section>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewCardModal;
