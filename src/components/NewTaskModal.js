import React from 'react'
import { Modal } from 'react-bootstrap'
import API from '../api/api' 

import TaskForm from './TaskForm'

import iconPlus from '../icons/icon-plus.svg'

class NewTaskModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    handleShow() {
        this.setState({show: true});
    }

    handleClose() {
        this.setState({show: false});
    }

    saveTask(data) {
        API.get('', {
            params:{
                date: this.props.date,
                title: data.title,
                hours: data.hours,
                action: 'addTask',
                api_key: process.env.REACT_APP_API_KEY
            }
        }).then(res => {
            if(!res.data) {
                alert('Max number of hours in a day is ' + process.env.REACT_APP_HOURS_IN_DAY)
            } else {
                data.id = res.data;
                this.props.addTask(data);
                this.setState({ show: false });
            }
        }).catch(() => console.log('error'));
    }

    render() {
        return (
            <div>
                <span className="btn-icon" onClick={this.handleShow}>
                    <img className="icon icon-plus js-modal-init" src={iconPlus} alt="Add New Item"/>
                </span>
                <Modal 
                    id="newTask"
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
                        <TaskForm saveTask={this.saveTask} edit={false} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export { NewTaskModal as default }