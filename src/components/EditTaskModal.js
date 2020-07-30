import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import TaskForm from './TaskForm'

const EditTaskModal = ({ show, handleClose, editTask, task }) => (
    <Modal 
        id="editTask"
        show={show}
        onHide={handleClose}
        keyboard={false}
        backdrop="static"
        className="modal-wrap js-modal" 
    >
        <Modal.Header closeButton>
            <Modal.Title>Edit task:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="js-modal-inner">
            <TaskForm 
                saveTask={editTask}
                edit={true}
                close={handleClose}
                task={task}
            />
        </Modal.Body>
    </Modal>
)

EditTaskModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

export default EditTaskModal;