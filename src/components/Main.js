import React from 'react';
import { Row, Form, Col, Container } from 'react-bootstrap';
import moment from 'moment';
import API from '../api'

import EditTaskModal from './EditTaskModal';
import DeleteTaskModal from './DeleteTaskModal';

import iconEdit from '../icons/icon-edit.svg'
import iconDelete from '../icons/icon-delete.svg'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            isHovered: false,
            editModalShow: false,
            editDeleteModal: false
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleEditModalShow = this.handleEditModalShow.bind(this);
        this.handleEditModalClose = this.handleEditModalClose.bind(this);
        this.editTask = this.editTask.bind(this);
        this.handleDeleteModalShow = this.handleDeleteModalShow.bind(this);
        this.handleDeleteModalClose = this.handleDeleteModalClose.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    
    componentDidMount() {
        let urlDate = window.location.pathname.substr(1)
        let date = (urlDate) ? 
                    moment(urlDate, 'DD-MM-YYYY').format("DD/MM/YYYY") : 
                    moment().format('DD/MM/YYYY');
        API.get()
            .then(res => {
            this.props.getTasks(res)
            })
            .catch(() => console.log('error'));
    }
    
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    handleEditModalShow(task) {
        this.setState({ editModalShow: true });
    }

    handleEditModalClose() {
        this.setState({ 
            editModalShow: false,
        });
    }

    editTask() {
        console.log('edit');
    }

    handleDeleteModalShow() {
        this.setState({ deleteModalShow: true });
    }

    handleDeleteModalClose() {
        this.setState({ 
            deleteModalShow: false,
        });
    }

    deleteTask() {
        console.log('delete')
        this.setState({ deleteModalShow: false });
    }

    render() {
        let total = 0;
        let tasks;
        if (this.props.tasks !== undefined) {
            this.props.tasks.forEach((task) => {
                total += task.hours;
            })
            tasks = this.props.tasks.map((task) =>
                <Row 
                    className="item-row" 
                    key={task.id}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}
                >
                    <Row className="check-flag">
                        <Col sm={10}>
                            <p className="small-text-label">Title</p>
                            <p className="check-flag-label">{task.title}</p>
                        </Col>
                        <Col sm={1}>
                            <p className="small-text-label hours">Hours</p>
                            <p className="hours-box">{task.hours}</p>
                        </Col>
                        <Col sm={1} className={this.state.isHovered ? "icons-visible" : "icons-hidden"}>
                            <img 
                                className="icon" 
                                src={iconEdit} 
                                alt="Edit" 
                                onClick={this.handleEditModalShow} />
                            <br/>
                            <img 
                                className="icon" 
                                src={iconDelete} 
                                alt="Delete" 
                                onClick={this.handleDeleteModalShow} />
                        </Col>
                    </Row>
                </Row>
            );
        }
        if(this.props.tasksCount === 0) {
            return (
                <Container className="message">
                    No items for selected date<br/><br/>Click on + icon to add item
                </Container>
            )
        } else {
            return (
                <Container className="main">
                    <section className="wrap">
                        {tasks}
                    </section>
                    <section className="total align-right">
                        <Form.Label htmlFor="" className="total-label">Total:</Form.Label>
                        <Form.Control className="total-input" type="text" value={total} readOnly />
                    </section>
                    <EditTaskModal 
                        show={this.state.editModalShow}
                        handleClose={this.handleEditModalClose}
                        editTask={this.editTask}
                    />
                    <DeleteTaskModal 
                        show={this.state.deleteModalShow}
                        handleClose={this.handleDeleteModalClose}
                        deleteTask={this.deleteTask}
                    />
                </Container>
            );
        }
    }
}

export { Main as default }