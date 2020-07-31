import React from 'react'
import { Row, Col } from 'react-bootstrap'

import iconEdit from '../icons/icon-edit.svg'
import iconDelete from '../icons/icon-delete.svg'

class Task extends React.Component {
    constructor(){
        super();
        this.state = {
            isHovered: false,
        };

        this.handleHover = this.handleHover.bind(this);
    }
    

    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        return (
            <Row 
                className="item-row" 
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
            >
                <Row className="check-flag">
                    <Col sm={10}>
                        <p className="small-text-label">Title</p>
                        <p className="check-flag-label">{this.props.task.title}</p>
                    </Col>
                    <Col sm={1}>
                        <p className="small-text-label hours">Hours</p>
                        <p className="hours-box">{this.props.task.hours}</p>
                    </Col>
                    <Col sm={1} className={this.state.isHovered ? "icons-visible" : "icons-hidden"}>
                        <img 
                            className="icon" 
                            src={iconEdit} 
                            alt="Edit" 
                            onClick={() => this.props.handleEditModalShow(this.props.task)} />
                        <br/>
                        <img 
                            className="icon" 
                            src={iconDelete} 
                            alt="Delete" 
                            onClick={() => this.props.handleDeleteModalShow(this.props.task.id)} />
                    </Col>
                </Row>
            </Row>
        )
    }
}

export { Task as default }