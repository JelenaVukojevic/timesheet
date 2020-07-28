import React from 'react';
import { Modal } from 'react-bootstrap';
import TaskForm from './TaskForm';

export default function EditTaskModal(props) {
    return (
        <Modal 
            id="editTask"
            show={props.show}
            onHide={props.handleClose}
            keyboard={false}
            backdrop="static"
            className="modal-wrap js-modal" 
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit task:</Modal.Title>
            </Modal.Header>
            <Modal.Body className="js-modal-inner">
                <TaskForm saveTask={props.editTask} edit={true} close={props.handleClose} />
            </Modal.Body>
        </Modal>
    );
};