import React from 'react'
import { Container } from 'react-bootstrap'
import API from '../api/api'

import EditTaskModal from './EditTaskModal'
import DeleteTaskModal from './DeleteTaskModal'
import Task from './Task'
import { date } from './data/date'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            editModalShow: false,
            deleteModalShow: false,
            task: {},
            id: ''
        };

        this.handleEditModalShow = this.handleEditModalShow.bind(this);
        this.handleEditModalClose = this.handleEditModalClose.bind(this);
        this.editTask = this.editTask.bind(this);
        this.handleDeleteModalShow = this.handleDeleteModalShow.bind(this);
        this.handleDeleteModalClose = this.handleDeleteModalClose.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
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
        API.get('', {
            params:{
                date: date,
                id: data.id,
                title: data.title,
                hours: data.hours,
                action: 'editTask',
                api_key: process.env.REACT_APP_API_KEY
            }
        }).then(res => {
            if(!res.data) {
                alert('Max number of hours in a day is ' + process.env.REACT_APP_HOURS_IN_DAY)
            } else {
                this.props.editTask(data);
                this.handleEditModalClose();
            }
        }).catch(() => console.log('error'));
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
            this.handleDeleteModalClose();
        }).catch(() => console.log('error'));
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
                            <Task 
                                key={task.id}
                                task={task}
                                handleEditModalShow={this.handleEditModalShow}
                                handleDeleteModalShow={this.handleDeleteModalShow}
                            />
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