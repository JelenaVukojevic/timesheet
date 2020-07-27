import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function DeleteTaskModal(props) {
    return(
        <Modal 
            show={props.show}
            onHide={props.handleClose}
            keyboard={false}
            backdrop="static"
            className="modal-wrap js-modal" 
        >
            <Modal.Body className="js-modal-inner">
                <p>Are you sure?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>No</Button>
                <Button variant="primary" onClick={props.deleteTask}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
};
