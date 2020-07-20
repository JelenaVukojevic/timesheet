import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
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
                    <Modal.Body className="modal js-modal-inner">
                        <Form action="">
                            <Form.Group className="field-wrap">
                                <Form.Label className="label" htmlFor="">Title:</Form.Label>
                                <Form.Control className="field" type="text" id="" placeholder="Enter title here..." />
                            </Form.Group>
                            <Form.Group className="field-wrap">
                                <Form.Label className="abel" htmlFor="">Hours:</Form.Label>
                                <Form.Control className="field" type="text" id="" placeholder="Add hours here..." />
                            </Form.Group>
                            <Form.Group className="btn-wrap align-right">
                                <Button variant="secondary" type="submit" onClick={() => this.handleClose()}>
                                    Create
                                </Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export { NewTaskModal as default }