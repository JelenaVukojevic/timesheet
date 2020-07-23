import React from 'react';
import { Modal } from 'react-bootstrap';
import TaskForm from './TaskForm.js';
import iconPlus from '../icons/icon-plus.svg';

class NewTaskModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow() {
        this.setState({show: true});
    }

    handleClose() {
        this.setState({show: false});
    }

    render() {
        return (
            <div>
                <span className="btn-icon" onClick={this.handleShow}>
                    <img className="icon icon-plus js-modal-init" src={iconPlus} alt="Add New Item"/>
                </span>
                <Modal 
                    show={this.state.show}
                    onHide={this.handleClose}
                    keyboard={false}
                    backdrop="static"
                    className="modal-wrap js-modal" 
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Create a task:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="js-modal-inner">
                        <TaskForm />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export { NewTaskModal as default }