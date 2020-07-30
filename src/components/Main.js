import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import moment from 'moment'
import API from '../api/api'

import EditTaskModal from './EditTaskModal'
import DeleteTaskModal from './DeleteTaskModal'

import iconEdit from '../icons/icon-edit.svg'
import iconDelete from '../icons/icon-delete.svg'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            isHovered: false,
            editModalShow: false,
            deleteModalShow: false,
            task: {},
            id: ''
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
                    moment(urlDate, 'DD-MM-YYYY').format('DD-MM-YYYY') : 
                    moment().format('DD-MM-YYYY');
        API.get('', {
            params:{
                date: date,
                action: 'getTasks',
                api_key: process.env.REACT_APP_API_KEY
            }
        }).then(res => {
            this.props.getTasks(res.data)
        }).catch(() => console.log('error'));
    }
    
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    handleEditModalShow(task) {
        this.setState({ 
            editModalShow: true,
            task: task
        });
    }

    handleEditModalClose() {
        this.setState({ 
            editModalShow: false,
        });
    }

    editTask(data) {
        this.props.editTask(data);
        this.handleEditModalClose();
    }

    handleDeleteModalShow(id) {
        this.setState({ 
            deleteModalShow: true,
            id: id
        });
    }

    handleDeleteModalClose() {
        this.setState({ 
            deleteModalShow: false,
        });
    }

    deleteTask(id) {
        API.get('', {
            params:{
                id: id,
                action: 'deleteTask',
                api_key: process.env.REACT_APP_API_KEY
            }
        }).then(res => {
            this.props.deleteTask(id);
        }).catch(() => console.log('error'));
        this.handleDeleteModalClose();
    }

    render() {
        if(this.props.tasksCount === 0) {
            return (
                <Container className="message">
                    No items for selected date<br/><br/>Click on + icon to add item
                </Container>
            )
        } else {
            let total = 0;
            this.props.tasks.forEach(task => { 
                total += parseFloat(task.hours);
            })
            return (
                <Container className="main">
                    <section className="wrap">
                        {this.props.tasks.map((task) =>
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
                                            onClick={() => this.handleEditModalShow(task)} />
                                        <br/>
                                        <img 
                                            className="icon" 
                                            src={iconDelete} 
                                            alt="Delete" 
                                            onClick={() => this.handleDeleteModalShow(task.id)} />
                                    </Col>
                                </Row>
                            </Row>
                        )}
                    </section>
                    <section className="total align-right">
                        <p className="total-label">Total:</p>
                        <p><span className="total-input">{total}</span></p>
                    </section>
                    <EditTaskModal 
                        show={this.state.editModalShow}
                        handleClose={this.handleEditModalClose}
                        editTask={this.editTask}
                        task={this.state.task}
                        total={this.props.total}
                    />
                    <DeleteTaskModal 
                        show={this.state.deleteModalShow}
                        handleClose={this.handleDeleteModalClose}
                        deleteTask={this.deleteTask}
                        id={this.state.id}
                    />
                </Container>
            );
        }
    }
}

export { Main as default }