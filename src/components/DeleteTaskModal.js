import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

const DeleteTaskModal = ({ show, handleClose, deleteTask, id }) => (
    <Modal 
        id="deleteTask"
        show={show}
        onHide={handleClose}
        keyboard={false}
        backdrop="static"
        className="modal-wrap js-modal" 
    >
        <Modal.Body className="js-modal-inner">
            <p>Are you sure?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>No</Button>
            <Button variant="primary" onClick={() => deleteTask(id)}>Yes</Button>
        </Modal.Footer>
    </Modal>
)

DeleteTaskModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default DeleteTaskModal;
