import React from 'react';
import { Row, Form } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        let tasks = <div className="message">No items for selected date<br/><br/>Click on + icon to add item</div>;
        let total = 0;
        let totalRow = '';
        if (this.props.tasks !== undefined) {
            this.props.tasks.forEach((task) => {
                total += task.hours;
            })
            tasks = this.props.tasks.map((task) =>
                <Row className="item-row" key={task.id}>
                    <div className="check-flag">
                        <span className="small-text-label">Title</span>
                        <span className="small-text-label hours">Hours</span>
                        <span className="check-flag-label">{task.title}</span>
                        <span className="hours-box">{task.hours}</span>
                    </div>
                </Row>
            );
            totalRow =  <Row className="total align-right">
                            <Form.Label htmlFor="" className="total-label">Total:</Form.Label>
                            <Form.Control className="total-input" type="text" value={total} readOnly />
                        </Row>
        }

        return (
            <Row className="main">
                <div className="wrap">
                    {tasks}
                </div>
                {totalRow}
            </Row>
        );
    }
}

export { Main as default }