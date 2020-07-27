import React from 'react';
import { Modal } from 'react-bootstrap';
import TaskForm from './TaskForm.js';

export default function EditTaskModal(props) {
    return (
        <Modal 
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
                <TaskForm saveTask={props.editTask}/>
            </Modal.Body>
        </Modal>
    );
};